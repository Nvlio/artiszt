import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../app/Public_Itens/Estilo/Default.css"
import "../app/Public_Itens/Estilo/uicons-brands/css/uicons-brands.css"
import NavBarMenu from "@/Componentes/NavMenu";
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="Layout_Page">
          <NavBarMenu />
          {children}
        </div>
        <div className="Layout_Footer">
          <div className="Texto">
            <p>Artiszt 2024</p>
            <p>Versão 0.0.0/b.01</p>
            <p>by João Gabriel Caires Fernandes</p>
          </div>
          <div className="Image">
            <Image src="/Public_Itens/Imagens/Default_Site_Img/Macote-removebg-preview.png" width={'60'} height={'60'} alt="mascote artiszt" />
          </div>
        </div>
      </body>
    </html>
  );
}
