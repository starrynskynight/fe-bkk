import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const ErrorSummary = ({ errors, onErrorClick }) => {
  const errorEntries = Object.entries(errors);
  
  if (errorEntries.length === 0) return null;

  // Mapping field name ke label yang user-friendly
  const fieldLabels = {
    job_vacancy_id: 'Lowongan Pekerjaan',
    major_id: 'Jurusan',
    full_name: 'Nama Lengkap',
    nis_nisn: 'NIS/NISN',
    birth_date: 'Tanggal Lahir',
    gender: 'Jenis Kelamin',
    address: 'Alamat Lengkap',
    phone: 'No. HP / WhatsApp',
    email: 'Email Aktif',
    graduation_year: 'Tahun Kelulusan',
    gpa: 'IPK / Nilai Rata-rata',
    work_experience: 'Pengalaman Kerja',
    apply_reason: 'Alasan Melamar',
    resume: 'CV / Resume',
    certificate: 'Ijazah / Sertifikat',
    photo: 'Foto',
    cover_letter: 'Surat Lamaran',
    agreement: 'Persetujuan'
  };

  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
      <div className="flex items-start gap-3">
        <FaExclamationCircle className="text-red-500 text-xl mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-semibold text-red-800 mb-3 text-lg">
            ❌ {errorEntries.length} Field yang perlu diperbaiki:
          </h3>
          <ul className="space-y-2">
            {errorEntries.map(([field, message]) => (
              <li key={field}>
                <button
                  type="button"
                  onClick={() => onErrorClick(field)}
                  className="text-left text-red-700 hover:text-red-900 hover:underline transition text-sm flex items-start gap-2 w-full"
                >
                  <span className="font-medium">
                    • {fieldLabels[field] || field}:
                  </span>
                  <span className="flex-1">{message}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="text-red-600 text-xs mt-3 italic">
            💡 Klik pada item di atas untuk scroll ke field yang bermasalah
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorSummary;