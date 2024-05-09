import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TESIS | Desenvolvimento e gestão de serviços tecnológicos",
  description: "Gestão técnica de Programas Setoriais da Qualidade; Avaliação de produtos inovadores para construção civil; Realização de ensaios de materiais de construção",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>

        <Layout>

          {children}

        </Layout>

      </body>
    </html>
  );
}
