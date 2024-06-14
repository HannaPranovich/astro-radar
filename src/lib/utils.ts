import { Asteroid, FetchAsteroidsResponse, RequestParams } from "./definitions";

export const endpoint = {
  getAsteroids: ({ startDate, endDate }: RequestParams) => `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.API_KEY}`
}


export const getRequestParams = (): RequestParams => {
  const startDate = "2024-06-13";
  const endDate = "2024-06-16";

  return { startDate, endDate }
}

export const prepareRenderingData = (fetchedAsteroids: FetchAsteroidsResponse["near_earth_objects"]) => {
  const data = Object.entries(fetchedAsteroids);

  return data;
}

export const getDataForAsteroidCard = (asteroid: Asteroid) => {
  const {
    name,
    estimated_diameter: {
      kilometers: { estimated_diameter_max: diameter },
    },
    is_potentially_hazardous_asteroid: isDangerous,
    close_approach_data: [
      {
        miss_distance: { kilometers },
      },
    ],
  } = asteroid;

  return { diameter, isDangerous, kilometers, name }

}