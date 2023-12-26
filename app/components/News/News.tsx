import Link from "next/link";

export default async function News() {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const news = await (await fetch(url)).json();

  return news.map((item: News) => {
    return (
      <li key={item.id}>
        <Link href={`/news/${item.id}`}>{item.title}</Link>
      </li>
    );
  });
}
