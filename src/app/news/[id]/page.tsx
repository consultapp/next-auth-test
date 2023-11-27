import { notFound } from "next/navigation";
import { Suspense } from "react";

type Params = { params: { id: string } };

async function getNewsById(id: string): Promise<News> {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await data.json();
}

export async function generateMetadata({ params }: Params) {
  const { id } = params;
  const news = await getNewsById(id);

  if (!news || !news.title)
    return {
      title: `News ${id} not found`,
    };

  const { title } = news;

  return {
    title: title,
  };
}

export default async function NewsPageById({ params }: Params) {
  const { id } = params;
  const news = await getNewsById(id);

  if (!news || !news.title) return notFound();

  const { title, body } = news;
  return (
    <>
      <h1>{title}</h1>
      {body}
    </>
  );
}
