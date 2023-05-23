import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="space-y-6">{children}</main>
      <Footer />
    </>
  );
}
