import { DataList } from "@/components/dataList";
import { Dela_Gothic_One } from "next/font/google";

import Image from "next/image";
import earth from "../../public/earth.png";
import { formatRequestedDate, getAsteroids } from "@/utils";

const dela = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });

const initialRequestParams = {
  startDate: formatRequestedDate(new Date()),
  endDate: formatRequestedDate(new Date()),
};


export default async function Home() {
  const initialAsteroids = await getAsteroids(initialRequestParams);

  return (
    <>
      <header className="p-6">
        <h1 className={`${dela.className} text-4xl`}>AstroRadar</h1>
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
          <DataList
            initialRequestParams={initialRequestParams}
            initialAsteroids={initialAsteroids}
          />
        </div>
      </main>
    </>
  );
}
