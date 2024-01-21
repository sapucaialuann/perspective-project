import { Funnel } from "../types";

export const parseJsonFile = (file: File): Promise<Funnel> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string);
        resolve(jsonData);
      } catch (error) {
        reject(error);
      }
    };

    reader.readAsText(file);
  });
};