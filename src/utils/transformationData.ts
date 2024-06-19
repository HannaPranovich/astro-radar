import { Asteroid, AsteroidFromResponse, FetchAsteroidsResponse } from "@/types";


export const formatDate = (date: Date) => date.toISOString().split('T')[0];

export const formatToDisplayDate = (inputDate: string) => {
  const [year, month, day] = inputDate.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return formatter.format(date);
}

export const selectAndRenameObjectKeys = (asteroid: AsteroidFromResponse): Asteroid => {
  const {
    id,
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

  return { diameter, id, isDangerous, kilometers, name }
}

const sortByObjectKeys = (unsortedDatesObject: FetchAsteroidsResponse["near_earth_objects"]) => {
  const sortedObject: FetchAsteroidsResponse["near_earth_objects"] = {};

  Object.keys(unsortedDatesObject)
    .sort((a, b) => new Date(a).valueOf() - new Date(b).valueOf())
    .forEach((date) => {
      sortedObject[date] = unsortedDatesObject[date]
    });

  return sortedObject;
}

export const processFetchedData = (fetchedAsteroids: FetchAsteroidsResponse): [string, Asteroid[]][] => {
  const sortedAsteroids = sortByObjectKeys(fetchedAsteroids["near_earth_objects"]);

  const processedData: [string, Asteroid[]][] = Object.entries(sortedAsteroids).map(([key, asteroidsList]) => {
    const updatedValue = asteroidsList.map((asteroid) => selectAndRenameObjectKeys(asteroid))
    return [key, updatedValue]
  });

  return processedData;
}