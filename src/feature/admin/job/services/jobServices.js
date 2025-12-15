import axiosClient from "@/api/axiosClient";

export const jobService = {
  getAll: async (params = {}) => {
    const response = await axiosClient.get('/job-vacancies', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosClient.get(`/job-vacancies/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await axiosClient.post('/job-vacancies', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await axiosClient.put(`/job-vacancies/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosClient.delete(`/job-vacancies/${id}`);
    return response.data;
  }
};