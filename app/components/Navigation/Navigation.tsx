import Link from "next/link";
import AuthButtonsNav from "../Authentification/AuthButtonsNav";
import AuthProvider from "../Authentification/AuthProvider/AuthProvider";

export default function Navigation() {
  return (
    <AuthProvider>
      <nav>
        <Link href="/">Главная</Link>
        <Link href="/news">Новости</Link>
        <Link href="/profile">Профиль</Link>
        <AuthButtonsNav />
      </nav>
    </AuthProvider>
  );
}
