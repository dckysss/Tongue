import { TongueData } from '../types';

export const tongueData: TongueData = {
  anatomi: [
    {
      id: 'epiglottis',
      name: 'Epiglottis',
      description: 'Sebagai tutup pintu saluran pernapasan saat menelan, sehingga mencegah makanan atau cairan masuk ke trakea dan paru-paru.',
      section: 'anatomi',
      position: {
        default: [46, 16],
        md: [46, 27],
        sm: [46, 34],
      },
      slide: 0
    },
    {
      id: 'palatine-tonsil',
      name: 'Palatine Tonsil',
      description: 'Sebagai tutup pintu saluran pernapasan saat menelan, sehingga mencegah makanan atau cairan masuk ke trakea dan paru-paru.',
      section: 'anatomi',
      position: {
        default: [36, 32],
        md: [36, 38],
        sm: [36, 42]
      },
      slide: 0
    },
    {
      id: 'epiglottic-vallecula',
      name: 'Epiglottic Vallecula',
      description: 'Sebagai tempat sementara menampung saliva sebelum ditelan.',
      section: 'anatomi',
      position: {
        default: [50, 23],
        md: [50, 32],
        sm: [50, 36]
      },
      slide: 0
    },
    {
      id: 'lingual-tonsil',
      name: 'Lingual Tonsil',
      description: 'Sebagai pertahanan tubuh terhadap mikroorganisme yang masuk melalui mulut.',
      section: 'anatomi',
      position: {
        default: [50, 34],
        md: [50, 40],
        sm: [50, 42]
      },
      slide: 0
    },
    {
      id: 'root',
      name: 'Root',
      description: 'Membantu proses menelan dan berhubungan dengan otot-otot yang menggerakkan lidah.',
      section: 'anatomi',
      position: {
        default: [42, 37],
        md: [42, 41],
        sm: [42, 44]
      },
      slide: 0
    },
    {
      id: 'terminal-sulcus',
      name: 'Terminal Sulcus',
      description: 'Garis berbentuk V yang memisahkan bagian lidah depan (body) dengan bagian belakang (root), sebagai batas anatomi yang penting.',
      section: 'anatomi',
      position: {
        default: [50, 41],
        md: [50, 44],
        sm: [50, 46]
      },
      slide: 0
    },
    {
      id: 'foramen-cecum',
      name: 'Foramen Cecum',
      description: 'Lubang kecil di tengah terminal sulcus yang merupakan bekas saluran kelenjar tiroid selama perkembangan embrio.',
      section: 'anatomi',
      position: {
        default: [46, 40],
        md: [46, 43],
        sm: [46, 45]
      },
      slide: 0
    },
    {
      id: 'median-sulcus',
      name: 'Median Sulcus',
      description: 'Bagian bawah dari telinga yang lunak dan tergantung. Fungsi utamanya tidak langsung terkait dengan pendengaran, namun sering digunakan untuk piercing atau tindik telinga.',
      section: 'anatomi',
      position: {
        default: [46, 65],
        sm: [46, 56]
      },
      slide: 0
    },
    {
      id: 'body',
      name: 'Body',
      description: 'Pengunyahan, pengecapan, dan pembentukan suara saat berbicara.',
      section: 'anatomi',
      position: {
        default: [50, 76],
        md: [50, 69],
        sm: [50, 62]
      },
      slide: 0
    },
    {
      id: 'apex',
      name: 'Apex',
      description: 'Pengecapan rasa dan pengucapan kata-kata.',
      section: 'anatomi',
      position: {
        default: [46, 88],
        md: [46, 75],
        sm: [46, 67]
      },
      slide: 0
    },
    {
      id: 'frenulum',
      name: 'Frenulum',
      description: 'Pengecapan rasa dan pengucapan kata-kata.',
      section: 'anatomi',
      position: {
        default: [49.5, 62],
      },
      slide: 1
    },
  ],
  struktur: [
    {
      id: 'circumvallata',
      name: 'Papilla Circumvallata',
      description: 'Berperan sebagai reseptor pengecap utama, terutama untuk rasa pahit. Papilla ini besar dan terletak di belakang lidah dengan kelenjar von Ebner yang membantu membersihkan celah sekitar papilla agar rasa bisa diterima dengan lebih baik.',
      section: 'struktur',
      position: {
        default: [55, 38],
        sm: [55, 42]
      },
      image: 'papila_valata.PNG'
    },
    {
      id: 'folliata',
      name: 'Papilla Folliata ',
      description: 'Berfungsi sebagai reseptor pengecap yang terutama sensitif terhadap rasa asam. Terletak di sisi-sisi belakang lidah dan mengandung banyak sel pengecap.',
      section: 'struktur',
      position: {
        default: [63, 55],
        sm: [67, 52]
      },
      image: '/papila_foliata.PNG'
    },
    {
      id: 'fungiformis',
      name: 'Papilla Fungiformis',
      description: 'Mengandung banyak reseptor pengecap, terutama untuk rasa manis, asin, dan asam. Terletak di permukaan atas lidah, berbentuk jamur kecil berwarna kemerahan.',
      section: 'struktur',
      position: {
        default: [52, 65],
        sm: [52, 60]
      },
      image: 'papila_fungiformis.PNG'
    },
    {
      id: 'filiformis',
      name: 'Papila Filiformis',
      description: 'Tidak mengandung reseptor pengecap. Berfungsi untuk memberikan tekstur kasar pada permukaan lidah, membantu menggerakkan makanan di mulut, dan berperan dalam fungsi mekanik lidah.',
      section: 'struktur',
      position: {
        default: [56, 82],
        sm: [57, 73]
      },
      image: 'papila_filiformis.PNG'
    },
  ],
  sensor: [
    {
      id: 'pahit',
      name: 'Pahit',
      section: 'sensor',
      position: {
        default: [50, 42],
      }
    },
    {
      id: "masam",
      uid: "masam-left",
      name: "Masam",
      section: "sensor",
      position: {
        default: [37, 50],
        sm: [34, 50]
      },
    },
    {
      id: "masam",
      uid: "masam-right",
      name: "Masam",
      section: "sensor",
      position: {
        default: [62, 50],
        sm: [65, 50]
      },
    },
    {
      id: 'asin',
      uid: "asin-right",
      name: 'Asin',
      section: 'sensor',
      position: {
        default: [40, 72],
        sm: [36, 69]
      },
    },    
    {
      id: 'asin',
      uid: "asin-left",
      name: 'Asin',
      section: 'sensor',
      position: {
        default: [60, 72],
        sm: [63, 69]
      },
    },    
    {
      id: 'manis',
      name: 'Manis',
      section: 'sensor',
      position: {
        default: [50, 86],
        sm: [50, 78]
      }
    },
  ],
};

export const getAllEyeParts = () => {
  return [...tongueData.anatomi, ...tongueData.struktur, ...tongueData.sensor];
};

export const getEyePartById = (id: string) => {
  const allParts = getAllEyeParts();
  return allParts.find(part => part.id === id);
};

export const getEyePartsBySection = (section: 'anatomi' | 'struktur' | 'sensor') => {
  return tongueData[section];
};