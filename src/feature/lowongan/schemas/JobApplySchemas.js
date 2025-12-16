import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_RESUME_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
const ACCEPTED_CERTIFICATE_TYPES = [...ACCEPTED_IMAGE_TYPES, 'application/pdf'];

export const jobApplicationSchema = z.object({
  job_vacancy_id: z.number().min(1, 'Lowongan pekerjaan wajib dipilih'),
  major_id: z.number().min(1, 'Jurusan wajib dipilih'),
  full_name: z.string()
    .min(1, 'Nama lengkap wajib diisi')
    .max(150, 'Nama maksimal 150 karakter'),
  nis_nisn: z.string()
    .max(30, 'NIS/NISN maksimal 30 karakter')
    .optional()
    .or(z.literal('')),
  birth_date: z.string().optional().or(z.literal('')),
  gender: z.enum(['male', 'female', '']).optional(),
  address: z.string().optional().or(z.literal('')),
  phone: z.string()
    .max(30, 'Nomor telepon maksimal 30 karakter')
    .optional()
    .or(z.literal('')),
  email: z.string()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid (contoh: nama@email.com)')
    .max(150, 'Email maksimal 150 karakter'),
  graduation_year: z.string()
    .optional()
    .or(z.literal(''))
    .refine((val) => {
      if (!val) return true;
      const year = parseInt(val);
      return year >= 1980 && year <= new Date().getFullYear();
    }, `Tahun kelulusan harus antara 1980-${new Date().getFullYear()}`),
  gpa: z.string()
    .optional()
    .or(z.literal(''))
    .refine((val) => {
      if (!val) return true;
      const gpa = parseFloat(val);
      return gpa >= 0 && gpa <= 100;
    }, 'IPK/Nilai harus antara 0-100'),
  work_experience: z.string().optional().or(z.literal('')),
  apply_reason: z.string()
    .min(20, 'Alasan melamar minimal 20 karakter')
    .max(500, 'Alasan melamar maksimal 500 karakter'),
  resume: z.custom((file) => {
    if (!file) return false;
    if (!(file instanceof File)) return false;
    if (file.size > MAX_FILE_SIZE) {
      throw new Error(`Ukuran file terlalu besar (${(file.size / 1024 / 1024).toFixed(2)}MB). Maksimal 5MB`);
    }
    if (!ACCEPTED_RESUME_TYPES.includes(file.type)) {
      throw new Error('Format file tidak valid. Gunakan PDF, DOC, atau DOCX');
    }
    return true;
  }, 'CV/Resume wajib diupload'),
  certificate: z.custom((file) => {
    if (!file) return true; // Optional
    if (!(file instanceof File)) return false;
    if (file.size > MAX_FILE_SIZE) {
      throw new Error(`Ukuran file terlalu besar (${(file.size / 1024 / 1024).toFixed(2)}MB). Maksimal 5MB`);
    }
    return ACCEPTED_CERTIFICATE_TYPES.includes(file.type);
  }, 'Format file tidak valid').optional(),
  photo: z.custom((file) => {
    if (!file) return true; // Optional
    if (!(file instanceof File)) return false;
    if (file.size > MAX_FILE_SIZE) {
      throw new Error(`Ukuran file terlalu besar (${(file.size / 1024 / 1024).toFixed(2)}MB). Maksimal 5MB`);
    }
    return ACCEPTED_IMAGE_TYPES.includes(file.type);
  }, 'Format file tidak valid').optional(),
  cover_letter: z.custom((file) => {
    if (!file) return true; // Optional
    if (!(file instanceof File)) return false;
    if (file.size > MAX_FILE_SIZE) {
      throw new Error(`Ukuran file terlalu besar (${(file.size / 1024 / 1024).toFixed(2)}MB). Maksimal 5MB`);
    }
    return ACCEPTED_RESUME_TYPES.includes(file.type);
  }, 'Format file tidak valid').optional(),
  agreement: z.boolean()
    .refine((val) => val === true, 'Anda harus mencentang persetujuan terlebih dahulu'),
});