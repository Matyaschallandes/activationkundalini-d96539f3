import Navbar from "./Navbar";
import Footer from "./Footer";
import SeoKeywords from "./SeoKeywords";
import MobileCtaBar from "./MobileCtaBar";
import { PaymentTestModeBanner } from "./PaymentTestModeBanner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PaymentTestModeBanner />
      <Navbar />
      <main className="flex-1 pt-24 md:pt-32 overflow-hidden">{children}</main>
      <Footer />
      <div className="h-14 md:hidden" aria-hidden />
      <MobileCtaBar />
      <SeoKeywords />
    </div>
  );
};

export default Layout;
