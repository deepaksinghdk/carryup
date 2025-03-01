 
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
         
       
      <body suppressHydrationWarning={true}>
        <NavbarTwo/>
          {children}
        <FooterOne/>
        <script>window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}</script><script id="zsiqscript" src="https://salesiq.zohopublic.in/widget?wc=siqef17866459a4f91d3aee4bc3eaded954a05ecb8b00f19bcde640887b3a93b70f474c0f3e32ca3e2bd41c641164dd51ab" defer></script>
        </body>
    </html>
  );
}
