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
  const widgetCode = "YOUR_WIDGET_CODE"; // Replace with actual widget code
  const domain = "https://salesiq_url.js"; // Replace with actual SalesIQ domain URL

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
                s.src="${domain}";
                t=d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s,t);
              `,
            }}
          />
        ) : (
          <div style={{ color: "red" }}>Need to pass widget code</div>
        )}
        <NavbarTwo />
        {children}
        <FooterOne />
      </body>
    </html>
  );
}
