import { LivingThing } from "@/models/livingThing";
import Head from "next/head";

export default function Home() {
  const being = new LivingThing({
    name: "Squirrel",
    species: "animal",
    biases: ["fire"],
    age: 5,
    height: 0.5,
    weight: 0.25,
  });

  return (
    <>
      <Head>
        <title>Pocket Adventure</title>
        <meta
          name="description"
          content="Pocket Adventure is a tabletop styled role-play game intended to be played with friends to escape to mundane, and jump into the adventure."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <h1 className="text-red-700 font-bold text-4xl">{being.name}</h1>
        <h3>{being.species}</h3>
        {being.biases.map((i) => (
          <p key={i}>{i}</p>
        ))}
      </div>
    </>
  );
}
