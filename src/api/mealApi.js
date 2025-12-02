import { MEAL_BASE_URL } from '../api.config';

export async function getMeals() {
  try {
    const response = await fetch(MEAL_BASE_URL);
    const status = response.status;
    const data = await response.json();

    if (!response.ok) {
      const err = new Error(`${status}: ${data}`);
      err.status = status;
      err.url = MEAL_BASE_URL;
      throw err;
    }

    return { data, status, url: MEAL_BASE_URL };
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw error;
  }
}
