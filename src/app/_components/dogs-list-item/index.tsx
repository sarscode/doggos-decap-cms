import { DogsContentAttributeType } from "@/types/dogs-content.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type DogsListItemProps = {
  content: DogsContentAttributeType;
  slug: string;
};

export default function DogsListItem({ content, slug }: DogsListItemProps) {
  return (
    <Link href={`/dog/${slug}`}>
      <div className="max-w-[260px] rounded-lg shadow-lg">
        <div>
          <Image
            src={content?.image}
            alt={content?.title}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="p-2 mt-2">
          <h3 className="font-medium mb-1">{content?.title}</h3>
          {/* <p className="truncate text-sm">{content?.body}</p> */}
        </div>
      </div>
    </Link>
  );
}
