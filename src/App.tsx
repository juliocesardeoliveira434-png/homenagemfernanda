import { useState, useEffect, useRef } from "react";

// ==================== HOOKS ====================

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// ==================== DATA ====================

const careerHighlights = [
  {
    year: "1929",
    title: "Nascimento",
    desc: "Nasce Arlette Pinheiro Esteves da Silva em 16 de outubro, no Rio de Janeiro.",
  },
  {
    year: "1950",
    title: "Início no Teatro",
    desc: "Inicia sua carreira no teatro brasileiro, adotando o nome artístico Fernanda Montenegro.",
  },
  {
    year: "1953",
    title: "Teatro Brasileiro de Comédia",
    desc: "Integra o elenco do TBC, onde se torna uma das maiores intérpretes do palco brasileiro.",
  },
  {
    year: "1962",
    title: "Casamento com Fernando Torres",
    desc: "Casa-se com o ator Fernando Torres, com quem forma uma das maiores parcerias artísticas do Brasil.",
  },
  {
    year: "1970",
    title: "Dona de uma Companhia",
    desc: "Fundação da Companhia Teatral Fernanda Montenegro e Fernando Torres.",
  },
  {
    year: "1985",
    title: "A Hora da Estrela",
    desc: "Protagoniza a adaptação cinematográfica de 'A Hora da Estrela', obra de Clarice Lispector.",
  },
  {
    year: "1997",
    title: "O Que É Isso, Companheiro?",
    desc: "Brilha no filme sobre o sequestro do embaixador americano durante a ditadura militar.",
  },
  {
    year: "1998",
    title: "Central do Brasil",
    desc: "Sua atuação como Dora a leva à indicação ao Oscar de Melhor Atriz — a primeira e única atriz brasileira na categoria.",
  },
  {
    year: "1999",
    title: "O Auto da Compadecida",
    desc: "Interpreta a Compadecida na adaptação da obra de Ariano Suassuna, um dos maiores sucessos da TV brasileira.",
  },
  {
    year: "2004",
    title: "Em Nome da Lei",
    desc: "Atuação marcante no cinema brasileiro consolidando sua versatilidade.",
  },
  {
    year: "2013",
    title: "A Menina que Matou os Pais",
    desc: "Retorna ao cinema com atuações que continuam a emocionar gerações.",
  },
  {
    year: "2020",
    title: "Legado Imortal",
    desc: "Aos 91 anos, continua atuando. É considerada a maior atriz brasileira de todos os tempos.",
  },
];

const iconicFilms = [
  {
    title: "Central do Brasil",
    year: "1998",
    role: "Dora",
    desc: "Uma professora aposentada que escreve cartas para analfabetos na estação Central do Brasil no Rio de Janeiro. Sua vida muda ao ajudar um menino órfão a encontrar o pai no interior do Nordeste.",
    quote: "Você não tem coração, Dora!",
    award: "Indicação ao Oscar de Melhor Atriz",
    color: "from-velvet-900 to-velvet-700",
  },
  {
    title: "O Auto da Compadecida",
    year: "1999/2017",
    role: "A Compadecida / Nossa Senhora",
    desc: "Na adaptação da obra-prima de Ariano Suassuna, Fernanda interpreta a Compadecida — a Virgem Maria que intercede pela humanidade no julgamento final.",
    quote: "Eu sou a mãe de Jesus, a mãe de Deus... e mãe de todos vocês.",
    award: "Prêmio de Melhor Atriz",
    color: "from-gold-800 to-gold-600",
  },
  {
    title: "A Hora da Estrela",
    year: "1985",
    role: "Macabéa",
    desc: "Adaptação da obra de Clarice Lispector. Fernanda narra e interpreta a história de Macabéa, uma jovem nordestina que vive no Rio de Janeiro, revelando toda a dor e poesia da existência.",
    quote: "A hora da estrela é aquela em que a pessoa sente que o seu destino é o de ser estrela.",
    award: "Festival de Gramado",
    color: "from-cinema-800 to-cinema-600",
  },
  {
    title: "O Que É Isso, Companheiro?",
    year: "1997",
    role: "Margarida",
    desc: "Baseado em fatos reais sobre o sequestro do embaixador americano Charles Burke Elbrick por grupos de resistência durante a ditadura militar brasileira.",
    quote: "O Brasil não pode continuar assim.",
    award: "Indicação ao Oscar de Melhor Filme Estrangeiro",
    color: "from-velvet-800 to-cinema-700",
  },
  {
    title: "Eles Não Usam Black-Tie",
    year: "1981",
    role: "Roma",
    desc: "Fernanda brilha como Roma, mulher do operário que enfrenta o dilema entre lutar por justiça social e garantir o sustento da família durante uma greve.",
    quote: "O homem tem que ter dignidade.",
    award: "Festival de Locarno",
    color: "from-cinema-900 to-velvet-900",
  },
  {
    title: "A Vida Invisível",
    year: "2019",
    role: "Eurídice (idoso)",
    desc: "Dirigido por Karim Aïnouz, Fernanda interpreta Eurídice em sua velhice — uma mulher que viveu uma vida inteira esperando reencontrar a irmã. Uma das atuações mais emocionantes de sua carreira.",
    quote: "Eu esperei a vida inteira por você.",
    award: "Festival de Cannes — Un Certain Regard",
    color: "from-gold-900 to-velvet-800",
  },
];

