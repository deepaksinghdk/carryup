import "react-modal-video/scss/modal-video.scss";
import "./font.css";
import "./globals.scss";
import NavbarTwo from "@/components/NavbarTwo";
import FooterOne from "@/components/FooterOne";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: "Service || Carryup - Expert Web Design & Development",
  description:
    "Crafting high-performance websites that drive results. From custom design to seamless development, Carryup transforms your online presence.",
};

class Salesiq extends React.Component {
  constructor(props) {
    super(props);
    this.hasCode = props.hasOwnProperty("widgetCode");
  }

  render() {
    return this.hasCode ? (
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"${this.props.widgetCode}", values:{},ready:function(){}};
            var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.in";
            t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
          `,
        }}
      />
    ) : (
      <div style={{ color: "red" }}>Need to pass widget code</div>
    );
  }
}

export default function RootLayout({ children, widgetCode, domain }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NavbarTwo />
        {children}
        <FooterOne />
        <Salesiq widgetCode={widgetCode} domain={domain} />
      </body>
    </html>
  );
}
