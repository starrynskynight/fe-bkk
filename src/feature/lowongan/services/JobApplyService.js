import axiosClient from "@/api/axiosClient";

export const jobApplicationService = {
  // Submit job application
  create: async (formData) => {
    const response = await axiosClient.post('/public/job-applications', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Get all applications (for admin)
  getAll: async (params = {}) => {
    const response = await axiosClient.get('/job-applications', { params });
    return response.data;
  },

  // Get single application by ID
  getById: async (id) => {
    const response = await axiosClient.get(`/job-applications/${id}`);
    return response.data;
  },

  // Get applications by job vacancy ID
  getByJobVacancy: async (jobVacancyId, params = {}) => {
    const response = await axiosClient.get(`/job-applications/job-vacancy/${jobVacancyId}`, { params });
    return response.data;
  },

  // Update application status (for admin)
  updateStatus: async (id, status) => {
    const response = await axiosClient.patch(`/job-applications/${id}/status`, { status });
    return response.data;
  },

  // Delete application
  delete: async (id) => {
    const response = await axiosClient.delete(`/job-applications/${id}`);
    return response.data;
  }
};
