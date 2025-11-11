export function formatDate(dateString) {
  if (!dateString) return "-";

  const date = new Date(dateString);
  const days = [
    "Minggu", "Senin", "Selasa", "Rabu",
    "Kamis", "Jumat", "Sabtu"
  ];
  const months = [
    "Januari", "Februari", "Maret", "April",
    "Mei", "Juni", "Juli", "Agustus",
    "September", "Oktober", "November", "Desember"
  ];

  const dayName = days[date.getDay()];
  const day = String(date.getDate()).padStart(2, "0");
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName}, ${day} ${monthName} ${year}`;
}
