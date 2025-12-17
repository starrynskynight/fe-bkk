export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://bkkapi-production-a514.up.railway.app/api',
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 20000,
};