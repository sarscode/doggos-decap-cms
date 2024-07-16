import React from "react";
import Search from "../search";

export default function Header() {
  return (
    <header className="min-h-[40vh] pt-24 flex flex-col bg-amber-400">
      <div className="container mx-auto h-full">
        <section className="h-full flex flex-col max-w-[420px] items-center justify-center mx-auto">
          <h1 className="text-2xl text-center font-bold">
            Find your new best friend
          </h1>
          <p className="mb-4">Browse pets from our network of over 100 dogs.</p>
          <Search />
        </section>
      </div>
    </header>
  );
}
