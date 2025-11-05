import { MEAL_BASE_URL } from '../api.config';

export async function getMeals() {
  try {
    const response = await fetch(MEAL_BASE_URL);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw error;
  }
}
