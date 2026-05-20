// Ganti jadi true saat PMB aktif — semua komponen otomatis menyesuaikan
export const PMB_MODE = false;

export const WA_URL = PMB_MODE
  ? 'https://wa.me/6282135402248?text=Halo%2C%20saya%20ingin%20informasi%20PMB%20STIT%20Al-Ihsan%20TA%202026%2F2027'
  : 'https://wa.me/6282135402248?text=Halo%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20tentang%20STIT%20Al-Ihsan';

export const CTA_PRIMARY_LABEL = PMB_MODE ? 'Daftar Mahasiswa Baru' : 'Hubungi Kami';
export const CTA_NAV_LABEL     = PMB_MODE ? 'Daftar Sekarang'       : 'Hubungi Kami';
