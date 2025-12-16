import { z } from 'zod';

export const jobSchema = z.object({
  company: z.string().min(1, 'Nama perusahaan wajib diisi'),
  position: z.string().min(1, 'Posisi pekerjaan wajib diisi'),
  location: z.string().min(1, 'Lokasi wajib diisi'),
  salary: z.string().min(1, 'Range gaji wajib diisi'),
  start_date: z.string().min(1, 'Tanggal mulai wajib diisi'),
  end_date: z.string().min(1, 'Tanggal berakhir wajib diisi'),
  description: z.string().min(10, 'Deskripsi minimal 10 karakter'),
  qualifications: z.array(z.string().min(1)).min(1, 'Minimal 1 kualifikasi wajib diisi'),
  benefits: z.array(z.string().min(1)).min(1, 'Minimal 1 benefit wajib diisi'),
  status: z.enum(['active', 'inactive']).optional()
}).refine((data) => {
  if (data.start_date && data.end_date) {
    return new Date(data.start_date) <= new Date(data.end_date);
  }
  return true;
}, {
  message: 'Tanggal berakhir harus setelah tanggal mulai',
  path: ['end_date']
});