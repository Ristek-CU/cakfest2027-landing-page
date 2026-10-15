import cccImage from '../../assets/lomba/ccc.jpg'
import mlbbImage from '../../assets/lomba/mlbb.jpg'
import basketImage from '../../assets/lomba/basket.jpg'
import futsalImage from '../../assets/lomba/futsal.jpg'
import tariImage from '../../assets/lomba/tari.jpg'
import bandImage from '../../assets/lomba/band.jpg'

export type Lomba = {
  code: string
  name: string
  tagline: string
  description: string
  badge: string
  prize: string
  registrationFee: string
  image: string
  imageAlt: string
}

export const dataLomba: Lomba[] = [
  {
    code: 'CCC',
    name: 'CERDAS CERMAT (CCC DECATHLON)',
    tagline: 'Multidisiplin Decathlon: Strategi Taktis, Ketangkasan, & Logika Terpadu',
    description:
      'Ajang supremasi tertinggi perguruan tinggi memperebutkan Piala Bergilir Rektorat lewat 3 etape kompetisi terintegrasi.',
    badge: 'KATEGORI UTAMA & PRESTISIUS',
    prize: 'Rp 15.000.000',
    registrationFee: 'Rp 350.000 / Tim',
    image: cccImage,
    imageAlt: 'Arena kompetisi Cakrawala Champions Challenge',
  },
  {
    code: 'MLBB',
    name: 'MOBILE LEGENDS: BANG BANG',
    tagline: 'Tournament Draft Pick Custom 5v5 + 1 Cadangan',
    description:
      'Turnamen Land of Dawn Draft Pick Custom 5v5 dengan sistem Single Elimination Bo3 hingga Grand Final Bo5.',
    badge: 'E-SPORTS DIVISION',
    prize: 'Rp 8.000.000',
    registrationFee: 'Rp 150.000 / Tim',
    image: mlbbImage,
    imageAlt: 'Arena kompetisi Mobile Legends',
  },
  {
    code: 'BASKET',
    name: '3X3 BASKETBALL BATTLE',
    tagline: 'Kategori Pelajar & Mahasiswa (FIBA Rules)',
    description:
      'Format half-court intensif 10 menit standar FIBA 3x3 resmi dengan wasit berlisensi nasional.',
    badge: 'SPORTS DIVISION',
    prize: 'Rp 7.500.000',
    registrationFee: 'Rp 200.000 / Tim',
    image: basketImage,
    imageAlt: 'Lapangan kompetisi basket 3x3',
  },
  {
    code: 'FUTSAL',
    name: 'FUTSAL CHAMPIONSHIP',
    tagline: 'Inter-University & High School Cup',
    description:
      'Turnamen futsal lapangan vinyl standar nasional dengan penghargaan Top Scorer dan Best Supporter.',
    badge: 'SPORTS DIVISION',
    prize: 'Rp 6.500.000',
    registrationFee: 'Rp 250.000 / Tim',
    image: futsalImage,
    imageAlt: 'Lapangan kompetisi futsal',
  },
  {
    code: 'TARI',
    name: 'MODERN DANCE & TARI KREASI',
    tagline: 'Kompetisi Modern Dance & Seni Kreasi Nusantara',
    description:
      'Eksplorasi gerak tari nusantara kontemporer berbalut aransemen musik modern dinilai oleh maestro tari.',
    badge: 'ARTS & CULTURE',
    prize: 'Rp 4.000.000',
    registrationFee: 'Rp 150.000 / Tim',
    image: tariImage,
    imageAlt: 'Pertunjukan tari tradisional dan kreasi',
  },
  {
    code: 'BAND',
    name: 'SOLO VOKAL & BAND AKUSTIK',
    tagline: 'Kompetisi Solo Vokal & Band Akustik Kampus',
    description:
      'Panggung musikalitas kampus membawakan 1 lagu wajib retro & 1 lagu bebas. Pemenang tampil di Awarding Night!',
    badge: 'MUSIC & VOCAL',
    prize: 'Rp 4.000.000',
    registrationFee: 'Rp 150.000 / Tim',
    image: bandImage,
    imageAlt: 'Panggung penampilan band CAKFEST',
  },
]
