import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Portafolio de Cristhian David",
  description: "Portafolio personal con enfoque en accesibilidad web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="app-shell-bg">
        <div aria-hidden="true" className="app-bg-layer">
          <div className="app-bg-blob app-bg-blob-1" />
          <div className="app-bg-blob app-bg-blob-2" />
          <div className="app-bg-blob app-bg-blob-3" />
          <div className="app-bg-grid app-bg-grid-1" />
          <div className="app-bg-grid app-bg-grid-2" />
        </div>
        <a href="#contenido-principal" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
