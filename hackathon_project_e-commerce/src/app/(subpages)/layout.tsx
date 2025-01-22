import Footer from "@/components/home/Footer";
import HeaderShop from "@/components/shop/HeaderShop";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderShop />
      {children}
      <Footer />
    </div>
  );
}
