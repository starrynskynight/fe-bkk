import { useState } from 'react';
import { jobApplicationSchema } from '../schemas/JobApplySchemas';

export const useJobApplicationForm = (jobVacancyId = null) => {
  const [formData, setFormData] = useState({
    job_vacancy_id: jobVacancyId || '',
    major_id: '',
    full_name: '',
    nis_nisn: '',
    birth_date: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    graduation_year: '',
    gpa: '',
    work_experience: '',
    apply_reason: '',
    resume: null,
    certificate: null,
    photo: null,
    cover_letter: null,
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (name, file) => {
    setFormData(prev => ({ ...prev, [name]: file }));
    setTouched(prev => ({ ...prev, [name]: true }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
  try {
    // Convert numeric fields
    const validationData = {
      ...formData,
      job_vacancy_id: formData.job_vacancy_id ? parseInt(formData.job_vacancy_id) : 0,
      major_id: formData.major_id ? parseInt(formData.major_id) : 0,
    };

    jobApplicationSchema.parse(validationData);
    setErrors({});
    return {}; // ⭐ RETURN empty object jika valid
  } catch (err) {
    if (err.errors) {
      const formattedErrors = {};
      err.errors.forEach((error) => {
        const field = error.path[0];
        formattedErrors[field] = error.message;
      });
      setErrors(formattedErrors);
      return formattedErrors; // ⭐ RETURN errors object
    }
    return {}; // ⭐ RETURN empty object sebagai fallback
  }
};

  const reset = () => {
    setFormData({
      job_vacancy_id: jobVacancyId || '',
      major_id: '',
      full_name: '',
      nis_nisn: '',
      birth_date: '',
      gender: '',
      address: '',
      phone: '',
      email: '',
      graduation_year: '',
      gpa: '',
      work_experience: '',
      apply_reason: '',
      resume: null,
      certificate: null,
      photo: null,
      cover_letter: null,
      agreement: false,
    });
    setErrors({});
    setTouched({});
  };

  const getFormDataForSubmit = () => {
    const submitData = new FormData();
    
    // Append all text fields
    Object.keys(formData).forEach(key => {
      if (key === 'resume' || key === 'certificate' || key === 'photo' || key === 'cover_letter') {
        if (formData[key] instanceof File) {
          submitData.append(key, formData[key]);
        }
      } else if (key === 'agreement') {
        // Skip agreement field, it's just for validation
      } else if (formData[key]) {
        submitData.append(key, formData[key]);
      }
    });

    return submitData;
  };

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleFileChange,
    validate,
    reset,
    getFormDataForSubmit,
    setFormData,
  };
};
