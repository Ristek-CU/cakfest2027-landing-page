import cccImage from '../../assets/lomba/ccc.webp'
import mlbbImage from '../../assets/lomba/mlbb.webp'
import futsalImage from '../../assets/lomba/futsal.webp'
import tariImage from '../../assets/lomba/tari.webp'

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
    code: 'BMC',
    name: 'BMC (BUSINESS MODEL CANVAS)',
    tagline: 'Kompetisi tim beranggotakan 3 orang',
    description:
      'Penilaian dilakukan oleh juri menggunakan papan nilai, bukan bagan pertandingan. Skor tiap kriteria dijumlahkan untuk menentukan total nilai dan peringkat akhir.',
    badge: 'BUSINESS COMPETITION',
    prize: 'Informasi menyusul',
    registrationFee: 'Informasi menyusul',
    image: cccImage,
    imageAlt: 'Arena kompetisi Cakrawala Champions Challenge',
  },
  {
    code: 'POSTER',
    name: 'POSTER DESIGN',
    tagline: 'Kompetisi desain poster individu',
    description:
      'Karya dinilai oleh juri menggunakan papan nilai, bukan bagan pertandingan. Skor tiap kriteria dijumlahkan untuk menentukan total nilai dan peringkat akhir.',
    badge: 'DESIGN COMPETITION',
    prize: 'Informasi menyusul',
    registrationFee: 'Informasi menyusul',
    image: tariImage,
    imageAlt: 'Pertunjukan tari tradisional dan kreasi',
  },
]
