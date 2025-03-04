import "react-modal-video/scss/modal-video.scss";
import "./font.css";
import "./globals.scss";
import NavbarTwo from "@/components/NavbarTwo";
import FooterOne from "@/components/FooterOne";
import Script from "next/script";

export const metadata = {
  title: "Service || Carryup - Expert Web Design & Development",
  description:
    "Crafting high-performance websites that drive results. From custom design to seamless development, Carryup transforms your online presence.",
};

export default function RootLayout({ children }) {
  const widgetCode ="siqef17866459a4f91d3aee4bc3eaded954a05ecb8b00f19bcde640887b3a93b70f474c0f3e32ca3e2bd41c641164dd51ab"; // Replace with actual widget code
  

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {widgetCode ? (
          <Script
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                var $zoho=$zoho || {};
                $zoho.salesiq = $zoho.salesiq || {widgetcode:"${widgetCode}", values:{},ready:function(){}};
                var d=document;
                s=d.createElement("script");
                s.type="text/javascript";
                s.id="zsiqscript";
                s.defer=true;
                s.src="https://salesiq.zoho.in";
                t=d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s,t);
              `,
            }}
          />
        ) : (
          <div style={{ color: "red" }}> </div>
        )}
        <NavbarTwo />
        {children}
        <FooterOne />
      </body>
    </html>
  );
}
