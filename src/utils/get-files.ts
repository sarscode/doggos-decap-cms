import fs from "fs";
import path from "path";

export default async function getMarkdownFiles(folder: string) {
  try {
    const directory = path.resolve(process.cwd(), `./src/content`, folder);

    const markdownFiles: string[] = fs.readdirSync(directory);

    const files = await Promise.all(
      markdownFiles.map(async (path: string) => {
        const content = await import(`../content/${folder}/${path}`);
        return { ...content, slug: path.substring(0, path.length - 3) };
      })
    );
    return { data: files, error: null };
  } catch (error) {
    return { data: null, error: "Unable to fetch data" };
  }
}
