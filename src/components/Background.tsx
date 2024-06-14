
import Image from "next/image";
import sky from "../../../public/night-sky.jpg";

export function Background() {
  return (
    <Image
      alt="sky"
      src={sky}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex: -1
      }}
    />
  )
}
