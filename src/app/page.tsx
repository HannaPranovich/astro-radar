"use client";

import { useRouter } from "next/navigation";

import { spaceBoard } from "@/fonts";
import { Background } from "@/components/Background";
import styles from "../../styles/AnimatedButton.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Background />
      <main>
        <div className="ml-10 pt-40">
          <h1 className={`${spaceBoard.className} text-6xl`}>
            Astro<span className="text-primary">Radar</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg">
            Explore the cosmos with Asteroid Tracker. The platform provides
            real-time information about asteroids that fly close to Earth.
            Discover detailed data on each asteroid, including its size, speed,
            and proximity to our planet. <br />
            Dive in and explore the wonders of our universe!
          </p>
          <button
            className={styles.animatedButton}
            type="button"
            onClick={() => router.push("/asteroids")}
          >
            Explore
          </button>
        </div>
      </main>
    </>
  );
}
