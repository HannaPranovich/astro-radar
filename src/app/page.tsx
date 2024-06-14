import { fetchAsteroids } from "@/lib/data";
import { getRequestParams, prepareRenderingData } from "@/lib/utils";
import { DataList } from "@/components/dataList";
import { Dela_Gothic_One } from "next/font/google";

import Image from "next/image";
import earth from "../../public/earth.png";

const dela = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  const requestParams = getRequestParams();
  prepareRenderingData;
  const asteroids = prepareRenderingData(await fetchAsteroids(requestParams));

  return (
    <>
      <header className="p-6">
        <h1 className={`${dela.className} text-4xl`}>
          AstroRadar
        </h1>
      </header>
      <main className="flex px-6">
        <div className="w-2/4">
          <Image
            src={earth}
            width={640}
            height={640}
            alt="Picture of the author"
          />
        </div>
        <div className="w-2/4">
          <DataList asteroids={asteroids} />
        </div>
      </main>
    </>
  );
}
