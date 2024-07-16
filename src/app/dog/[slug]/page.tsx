import getFile from "@/utils/get-file";
import Image from "next/image";
import React from "react";

type DogPageProps = {
  params: {
    slug: string;
  };
};

export default async function DogPage({ params }: DogPageProps) {
  const { slug } = params;
  const { data, error } = await getFile("dogs", slug);
  const { title, image, published } = data?.attributes;
  const { react: Content } = data;

  return (
    <>
      <header className="pt-24 container mx-auto">
        <div className="min-h-[60vh] relative">
          <Image
            src={image}
            alt={title}
            style={{
              objectFit: "cover",
            }}
            fill
          />
        </div>
      </header>
      <main className="container mx-auto">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>Published on: {published}</p>
        <section className="max-w-[800px] mt-10">
          <Content />
        </section>
      </main>
    </>
  );
}
