import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['500', '600'],
});

export const metadata: Metadata = {
  title: 'Casa Criativa | Aulas de Arte e Oficinas Criativas em Passo Fundo',
  description:
    'Ateliê de arte em Passo Fundo com aulas e experiências criativas para crianças, jovens e adultos. Desenho, pintura, modelagem, oficinas e colônia de férias.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
