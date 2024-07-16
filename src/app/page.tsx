import DogsList from "./_components/dogs-list";
import Header from "@/components/header";
import getMarkdownFiles from "@/utils/get-files";

export default async function Home() {
  const { data, error } = await getMarkdownFiles("dogs");

  return (
    <>
      <Header />
      <main>
        {error && <h2>{error}</h2>}
        <section className="container mx-auto py-24">
          {data && <DogsList content={data} />}
        </section>
      </main>
    </>
  );
}
