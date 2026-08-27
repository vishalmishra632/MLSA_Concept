import "./globals.css";

export const metadata = {
  title: "Justice Lives Here",
  description:
    "A directional brand and website concept for Montana Legal Services Association, prepared by Vishal Mishra.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..700;1,6..72,200..600&family=Public+Sans:wght@300;400;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B1210" />
      </head>
      <body>
        <div className="gridfield" aria-hidden="true" />
        <div className="shell">{children}</div>
      </body>
    </html>
  );
}
