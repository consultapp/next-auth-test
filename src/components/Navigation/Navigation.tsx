import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Главная</Link>
      <Link href="/news">Новости</Link>
      <Link href="/profile">Профиль</Link>
    </nav>
  );
}
