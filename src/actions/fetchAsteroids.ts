'use server'

import { FetchAsteroidsResponse, RequestParams } from "@/types";
import { endpoint } from "@/constants";


export async function fetchAsteroids(requestParams: RequestParams) {
  const response = await fetch(endpoint.getAsteroids(requestParams));

  if (!response.ok) {
    throw new Error('Failed to fetch asteroids list');
  }

  const asteroids: FetchAsteroidsResponse = await response.json();

  return asteroids;
}
