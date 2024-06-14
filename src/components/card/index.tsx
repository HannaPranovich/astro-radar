import { Asteroid } from "@/lib/definitions";
import { getDataForAsteroidCard } from "@/lib/utils";

export const Card = ({ asteroid }: { asteroid: Asteroid }) => {
  const { name, diameter, isDangerous, kilometers } =
    getDataForAsteroidCard(asteroid);

  return (
    <div 
    className="p-2.5 rounded-xl bg-gray-700 backdrop-blur-sm shadow-[inset_2px_-2px_0_0_rgba(255,255,255,0.15)] border-2 border-[rgba(255,255,255,0.15)]">
      <p>Name: {name}</p>
      <p>Diameter: {diameter}km</p>
      {isDangerous ? <p>dangerous</p> : null}
      <p>Kilometers: {kilometers}</p>
    </div>
  );
};
