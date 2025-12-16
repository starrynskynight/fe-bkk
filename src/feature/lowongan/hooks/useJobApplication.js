import { useState, useEffect } from 'react';
import { jobApplicationService } from '../services/JobApplyService';
import { toast } from 'react-toastify';

export const useJobApplication = (autoFetch = false) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    total: 0,
    perPage: 10,
  });

  const submitApplication = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await jobApplicationService.create(formData);
      toast.success('Lamaran berhasil dikirim! Kami akan menghubungi Anda segera.');
      return response;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Gagal mengirim lamaran';
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getApplications = async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await jobApplicationService.getAll(params);
      
      console.log('API Response:', response);
      
      // ⭐ PERBAIKAN: Cek apakah response adalah array atau object
      let dataArray = [];
      let metaData = null;
      
      if (Array.isArray(response)) {
        // Jika response langsung array
        dataArray = response;
      } else if (response.data) {
        // Jika response punya property data
        dataArray = Array.isArray(response.data) ? response.data : [];
        metaData = response.meta;
      }
      
      console.log('Processed data:', dataArray);
      setApplications(dataArray);
      
      // Set pagination jika ada
      if (metaData?.pagination) {
        setPagination({
          currentPage: metaData.pagination.current_page || 1,
          totalPages: metaData.pagination.total_page || 1,
          total: metaData.pagination.total || 0,
          perPage: metaData.pagination.per_page || 10,
        });
      }
      
      return response;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Gagal memuat data lamaran';
      setError(errorMessage);
      toast.error(errorMessage);
      console.error('Error details:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getApplicationById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await jobApplicationService.getById(id);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Gagal memuat detail lamaran';
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteApplication = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await jobApplicationService.delete(id);
      toast.success('Lamaran berhasil dihapus');
      return true;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Gagal menghapus lamaran';
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      getApplications();
    }
  }, [autoFetch]);

  return {
    applications,
    loading,
    error,
    pagination,
    submitApplication,
    getApplications,
    getApplicationById,
    deleteApplication,
  };
};