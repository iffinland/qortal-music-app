// src/api/qortalAPI.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:12391';  // Qortal sõlme API URL

// Funktsioon, mis kontrollib kasutaja olemasolu
export const checkUserAccount = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/check_user_account`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error checking user account:", error);
    return null;
  }
};

// Funktsioon mitme faili avaldamiseks Qortalis
export const publishMultipleAudioFiles = async (files: any[]) => {
  try {
    const response = await axios.post(`${BASE_URL}/publish_multiple_qdn_resource`, {
      resources: files,
      encrypt: false,
    });
    return response.data;
  } catch (error) {
    console.error("Error publishing files:", error);
    return null;
  }
};