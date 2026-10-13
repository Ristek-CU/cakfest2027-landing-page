/**
 * Visisection.ts
 * Data Contract & Schema for CAKFEST VOL.2 "Make It Pop" Brand Pillars
 * 
 * Location: src/lib/data/Visisection.ts
 * Note for Backend Team:
 * This file defines the contract and JSON schema for the 4 core pillars
 * of Cakfest Vol.2. When integrated with a headless CMS or REST/GraphQL API,
 * the backend should serve payloads conforming to `MakeItPopSectionConfig`
 * or `PillarItem[]`.
 */

export interface PillarMetric {
  label: string;
  value: string;
}

export interface RelatedCompetition {
  id: string;
  name: string;
  category: string;
  registrationFee: string;
  totalPrize: string;
}

export interface PillarItem {
  id: string;
  slug: string; // Dynamic route parameter: /pillars/:slug
  title: string;
  highlightText?: string;
  shortDescription: string;
  fullDescription: string;
  manifesto: string;
  iconType: 'collaborative' | 'creative' | 'impactful' | 'energetic';
  themeColor: {
    primary: string;
    secondary: string;
    glow: string;
    border: string;
    badgeBg: string;
  };
  metrics: PillarMetric[];
  actionPillars: {
    title: string;
    desc: string;
  }[];
  relatedCompetitions: RelatedCompetition[];
  badgeTag: string;
}

export interface MakeItPopSectionConfig {
  sectionId: string;
  eyebrowTag: string;
  titlePrefix: string;
  titlePopHighlight: string;
  titleImpactHighlight: string;
  tagline: string;
  summary: string;
  pillars: PillarItem[];
}

