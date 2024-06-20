import { RequestParams } from "@/types";
import { formatRequestedDate, processFetchedData } from "./transformationData";
import { fetchAsteroids } from "@/actions/fetchAsteroids";

export const getAsteroids = async (requestParams: RequestParams) => processFetchedData(await fetchAsteroids(requestParams));

export const getDateAfterDays = (initialDate: string, daysToAdd: number) => {
  const currentDate = new Date(initialDate);
  const futureDate = new Date(initialDate);

  futureDate.setDate(currentDate.getDate() + daysToAdd);

  return formatRequestedDate(futureDate);
};
