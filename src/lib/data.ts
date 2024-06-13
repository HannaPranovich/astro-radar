import { FetchAsteroidsResponse, RequestParams } from "./definitions";
import { endpoint } from "./utils";

export async function fetchAsteroids(requestParams: RequestParams) {
  const response = await fetch(endpoint.getAsteroids(requestParams));

  if (!response.ok) {
    throw new Error('Failed to fetch asteroids list');
  }

  const headers = response.headers;
  console.log("HEADERS", headers);

  const { near_earth_objects: asteroids }: FetchAsteroidsResponse = await response.json();

  return asteroids;
}
