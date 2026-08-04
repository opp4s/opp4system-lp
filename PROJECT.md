# Opp4System - Landing Page Institucional

## Visão Geral

Landing page moderna e profissional para a **Opp4System**, empresa especializada em soluções de tecnologia, automação e inteligência artificial para empresas.

---

## Stack Tecnológica

| Tecnologia | Versão | Função |
|------------|--------|--------|
| **Astro** | 4.x | Framework estático (suporte nativo Cloudflare) |
| **Tailwind CSS** | 3.x | Design system glassmorphism |
| **PostCSS** | 8.x | Processamento CSS |
| **Autoprefixer** | 10.x | Compatibilidade de navegadores |

### Por que essa stack?

- **Performance**: Build estático = carregamento instantâneo
- **SEO**: Geração estática otimizada para mecanismos de busca
- **Cloudflare**: Suporte nativo para deploy global
- **Manutenção**: Código limpo e fácil de atualizar

---

## Estrutura do Projeto

```
opp4system-lp/
├── src/
│   ├── components/          # Componentes da LP
│   │   ├── Header.astro     # Navegação principal
│   │   ├── Hero.astro       # Seção principal (CTA)
│   │   ├── About.astro      # Quem somos
│   │   ├── Solutions.astro  # Soluções oferecidas
│   │   ├── Benefits.astro   # Benefícios para clientes
│   │   ├── HowItWorks.astro # Como funciona (5 etapas)
│   │   ├── Differentials.astro # Diferenciais
│   │   ├── UseCases.astro   # Casos de uso
│   │   ├── Contact.astro    # Formulário de contato
│   │   ├── FinalCTA.astro   # Chamada final
│   │   └── Footer.astro     # Rodapé
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal (SEO + Meta)
│   ├── pages/
│   │   └── index.astro      # Página inicial
│   └── styles/
│       └── global.css       # Estilos globais + Tailwind
├── public/                   # Assets estáticos
├── astro.config.mjs         # Configuração do Astro
├── tailwind.config.js       # Configuração do Tailwind
├── postcss.config.mjs       # Configuração do PostCSS
├── wrangler.toml            # Configuração Cloudflare
├── package.json             # Dependências
└── README.md                # Documentação
```

---

## Design System

### Cores (Dark Mode Premium)

| Token | Cor | Uso |
|-------|-----|-----|
| `--bg-deep` | `#0a0a0f` | Background principal |
| `--bg-base` | `#050506` | Fundo dos containers |
| `--accent` | `#5E6AD2` | Cor principal (botões, links) |
| `--foreground` | `#EDEDEF` | Texto principal |
| `--muted` | `#8A8F98` | Texto secundário |
| `--border` | `rgba(255,255,255,0.08)` | Bordas sutis |

### Tipografia

| Uso | Fonte | Peso |
|-----|-------|------|
| **Headings** | Poppins | 600-700 |
| **Body** | Open Sans | 400-500 |

### Efeitos Glassmorphism

```css
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

---

## SEO

### Meta Tags Incluídas

- ✅ Title otimizado
- ✅ Meta description
- ✅ Keywords relevantes
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Card
- ✅ Canonical URL
- ✅ Robots directives
- ✅ Structured Data (JSON-LD)
- ✅ Semantic HTML

### Keywords Principais

- Inteligência Artificial
- Automação Empresarial
- Desenvolvimento de Sistemas
- Integração de Sistemas
- Automação de Processos
- Chatbots
- CRM
- APIs
- Tecnologia para Empresas
- Transformação Digital

---

## Deploy

### Cloudflare Pages

**URL**: https://opp4system-lp.pages.dev/

**Configuração**:
- Branch: `main`
- Build command: `npm run build`
- Output directory: `dist`

### Deploy Manual

```bash
# Instalar dependências
npm install

# Build
npm run build

