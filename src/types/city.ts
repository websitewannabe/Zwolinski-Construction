
export interface City {
  id: string;
  name: string;
  state: string;
  county: string;
  zipCodes: string[];
  description: string;
  services: string[];
  landmarks: string[];
  neighborhoods: string[];
}

export interface CitiesData {
  cities: City[];
}
