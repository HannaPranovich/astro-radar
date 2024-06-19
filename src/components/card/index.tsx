import { Asteroid } from "@/types";

export const Card = ({ asteroid }: { asteroid: Asteroid }) => {
  const { name, diameter, isDangerous, kilometers } = asteroid;

  return (
    <div className="rounded-xl border-2 border-[rgba(255,255,255,0.15)] bg-gray-700 p-2.5 shadow-[inset_2px_-2px_0_0_rgba(255,255,255,0.15)] backdrop-blur-sm">
      <p>Name: {name}</p>
      <p>Diameter: {diameter}km</p>
      {isDangerous ? <p>dangerous</p> : null}
      <p>Kilometers: {kilometers}</p>
    </div>
  );
};
