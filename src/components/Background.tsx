import Image from "next/image";
import sky from "../../public/images/galaxy.jpg";

export function Background() {
  return (
    <>
      <div className="fixed -z-1 h-screen w-screen overflow-hidden">
        <Image
          alt="sky"
          src={sky}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="fixed -z-1 h-screen w-screen overflow-hidden bg-transparentBlue"></div>
    </>
  );
}
