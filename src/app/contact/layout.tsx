import Navbar from "@/components/Navbar";
import NewFooter from "@/components/NewFooter";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <NewFooter />
    </div>
  );
}