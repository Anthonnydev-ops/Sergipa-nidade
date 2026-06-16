// DADOS MOCKADOS - SERGIPANIDADE - TURISTA

// 1. USUÁRIO DE TESTE DO TURISTA
const usuarioTeste = {
  nome: "Usuário Teste",
  email: "teste@sergipanidade.com",
  senha: "123456"
};

// 2. ESTABELECIMENTOS (12 no total)
const estabelecimentos = [
  // ===== HOTÉIS (3) =====
  {
    id: 1,
    nome: "Hotel Jatiúca",
    nome_en: "Jatiuca Hotel",
    nome_es: "Hotel Jatiúca",
    tipo: "hotel",
    descricao: "Hotel luxuoso com vista para o mar",
    descricao_en: "Luxury hotel with ocean view",
    descricao_es: "Hotel de lujo con vista al mar",
    descricaoExpandida: "Este estabelecimento oferece acomodações confortáveis com excelente localização e serviços de qualidade. Perfeito para viagens de negócios ou lazer.",
    descricaoExpandida_en: "This establishment offers comfortable accommodations with excellent location and quality services. Perfect for business or leisure travel.",
    descricaoExpandida_es: "Este establecimiento ofrece alojamientos confortables con una excelente ubicación y servicios de calidad. Perfecto para viajes de negocios o de placer.",
    imagem: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    endereco: "Av. Santos Dumont, 1234 - Atalaia, Aracaju - SE",
    localizacao: { 
      lat: -10.9827, 
      lng: -37.0500 
    },
    avaliacao: 4.8,
    telefone: "(79) 3211-1234",
    horario: "Check-in: 14h | Check-out: 12h",
    website: "www.hoteljatiúca.com.br",
    comodidades: [
      "Wi-Fi Gratuito",
      "Estacionamento",
      "Café da Manhã",
      "Ar Condicionado"
    ]
  },
  {
    id: 2,
    nome: "Pousada Praia do Saco",
    nome_en: "Praia do Saco Inn",
    nome_es: "Posada Praia do Saco",
    tipo: "hotel",
    descricao: "Pousada aconchegante na Praia do Saco",
    descricao_en: "Cozy inn at Praia do Saco",
    descricao_es: "Posada acogedora en Praia do Saco",
    descricaoExpandida: "Este estabelecimento oferece acomodações confortáveis com excelente localização e serviços de qualidade. Perfeito para viagens de negócios ou lazer.",
    descricaoExpandida_en: "This establishment offers comfortable accommodations with excellent location and quality services. Perfect for business or leisure travel.",
    descricaoExpandida_es: "Este establecimiento ofrece alojamientos confortables con una excelente ubicación y servicios de calidad. Perfecto para viajes de negocios o de placer.",
    imagem: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    endereco: "Estância - SE",
    localizacao: { 
      lat: -11.2659, 
      lng: -37.4407 
    },
    avaliacao: 4.5,
    telefone: "(79) 3522-5678",
    horario: "Check-in: 15h | Check-out: 11h",
    website: "www.pousadapraiadosaco.com.br",
    comodidades: [
      "Wi-Fi Gratuito",
      "Estacionamento",
      "Café da Manhã",
      "Ar Condicionado"
    ]
  },
  {
    id: 3,
    nome: "Hotel Celi",
    nome_en: "Celi Hotel",
    nome_es: "Hotel Celi",
    tipo: "hotel",
    descricao: "Hotel econômico no centro de Aracaju",
    descricao_en: "Budget hotel in downtown Aracaju",
    descricao_es: "Hotel económico en el centro de Aracaju",
    descricaoExpandida: "Este estabelecimento oferece acomodações confortáveis com excelente localização e serviços de qualidade. Perfeito para viagens de negócios ou lazer.",
    descricaoExpandida_en: "This establishment offers comfortable accommodations with excellent location and quality services. Perfect for business or leisure travel.",
    descricaoExpandida_es: "Este establecimiento ofrece alojamientos confortables con una excelente ubicación y servicios de calidad. Perfecto para viajes de negocios o de placer.",
    imagem: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    endereco: "Rua São Cristóvão, 456 - Centro, Aracaju - SE",
    localizacao: { 
      lat: -10.9095, 
      lng: -37.0622 
    },
    avaliacao: 4.2,
    telefone: "(79) 3211-9876",
    horario: "24 horas",
    website: "www.hotelceli.com.br",
    comodidades: [
      "Wi-Fi Gratuito",
      "Estacionamento",
      "Café da Manhã",
      "Ar Condicionado"
    ]
  },
  
  // ===== RESTAURANTES (3) =====
  {
    id: 4,
    nome: "Cariri Restaurante",
    nome_en: "Cariri Restaurant",
    nome_es: "Restaurante Cariri",
    tipo: "restaurante",
    descricao: "Culinária sergipana autêntica",
    descricao_en: "Authentic Sergipana cuisine",
    descricao_es: "Culinaria auténtica de Sergipe",
    descricaoExpandida: "Nossa culinária valoriza ingredientes frescos e regionais, proporcionando uma experiência gastronômica autêntica. Ambiente acolhedor e atendimento diferenciado.",
    descricaoExpandida_en: "Our cuisine values fresh and regional ingredients, providing an authentic gastronomic experience. Cozy atmosphere and differentiated service.",
    descricaoExpandida_es: "Nuestra cocina valora los ingredientes frescos y regionales, proporcionando una experiencia gastronómica auténtica. Ambiente acogedor y servicio diferenciado.",
    imagem: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    endereco: "Av. Beira Mar, 789 - Atalaia, Aracaju - SE",
    localizacao: { 
      lat: -10.9885, 
      lng: -37.0452 
    },
    avaliacao: 4.7,
    telefone: "(79) 3243-4567",
    horario: "11h - 23h",
    website: "www.caririrestaurante.com.br",
    faixaPreco: "R$ 50 - R$ 150 (por pessoa)",
    comodidades: [
      "Ar Condicionado",
      "Estacionamento",
      "Wi-Fi",
      "Acessível"
    ]
  },
  {
    id: 5,
    nome: "Casa de Maria",
    nome_en: "Maria's House",
    nome_es: "Casa de Maria",
    tipo: "restaurante",
    descricao: "Frutos do mar e pratos regionais",
    descricao_en: "Seafood and regional dishes",
    descricao_es: "Mariscos y platos regionales",
    descricaoExpandida: "Nossa culinária valoriza ingredientes frescos e regionais, proporcionando uma experiência gastronômica autêntica. Ambiente acolhedor e atendimento diferenciado.",
    descricaoExpandida_en: "Our cuisine values fresh and regional ingredients, providing an authentic gastronomic experience. Cozy atmosphere and differentiated service.",
    descricaoExpandida_es: "Nuestra cocina valora los ingredientes frescos y regionales, proporcionando una experiencia gastronómica auténtica. Ambiente acogedor y servicio diferenciado.",
    imagem: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
    endereco: "Av. Oceânica, 321 - Atalaia, Aracaju - SE",
    localizacao: { 
      lat: -10.9820, 
      lng: -37.0510 
    },
    avaliacao: 4.6,
    telefone: "(79) 3243-7890",
    horario: "12h - 22h",
    website: "www.casademaria.com.br",
    faixaPreco: "R$ 50 - R$ 150 (por pessoa)",
    comodidades: [
      "Ar Condicionado",
      "Estacionamento",
      "Wi-Fi",
      "Acessível"
    ]
  },
  {
    id: 6,
    nome: "Mangai Sergipe",
    nome_en: "Mangai Sergipe",
    nome_es: "Mangai Sergipe",
    tipo: "restaurante",
    descricao: "Buffet de comida nordestina",
    descricao_en: "Northeastern food buffet",
    descricao_es: "Buffet de comida del noreste",
    descricaoExpandida: "Nossa culinária valoriza ingredientes frescos e regionais, proporcionando uma experiência gastronômica autêntica. Ambiente acolhedor e atendimento diferenciado.",
    descricaoExpandida_en: "Our cuisine values fresh and regional ingredients, providing an authentic gastronomic experience. Cozy atmosphere and differentiated service.",
    descricaoExpandida_es: "Nuestra cocina valora los ingredientes frescos y regionales, proporcionando una experiencia gastronómica auténtica. Ambiente acogedor y servicio diferenciado.",
    imagem: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
    endereco: "Av. Delmiro Gouveia, 400 - Coroa do Meio, Aracaju - SE",
    localizacao: { 
      lat: -10.9572, 
      lng: -37.0531 
    },
    avaliacao: 4.9,
    telefone: "(79) 3214-5678",
    horario: "11h30 - 15h30 | 18h30 - 22h30",
    website: "www.mangaisergipe.com.br",
    faixaPreco: "R$ 50 - R$ 150 (por pessoa)",
    comodidades: [
      "Ar Condicionado",
      "Estacionamento",
      "Wi-Fi",
      "Acessível"
    ]
  },
  
  // ===== SHOPPINGS (2) =====
  {
    id: 7,
    nome: "Shopping Riomar Aracaju",
    nome_en: "Riomar Aracaju Mall",
    nome_es: "Centro Comercial Riomar Aracaju",
    tipo: "shopping",
    descricao: "Maior shopping center de Sergipe",
    descricao_en: "Largest shopping mall in Sergipe",
    descricao_es: "Centro comercial más grande de Sergipe",
    descricaoExpandida: "Centro comercial completo com diversas opções de compras, alimentação e entretenimento. Estacionamento amplo e segurança 24 horas.",
    descricaoExpandida_en: "Full commercial center with various shopping, dining, and entertainment options. Ample parking and 24-hour security.",
    descricaoExpandida_es: "Centro comercial completo con diversas opciones de compras, comida y entretenimiento. Amplio estacionamiento y seguridad las 24 horas.",
    imagem: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800",
    endereco: "Av. Delmiro Gouveia, 400 - Coroa do Meio, Aracaju - SE",
    localizacao: { 
      lat: -10.9560, 
      lng: -37.0535 
    },
    avaliacao: 4.8,
    telefone: "(79) 3302-9000",
    horario: "10h - 22h",
    website: "www.shoppingriomararacaju.com.br",
    comodidades: [
      "Estacionamento",
      "Praça de Alimentação",
      "Cinema",
      "Segurança 24h"
    ]
  },
  {
    id: 8,
    nome: "Jardins Shopping",
    nome_en: "Jardins Mall",
    nome_es: "Centro Comercial Jardins",
    tipo: "shopping",
    descricao: "Shopping completo com cinema e praça de alimentação",
    descricao_en: "Complete mall with cinema and food court",
    descricao_es: "Centro comercial completo con cine y patio de comidas",
    descricaoExpandida: "Centro comercial completo com diversas opções de compras, alimentação e entretenimento. Estacionamento amplo e segurança 24 horas.",
    descricaoExpandida_en: "Full commercial center with various shopping, dining, and entertainment options. Ample parking and 24-hour security.",
    descricaoExpandida_es: "Centro comercial completo con diversas opciones de compras, comida y entretenimiento. Amplio estacionamiento y seguridad las 24 horas.",
    imagem: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800",
    endereco: "Av. Min. Geraldo Barreto Sobral, 215 - Jardins, Aracaju - SE",
    localizacao: { 
      lat: -10.9390, 
      lng: -37.0583 
    },
    avaliacao: 4.6,
    telefone: "(79) 3217-7000",
    horario: "10h - 22h",
    website: "www.jardinsshopping.com.br",
    comodidades: [
      "Estacionamento",
      "Praça de Alimentação",
      "Cinema",
      "Segurança 24h"
    ]
  },
  
  // ===== OUTROS (4) =====
  {
    id: 9,
    nome: "Oceanário de Aracaju",
    nome_en: "Aracaju Oceanarium",
    nome_es: "Oceanário de Aracaju",
    tipo: "outro",
    descricao: "Aquário com espécies marinhas regionais",
    descricao_en: "Aquarium with regional marine species",
    descricao_es: "Acuario con especies marinas regionales",
    descricaoExpandida: "Um dos pontos mais visitados da região, oferecendo experiências únicas e memoráveis para toda a família.",
    descricaoExpandida_en: "One of the most visited spots in the region, offering unique and memorable experiences for the whole family.",
    descricaoExpandida_es: "Uno de los puntos más visitados de la región, ofreciendo experiencias únicas y memorables para toda la familia.",
    imagem: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    endereco: "Av. Santos Dumont, s/n - Atalaia, Aracaju - SE",
    localizacao: { 
      lat: -10.9840, 
      lng: -37.0480 
    },
    avaliacao: 4.7,
    telefone: "(79) 3179-1959",
    horario: "9h - 18h (Ter a Dom)",
    website: "www.oceanariodearacaju.com.br",
    comodidades: [
      "Guias Turísticos",
      "Estacionamento",
      "Acessível"
    ]
  },
  {
    id: 10,
    nome: "Mercado Municipal de Aracaju",
    nome_en: "Aracaju Municipal Market",
    nome_es: "Mercado Municipal de Aracaju",
    tipo: "outro",
    descricao: "Mercado tradicional com artesanato e produtos locais",
    descricao_en: "Traditional market with crafts and local products",
    descricao_es: "Mercado tradicional con artesanía y productos locales",
    descricaoExpandida: "Um dos pontos mais visitados da região, oferecendo experiências únicas e memoráveis para toda a família.",
    descricaoExpandida_en: "One of the most visited spots in the region, offering unique and memorable experiences for the whole family.",
    descricaoExpandida_es: "Uno de los puntos más visitados de la región, ofreciendo experiencias únicas y memorables para toda la familia.",
    imagem: "https://images.unsplash.com/photo-1555529902-5261145633bf?w=800",
    endereco: "Av. Barão de Maruim - Centro, Aracaju - SE",
    localizacao: { 
      lat: -10.9116, 
      lng: -37.0656 
    },
    avaliacao: 4.3,
    telefone: "(79) 3179-1800",
    horario: "6h - 18h",
    website: "www.mercadomunicipaldearacaju.com.br",
    comodidades: [
      "Guias Turísticos",
      "Estacionamento",
      "Acessível"
    ]
  },
  {
    id: 11,
    nome: "Passarela do Caranguejo",
    nome_en: "Crab Walkway",
    nome_es: "Passarela do Caranguejo",
    tipo: "outro",
    descricao: "Área gastronômica famosa pelos caranguejos",
    descricao_en: "Gastronomic area famous for crabs",
    descricao_es: "Área gastronómica famosa por los cangrejos",
    descricaoExpandida: "Um dos pontos mais visitados da região, oferecendo experiências únicas e memoráveis para toda a família.",
    descricaoExpandida_en: "One of the most visited spots in the region, offering unique and memorable experiences for the whole family.",
    descricaoExpandida_es: "Uno de los puntos más visitados de la región, ofreciendo experiencias únicas y memorables para toda la familia.",
    imagem: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    endereco: "Av. Rotary - Coroa do Meio, Aracaju - SE",
    localizacao: { 
      lat: -10.9695, 
      lng: -37.0421 
    },
    avaliacao: 4.8,
    telefone: "-",
    horario: "17h - 00h",
    website: "www.passareladocaranguejo.com.br",
    comodidades: [
      "Guias Turísticos",
      "Estacionamento",
      "Acessível"
    ]
  },
  {
    id: 12,
    nome: "Crôa do Goré",
    nome_en: "Croa do Gore",
    nome_es: "Crôa do Goré",
    tipo: "outro",
    descricao: "Ilha fluvial perfeita para passeios de barco",
    descricao_en: "River island perfect for boat trips",
    descricao_es: "Isla fluvial perfecta para paseos en barco",
    descricaoExpandida: "Um dos pontos mais visitados da região, oferecendo experiências únicas e memoráveis para toda a família.",
    descricaoExpandida_en: "One of the most visited spots in the region, offering unique and memorable experiences for the whole family.",
    descricaoExpandida_es: "Uno de los puntos más visitados de la región, ofreciendo experiencias únicas y memorables para toda la familia.",
    imagem: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    endereco: "Rio Vaza-Barris, Aracaju - SE",
    localizacao: { 
      lat: -10.8800, 
      lng: -37.0300 
    },
    avaliacao: 4.9,
    telefone: "-",
    horario: "Passeios pela manhã",
    website: "www.croadogore.com.br",
    comodidades: [
      "Guias Turísticos",
      "Estacionamento",
      "Acessível"
    ]
  }
];

// 3. PALETA DE CORES DO SISTEMA
const paletaCores = {
  ciano: "#489bb0",
  amarelo: "#DCB069",
  laranja: "#D37E45",
  bege: "#F5F5F0"
};

// 4. EXPORTAR TUDO
export {
  usuarioTeste,
  estabelecimentos,
  paletaCores
};

// ============================================
// EXEMPLOS DE USO
// ============================================

// Filtrar por tipo
const hoteis = estabelecimentos.filter(e => e.tipo === "hotel");
const restaurantes = estabelecimentos.filter(e => e.tipo === "restaurante");
const shoppings = estabelecimentos.filter(e => e.tipo === "shopping");
const outros = estabelecimentos.filter(e => e.tipo === "outro");

// Buscar por ID
const estabelecimento = estabelecimentos.find(e => e.id === 1);

// Ordenar por avaliação
const melhoresAvaliacoes = [...estabelecimentos].sort((a, b) => b.avaliacao - a.avaliacao);

// Buscar por nome
const buscarPorNome = (termo) => {
  return estabelecimentos.filter(e => 
    e.nome.toLowerCase().includes(termo.toLowerCase()) ||
    e.descricao.toLowerCase().includes(termo.toLowerCase())
  );
};