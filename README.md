# Finanças da Ana Carolina

Painel financeiro divertido, estático e pronto para GitHub/Vercel. Ele salva os dados no `localStorage` do navegador, então não precisa de banco de dados nem Google Apps Script.

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar build

```bash
npm run build
```

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Na Vercel, importe o repositório.
3. Use as configurações padrão do Vite:
   - Build command: `npm run build`
   - Output directory: `dist`

## Recursos

- Cadastro de entradas e saídas por mês.
- Categorias com ranking de gastos.
- Frases engraçadas e diagnóstico financeiro.
- Gráfico de distribuição por categoria.
- Busca, filtros, duplicação e exclusão de lançamentos.
- Exportação e importação de backup em JSON.
