import News from "@/components/News/News";
import { Suspense } from "react";

export const metadata = {
  title: "Новости",
};

export default function NewsPage() {
  return (
    <>
      <h1>Новости</h1>
      <ul>
        <Suspense fallback="loading">
          <News />
        </Suspense>
      </ul>
    </>
  );
}
