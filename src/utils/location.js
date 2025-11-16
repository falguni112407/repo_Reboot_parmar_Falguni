// src/utils/location.js
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          console.log('Coordinates:', latitude, longitude);
          const state = await reverseGeocode(latitude, longitude);
          resolve({ latitude, longitude, state });
        } catch (error) {
          console.error('Reverse geocoding failed:', error);
          reject(error);
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        reject(error);
      },
      { 
        timeout: 15000,
        enableHighAccuracy: true,
        maximumAge: 60000 
      }
    );
  });
};

const reverseGeocode = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
    );
    
    if (!response.ok) {
      throw new Error('Reverse geocoding API failed');
    }
    
    const data = await response.json();
    console.log('Reverse geocoding data:', data);
    
    // Extract state from address
    const state = data.address?.state || data.address?.county || data.address?.region;
    
    if (!state) {
      throw new Error('Could not determine state from coordinates');
    }
    
    return state;
  } catch (error) {
    console.error('Reverse geocoding error:', error);
    // Fallback to mock data
    return getMockStateFromCoordinates(lat, lng);
  }
};

// Fallback function that uses coordinates to guess Indian state
const getMockStateFromCoordinates = (lat, lng) => {
  // Approximate coordinates for Indian states
  const stateCoordinates = {
    'Gujarat': { lat: 22.2587, lng: 71.1924 },
    'Maharashtra': { lat: 19.7515, lng: 75.7139 },
    'Uttar Pradesh': { lat: 26.8467, lng: 80.9462 },
    'Bihar': { lat: 25.0961, lng: 85.3131 },
    'Madhya Pradesh': { lat: 22.9734, lng: 78.6569 },
    'Punjab': { lat: 31.1471, lng: 75.3412 },
    'Tamil Nadu': { lat: 11.1271, lng: 78.6569 },
    'Andhra Pradesh': { lat: 15.9129, lng: 79.7400 },
    'Telangana': { lat: 17.1232, lng: 79.2088 },
    'Karnataka': { lat: 15.3173, lng: 75.7139 },
    'Rajasthan': { lat: 27.0238, lng: 74.2179 },
    'West Bengal': { lat: 22.9868, lng: 87.8550 },
    'Odisha': { lat: 20.9517, lng: 85.0985 },
    'Kerala': { lat: 10.8505, lng: 76.2711 }
  };

  // Find the closest state based on coordinates
  let closestState = 'Maharashtra'; // default
  let minDistance = Infinity;

  for (const [state, coords] of Object.entries(stateCoordinates)) {
    const distance = Math.sqrt(
      Math.pow(lat - coords.lat, 2) + Math.pow(lng - coords.lng, 2)
    );
    
    if (distance < minDistance) {
      minDistance = distance;
      closestState = state;
    }
  }

  return closestState;
};