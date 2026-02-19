import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col bg-background-1 min-h-screen">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
