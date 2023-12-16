import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertKgToLbs(kg: number) {
  const lbs = Math.round(kg * 2.20462); 
  return [lbs];
}

export function convertLbsToKg(lbs: number) {
  return Math.round(lbs / 2.20462);
}

export function convertCmToIn(cm: number) {
  return cm * 0.393701
}

export function convertInToCm(inches: number) {
  return inches * 2.54
}

export function convertFeetInchesToCm (feet: number, inches: number) {
  return Math.round((feet * 12 + inches) * 2.54);
};

export function convertCmToFeetInches (cm: number) {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return [feet, inches];
};


export function calculateBMI (height: number, weight: number) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
};