"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import { Card } from "./Card";

import { formatToDisplayDate, getAsteroids, getDateAfterDays } from "@/utils";
import { Asteroid, RequestParams } from "@/types";

const REQUESTED_NUMBER_OF_DAYS = 8;

export const DataList = ({
  initialAsteroids,
  initialRequestParams,
}: {
  initialRequestParams: RequestParams;
  initialAsteroids: [string, Asteroid[]][];
}) => {
  const [asteroids, setAsteroids] =
    useState<[string, Asteroid[]][]>(initialAsteroids);
  const [requestedPeriod, setRequestedPeriod] =
    useState<RequestParams>(initialRequestParams);
  const { ref, inView } = useInView();

  const loadMoreAsteroids = async () => {
    const requestParams = {
      startDate: getDateAfterDays(requestedPeriod.endDate, 1),
      endDate: getDateAfterDays(
        requestedPeriod.endDate,
        REQUESTED_NUMBER_OF_DAYS,
      ),
    };

    const apiAsteroids = await getAsteroids(requestParams);

    setAsteroids([...asteroids, ...apiAsteroids]);
    setRequestedPeriod(requestParams);
  };

  useEffect(() => {
    if (inView) {
      loadMoreAsteroids();
    }
  }, [inView]);

  return (
    <div>
      <ul className="max-w-md">
        {asteroids.map(([data, asteroidsListByDate]: [string, Asteroid[]]) => (
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
        ))}
      </ul>
      {/* <button onClick={loadMoreAsteroids}>Load more</button>
       */}
       <div ref={ref}>
        Loading...
      </div>
    </div>
  );
};
