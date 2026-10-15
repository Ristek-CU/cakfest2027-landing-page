export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'eligibility',
    question: 'Siapa saja yang berhak mengikuti kompetisi di Cakfest Vol.2?',
    answer:
      'Cakfest Vol.2 terbuka untuk pelajar SMA/SMK/MA sederajat serta mahasiswa aktif D3/D4/S1 dari seluruh perguruan tinggi di Indonesia. Setiap peserta wajib melampirkan kartu identitas pelajar atau mahasiswa yang sah.',
  },
  {
    id: 'registration',
    question: 'Bagaimana mekanisme pendaftaran tim?',
    answer:
      'Bentuk tim sesuai ketentuan cabang lomba, isi formulir pendaftaran, unggah dokumen peserta, lalu selesaikan pembayaran sebelum batas pendaftaran. Panduan lengkap tersedia pada dokumen resmi Cakfest.',
  },
  {
    id: 'different-schools',
    question: 'Apakah anggota tim boleh berasal dari sekolah atau kampus yang berbeda?',
    answer:
      'Ketentuan asal institusi mengikuti aturan masing-masing cabang lomba. Periksa rulebook cabang yang dipilih sebelum mendaftarkan tim.',
  },
  {
    id: 'student-card',
    question: 'Bagaimana jika KTM anggota tim belum terbit dari kampus?',
    answer:
      'Gunakan dokumen pengganti yang masih berlaku, seperti surat keterangan aktif atau kartu mahasiswa sementara, sesuai ketentuan verifikasi pada rulebook.',
  },
  {
    id: 'technical-meeting',
    question: 'Kapan Technical Meeting (TM) diselenggarakan dan apakah wajib hadir?',
    answer:
      'Technical Meeting berlangsung pada 15 Desember 2026 pukul 19.30 WIB. Perwakilan setiap tim wajib mengikuti TM untuk menerima penjelasan teknis dan aturan pertandingan.',
  },
  {
    id: 'refund',
    question: 'Apakah biaya pendaftaran dapat di-refund jika batal bertanding?',
    answer:
      'Biaya pendaftaran tidak dapat dikembalikan setelah pembayaran terverifikasi, kecuali terdapat keputusan khusus dari panitia yang diumumkan melalui kanal resmi Cakfest.',
  },
];
