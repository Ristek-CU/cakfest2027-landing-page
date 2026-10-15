/**
 * timelineData.ts
 * Data Contract & Schema for CAKFEST VOL.2 Timeline & Interactive Event Calendar
 * 
 * Location: src/lib/data/timelineData.ts
 * Note for Backend Team:
 * This contract defines the calendar events, monthly schedules, and rundown table items
 * for the interactive timeline calendar component (GET /api/timeline or GET /api/calendar).
 */

export interface CalendarMonth {
  key: string; // e.g. "2026-11", "2026-12", "2027-01"
  label: string; // e.g. "JANUARI 2027 ★ PEAK"
  shortLabel: string; // e.g. "JAN 2027"
  year: number;
  monthIndex: number; // 0-indexed (0 = Jan, 10 = Nov, 11 = Dec)
  totalDays: number;
}

export interface CalendarEvent {
  date: string; // "YYYY-MM-DD"
  dayNumber: number;
  title: string;
  venue: string;
  time: string;
  tag: string;
  type: 'warning' | 'info' | 'match' | 'peak';
  desc: string;
}

export interface RundownItem {
  id: string;
  dateRange: string;
  agenda: string;
  venue: string;
  status: 'SEDANG BERJALAN' | 'AKAN DATANG' | 'PUNCAK ACARA';
  isAccent?: boolean;
}

export interface TimelineSectionConfig {
  sectionId: string;
  title: string;
  subtitle: string;
  months: CalendarMonth[];
  events: CalendarEvent[];
  rundown: RundownItem[];
}

