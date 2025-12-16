import { Icon } from "@iconify/react";

export const NAV_ITEMS = [
  {
    section: "Dashboard",
    items: [
      { label: "Dashboard", icon: "mingcute:classify-2-fill", to: "/admin/dashboard" },
    ],
  },
  {
    section: "Konten Website",
    items: [
      { label: "Berita", icon: "heroicons:newspaper-solid", to: "/admin/berita" },
      { label: "Gallery", icon: "mdi:image-multiple", to: "/admin/gallery" },
      { label: "Lamaran Kerja", icon: "mdi:briefcase", to: "/admin/lamaran-kerja" },
      { label: "Testimoni", icon: "mdi:comment-quote", to: "/admin/testimoni" },
      { label: "Pesan Masuk", icon: "healthicons:contact-support", to: "/admin/pesan-masuk" },
      { label: "Daftar Perusahaan", icon: "mdi:domain", to: "/admin/mitra" },
      { label: "Lowongan Pekerjaan", icon: "mdi:domain", to: "/admin/lowongan" },
    ],
  },
];
