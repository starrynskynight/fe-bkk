import { useState, useEffect } from 'react';
import { jobService } from '../services/jobServices';
import { toast } from 'react-toastify';
import dummyJobs from '../../../lowongan/data/dummyJobs.json'

export const useJobVacancies = (autoFetch = true) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    perPage: 10
  });

  const fetchJobs = async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await jobService.getAll(params);
      
      // Fallback ke dummy data jika API gagal atau tidak ada data
      const jobsData = response?.data?.length > 0 ? response.data : dummyJobs;
      
      setJobs(jobsData);

      // Set pagination info jika ada dari API
      if (response?.pagination) {
        setPagination(response.pagination);
      } else {
        // Manual pagination untuk dummy data
        setPagination({
          currentPage: params.page || 1,
          totalPages: Math.ceil(jobsData.length / (params.per_page || 10)),
          totalItems: jobsData.length,
          perPage: params.per_page || 10
        });
      }

      return jobsData;
    } catch (err) {
      console.error('Error fetching jobs, using dummy data:', err);
      setError(err.message);
      // Fallback ke dummy data saat error
      setJobs(dummyJobs);
      setPagination({
        currentPage: 1,
        totalPages: Math.ceil(dummyJobs.length / 10),
        totalItems: dummyJobs.length,
        perPage: 10
      });
      return dummyJobs;
    } finally {
      setLoading(false);
    }
  };

  const getJobById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await jobService.getById(id);
      return response?.data || dummyJobs.find(job => job.id === parseInt(id));
    } catch (err) {
      console.error('Error fetching job detail, using dummy data:', err);
      setError(err.message);
      // Fallback ke dummy data
      return dummyJobs.find(job => job.id === parseInt(id));
    } finally {
      setLoading(false);
    }
  };

  const createJob = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const newJob = await jobService.create(data);
      toast.success('Lowongan berhasil dibuat!');
      await fetchJobs();
      return newJob;
    } catch (err) {
      setError(err.message);
      toast.error('Gagal membuat lowongan');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateJob = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const updatedJob = await jobService.update(id, data);
      toast.success('Lowongan berhasil diperbarui!');
      await fetchJobs();
      return updatedJob;
    } catch (err) {
      setError(err.message);
      toast.error('Gagal memperbarui lowongan');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await jobService.delete(id);
      toast.success('Lowongan berhasil dihapus!');
      await fetchJobs();
    } catch (err) {
      setError(err.message);
      toast.error('Gagal menghapus lowongan');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchJobs();
    }
  }, []);

  return {
    jobs,
    loading,
    error,
    pagination,
    fetchJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob
  };
};