export const TIMELINE_SECTION_DATA: TimelineSectionConfig = {
  sectionId: 'timeline',
  title: 'KALENDER TIMELINE & ACARA RESMI',
  subtitle:
    'Jadwal pelaksanaan Cakfest Vol.2 dalam format kalender interaktif. Cek tanggal, nama kegiatan, dan lokasi pelaksanaan di setiap etape festival.',
  months: [
    {
      key: '2026-11',
      label: 'NOVEMBER 2026',
      shortLabel: 'NOV 2026',
      year: 2026,
      monthIndex: 10,
      totalDays: 30,
    },
    {
      key: '2026-12',
      label: 'DESEMBER 2026',
      shortLabel: 'DES 2026',
      year: 2026,
      monthIndex: 11,
      totalDays: 31,
    },
    {
      key: '2027-01',
      label: 'JANUARI 2027 ★ PEAK',
      shortLabel: 'JAN 2027',
      year: 2027,
      monthIndex: 0,
      totalDays: 31,
    },
  ],
  events: [
    {
      date: '2026-11-30',
      dayNumber: 30,
      title: 'Closing Pendaftaran Batch 1',
      venue: 'Online Website Resmi',
      time: 'Senin, 30 Nov 2026 // Pukul 23.59 WIB',
      tag: 'REGISTRASI RESMI',
      type: 'warning',
      desc: 'Batas akhir submit formulir online dan pendaftaran tim untuk seluruh 6 cabang kompetisi Cakfest Vol.2. Pastikan seluruh berkas KTM delegasi telah lengkap.',
    },
    {
      date: '2026-12-01',
      dayNumber: 1,
      title: 'Verifikasi Berkas Mulai',
      venue: 'Helpdesk Panitia',
      time: '01 - 10 Des 2026 // 09.00 - 16.00 WIB',
      tag: 'VERIFIKASI ADMINISTRASI',
      type: 'info',
      desc: 'Pemeriksaan keabsahan kartu identitas mahasiswa/pelajar seluruh tim peserta oleh sekretariat kompetisi.',
    },
    {
      date: '2026-12-10',
      dayNumber: 10,
      title: 'Batas Akhir Validasi Dokumen',
      venue: 'Helpdesk Panitia Cakfest',
      time: 'Kamis, 10 Des 2026 // 17.00 WIB',
      tag: 'CLOSING VERIFIKASI',
      type: 'warning',
      desc: 'Penutupan masa perbaikan berkas administrasi dan finalisasi kontingen resmi siap tanding.',
    },
    {
      date: '2026-12-15',
      dayNumber: 15,
      title: 'Technical Meeting & Live Drawing',
      venue: 'Auditorium & GMeet Live',
      time: 'Selasa, 15 Des 2026 // 19.30 WIB',
      tag: 'TECHNICAL MEETING',
      type: 'info',
      desc: 'Pertemuan teknis perwakilan seluruh kontingen, sosialisasi rulebook turnamen, dan live streaming undian bagan pertandingan.',
    },
    {
      date: '2027-01-08',
      dayNumber: 8,
      title: 'Opening & Babak 1/4 Final',
      venue: 'GOR & Hall Utama',
      time: 'Jumat, 08 Jan 2027 // 08.00 - 18.00 WIB',
      tag: 'HARI KE-1: KICK OFF',
      type: 'match',
      desc: 'Upacara pembukaan Cakfest Vol.2, defile kontingen, dan kick-off pertandingan perempat final semua cabang kompetisi.',
    },
    {
      date: '2027-01-09',
      dayNumber: 9,
      title: 'Semifinal & Dance Showcase',
      venue: 'Main Stage Kampus',
      time: 'Sabtu, 09 Jan 2027 // 09.00 - 19.30 WIB',
      tag: 'HARI KE-2: SEMIFINAL',
      type: 'match',
      desc: 'Pertandingan semifinal penentuan tiket partai puncak, panggung parade festival band, dan showcase tari kreasi.',
    },
    {
      date: '2027-01-10',
      dayNumber: 10,
      title: 'Grand Final & Awarding Night',
      venue: 'Panggung Spektakuler Cakfest',
      time: 'Minggu, 10 Jan 2027 // 13.00 - 22.00 WIB',
      tag: 'PUNCAK FESTIVAL (PEAK)',
      type: 'peak',
      desc: 'Pertarungan grand final seluruh cabang lomba, penganugerahan Piala Bergilir Rektorat, konser bintang tamu spektakuler, dan malam penganugerahan juara.',
    },
  ],
  rundown: [
    {
      id: 'rd-1',
      dateRange: '01 Okt - 30 Nov 2026',
      agenda: 'Pendaftaran Gelombang 1 (Batch 1) Seluruh Cabor',
      venue: 'Online via Website Resmi',
      status: 'SEDANG BERJALAN',
      isAccent: true,
    },
    {
      id: 'rd-2',
      dateRange: '01 Des - 10 Des 2026',
      agenda: 'Verifikasi Berkas KTM & Bukti Pembayaran',
      venue: 'Helpdesk Panitia Cakfest',
      status: 'AKAN DATANG',
    },
    {
      id: 'rd-3',
      dateRange: '15 Des 2026 (19.30 WIB)',
      agenda: 'Technical Meeting & Live Drawing Bagan Turnamen',
      venue: 'Auditorium & Google Meet Live',
      status: 'AKAN DATANG',
    },
    {
      id: 'rd-4',
      dateRange: '08 Jan 2027',
      agenda: 'Opening Ceremony & Babak Perempat Final',
      venue: 'Gelanggang Olahraga & Hall Utama',
      status: 'AKAN DATANG',
    },
    {
      id: 'rd-5',
      dateRange: '09 Jan 2027',
      agenda: 'Babak Semifinal & Modern Dance Showcase',
      venue: 'Main Stage Cakrawala University',
      status: 'AKAN DATANG',
    },
    {
      id: 'rd-6',
      dateRange: '10 Jan 2027',
      agenda: 'Grand Final & Awarding Ceremony Night',
      venue: 'Panggung Spektakuler Cakfest Vol.2',
      status: 'PUNCAK ACARA',
      isAccent: true,
    },
  ],
};
