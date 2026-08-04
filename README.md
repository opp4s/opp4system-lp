# Opp4System Landing Page

Landing page institucional da Opp4System desenvolvida com **Astro + Tailwind CSS** para máxima performance e SEO.

## Stack

- **Astro** — Framework estático com suporte nativo ao Cloudflare
- **Tailwind CSS** — Utilitários para design glassmorphism
- **CSS Animations** — Animações fluidas e performáticas

## Estrutura do Projeto

```
opp4system-lp/
├── src/
│   ├── components/     # Componentes da LP
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Solutions.astro
│   │   ├── Benefits.astro
│   │   ├── HowItWorks.astro
│   │   ├── Differentials.astro
│   │   ├── UseCases.astro
│   │   ├── Contact.astro
│   │   ├── FinalCTA.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
├── public/             # Assets estáticos
├── astro.config.mjs
├── tailwind.config.mjs
└── wrangler.toml       # Configuração Cloudflare
```

## Setup

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar localmente

```bash
npm run dev
```

Acesse: `http://localhost:4321`

### 3. Build para produção

```bash
npm run build
```

### 4. Preview do build

```bash
npm run preview
```

## Deploy no Cloudflare Pages

### Opção 1: Deploy manual (Wrangler)

```bash
# Instalar Wrangler globalmente
npm install -g wrangler

# Login no Cloudflare
wrangler login

# Deploy
npm run build
npx wrangler pages deploy ./dist --project-name=opp4system-lp
```

### Opção 2: Git Integration (Recomendado)

1. Acesse o [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Vá em **Workers & Pages** → **Create** → **Connect to Git**
3. Selecione o repositório
4. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `18` (ou superior)
5. Clique em **Save and Deploy**

### Configurar domínio personalizado

1. No dashboard do Cloudflare Pages, vá em **Custom domains**
2. Adicione `opp4system.com`
3. Siga as instruções para configurar DNS

## SEO

A página já inclui:

- ✅ Meta tags Open Graph
- ✅ Meta tags Twitter Card
- ✅ Structured Data (JSON-LD)
- ✅ Canonical URL
- ✅ Sitemap (adicione `/sitemap.xml`)
- ✅ robots.txt
- ✅ Semantic HTML
- ✅ Fast loading (static generation)

## Performance

- 🚀 **Static Generation** — Página gerada estaticamente
- 🚀 **Tailwind CSS** — CSS otimizado e mínimo
- 🚀 **Lazy loading** — Imagens e componentes sob demanda
- 🚀 **Minificação** — Automática pelo Astro
- 🚀 **CDN global** — Cloudflare Pages distribui globalmente

## Personalização

### Cores

Edite `tailwind.config.mjs` para alterar as cores do design system:

```js
colors: {
  brand: {
    accent: '#5E6AD2', // Cor principal
    // ...
  }
}
```

### Conteúdo

Edite os componentes em `src/components/` para atualizar textos, links e informações.

### Contato

Atualize o número de WhatsApp no componente `FinalCTA.astro`:

```astro
<a href="https://wa.me/55SEUNUMERO" ...>
```

## Licença

Propriedade da Opp4System.
