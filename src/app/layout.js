import BootstrapInit from "@/helper/BootstrapInit";
import "react-modal-video/scss/modal-video.scss";
import "./font.css";
import "./globals.scss";
import NavbarTwo from "@/components/NavbarTwo";
import FooterOne from "@/components/FooterOne";

export const metadata = {
  title: "Service || Carryup - Expert Web Design & Development",
  description:
    "Crafting high-performance websites that drive results. From custom design to seamless development, Carryup transforms your online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         
      <BootstrapInit />
      <body suppressHydrationWarning={true}>
      <NavbarTwo/>
        {children}
        <FooterOne/>
        </body>
    </html>
  );
}
