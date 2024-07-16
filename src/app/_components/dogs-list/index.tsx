import { DogsContentType } from "@/types/dogs-content.types";
import React from "react";
import DogsListItem from "../dogs-list-item";

type DogListProps = {
  content?: DogsContentType[];
};

export default function DogsList({ content }: Readonly<DogListProps>) {
  return (
    <section className="max-w-[1200px] mx-auto grid grid-cols-4">
      {content?.map(({ attributes, slug }: DogsContentType) => (
        <DogsListItem
          content={attributes}
          key={attributes?.title}
          slug={slug}
        />
      ))}
    </section>
  );
}
