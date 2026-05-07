import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Flame,
  ShieldCheck
} from "lucide-react";

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
  "Entrada mensal para comecar com menor investimento",
  "Versao reduzida do conteudo principal",
  "Aulas praticas para dar os primeiros passos em inversores",
  "Conteudo direto ao ponto para aplicar na bancada"
];

export default function Downsell() {
  return (
    <>
      <main className="page-shell">
        <section className="hero downsell-hero">
          <p className="pill">
            <Flame size={14} aria-hidden="true" />
            Alternativa mais leve liberada
          </p>
          <h1>
            Antes de sair,
            <span className="danger">comece menor</span>
            por apenas <strong>R$18,99/mes</strong>
          </h1>
          <p className="subtitle">
            Se a oferta completa ainda nao encaixou para voce, esta e uma forma
            mais leve de entrar, testar o conteudo e comecar a evoluir nos
            reparos de inversores sem travar por preco.
          </p>
        </section>

        <section className="content-card story-card">
          <h2>O pior cenario e continuar adiando</h2>
          <p>
            Quando o tecnico adia, ele continua recusando servicos melhores e
            aceitando apenas reparos de baixo valor. O plano mensal existe para
            voce sair da inercia com uma entrada mais acessivel e aprender o
            essencial primeiro.
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
          <div className="best-seller">
            <ShieldCheck size={16} aria-hidden="true" />
            Entrada flexivel
          </div>
          <p className="offer-label">Sua alternativa mensal</p>
          <p className="old-price">Oferta completa: R$27,90</p>
          <span>comece por apenas</span>
          <strong>R$18,99</strong>
          <small>Plano mensal - metade dos produtos</small>
          <p className="warning">
            <Clock3 size={18} aria-hidden="true" />
            Esta condicao mensal pode nao ficar disponivel depois que voce sair.
          </p>
          <a
            className="cta"
            href="https://pay.kiwify.com.br/vFZbJZK"
            aria-label="Assinar plano mensal por R$18,99"
          >
            <ArrowRight size={26} aria-hidden="true" />
            Quero comecar agora por R$18,99/mes
          </a>
          <p className="microcopy">
            Uma entrada menor para quem quer aprender primeiro e decidir depois.
          </p>
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
