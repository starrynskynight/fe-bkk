import { useState, useEffect } from 'react';
import { majorService } from '../services/majorService';
import { toast } from 'react-toastify';

export const useMajors = () => {
  const [majors, setMajors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMajors = async () => {
      try {
        setLoading(true);
        const response = await majorService.getAll();
        setMajors(response.data || []);
      } catch (err) {
        const errorMessage = err.response?.data?.message || 'Gagal memuat data jurusan';
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchMajors();
  }, []);

  // Format majors untuk SelectField
  const majorOptions = majors.map(major => ({
    label: major.name, // sesuaikan dengan field dari API
    value: major.id.toString(),
  }));

  return {
    majors,
    majorOptions,
    loading,
    error,
  };
};