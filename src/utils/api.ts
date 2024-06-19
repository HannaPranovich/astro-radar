import { RequestParams } from "@/types";
import { formatDate, processFetchedData } from "./transformationData";
import { fetchAsteroids } from "@/actions/fetchAsteroids";

export const getAsteroids = async (requestParams: RequestParams) => processFetchedData(await fetchAsteroids(requestParams));

export const getEndDate = (currentDate: Date) => {
  const futureDate = new Date();

  futureDate.setDate(currentDate.getDate() + 2);

  return formatDate(futureDate);
};
