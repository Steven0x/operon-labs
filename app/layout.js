import "./globals.css";

export const metadata = {
  title: "Operon Labs — AI automations, done for you",
  description:
    "We design and build custom AI agents that handle your team's repetitive work — follow-ups, data entry, routing, reporting. Live in days. Book a free automation audit.",
  openGraph: {
    title: "Operon Labs — AI automations, done for you",
    description:
      "Custom AI agents that take the busywork off your team's plate. Built in days, run for you. Book a free automation audit.",
    type: "website",
  },
};

export const viewport = { themeColor: "#f4f1ea" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
