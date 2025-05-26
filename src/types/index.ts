export type EyeSection = 'anatomi' | 'struktur' | 'sensor';

export interface DetailPin {
  id: string;
  label: string;
  info: string;
  top: string; // misalnya: "23%"
  left: string; // misalnya: "30%"
}

export type ResponsivePosition = {
  default: [number, number];
  sm?: [number, number];
  md?: [number, number];
  lg?: [number, number];
};

export interface EyePart {
  id: string;
  uid?: string;
  name: string;
  description?: string;
  section: EyeSection;
  position: ResponsivePosition | [number, number]; // Percentage coordinates for positioning on the image
  hasMoreDetail?: boolean;
  details?: DetailPin[];
  image?: string;
  slide?: number;
}

export type TongueData = {
  [key in EyeSection]: EyePart[];
};