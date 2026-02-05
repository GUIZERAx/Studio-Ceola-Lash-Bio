import { Service } from './types.ts';

export const PROFILE_IMAGE = "https://i.imgur.com/DK0YIQO.jpeg"; 

export const CONTACT_INFO = {
  name: "Studio Ceola Beauty",
  subtitle: "Eluana Ceola | Lash Designer & Educadora",
  whatsapp: "5547997431154",
  address: "Rua Prefeito Raulino João Rosar, n°140, sala 7, Bairro Jardim América, Rio do Sul - SC",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Prefeito+Raulino+João+Rosar,+n°140,+sala+7,+Bairro+Jardim+América",
  instagram: "https://www.instagram.com/ceolalash"
};

export const ABOUT_TEXT = `Especialista em embelezamento do olhar. Lash Designer e Designer de Sobrancelhas, busco perfeição em cada detalhe para entregar um resultado que eleva a autoestima e proporciona uma experiência de cuidado exclusiva no Studio Ceola.`;

export const POLICIES = [
  {
    title: "Agendamento",
    text: "Taxa de agendamento de R$ 50,00 paga antecipadamente via PIX para garantir sua vaga. O valor é descontado no dia do procedimento."
  },
  {
    title: "Tempo de Procedimento",
    text: "Nossos atendimentos levam em média de 30 minutos a 1 hora, garantindo agilidade e perfeição técnica."
  },
  {
    title: "Tolerância e Cancelamento",
    text: "Tolerância de 15 minutos de atraso. Cancelamentos devem ser feitos com no mínimo 24h de antecedência."
  }
];

export const SERVICES: Service[] = [
  {
    id: 'vol-egipcio',
    title: "Volume Egípcio",
    category: 'cilios',
    description: "Técnica que utiliza fios em formato de W para um olhar mais preenchido e com textura única. Proporciona volume e profundidade com leveza. (Duração: 30min a 1h)",
    price: 190,
    image: "https://i.imgur.com/Lmp3GYR.jpeg",
    maintenance: [
      { days: 15, price: 100 },
      { days: 20, price: 135 }
    ]
  },
  {
    id: 'vol-brasileiro',
    title: "Volume Brasileiro",
    category: 'cilios',
    description: "Fios em Y que garantem o queridinho volume clássico com um toque extra de preenchimento. Ideal para o dia a dia. (Duração: 30min a 1h)",
    price: 180,
    image: "https://i.imgur.com/E2tB2d3.jpeg",
    maintenance: [
      { days: 15, price: 135 },
      { days: 20, price: 155 }
    ]
  },
  {
    id: 'wispy',
    title: "Volume Wispy",
    category: 'cilios',
    description: "Efeito Kim K com 'spikes' que criam um visual despojado, irregular e extremamente moderno. O preferido das fashionistas. (Duração: 30min a 1h)",
    price: 210,
    image: "https://i.imgur.com/PG9AbSw.jpeg",
    maintenance: [
      { days: 15, price: 135 },
      { days: 20, price: 155 }
    ]
  },
  {
    id: 'efeito-molhado',
    title: "Efeito Molhado",
    category: 'cilios',
    description: "Visual de rímel fresco ou fios que acabaram de sair da água. Brilho intenso e definição marcante sem pesar no olhar. (Duração: 30min a 1h)",
    price: 210,
    image: "https://i.imgur.com/rHrLEtx.jpeg",
    maintenance: [
      { days: 15, price: 135 },
      { days: 20, price: 155 }
    ]
  },
  {
    id: 'fox-eyes',
    title: "Efeito Fox Eyes",
    category: 'cilios',
    description: "Fios estrategicamente alongados no canto externo para elevar o olhar, criando um efeito delineado gatinho natural. (Duração: 30min a 1h)",
    price: 210,
    image: "https://i.imgur.com/GXEP3n5.jpeg",
    maintenance: [
      { days: 15, price: 135 },
      { days: 20, price: 155 }
    ]
  },
  {
    id: 'design-simple',
    title: "Design de Sobrancelhas",
    category: 'sobrancelhas',
    description: "Mapeamento facial personalizado para encontrar o arqueamento perfeito que valoriza o seu rosto. (Duração: 30min)",
    price: 35,
    image: "https://i.imgur.com/YDFQ3zW.jpeg",
    maintenance: []
  },
  {
    id: 'design-henna',
    title: "Design com Henna",
    category: 'sobrancelhas',
    description: "Design estratégico aliado à coloração com henna para preenchimento de falhas e maior definição do arco. (Duração: 45min a 1h)",
    price: 60,
    image: "https://i.imgur.com/YDFQ3zW.jpeg",
    maintenance: []
  }
];