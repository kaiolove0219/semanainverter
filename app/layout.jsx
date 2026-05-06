import "./globals.css";

export const metadata = {
  title: {
    default: "Semana Inverter",
    template: "%s | Semana Inverter"
  },
  description:
    "Aprenda a consertar inversores em 7 dias e cobre servicos mais lucrativos.",
  openGraph: {
    title: "Semana Inverter",
    description:
      "Treinamento pratico para tecnicos cobrarem mais consertando inversores.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
