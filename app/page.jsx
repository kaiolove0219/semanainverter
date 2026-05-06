import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesCombined,
  Check,
  Clock3,
  Flame,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap
} from "lucide-react";

const outcomes = [
  "Identificar defeitos complexos que outros tecnicos rejeitam",
  "Consertar inversores de placas, fontes e equipamentos modernos",
  "Cobrar de R$300 a R$800 por servico, no lugar de R$50",
  "Sair do nivel iniciante e virar tecnico avancado de verdade",
  "Se destacar na sua cidade como referencia em conserto",
  "Aumentar seu faturamento ja na primeira semana aplicando"
];

export default function Home() {
  return (
    <>
      <main className="page-shell">
        <section className="hero">
          <p className="pill">
            <Zap size={14} aria-hidden="true" />
            Oferta unica - aparece so uma vez
          </p>
          <h1>
            Pare de cobrar <span className="danger">barato.</span>
            <strong>Fature ate 5x mais</strong>
            consertando o que ninguem sabe.
          </h1>
          <p className="subtitle">
            Aprenda a <b>consertar inversores</b> em 7 dias e comece a cobrar
            servicos <b>muito mais lucrativos</b> que radio e placa simples.
          </p>
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
          <h2>A verdade que ninguem te conta</h2>
          <p>
            A maioria dos tecnicos iniciantes fica{" "}
            <b>presa consertando radio de R$50</b>. Trabalha o dia inteiro, mal
            paga as contas e nunca evolui. Enquanto isso, quem domina{" "}
            <span>inversores</span> cobra <b>R$300, R$500, R$800</b> por
            servico e ainda tem fila de espera.
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
            Treinamento <b>7 dias direto ao ponto</b>. Sem enrolacao, sem
            teoria que nao serve pra nada. Foco total em <b>pratica e lucro.</b>
          </span>
        </section>

        <section className="content-card checklist">
          <h2>O que voce vai conseguir fazer:</h2>
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

        <section className="proof-card">
          <ShieldCheck className="shield" size={42} aria-hidden="true" />
          <p>
            <b>Metodo validado na pratica,</b> criado a partir de anos
            consertando equipamentos reais em bancada. Nada de teoria solta, so
            o que funciona e gera dinheiro.
          </p>
        </section>

        <section className="offer-card" id="oferta">
          <div className="best-seller">
            <Trophy size={16} aria-hidden="true" />
            Mais vendido
          </div>
          <p className="offer-label">Sua oferta especial agora</p>
          <p className="old-price">R$197,90</p>
          <span>por apenas</span>
          <strong>R$27,90</strong>
          <small>Pagamento unico - acesso imediato</small>
          <p className="stock-alert">
            <Flame size={18} aria-hidden="true" />
            Restam apenas <b>73 unidades</b> com esse valor
          </p>
          <p className="warning">
            <Clock3 size={18} aria-hidden="true" />
            Esta oferta aparece UMA UNICA VEZ. Se sair, nao volta.
          </p>
          <a
            className="cta"
            href="https://pay.kiwify.com.br/F204FO9"
            aria-label="Comprar Semana Inverter por R$27,90"
          >
            <ArrowRight size={26} aria-hidden="true" />
            Sim! Quero acesso a Semana Inverter agora
          </a>
          <div className="benefits">
            <span>
              <Sparkles size={15} aria-hidden="true" />
              Acesso imediato
            </span>
            <span>
              <ChartNoAxesCombined size={15} aria-hidden="true" />
              Resultados em 7 dias
            </span>
          </div>
          <Link className="downsell-link" href="/downsell">
            Nao, quero continuar sem aprender isso agora
          </Link>
        </section>
      </main>

      <footer>&copy; 2026 Semana Inverter - Todos os direitos reservados.</footer>
    </>
  );
}
