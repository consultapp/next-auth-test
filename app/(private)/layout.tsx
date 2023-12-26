import AuthProvider from "@/components/Authentification/AuthProvider/AuthProvider";
import Image from "next/image";
import img from "@/assets/auth-structure.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <p>
        Раздел недоступный без авторизации. Технически закрыта через Layout в
        Route Group (private).
      </p>
      <Image src={img} width={400} height={200} alt="auth structure" />
      {children}
    </AuthProvider>
  );
}
