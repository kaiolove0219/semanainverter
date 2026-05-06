import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, Flame } from "lucide-react";

export const metadata = {
  title: "Oferta Mensal",
  description:
    "Oferta mensal da Semana Inverter por R$18,99 com metade dos produtos.",
  openGraph: {
    title: "Oferta Mensal - Semana Inverter",
    description:
      "Entre na Semana Inverter com um plano mensal mais leve por R$18,99."
  }
};

const planItems = [
  "Acesso mensal a versao reduzida do treinamento",
  "Metade dos produtos da oferta completa",
  "Aulas praticas para iniciar nos consertos de inversores",
  "Conteudo direto ao ponto para aplicar na bancada"
];

export default function Downsell() {
  return (
    <>
      <main className="page-shell">
        <section className="hero downsell-hero">
          <p className="pill">
            <Flame size={14} aria-hidden="true" />
            Ultima chance - plano mais leve
          </p>
          <h1>
            Espere.
            <span className="danger">Nao saia ainda.</span>
            Comece com a versao mensal por <strong>R$18,99</strong>
          </h1>
          <p className="subtitle">
            Se a oferta completa de R$27,90 nao era o melhor momento pra voce,
            liberei uma entrada mais barata: <b>metade dos produtos</b>, mensal,
            para voce comecar sem travar.
          </p>
        </section>

        <section className="content-card story-card">
          <h2>Voce ainda pode comecar hoje</h2>
          <p>
            O objetivo e simples: te colocar em movimento. Com o plano mensal,
            voce recebe uma versao reduzida da Semana Inverter, focada no
            essencial para comecar a entender defeitos, praticar melhor e parar
            de depender so de servicos baratos.
          </p>
          <Image
            className="story-image"
            src="/assets/tecnico-posicoes.jpeg"
            alt="Tecnico mostrando posicoes de trabalho com placas e equipamentos"
            width={1080}
            height={1350}
            priority
          />
        </section>

        <section className="content-card checklist compact">
          <h2>O que entra nesse plano:</h2>
          <ul>
            {planItems.map((item) => (
              <li key={item}>
                <span className="check-icon">
                  <Check size={13} strokeWidth={4} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="offer-card downsell-offer" id="oferta-mensal">
          <p className="offer-label">Sua alternativa mensal</p>
          <p className="old-price">Oferta completa: R$27,90</p>
          <span>comece por apenas</span>
          <strong>R$18,99</strong>
          <small>Plano mensal - metade dos produtos</small>
          <p className="warning">
            <Clock3 size={18} aria-hidden="true" />
            Esta e a ultima alternativa antes de sair da pagina.
          </p>
          <a
            className="cta"
            href="https://pay.kiwify.com.br/vFZbJZK"
            aria-label="Assinar plano mensal por R$18,99"
          >
            <ArrowRight size={26} aria-hidden="true" />
            Quero comecar por R$18,99/mes
          </a>
          <Link className="downsell-link return-link" href="/">
            <ArrowLeft size={14} aria-hidden="true" />
            Voltar para a oferta completa de R$27,90
          </Link>
        </section>
      </main>

      <footer>&copy; 2026 Semana Inverter - Todos os direitos reservados.</footer>
    </>
  );
}
