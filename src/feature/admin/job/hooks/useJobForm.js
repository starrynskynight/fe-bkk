import { useState } from 'react';
import { jobSchema } from '../schemas/jobSchema';

export const useJobForm = (initialData = null) => {
  const [formData, setFormData] = useState(initialData || {
    company: '',
    position: '',
    location: '',
    salary: '',
    start_date: '',
    end_date: '',
    description: '',
    qualifications: [''],
    benefits: [''],
    status: 'active'
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    try {
      const cleanedData = {
        ...formData,
        qualifications: formData.qualifications.filter(q => q.trim()),
        benefits: formData.benefits.filter(b => b.trim())
      };

      jobSchema.parse(cleanedData);
      setErrors({});
      return true;
    } catch (err) {
      if (err.errors) {
        const formattedErrors = {};
        err.errors.forEach((error) => {
          formattedErrors[error.path[0]] = error.message;
        });
        setErrors(formattedErrors);
      }
      return false;
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTouched(prev => ({ ...prev, [field]: true }));
    
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
    setTouched(prev => ({ ...prev, [field]: true }));
    
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    if (formData[field].length > 1) {
      const newArray = formData[field].filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, [field]: newArray }));
    }
  };

  const reset = () => {
    setFormData(initialData || {
      company: '',
      position: '',
      location: '',
      salary: '',
      start_date: '',
      end_date: '',
      description: '',
      qualifications: [''],
      benefits: [''],
      status: 'active'
    });
    setErrors({});
    setTouched({});
  };

  const getCleanedData = () => {
    return {
      ...formData,
      qualifications: formData.qualifications.filter(q => q.trim()),
      benefits: formData.benefits.filter(b => b.trim())
    };
  };

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleArrayChange,
    addArrayItem,
    removeArrayItem,
    validate,
    reset,
    setFormData,
    getCleanedData
  };
};
