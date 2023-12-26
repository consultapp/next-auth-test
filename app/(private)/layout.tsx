import AuthProvider from "@/components/Authentification/AuthProvider/AuthProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
