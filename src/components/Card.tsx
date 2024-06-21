import { Asteroid } from "@/types";

export const Card = ({ asteroid }: { asteroid: Asteroid }) => {
  const { name, diameter, isDangerous, kilometers } = asteroid;

  return (
    <div className="rounded-xl border-2 border-[rgba(255,255,255,0.15)] p-4 text-lg backdrop-blur-sm">
      <p>
        Name: <span className="text-primary">{name}</span>
      </p>
      <p>Diameter: {diameter}km</p>
      {isDangerous ? <p>dangerous</p> : null}
      {kilometers ? <p>Kilometers: {kilometers}</p> : null}
    </div>
  );
};