const famousQuotes = [
  {
    text: "A arte é a forma mais pura de estar vivo.",
    source: "Fernanda Montenegro",
    context: "Sobre a importância da arte em sua vida",
  },
  {
    text: "Eu sou uma mulher que faz teatro. Isso é o que eu sei fazer. Isso é o que eu amo fazer.",
    source: "Fernanda Montenegro",
    context: "Em entrevista sobre sua dedicação ao palco",
  },
  {
    text: "O teatro é minha religião, o palco é minha igreja.",
    source: "Fernanda Montenegro",
    context: "Reflexão sobre sua relação com o teatro",
  },
  {
    text: "O ator não mente. O ator revela verdades através da ficção.",
    source: "Fernanda Montenegro",
    context: "Sobre o ofício da atuação",
  },
  {
    text: "A velhice não é o fim. É outra forma de estar inteiro.",
    source: "Fernanda Montenegro",
    context: "Sobre envelhecer com dignidade",
  },
  {
    text: "Eu queria poder te abraçar, mas eu tô aqui tão longe... Tô aqui na Central do Brasil, escrevendo uma carta.",
    source: "Central do Brasil (1998)",
    context: "Dora ditando uma carta para um filho ausente",
  },
  {
    text: "Eu nunca tive pai, nunca tive mãe, nunca tive nada. Mas você tem. Você tem um pai que te ama.",
    source: "Central do Brasil (1998)",
    context: "Dora falando com Josué",
  },
  {
    text: "A vida é como um filme. Só podemos viver uma vez. Mas se a gente viver direito, uma vez é suficiente.",
    source: "Fernanda Montenegro",
    context: "Reflexão sobre a vida",
  },
];

const theaterWorks = [
  { title: "A Moratória", year: "1955", role: "Helena" },
  { title: "O Telescópio", year: "1958", role: "Catarina" },
  { title: "A Falecida", year: "1959", role: "Zulmira" },
  { title: "Boeing Boeing", year: "1964", role: "Procópio" },
  { title: "O Mambembê", year: "1967", role: "Protagonista" },
  { title: "Vestido de Noiva", year: "1991", role: "Lula" },
  { title: "Sonho de uma Noite de Verão", year: "1993", role: "Puck" },
  { title: "Maria Stuart", year: "1997", role: "Maria Stuart" },
  { title: "As Lágrimas Amargas de Petra von Kant", year: "2000", role: "Petra" },
  { title: "DondeEscuro", year: "2008", role: "Protagonista" },
  { title: "Boca de Ouro", year: "2014", role: "Dona Celia" },
  { title: "Últimos Dias de Páscoa", year: "2019", role: "Protagonista" },
];

