import Navbar from "./Navbar";
import Footer from "./Footer";
import SeoKeywords from "./SeoKeywords";
import { PaymentTestModeBanner } from "./PaymentTestModeBanner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PaymentTestModeBanner />
      <Navbar />
      <main className="flex-1 pt-16 overflow-hidden">{children}</main>
      <Footer />
      <SeoKeywords />
    </div>
  );
};

export default Layout;