export const VISI_SECTION_DATA: MakeItPopSectionConfig = {
  sectionId: 'make-it-pop',
  eyebrowTag: 'CAKFEST VOL.2 // 4 PILAR PENGGERAK',
  titlePrefix: 'MAKE IT POP:',
  titlePopHighlight: 'TURN YOUR SPARK',
  titleImpactHighlight: 'INTO IMPACT',
  tagline: 'Your Spark. Your Moment. Your Impact.',
  summary:
    'Cakfest Vol.2 memadukan 4 pilar penggerak untuk menciptakan wadah kolaborasi, ruang kreativitas, dan kompetisi bergengsi bagi generasi muda se-Indonesia.',
  pillars: [
    {
      id: 'pillar-1',
      slug: 'collaborative',
      title: 'Collaborative',
      shortDescription:
        'Wadah persaudaraan, jejaring positif, dan kerja sama suportif antarmahasiswa dan pelajar nusantara.',
      fullDescription:
        'Kolaborasi adalah detak jantung dari Cakrawala Festival. Kami meyakini bahwa lompatan besar tidak lahir dari kerja soliter, melainkan dari sinergi antardisiplin, lintas institusi, dan ragam talenta nusantara yang saling mengangkat dan bertukar perspektif.',
      manifesto:
        'Membangun jembatan sinergi tanpa sekat, merajut kolaborasi generasi emas menuju masa depan berdaya cipta.',
      iconType: 'collaborative',
      themeColor: {
        primary: '#38bdf8',
        secondary: '#f6feff',
        glow: 'rgba(56, 189, 248, 0.25)',
        border: 'rgba(246, 254, 255, 0.4)',
        badgeBg: 'rgba(25, 34, 113, 0.6)',
      },
      badgeTag: 'PILAR 01 // SINERGI',
      metrics: [
        { label: 'Target Delegasi', value: '128+ Kampus' },
        { label: 'Jejaring Komunitas', value: '30+ Mitra' },
        { label: 'Semangat Tim', value: 'Solidaritas 100%' },
      ],
      actionPillars: [
        {
          title: 'Cross-Disciplinary Teamwork',
          desc: 'Mendorong integrasi antarjurusan dan universitas dalam membangun ekosistem festival yang inklusif.',
        },
        {
          title: 'Networking & Fellowship',
          desc: 'Mempertemukan pemimpin muda, atlet, desainer, dan akademisi dalam satu wadah persahabatan nasional.',
        },
      ],
      relatedCompetitions: [
        {
          id: 'cabor-futsal',
          name: 'Futsal Championship',
          category: 'Sports Division',
          registrationFee: 'Rp 250.000 / Tim',
          totalPrize: 'Rp 6.500.000',
        },
        {
          id: 'cabor-basket',
          name: '3x3 Basketball Battle',
          category: 'Sports Division',
          registrationFee: 'Rp 200.000 / Tim',
          totalPrize: 'Rp 7.500.000',
        },
      ],
    },
    {
      id: 'pillar-2',
      slug: 'creative-innovative',
      title: 'Creative & Innovative',
      highlightText: 'Creative & Innovative',
      shortDescription:
        'Ruang ekspresi bakat tanpa batas—dari musik, tari kreasi, esport, teknologi, hingga olahraga.',
      fullDescription:
        'Inovasi bermula dari keberanian mendobrak konvensi. Pilar Creative & Innovative memberikan kanvas seluas-luasnya bagi peserta untuk meremajakan warisan budaya nusantara, mengeksplorasi estetika audio-visual kontemporer, dan mengekspresikan orisinalitas tanpa batas.',
      manifesto:
        'Kreativitas bukan sekadar keindahan bentuk, melainkan daya pikat ide yang mampu menggugah rasa dan pemikiran.',
      iconType: 'creative',
      themeColor: {
        primary: '#fd47d6',
        secondary: '#fae6ee',
        glow: 'rgba(253, 71, 214, 0.35)',
        border: 'rgba(253, 71, 214, 0.4)',
        badgeBg: 'rgba(68, 43, 130, 0.5)',
      },
      badgeTag: 'PILAR 02 // EKSPLORASI',
      metrics: [
        { label: 'Kategori Seni & Musik', value: '2 Cabang' },
        { label: 'Panel Juri Profesional', value: '6 Maestro' },
        { label: 'Live Showcase Panggung', value: 'Grand Final' },
      ],
      actionPillars: [
        {
          title: 'Modern Nuance & Heritage',
          desc: 'Menggabungkan instrumen dan gerak tari tradisional kreasi dengan aransemen modern kontemporer.',
        },
        {
          title: 'Original Voice & Harmony',
          desc: 'Menampilkan bakat vokal dan band kampus dengan membawakan repertoar lagu wajib retro dan komposisi orisinal.',
        },
      ],
      relatedCompetitions: [
        {
          id: 'cabor-tari',
          name: 'Modern Dance & Tari Kreasi',
          category: 'Arts & Culture',
          registrationFee: 'Rp 150.000 / Tim',
          totalPrize: 'Rp 4.000.000',
        },
        {
          id: 'cabor-band',
          name: 'Solo Vokal & Band Akustik',
          category: 'Music & Vocal',
          registrationFee: 'Rp 150.000 / Tim',
          totalPrize: 'Rp 4.000.000',
        },
      ],
    },
    {
      id: 'pillar-3',
      slug: 'impactful',
      title: 'Impactful',
      highlightText: 'Impactful',
      shortDescription:
        'Mendorong setiap potensi menjadi karya nyata yang berani tampil dan memberi dampak positif (Make It Pop).',
      fullDescription:
        'Sebuah karya hanya memiliki makna sejati jika memberi resonansi dan inspirasi bagi sekitarnya. Melalui pilar Impactful, Cakfest mengarahkan daya kompetisi dan kecerdasan analitis peserta menjadi pemecahan masalah riil yang solutif serta membanggakan institusi.',
      manifesto:
        'Nyalakan percikan potensimu hingga menjadi nyala api yang menggerakkan perubahan nyata di masyarakat.',
      iconType: 'impactful',
      themeColor: {
        primary: '#e0ff00',
        secondary: '#fef08a',
        glow: 'rgba(224, 255, 0, 0.35)',
        border: 'rgba(224, 255, 0, 0.4)',
        badgeBg: 'rgba(25, 34, 113, 0.6)',
      },
      badgeTag: 'PILAR 03 // DAMPAK',
      metrics: [
        { label: 'Piala Bergilir', value: 'Rektorat Cup' },
        { label: 'Total Hadiah Utama', value: 'Rp 15.000.000' },
        { label: 'Output Solutif', value: 'Publikasi Riset' },
      ],
      actionPillars: [
        {
          title: 'Rigorous Academic Rigor',
          desc: 'Ajang pembuktian logika analitis, ketangkasan respon, dan penguasaan sains dalam format Decathlon.',
        },
        {
          title: 'Inspiring Role Models',
          desc: 'Menghadirkan teladan generasi muda yang berprestasi dan memberi kontribusi aktif bagi lingkungan sekitarnya.',
        },
      ],
      relatedCompetitions: [
        {
          id: 'cabor-ccc',
          name: 'Cerdas Cermat (CCC Decathlon)',
          category: 'Kategori Prestisius Utama',
          registrationFee: 'Rp 350.000 / Tim',
          totalPrize: 'Rp 15.000.000',
        },
      ],
    },
    {
      id: 'pillar-4',
      slug: 'energetic-youthful',
      title: 'Energetic & Youthful',
      highlightText: 'Energetic & Youthful',
      shortDescription:
        'Semangat persaingan sehat, energi festival yang menyala, dan hiburan panggung yang spektakuler.',
      fullDescription:
        'Masa muda adalah momentum emas di mana energi, ketangkasan mental, dan antusiasme berada pada puncaknya. Pilar Energetic & Youthful mewadahi atmosfer kompetisi digital dan panggung hiburan masa kini yang bergelora, memicu adrenalin positif, dan merayakan keberagaman.',
      manifesto:
        'Kobarkan semangat sportivitas dan ekspresikan energi mudamu dengan keberanian tanpa tanding.',
      iconType: 'energetic',
      themeColor: {
        primary: '#ffbb37',
        secondary: '#fde047',
        glow: 'rgba(255, 187, 55, 0.35)',
        border: 'rgba(255, 187, 55, 0.4)',
        badgeBg: 'rgba(68, 43, 130, 0.5)',
      },
      badgeTag: 'PILAR 04 // ENERGI',
      metrics: [
        { label: 'Peserta E-Sports', value: '64 Tim Draft' },
        { label: 'Atmosfer Kompetisi', value: 'Live Streaming' },
        { label: 'Malam Puncak', value: 'Awarding Night' },
      ],
      actionPillars: [
        {
          title: 'Competitive Gaming Arena',
          desc: 'Turnamen Land of Dawn dengan sistem Single Elimination Bo3 hingga Grand Final Bo5 berstandar nasional.',
        },
        {
          title: 'Festival Atmosphere',
          desc: 'Pesta perayaan apresiasi, guest star performance, dan euforia panggung awarding ceremony yang memukau.',
        },
      ],
      relatedCompetitions: [
        {
          id: 'cabor-mlbb',
          name: 'Mobile Legends: Bang Bang',
          category: 'E-Sports Division',
          registrationFee: 'Rp 150.000 / Tim',
          totalPrize: 'Rp 8.000.000',
        },
      ],
    },
  ],
};

/**
 * Utility helper to retrieve a specific pillar by slug
 */
export function getPillarBySlug(slug: string): PillarItem | undefined {
  return VISI_SECTION_DATA.pillars.find((p) => p.slug === slug);
}
