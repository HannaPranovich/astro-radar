import { Asteroid } from "@/lib/definitions"
import { prepareRenderingData } from "@/lib/utils"
import { Card } from "../card"

export const DataList = ({ asteroids }: { asteroids: ReturnType<typeof prepareRenderingData> }) => {
  return <ul className="max-w-md">
    {asteroids.map(([data, asteroidsListByDate]: [string, Asteroid[]]) => (
      <li key={data}>
        <h2 className="text-2xl font-semibold text-center py-6">{data}</h2>
        <ul>{asteroidsListByDate.map((asteroid) => (
          <li key={asteroid.id} className="mt-6">
            <Card asteroid={asteroid} />
          </li>
        ))}</ul>
      </li>
    ))}
  </ul>
}