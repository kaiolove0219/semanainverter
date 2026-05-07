import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesCombined,
  Check,
  Clock3,
  Flame,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap
} from "lucide-react";

const outcomes = [
  "Diagnosticar defeitos em inversores sem ficar perdido na bancada",
  "Entender o caminho do defeito e parar de trocar peca no chute",
  "Entrar em um servico mais valorizado que reparos simples de baixo ticket",
  "Atender equipamentos que muitos tecnicos recusam por falta de metodo",
  "Ganhar mais confianca para conversar com o cliente e defender seu preco",
  "Aplicar o conteudo em uma rotina pratica, mesmo com pouco tempo por dia"
];

const valueStack = [
  "Aulas diretas para entender defeitos comuns em inversores",
  "Orientacao pratica para evoluir do basico para diagnosticos melhores",
  "Conteudo pensado para bancada, sem excesso de teoria solta",
  "Acesso imediato para comecar hoje, no seu ritmo"
];

const objections = [
  "Nao precisa ser especialista: o treinamento foi montado para guiar o passo a passo.",
  "Nao precisa comprar equipamento caro para assistir: primeiro voce entende o metodo.",
  "Nao e promessa magica: e um caminho pratico para aumentar seu repertorio tecnico."
];

export default function Home() {
  return (
    <>
      <main className="page-shell">
        <section className="hero">
          <p className="pill">
            <Zap size={14} aria-hidden="true" />
            Lote promocional ativo agora
          </p>
          <h1>
            Aprenda um reparo mais valorizado.
            <span className="danger">Pare de depender</span>
            so de servico barato.
          </h1>
          <p className="subtitle">
            A <b>Semana Inverter</b> mostra um caminho pratico para voce
            comecar a entender inversores, melhorar seus diagnosticos e entrar
            em um tipo de reparo que costuma ser mais valorizado pelo cliente.
          </p>
          <a className="cta cta-hero" href="#oferta" aria-label="Ver oferta da Semana Inverter">
            <ArrowRight size={24} aria-hidden="true" />
            Quero ver a oferta de hoje
          </a>
          <div className="trust-row" aria-label="Beneficios principais">
            <span>
              <BadgeCheck size={15} aria-hidden="true" />
              Acesso imediato
            </span>
            <span>
              <LockKeyhole size={15} aria-hidden="true" />
              Pagamento seguro
            </span>
          </div>
        </section>

        <section
          className="photo-card hero-photo"
          aria-label="Tecnico especialista em inversores"
        >
          <Image
            src="/assets/tecnico-posicoes.jpeg"
            alt="Tecnico da Inverter Tecnologia em diferentes posicoes de trabalho"
            width={1080}
            height={1350}
            priority
          />
        </section>

        <section className="content-card story-card">
          <h2>O tecnico que aprende inversores muda o tipo de servico que aceita</h2>
          <p>
            Muitos tecnicos ficam presos em consertos pequenos porque ainda nao
            sabem como abordar placas e equipamentos mais complexos. O problema
            nao e falta de vontade. E falta de um roteiro simples para sair do
            basico e enxergar defeitos com mais clareza.
          </p>
          <Image
            className="story-image"
            src="/assets/formacao-inversores.jpeg"
            alt="Formacao completa de reparo de inversores com tecnico segurando placa"
            width={1080}
            height={1350}
          />
        </section>

        <section className="intro">
          <p>Apresentando</p>
          <h2>Semana Inverter</h2>
          <span>
            Um treinamento <b>direto ao ponto</b> para quem quer evoluir na
            bancada, entender inversores e parar de recusar servicos por falta
            de seguranca tecnica.
          </span>
        </section>

        <section className="content-card checklist">
          <h2>O que voce leva para a bancada:</h2>
          <ul>
            {outcomes.map((item) => (
              <li key={item}>
                <span className="check-icon">
                  <Check size={13} strokeWidth={4} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="value-grid" aria-label="Resumo da oferta">
          {valueStack.map((item) => (
            <article className="value-item" key={item}>
              <BadgeCheck size={22} aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </section>

        <section className="content-card objection-card">
          <h2>Se voce esta pensando "sera que isso e para mim?"</h2>
          <ul>
            {objections.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="proof-card">
          <ShieldCheck className="shield" size={42} aria-hidden="true" />
          <p>
            <b>Conteudo criado a partir da pratica de bancada,</b> com foco em
            entendimento real do defeito. Voce aprende o que observar, como
            raciocinar e como ganhar mais confianca antes de aceitar o servico.
          </p>
        </section>

        <section className="offer-card" id="oferta">
          <div className="best-seller">
            <Trophy size={16} aria-hidden="true" />
            Melhor condicao
          </div>
          <p className="offer-label">Oferta de entrada para comecar hoje</p>
          <p className="old-price">R$197,90</p>
          <span>por apenas</span>
          <strong>R$27,90</strong>
          <small>Pagamento unico - acesso imediato ao conteudo</small>
          <p className="stock-alert">
            <Flame size={18} aria-hidden="true" />
            Lote promocional limitado: <b>preco pode sair do ar a qualquer momento</b>
          </p>
          <p className="warning">
            <Clock3 size={18} aria-hidden="true" />
            Depois que o lote encerrar, a proxima entrada pode voltar para o
            valor cheio.
          </p>
          <a
            className="cta"
            href="https://pay.kiwify.com.br/F204FO9"
            aria-label="Comprar Semana Inverter por R$27,90"
          >
            <ArrowRight size={26} aria-hidden="true" />
            Quero entrar na Semana Inverter agora
          </a>
          <div className="benefits">
            <span>
              <Sparkles size={15} aria-hidden="true" />
              Acesso imediato
            </span>
            <span>
              <ChartNoAxesCombined size={15} aria-hidden="true" />
              Evolucao pratica
            </span>
          </div>
          <p className="microcopy">
            Ideal para tecnicos que querem sair do basico e aprender um servico
            com maior percepcao de valor.
          </p>
          <Link className="downsell-link" href="/downsell">
            Ainda nao quero entrar na oferta completa
          </Link>
        </section>
      </main>

      <footer>&copy; 2026 Semana Inverter - Todos os direitos reservados.</footer>
    </>
  );
}