# Deploy
npx wrangler pages deploy ./dist --project-name=opp4system-lp
```

### GitHub Repository

**URL**: https://github.com/opp4s/opp4system-lp

---

## Componentes

### Header
- Logo com ícone de raio
- Navegação desktop e mobile
- Menu hamburger responsivo
- Efeito de blur no scroll

### Hero
- Título impactante com gradiente
- Subtítulo explicativo
- CTAs (Solicitar Demonstração, Ver Soluções)
- Estatísticas (98%, 3x, 100%)
- Cards flutuantes com animação

### About
- Apresentação institucional
- 4 valores da empresa
- Cards com ícones

### Solutions
- 8 soluções detalhadas
- Ícones e listas de features
- Grid responsivo 4 colunas

### Benefits
- 8 benefícios com métricas
- Cards com valores quantificados

### How It Works
- 5 etapas do processo
- Linha de conexão (desktop)
- Ícones ilustrativos

### Differentials
- 8 diferenciais da empresa
- Cards com hover effect

### Use Cases
- 10 casos de uso
- Grid responsivo 5 colunas

### Contact
- Formulário completo
- Campos: Nome, Empresa, E-mail, WhatsApp, Desafio
- Validação e feedback visual

### FinalCTA
- Chamada para ação
- Botões WhatsApp e Formulário

### Footer
- Logo e descrição
- Links de soluções
- Informações de contato
- Copyright

---

## Personalização

### Alterar Cores

Edite `tailwind.config.js`:

```js
colors: {
  brand: {
    accent: '#5E6AD2', // Cor principal
    foreground: '#EDEDEF', // Cor do texto
    // ...
  }
}
```

### Alterar Conteúdo

Edite os componentes em `src/components/`:
- `Hero.astro` - Título e CTAs principais
- `Solutions.astro` - Lista de soluções
- `Benefits.astro` - Lista de benefícios
- `Contact.astro` - Formulário

### Alterar Contato

No `FinalCTA.astro`, atualize o WhatsApp:

```astro
<a href="https://wa.me/55SEUNUMERO" ...>
```

No `Contact.astro`, atualize o endpoint do formulário.

---

## Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Deploy no Cloudflare
npx wrangler pages deploy ./dist --project-name=opp4system-lp
```

---

## Performance

- 🚀 **Static Generation** — Página gerada estaticamente
- 🚀 **Tailwind CSS** — CSS otimizado e mínimo (22KB)
- 🚀 **Imagens otimizadas** — Formatos modernos (WebP/AVIF)
- 🚀 **CDN global** — Cloudflare Pages distribui globalmente
- 🚀 **Lazy loading** — Componentes sob demanda

---

## Navegação do Projeto

| Arquivo | Descrição |
|---------|-----------|
| `README.md` | Esta documentação |
| `src/components/*.astro` | Componentes da LP |
| `src/styles/global.css` | Estilos globais |
| `tailwind.config.js` | Configuração do design system |
| `astro.config.mjs` | Configuração do Astro |
| `wrangler.toml` | Configuração Cloudflare |

---

## Contato

**Opp4System**
- Website: https://opp4system.com.br
- Email: contato@opp4system.com.br

---

## Próximos Passos

### 1. Ajustar Links de Conexão para Lead
- [ ] Configurar formulário para enviar dados (endpoint ou serviço)
- [ ] Adicionar link direto do WhatsApp com mensagem pré-definida
- [ ] Configurar redirecionamento após envio do formulário
- [ ] Testar todos os CTAs (Solicitar Demonstração, Falar com Especialista)
- [ ] Adicionar tracking de conversão (Google Analytics, Pixel)

### 2. Modo Claro (Light Mode)
- [ ] Inverter paleta de cores para fundo claro
- [ ] Ajustar contraste de texto para fundo branco
- [ ] Manter accent color (#5E6AD2) para botões e links
- [ ] Atualizar glassmorphism para modo claro (mais sutil)
- [ ] Testar acessibilidade (contraste 4.5:1 mínimo)
- [ ] Adicionar toggle dark/light mode (futuro)

### 3. Tornar a Página Mais Atrativa
- [ ] Adicionar imagens reais (ilustrações ou fotos)
- [ ] Criar animações de scroll mais elaboradas
- [ ] Adicionar depoimentos de clientes
- [ ] Incluir seção de cases de sucesso com resultados
- [ ] Adicionar contador de animação nas estatísticas
- [ ] Melhorar micro-interações nos botões e cards
- [ ] Adicionar gradientes mais vibrantes
- [ ] Incluir vídeo de apresentação (futuro)

### 4. Funcionalidades Adicionais
- [ ] Integrar com CRM (envio automático de leads)
- [ ] Adicionar chat widget (WhatsApp ou chat interno)
- [ ] Criar versão em Português e Inglês
- [ ] Adicionar blog para SEO
- [ ] Configurar analytics completo

---

## Changelog

| Data | Alteração |
|------|-----------|
| 04/08/2026 | Deploy inicial no Cloudflare Pages |
| 04/08/2026 | Correção do Tailwind CSS (PostCSS) |
| 04/08/2026 | Documentação completa do projeto |

---

## Licença

Propriedade da Opp4System. Todos os direitos reservados.
