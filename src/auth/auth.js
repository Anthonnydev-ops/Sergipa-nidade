// ─────────────────────────────────────────────
// auth.js — Engine de login
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// DADOS MOCKADOS
// ─────────────────────────────────────────────
const USUARIOS_MOCK = [
  {
    id: 1,
    nome: "Turista Teste",
    email: "turista@teste.com",
    senha: "123456",
    tipo: "TURISTA",
  },
  {
    id: 2,
    nome: "Pousada Sol de Sergipe",
    email: "empresa@teste.com",
    senha: "123456",
    tipo: "EMPRESA",
    cnpj: "12345678000199",
  },
];

// ─────────────────────────────────────────────
// ENGINE DE LOGIN
// Retorna: { success: bool, message: string, usuario?: object }
// ─────────────────────────────────────────────
export function login(email, senha, tipo) {
  if (!email || !senha) {
    return { success: false, message: "Preencha e-mail e senha." };
  }

  const emailNorm = email.trim().toLowerCase();

  const usuario = USUARIOS_MOCK.find(
    (u) =>
      u.email.toLowerCase() === emailNorm &&
      u.senha === senha &&
      u.tipo === tipo
  );

  if (!usuario) {
    return { success: false, message: "E-mail ou senha inválidos." };
  }

  sessionStorage.setItem("usuario_logado", JSON.stringify(usuario));
  return { success: true, message: "Login realizado!", usuario };
}

// ─────────────────────────────────────────────
// HELPERS de sessão
// ─────────────────────────────────────────────
export function getUsuarioLogado() {
  try {
    const dados = sessionStorage.getItem("usuario_logado");
    return dados ? JSON.parse(dados) : null;
  } catch {
    return null;
  }
}

export function logout() {
  sessionStorage.removeItem("usuario_logado");
}