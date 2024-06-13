import { fetchAsteroids } from "@/lib/data";
import { Asteroid } from "@/lib/definitions";
import { getRequestParams, prepareRenderingData } from "@/lib/utils";

export default async function Home() {
  const requestParams = getRequestParams();
  const asteroids = prepareRenderingData(await fetchAsteroids(requestParams));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Asteroids list</h1>
        <ul>
          {asteroids.map(([data, asteroidsListByDate]: [string, Asteroid[]]) => (
            <li key={data}>
              <h2>{data}</h2>
              <ul>{asteroidsListByDate.map((asteroid)=>(
                <li key={asteroid.id}>
                  <p>Name: {asteroid.name}</p>
                  <p>Diameter: {asteroid.estimated_diameter.kilometers.estimated_diameter_max}km</p>
                  {asteroid.is_potentially_hazardous_asteroid? <p>dangerous</p>:null}
                  <p>Kilometers: {asteroid.close_approach_data[0].miss_distance.kilometers}</p>
                </li>
              ))}</ul>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
