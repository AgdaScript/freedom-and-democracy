export interface Evento {
  id: string;
  ano: string;
  titulo: string;
  descricao: string;
  descricaoCompleta: string;
  imagem: string;
  lado: "esquerda" | "direita"; // Lado do card na timeline
}

export const eventos: Evento[] = [
  {
    id: "independencia-1975",
    ano: "1975",
    titulo: "Independência de Cabo Verde",
    descricao: "Cabo Verde conquista a independência de Portugal em 5 de julho, estabelecendo-se como uma república unipartidária sob o Partido Africano da Independência de Cabo Verde (PAICV).",
    descricaoCompleta: "Em 5 de julho de 1975, Cabo Verde conquistou sua independência de Portugal após séculos de colonização. Este momento histórico marcou o início de uma nova era para o arquipélago, estabelecendo-se como uma república soberana. O Partido Africano da Independência de Cabo Verde (PAICV) assumiu o poder, liderando o país em um regime unipartidário. A independência foi resultado de uma luta pacífica, diferente de muitos outros países africanos, e foi reconhecida internacionalmente. Este evento fundamental estabeleceu as bases para o futuro desenvolvimento democrático do país.",
    imagem: "/img/hand-1.png",
    lado: "esquerda",
  },
  {
    id: "transicao-democratica-1990",
    ano: "1990",
    titulo: "Início da Transição Democrática",
    descricao: "Início do processo de abertura política e transição para um sistema multipartidário, com a aprovação da nova Constituição que estabelece o regime democrático.",
    descricaoCompleta: "O ano de 1990 marcou o início de uma transformação política fundamental em Cabo Verde. Após 15 anos de regime unipartidário, o país iniciou um processo de abertura política que culminaria na transição para a democracia. Este período foi caracterizado por debates intensos sobre o futuro político do país, com a sociedade civil e grupos políticos pressionando por reformas. A aprovação da nova Constituição estabeleceu as bases para um regime democrático multipartidário, garantindo direitos fundamentais, liberdade de expressão e o direito ao voto. Esta transição foi pacífica e negociada, demonstrando a maturidade política do povo cabo-verdiano.",
    imagem: "/img/hand-2.png",
    lado: "direita",
  },
  {
    id: "primeiras-eleicoes-1991",
    ano: "1991",
    titulo: "Primeiras Eleições Multipartidárias",
    descricao: "Realização das primeiras eleições livres e democráticas, marcando o fim do regime unipartidário. O Movimento para a Democracia (MpD) vence as eleições legislativas e presidenciais.",
    descricaoCompleta: "As primeiras eleições multipartidárias de Cabo Verde, realizadas em 1991, representaram um marco histórico na consolidação democrática do país. Pela primeira vez desde a independência, os cabo-verdianos puderam escolher livremente seus representantes em um processo eleitoral pluralista. O Movimento para a Democracia (MpD), liderado por Carlos Veiga, venceu tanto as eleições legislativas quanto as presidenciais, onde António Mascarenhas Monteiro foi eleito presidente. Esta alternância pacífica de poder demonstrou que Cabo Verde estava consolidando suas instituições democráticas e estabelecendo uma tradição de respeito pelos resultados eleitorais.",
    imagem: "/img/hand-3.png",
    lado: "esquerda",
  },
  {
    id: "nova-constituicao-1992",
    ano: "1992",
    titulo: "Nova Constituição Democrática",
    descricao: "Promulgação da nova Constituição que consolida o regime democrático, estabelecendo a separação de poderes, direitos fundamentais e o sistema multipartidário.",
    descricaoCompleta: "A promulgação da nova Constituição em 1992 consolidou definitivamente o regime democrático em Cabo Verde. Este documento fundamental estabeleceu a separação de poderes entre Executivo, Legislativo e Judiciário, garantindo a independência de cada um. A Constituição também consagrou direitos fundamentais como liberdade de expressão, liberdade de imprensa, direito de reunião e associação, e o direito ao voto universal. O sistema multipartidário foi formalmente estabelecido, permitindo a existência de múltiplos partidos políticos e garantindo eleições livres e justas. Esta Constituição continua sendo a base do sistema político cabo-verdiano, sendo considerada uma das mais progressistas de África.",
    imagem: "/img/hand-4.png",
    lado: "direita",
  },
  {
    id: "alternancia-poder-2001",
    ano: "2001",
    titulo: "Alternância de Poder",
    descricao: "O PAICV retorna ao poder após vencer as eleições, demonstrando a consolidação da alternância democrática e a maturidade do sistema político cabo-verdiano.",
    descricaoCompleta: "O ano de 2001 testemunhou uma segunda alternância pacífica de poder em Cabo Verde, quando o PAICV retornou ao governo após vencer as eleições. Pedro Pires foi eleito presidente da República, enquanto o PAICV conquistou a maioria no parlamento. Este evento foi crucial para demonstrar a maturidade e estabilidade do sistema democrático cabo-verdiano. A transição foi completamente pacífica, sem contestação ou violência, reforçando a confiança nas instituições democráticas. Esta alternância mostrou que o país havia consolidado uma cultura política baseada no respeito pelos resultados eleitorais e na aceitação da derrota política.",
    imagem: "/img/hand-5.png",
    lado: "esquerda",
  },
  {
    id: "reconhecimento-internacional-2011",
    ano: "2011",
    titulo: "Reconhecimento Internacional",
    descricao: "Cabo Verde é reconhecido como um dos países mais democráticos de África, com eleições regulares e pacíficas, e uma forte tradição de respeito pelos direitos humanos.",
    descricaoCompleta: "Em 2011, Cabo Verde recebeu reconhecimento internacional como um dos países mais democráticos e estáveis de África. Organizações internacionais como Freedom House, The Economist e o Índice de Democracia classificaram o país como uma democracia plena ou quase plena. Este reconhecimento foi baseado em vários fatores: eleições regulares, livres e justas; respeito pelos direitos humanos; liberdade de imprensa; independência do poder judiciário; e transparência nas instituições públicas. O país também se destacou pela ausência de conflitos políticos, corrupção relativamente baixa e forte participação cívica. Este reconhecimento consolidou a reputação de Cabo Verde como um modelo de democracia no continente africano.",
    imagem: "/img/hand-1.png",
    lado: "direita",
  },
  {
    id: "consolidacao-democratica-2016",
    ano: "2016",
    titulo: "Consolidação Democrática",
    descricao: "O MpD retorna ao poder através de eleições democráticas, reforçando o padrão de alternância pacífica de poder que caracteriza a democracia cabo-verdiana.",
    descricaoCompleta: "As eleições de 2016 marcaram mais uma alternância pacífica de poder em Cabo Verde, quando o Movimento para a Democracia (MpD) retornou ao governo. Jorge Carlos Fonseca foi reeleito presidente, enquanto o MpD conquistou a maioria parlamentar. Esta eleição demonstrou a continuidade do padrão democrático estabelecido no país, com transições de poder sempre pacíficas e respeitosas. O processo eleitoral foi amplamente observado e considerado livre e justo por observadores internacionais. Esta consolidação democrática reforçou a confiança dos cabo-verdianos e da comunidade internacional no sistema político do país, estabelecendo Cabo Verde como uma referência de estabilidade democrática em África.",
    imagem: "/img/hand-2.png",
    lado: "esquerda",
  },
  {
    id: "eleicoes-presidenciais-2021",
    ano: "2021",
    titulo: "Eleições Presidenciais",
    descricao: "Realização de eleições presidenciais livres e justas, com José Maria Neves sendo eleito Presidente da República, continuando a tradição democrática do país.",
    descricaoCompleta: "As eleições presidenciais de 2021 representaram mais um capítulo na história democrática de Cabo Verde. José Maria Neves, do PAICV, foi eleito presidente da República em um processo eleitoral caracterizado por transparência e participação cívica. A eleição foi marcada por debates públicos robustos, cobertura midiática livre e alta participação eleitoral. A transição de poder foi novamente pacífica, com o presidente anterior, Jorge Carlos Fonseca, transferindo o cargo de forma ordenada e respeitosa. Esta eleição reforçou a tradição de alternância democrática e demonstrou a maturidade das instituições políticas cabo-verdianas, mantendo o país como um exemplo de democracia funcional no continente africano.",
    imagem: "/img/hand-3.png",
    lado: "direita",
  },
  {
    id: "democracia-consolidada-2024",
    ano: "2024",
    titulo: "Democracia Consolidada",
    descricao: "Cabo Verde mantém-se como referência democrática em África, com instituições sólidas, eleições regulares e um sistema político estável e transparente.",
    descricaoCompleta: "Em 2024, Cabo Verde continua sendo uma referência democrática em África, com quase 50 anos de independência e mais de 30 anos de democracia multipartidária. O país mantém instituições sólidas e independentes, eleições regulares e transparentes, e um sistema político caracterizado pela alternância pacífica de poder. A sociedade cabo-verdiana desfruta de liberdades fundamentais, incluindo liberdade de expressão, imprensa livre e participação política ativa. O sistema judiciário é independente e respeitado, e a transparência nas instituições públicas é uma prioridade. Esta consolidação democrática posiciona Cabo Verde como um modelo para outros países africanos e demonstra que a democracia pode florescer e se manter estável no continente.",
    imagem: "/img/hand-4.png",
    lado: "esquerda",
  },
];

export function getEventoById(id: string): Evento | undefined {
  return eventos.find((evento) => evento.id === id);
}