// ==================== COMPONENTS ====================

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#biografia", label: "Biografia" },
    { href: "#filmes", label: "Filmes" },
    { href: "#falas", label: "Falas" },
    { href: "#teatro", label: "Teatro" },
    { href: "#musica", label: "Música" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cinema-900/95 nav-blur shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#inicio"
          className="font-playfair text-gold-gradient text-xl font-bold tracking-wider"
        >
          FM
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-inter text-xs uppercase tracking-[0.2em] text-cinema-300 hover:text-gold-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gold-400 focus:outline-none"
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cinema-900/98 nav-blur border-t border-gold-800/30 animate-fade-in-down">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-inter text-sm uppercase tracking-[0.15em] text-cinema-300 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-cinema-900" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animation: `starTwinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-title */}
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <span className="font-inter text-xs md:text-sm uppercase tracking-[0.4em] text-gold-400/80">
            Uma Homenagem à
          </span>
        </div>

        {/* Name */}
        <h1
          className={`mt-6 font-playfair font-bold leading-[0.95] transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-5xl md:text-8xl lg:text-9xl text-gold-gradient animate-glow">
            Fernanda
          </span>
          <span className="block text-4xl md:text-7xl lg:text-8xl text-white mt-2 italic font-light">
            Montenegro
          </span>
        </h1>

        {/* Subtitle */}
        <div
          className={`mt-8 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="gold-divider max-w-xs mx-auto mb-6" />
          <p className="font-cormorant text-lg md:text-2xl text-gold-200/90 italic leading-relaxed max-w-2xl mx-auto">
            A maior atriz do Brasil. Uma vida dedicada à arte, ao teatro e ao cinema.
            <br />
            <span className="text-cinema-300 text-base md:text-lg not-italic">
              16 de outubro de 1929 — Para sempre em nossos corações
            </span>
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#biografia"
            className="inline-flex flex-col items-center text-gold-400/60 hover:text-gold-400 transition-colors"
          >
            <span className="font-inter text-[10px] uppercase tracking-[0.3em] mb-3">
              Descubra
            </span>
            <svg
              width="20"
              height="30"
              viewBox="0 0 20 30"
              className="animate-float"
            >
              <rect
                x="1"
                y="1"
                width="18"
                height="28"
                rx="9"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="10" cy="10" r="2" fill="currentColor">
                <animate
                  attributeName="cy"
                  from="10"
                  to="18"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function BiographySection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="biografia" className="relative bg-cinema-900 py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold-500">
            A Trajetória
          </span>
          <h2 className="mt-4 font-playfair text-4xl md:text-6xl text-white font-bold">
            <span className="text-gold-gradient">Biografia</span>
          </h2>
          <div className="gold-divider max-w-[200px] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-600/20 to-velvet-700/20 blur-2xl rounded-lg" />
              <div className="relative overflow-hidden rounded-lg border border-gold-800/30">
                <img
                  src="/images/fernanda-portrait.jpg"
                  alt="Fernanda Montenegro"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-900 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-cormorant text-xl text-gold-200 italic">
                    "A vida não ensina. A vida apenas acontece."
                  </p>
                  <p className="font-inter text-xs text-gold-400/60 mt-2 uppercase tracking-wider">
                    — Fernanda Montenegro
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-6">
              <p className="font-cormorant text-xl md:text-2xl text-gold-100 leading-relaxed">
                <span className="text-gold-gradient font-playfair text-5xl font-bold float-left mr-3 mt-1 leading-none">
                  F
                </span>
                ernanda Montenegro, nascida Arlette Pinheiro Esteves da Silva em
                16 de outubro de 1929, no Rio de Janeiro, é indiscutivelmente a
                maior atriz brasileira de todos os tempos.
              </p>

              <p className="font-inter text-sm md:text-base text-cinema-300 leading-relaxed">
                Sua paixão pela arte dramática começou cedo. Aos 18 anos, já
                frequentava o mundo do teatro amador, e logo se profissionalizou
                no palco. Adotou o nome artístico "Fernanda Montenegro" — um nome
                que se tornaria sinônimo de excelência na interpretação.
              </p>

              <p className="font-inter text-sm md:text-base text-cinema-300 leading-relaxed">
                Casou-se com o também ator Fernando Torres em 1962, com quem teve
                dois filhos: a também atriz Fernanda Torres e o cineasta Cláudio
                Torres. A família se tornou uma verdadeira dinastia artística
                brasileira.
              </p>

              <p className="font-inter text-sm md:text-base text-cinema-300 leading-relaxed">
                Em 1998, estrelou{" "}
                <span className="text-gold-400 font-medium">
                  Central do Brasil
                </span>
                , dirigido por Walter Salles. Sua atuação como Dora, uma professora
                aposentada que escreve cartas na estação Central do Brasil, cativou
                o mundo. Ela se tornou a{" "}
                <span className="text-gold-400 font-medium">
                  primeira e única brasileira indicada ao Oscar de Melhor Atriz
                </span>
                .
              </p>

              <p className="font-inter text-sm md:text-base text-cinema-300 leading-relaxed">
                Com uma carreira que atravessa mais de sete décadas, Fernanda é
                dona de uma filmografia e uma carreira teatral impecáveis. Ganhou
                o Emmy Internacional de Melhor Atriz, inúmeros prêmios em
                festivais internacionais, e é considerada Patrimônio Cultural do
                Brasil.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Oscar Indicada",
                  "Emmy Internacional",
                  "Festival de Berlim",
                  "Festival de Cannes",
                  "Grande Prêmio BR de Cinema",
                  "Kikito de Ouro",
                ].map((award) => (
                  <span
                    key={award}
                    className="px-3 py-1.5 text-[11px] font-inter font-medium uppercase tracking-wider bg-gold-800/20 text-gold-400 border border-gold-800/30 rounded-full"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const { ref, isVisible } = useInView();

  return (
    <section className="relative bg-cinema-800 py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(212,148,26,0.1) 50px, rgba(212,148,26,0.1) 51px)",
          }}
        />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold-500">
            Marcos de uma Vida
          </span>
          <h2 className="mt-4 font-playfair text-4xl md:text-5xl text-white font-bold">
            <span className="text-gold-gradient">Linha do Tempo</span>
          </h2>
          <div className="gold-divider max-w-[200px] mx-auto mt-6" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-600/50 to-transparent" />

          {careerHighlights.map((item, i) => (
            <div
              key={item.year}
              className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Desktop: alternate sides */}
              <div
                className={`hidden md:flex w-full items-center ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-cinema-900/80 border border-gold-800/20 rounded-lg p-6 hover:border-gold-600/40 transition-colors duration-300">
                    <span className="font-playfair text-3xl font-bold text-gold-gradient">
                      {item.year}
                    </span>
                    <h3 className="font-playfair text-lg text-white mt-2 font-semibold">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm text-cinema-300 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-gold-500 border-2 border-gold-300 shadow-lg shadow-gold-600/30 relative z-10" />
                </div>
                <div className="w-5/12" />
              </div>

              {/* Mobile */}
              <div className="md:hidden flex w-full items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-gold-500 border-2 border-gold-300 shadow-lg shadow-gold-600/30 relative z-10" />
                </div>
                <div className="ml-6 bg-cinema-900/80 border border-gold-800/20 rounded-lg p-5 flex-1">
                  <span className="font-playfair text-2xl font-bold text-gold-gradient">
                    {item.year}
                  </span>
                  <h3 className="font-playfair text-base text-white mt-1 font-semibold">
                    {item.title}
                  </h3>
                  <p className="font-inter text-xs text-cinema-300 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilmsSection() {
  const { ref, isVisible } = useInView();
  const [activeFilm, setActiveFilm] = useState(0);

  return (
    <section id="filmes" className="relative bg-cinema-900 py-24 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold-500">
            Cinema Brasileiro
          </span>
          <h2 className="mt-4 font-playfair text-4xl md:text-6xl text-white font-bold">
            <span className="text-gold-gradient">Filmes Icônicos</span>
          </h2>
          <div className="gold-divider max-w-[200px] mx-auto mt-6" />
          <p className="mt-6 font-cormorant text-lg text-gold-200/70 italic max-w-2xl mx-auto">
            Cada personagem, uma vida inteira vivida em poucas horas de tela
          </p>
        </div>

        {/* Film selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {iconicFilms.map((film, i) => (
            <button
              key={film.title}
              onClick={() => setActiveFilm(i)}
              className={`px-4 py-2 rounded-full font-inter text-xs uppercase tracking-wider transition-all duration-300 border ${
                activeFilm === i
                  ? "bg-gold-600 text-white border-gold-500 shadow-lg shadow-gold-700/30"
                  : "bg-cinema-800/50 text-cinema-300 border-gold-800/20 hover:border-gold-600/40 hover:text-gold-400"
              }`}
            >
              {film.title}
            </button>
          ))}
        </div>

        {/* Active film card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-cinema-800/50 border border-gold-800/20 rounded-2xl overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${iconicFilms[activeFilm].color} opacity-10`}
            />
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gold-600/20 text-gold-400 text-xs font-inter font-medium rounded-full border border-gold-600/30">
                      {iconicFilms[activeFilm].year}
                    </span>
                    <span className="font-inter text-xs text-cinema-400 uppercase tracking-wider">
                      Personagem: {iconicFilms[activeFilm].role}
                    </span>
                  </div>
                  <h3 className="font-playfair text-3xl md:text-4xl text-white font-bold">
                    {iconicFilms[activeFilm].title}
                  </h3>
                  <p className="mt-4 font-inter text-sm text-cinema-300 leading-relaxed">
                    {iconicFilms[activeFilm].desc}
                  </p>

                  {/* Award badge */}
                  <div className="mt-6 inline-flex items-center gap-2 bg-velvet-900/50 border border-velvet-700/30 rounded-lg px-4 py-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#d4941a" stroke="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="font-inter text-xs text-gold-300">
                      {iconicFilms[activeFilm].award}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="md:w-[300px] flex-shrink-0">
                  <div className="relative bg-cinema-900/50 border border-gold-800/20 rounded-xl p-6">
                    <span className="absolute -top-4 left-4 font-playfair text-6xl text-gold-500/20 leading-none">
                      "
                    </span>
                    <p className="relative font-cormorant text-lg text-gold-200 italic leading-relaxed pt-4">
                      {iconicFilms[activeFilm].quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuotesSection() {
  const { ref, isVisible } = useInView();
  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % famousQuotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="falas"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/images/theater-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-cinema-900/90" />
      <div ref={ref} className="max-w-4xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold-500">
            Palavras que Ficam
          </span>
          <h2 className="mt-4 font-playfair text-4xl md:text-6xl text-white font-bold">
            <span className="text-gold-gradient">Falas & Frases</span>
          </h2>
          <div className="gold-divider max-w-[200px] mx-auto mt-6" />
        </div>

        {/* Active quote */}
        <div className="relative min-h-[280px] flex items-center justify-center">
          {famousQuotes.map((quote, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                activeQuote === i
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <span className="font-playfair text-[120px] md:text-[180px] text-gold-600/10 leading-none absolute -top-8 md:-top-16">
                "
              </span>
              <blockquote className="font-cormorant text-2xl md:text-4xl text-gold-100 italic text-center leading-relaxed max-w-3xl relative z-10">
                {quote.text}
              </blockquote>
              <div className="mt-8 text-center">
                <span className="font-playfair text-lg text-gold-400">
                  — {quote.source}
                </span>
                <p className="font-inter text-xs text-cinema-400 mt-2 uppercase tracking-wider">
                  {quote.context}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {famousQuotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveQuote(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeQuote === i
                  ? "bg-gold-400 w-8"
                  : "bg-gold-800/50 hover:bg-gold-600/50"
              }`}
              aria-label={`Frase ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TheaterSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="teatro" className="relative bg-cinema-800 py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold-500">
            O Palco é Sua Casa
          </span>
          <h2 className="mt-4 font-playfair text-4xl md:text-6xl text-white font-bold">
            <span className="text-gold-gradient">Obras no Teatro</span>
          </h2>
          <div className="gold-divider max-w-[200px] mx-auto mt-6" />
          <p className="mt-6 font-cormorant text-lg text-gold-200/70 italic max-w-2xl mx-auto">
            "O teatro é minha religião, o palco é minha igreja."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {theaterWorks.map((work, i) => (
            <div
              key={work.title}
              className={`group relative bg-cinema-900/60 border border-gold-800/15 rounded-xl p-6 hover:border-gold-600/40 transition-all duration-500 hover:bg-cinema-900/80 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="absolute top-4 right-4">
                <span className="font-playfair text-3xl font-bold text-gold-800/20 group-hover:text-gold-600/30 transition-colors">
                  {work.year}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="font-playfair text-lg text-white font-semibold group-hover:text-gold-300 transition-colors">
                  {work.title}
                </h3>
                <p className="font-inter text-xs text-gold-500/60 mt-1 uppercase tracking-wider">
                  Personagem: {work.role}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/0 to-transparent group-hover:via-gold-600/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MusicSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="musica" className="relative bg-cinema-900 py-24 md:py-32">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold-500">
            Trilha Sonora
          </span>
          <h2 className="mt-4 font-playfair text-4xl md:text-5xl text-white font-bold">
            <span className="text-gold-gradient">Ouça & Sinta</span>
          </h2>
          <div className="gold-divider max-w-[200px] mx-auto mt-6" />
          <p className="mt-6 font-cormorant text-lg text-gold-200/70 italic max-w-xl mx-auto">
            Música que evoca a emoção, a saudade e a beleza de uma vida dedicada à arte
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-600/5 via-gold-400/10 to-gold-600/5 blur-3xl rounded-2xl" />
            <div className="relative bg-cinema-800/50 border border-gold-800/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold-600/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4941a" strokeWidth="2">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-playfair text-lg text-white">
                    Trilha da Homenagem
                  </h3>
                  <p className="font-inter text-xs text-cinema-400">
                    Ouça enquanto explora esta página
                  </p>
                </div>
              </div>
              <iframe
                src="https://open.spotify.com/embed/track/6hFKP7kl22184msxWDhXLL?utm_source=generator&theme=0"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: "12px" }}
                title="Spotify Track"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegacySection() {
  const { ref, isVisible } = useInView();

  return (
    <section className="relative bg-cinema-900 py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold-500">
            Eternidade
          </span>
          <h2 className="mt-4 font-playfair text-4xl md:text-6xl text-white font-bold">
            <span className="text-gold-gradient">Um Legado Eterno</span>
          </h2>
          <div className="gold-divider max-w-[200px] mx-auto mt-6" />
        </div>

        <div
          className={`mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-cormorant text-2xl md:text-3xl text-gold-100 italic leading-relaxed max-w-3xl mx-auto">
            Fernanda Montenegro não é apenas uma atriz — ela é o próprio teatro
            brasileiro. É a emoção feita arte, a palavra feita carne, o silêncio
            feito poesia.
          </p>

          <p className="mt-8 font-inter text-sm text-cinema-300 leading-relaxed max-w-2xl mx-auto">
            Por mais de sete décadas, ela encantou gerações com sua capacidade de
            transformar cada personagem em uma experiência visceral. Das tábuas
            do teatro às telas do cinema, Fernanda mostrou ao mundo a potência
            da arte brasileira.
          </p>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "70+", label: "Anos de Carreira" },
              { number: "50+", label: "Filmes" },
              { number: "100+", label: "Peças de Teatro" },
              { number: "30+", label: "Prêmios" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-playfair text-4xl md:text-5xl font-bold text-gold-gradient">
                  {stat.number}
                </div>
                <div className="mt-2 font-inter text-xs text-cinema-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final quote */}
        <div
          className={`mt-20 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="gold-divider max-w-[100px] mx-auto mb-8" />
          <blockquote className="font-playfair text-2xl md:text-3xl text-gold-300 italic">
            "O Brasil me deu tudo. E eu tentei dar ao Brasil tudo o que eu tinha."
          </blockquote>
          <p className="mt-6 font-inter text-sm text-gold-500/60 uppercase tracking-[0.2em]">
            — Fernanda Montenegro
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionDivider() {
  return (
    <div className="relative h-24 bg-cinema-900 flex items-center justify-center overflow-hidden">
      <div className="gold-divider w-full max-w-xs" />
      <div className="absolute w-3 h-3 rounded-full bg-gold-500/50 rotate-45 border border-gold-400/30" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-cinema-900 border-t border-gold-800/10 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="font-playfair text-2xl text-gold-gradient font-bold mb-4">
          Fernanda Montenegro
        </div>
        <p className="font-cormorant text-lg text-gold-200/40 italic mb-6">
          1929 — Eternamente
        </p>
        <div className="gold-divider max-w-[100px] mx-auto mb-6" />
        <p className="font-inter text-xs text-cinema-500 leading-relaxed max-w-md mx-auto">
          Este site é uma homenagem não-oficial à maior atriz do Brasil.
          Todo o conteúdo é uma celebração de sua vida e obra.
        </p>
        <p className="mt-6 font-inter text-[10px] text-cinema-600 uppercase tracking-widest">
          Feito com ♥ e admiração
        </p>
      </div>
    </footer>
  );
}

// ==================== MAIN APP ====================

export default function App() {
  return (
    <div className="bg-cinema-900 min-h-screen font-inter text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <BiographySection />
      <TimelineSection />
      <FilmsSection />
      <SectionDivider />
      <QuotesSection />
      <TheaterSection />
      <MusicSection />
      <LegacySection />
      <Footer />
    </div>
  );
}
