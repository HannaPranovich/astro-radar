"use client";
import { Asteroid, RequestParams } from "@/types";
import { Card } from "../card";
import { useState } from "react";
import { fetchAsteroids } from "@/actions/fetchAsteroids";
import { formatToDisplayDate } from "@/utils";


export const DataList = ({
  initialAsteroids,
  initialRequestParams,
}: {
  initialRequestParams: RequestParams;
  initialAsteroids: [string, Asteroid[]][];
}) => {
  // const [asteroids, setAsteroids] =
  //   useState<[string, AsteroidFromResponse[]][]>(initialAsteroids);
  // const [requestedPeriod, setRequestedPeriod] =
  //   useState<RequestParams>(initialRequestParams);

  // const loadMoreAsteroids = async () => {
  //   const apiAsteroids = prepareRenderingData(
  //     await fetchAsteroids(requestParams),
  //   );
  //   setAsteroids([...asteroids, ...apiAsteroids]);
  // };

  return (
    <div>
      <ul className="max-w-md">
        {initialAsteroids.map(
          ([data, asteroidsListByDate]: [string, Asteroid[]]) => (
            <li key={data}>
              <h2 className="py-6 text-center text-2xl font-semibold">
                {formatToDisplayDate(data)}
              </h2>
              <ul>
                {asteroidsListByDate.map((asteroid) => (
                  <li key={asteroid.id} className="mt-6">
                    <Card asteroid={asteroid} />
                  </li>
                ))}
              </ul>
            </li>
          ),
        )}
      </ul>
      {/* <button onClick={loadMoreUsers}>Load more</button> */}
    </div>
  );
};
