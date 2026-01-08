const BASE_URL = 'https://api.pexels.com/v1';

export async function searchPhotos(query) {
  const response = await fetch(
    `${BASE_URL}/search?query=${query}&per_page=12`,
    {
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY,
      },
    }
  );
  
  return response.json();
} 
