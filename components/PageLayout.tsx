import ReviewsTab from "./ReviewsTab";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ReviewsTab />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
