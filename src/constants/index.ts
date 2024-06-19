import { RequestParams } from "@/types";

export const endpoint = {
  getAsteroids: ({ startDate, endDate }: RequestParams) => `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.API_KEY}`
}