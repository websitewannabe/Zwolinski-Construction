
import citiesData from '../data/cities.json';
import type { City, CitiesData } from '../types/city';

const data = citiesData as CitiesData;

export const getAllCities = (): City[] => {
  return data.cities;
};

export const getCityById = (id: string): City | undefined => {
  return data.cities.find(city => city.id === id);
};

export const getCityByName = (name: string): City | undefined => {
  return data.cities.find(city => city.name.toLowerCase() === name.toLowerCase());
};

export const generateCitySlug = (cityName: string): string => {
  return cityName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};
