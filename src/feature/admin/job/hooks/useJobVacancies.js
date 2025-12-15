import { useState, useEffect } from 'react';
import { jobService } from '../services/jobServices';
import { toast } from 'react-toastify';

export const useJobVacancies = (autoFetch = true) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJobs = async (params = {}) => {
  setLoading(true);
  setError(null);
  try {
    const response = await jobService.getAll(params);

    setJobs(response.data ?? []);

    return response.data;
  } catch (err) {
    setError(err.message);
    toast.error('Gagal memuat data lowongan');
    throw err;
  } finally {
    setLoading(false);
  }
};

  const getJobById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await jobService.getById(id);
      return data;
    } catch (err) {
      setError(err.message);
      toast.error('Gagal memuat detail lowongan');
      throw err;
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
    fetchJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob
  };
};