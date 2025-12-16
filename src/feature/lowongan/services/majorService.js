import axiosClient from "@/api/axiosClient";

export const majorService = {
  getAll: async () => {
    const response = await axiosClient.get('/public/majors');
    return response.data;
  },
};