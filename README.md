# Opp4System - Landing Page

Landing page institucional da **Opp4System** — empresa especializada em soluções de tecnologia, automação e inteligência artificial.

## Stack

- **Astro** — Framework estático com suporte nativo ao Cloudflare
- **Tailwind CSS** — Design system glassmorphism
- **PostCSS** — Processamento CSS

## Setup

```bash
# Instalar dependências
npm install

# Rodar localmente
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Deploy

### Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy ./dist --project-name=opp4system-lp
```

Ou conecte o repositório GitHub no Cloudflare Dashboard.

## Estrutura

```
src/
├── components/     # 11 componentes da LP
├── layouts/        # Layout principal (SEO)
├── pages/          # Página inicial
└── styles/         # Estilos globais
```

## SEO

- Meta tags Open Graph
- Twitter Card
- Structured Data (JSON-LD)
- Canonical URL
- Semantic HTML

## Documentação

Veja `PROJECT.md` para documentação completa do projeto.

## Repository

GitHub: https://github.com/opp4s/opp4system-lp
