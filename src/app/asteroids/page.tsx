import { DataList } from "@/components/DataList";

import { formatRequestedDate, getAsteroids, processFetchedData } from "@/utils";
import { spaceBoard } from "@/fonts";

import asteroids from "../asteroids.json";
import { Background } from "@/components/Background";

const initialRequestParams = {
  startDate: formatRequestedDate(new Date()),
  endDate: formatRequestedDate(new Date()),
};

export default async function Page() {
  // @ts-ignore
  const initialAsteroids = processFetchedData(asteroids);

  return (
    <>
      <Background />
      <header>
        <div className="">
          <a href="/" className={`${spaceBoard.className} text-2xl`}>
            Astro<span className="text-primary">Radar</span>
          </a>
        </div>
      </header>
      <main className="flex px-6">
        <div className="">
          <DataList
            initialRequestParams={initialRequestParams}
            initialAsteroids={initialAsteroids}
          />
        </div>
      </main>
    </>
  );
}
