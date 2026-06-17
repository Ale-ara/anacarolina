import {
  BadgeAlert,
  BadgeCheck,
  BadgeDollarSign,
  CalendarSearch,
  Car,
  ChartPie,
  CircleDollarSign,
  CircleHelp,
  Coffee,
  Copy,
  Download,
  Gift,
  GraduationCap,
  HeartPulse,
  Home,
  ListChecks,
  PiggyBank,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Search,
  Shirt,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  Trash2,
  TrendingDown,
  TrendingUp,
  Upload,
  Utensils,
  WalletCards,
  WandSparkles,
  X
} from "lucide";
import { createIcons } from "lucide";
import "./styles.css";

const STORAGE_KEY = "financas-ana-carolina.v2";
const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

const categoryMeta = {
  Salário: { color: "#0f766e", icon: "badge-dollar-sign" },
  Freelance: { color: "#2f5f98", icon: "sparkles" },
  Moradia: { color: "#7c3aed", icon: "home" },
  Mercado: { color: "#d89000", icon: "shopping-cart" },
  Comida: { color: "#e65f4f", icon: "utensils" },
  Transporte: { color: "#2f5f98", icon: "car" },
  Saúde: { color: "#b91b63", icon: "heart-pulse" },
  Estudos: { color: "#0f766e", icon: "graduation-cap" },
  Beleza: { color: "#b91b63", icon: "shirt" },
  Presentes: { color: "#d89000", icon: "gift" },
  Assinaturas: { color: "#241f21", icon: "smartphone" },
  Outros: { color: "#6f6763", icon: "circle-help" }
};

const funnyPhrases = [
  "Hoje a meta é simples: gastar menos do que uma celebridade em crise de cupom.",
  "Se o carrinho online chamar, finja que está sem sinal e vá beber água.",
  "O salário entrou elegante. Vamos tentar não transformar ele em lembrança afetiva.",
  "Planilha atualizada: o dinheiro não sumiu, ele só foi viver novas experiências.",
  "Comprinha pequena é igual fofoca: começa inocente e termina dominando o mês.",
  "Pix enviado sem pensar conta como cardio financeiro: acelera o coração na hora.",
  "A fatura não julga. Ela apenas aparece com provas, datas e valores.",
  "Modo contenção ativado: hoje o cartão vai descansar como atleta depois de final.",
  "Se sobrar dinheiro, ninguém grita. A gente acena discretamente para não assustar.",
  "A calculadora pediu férias, mas a Ana Carolina pediu controle. Democracia difícil."
];

const roastByCategory = {
  Salário: "O protagonista chegou. Agora é impedir que ele faça participação especial.",
  Freelance: "Dinheiro extra detectado. A tentação de comemorar com gasto extra também.",
  Moradia: "A casa custa caro, mas pelo menos ela não cobra couvert artístico.",
  Mercado: "Mercado: onde três itens viram uma tese sobre inflação.",
  Comida: "Lanche emocional registrado. O coração agradece, o saldo faz reunião.",
  Transporte: "Indo e vindo, principalmente o dinheiro indo.",
  Saúde: "Gasto responsável. Até a planilha ficou menos dramática.",
  Estudos: "Investimento no futuro. O presente reclamou, mas passa.",
  Beleza: "Autoestima lançada com sucesso. O orçamento pediu um minutinho.",
  Presentes: "Generosidade é linda. Só não pode virar modalidade olímpica.",
  Assinaturas: "Mais uma assinatura. Em breve o streaming assiste você.",
  Outros: "Categoria Outros: o esconderijo oficial das despesas com identidade secreta."
};

const seedEntries = [
  {
    type: "income",
    category: "Salário",
    description: "Salário Ana Carolina",
    amount: 4200
  },
  {
    type: "expense",
    category: "Moradia",
    description: "Aluguel e condomínio",
    amount: 1350
  },
  {
    type: "expense",
    category: "Mercado",
    description: "Mercado da semana, também conhecido como susto no caixa",
    amount: 486.9
  },
  {
    type: "expense",
    category: "Comida",
    description: "Lanche que era só um agrado e virou evento",
    amount: 72.5
  },
  {
    type: "expense",
    category: "Transporte",
    description: "Uber da pressa oficial",
    amount: 38.2
  },
  {
    type: "expense",
    category: "Assinaturas",
    description: "Streaming, música e pequenos boletos camuflados",
    amount: 89.9
  },
  {
    type: "expense",
    category: "Beleza",
    description: "Mimo de autocuidado com nota fiscal",
    amount: 120
  }
];

const icons = {
  BadgeAlert,
  BadgeCheck,
  BadgeDollarSign,
  CalendarSearch,
  Car,
  ChartPie,
  CircleDollarSign,
  CircleHelp,
  Coffee,
  Copy,
  Download,
  Gift,
  GraduationCap,
  HeartPulse,
  Home,
  ListChecks,
  PiggyBank,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Search,
  Shirt,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  Trash2,
  TrendingDown,
  TrendingUp,
  Upload,
  Utensils,
  WalletCards,
  WandSparkles,
  X
};

const app = document.querySelector("#app");
let state = loadState();
let selectedType = "expense";
let currentPhraseIndex = state.phraseIndex ?? randomIndex(funnyPhrases);
let filters = {
  month: currentMonth(),
  search: "",
  category: "Todas",
  type: "Todos"
};
let toastTimer;

renderShell();
hydrateControls();
renderAll();

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    try {
      return normalizeState(JSON.parse(stored));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  const month = currentMonth();
  const data = {
    goal: 500,
    phraseIndex: randomIndex(funnyPhrases),
    entries: seedEntries.map((entry, index) => ({
      ...entry,
      id: crypto.randomUUID(),
      date: dateForCurrentMonth(index + 2),
      month
    }))
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data;
}

function normalizeState(data) {
  return {
    goal: Number(data.goal || 500),
    phraseIndex: Number.isInteger(data.phraseIndex)
      ? data.phraseIndex
      : randomIndex(funnyPhrases),
    entries: Array.isArray(data.entries)
      ? data.entries.map((entry) => ({
          id: entry.id || crypto.randomUUID(),
          type: entry.type === "income" ? "income" : "expense",
          category: entry.category || "Outros",
          description: entry.description || "Lançamento sem RG",
          amount: Number(entry.amount || entry.value || 0),
          date: entry.date || `${entry.month || currentMonth()}-01`,
          month: entry.month || (entry.date || currentMonth()).slice(0, 7)
        }))
      : []
  };
}

function saveState() {
  state.phraseIndex = currentPhraseIndex;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderShell() {
  app.innerHTML = `
    <main class="app">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true"><i data-lucide="piggy-bank"></i></div>
          <div>
            <h1>Finanças da Ana Carolina</h1>
            <p>Controle, humor e boletos sob vigilância</p>
          </div>
        </div>

        <div class="topbar-actions">
          <button class="btn ghost" id="copySummary" type="button">
            <i data-lucide="copy"></i>
            Copiar resumo
          </button>
          <button class="btn ghost" id="exportData" type="button">
            <i data-lucide="download"></i>
            Exportar
          </button>
          <label class="btn ghost" for="importData">
            <i data-lucide="upload"></i>
            Importar
          </label>
          <input class="sr-only" id="importData" type="file" accept="application/json" />
        </div>
      </header>

      <div class="shell">
        <section class="hero-panel" aria-label="Resumo principal">
          <div class="month-card">
            <div class="month-copy">
              <p class="eyebrow"><i data-lucide="calendar-search"></i> Painel do mês</p>
              <h2 id="monthTitle">Junho de 2026</h2>
              <p id="monthSubtitle">A central de inteligência que descobre para onde o salário foi antes dele alegar inocência.</p>
            </div>
            <div class="month-controls">
              <label class="control-label" for="monthInput">
                Mês investigado
                <input class="control" id="monthInput" type="month" />
              </label>
              <label class="control-label" for="goalInput">
                Meta de sobra
                <input class="control" id="goalInput" type="number" min="0" step="50" />
              </label>
              <button class="btn teal" id="saveGoal" type="button">
                <i data-lucide="target"></i>
                Salvar meta
              </button>
            </div>
          </div>

          <aside class="mood-card" aria-label="Humor financeiro">
            <div class="mood-header">
              <div>
                <p class="mood-label">Humor do caixa</p>
                <h3 id="moneyMood">Em análise</h3>
              </div>
              <button class="btn icon-only ghost" id="newPhrase" type="button" title="Nova frase">
                <i data-lucide="wand-sparkles"></i>
              </button>
            </div>

            <div class="phrase-box">
              <i data-lucide="sparkles" aria-hidden="true"></i>
              <p id="funnyPhrase"></p>
            </div>

            <div class="pill-row" id="quickFacts"></div>
          </aside>
        </section>

        <section class="main-grid">
          <div class="left-stack">
            <section class="panel" aria-labelledby="entryTitle">
              <div class="panel-title">
                <div>
                  <h2 id="entryTitle"><i data-lucide="plus"></i> Lançamento rápido</h2>
                  <p>Entrou, saiu, doeu: coloca aqui.</p>
                </div>
              </div>

              <form class="entry-form" id="entryForm">
                <div class="segmented" role="group" aria-label="Tipo de lançamento">
                  <button class="segment expense active" type="button" data-type="expense">Saída</button>
                  <button class="segment" type="button" data-type="income">Entrada</button>
                </div>

                <div class="form-grid">
                  <label class="control-label" for="entryDate">
                    Data
                    <input class="control" id="entryDate" type="date" required />
                  </label>
                  <label class="control-label" for="entryAmount">
                    Valor
                    <input class="control" id="entryAmount" type="number" min="0.01" step="0.01" placeholder="0,00" required />
                  </label>
                </div>

                <label class="control-label" for="entryCategory">
                  Categoria
                  <select class="select" id="entryCategory"></select>
                </label>

                <label class="control-label" for="entryDescription">
                  Descrição
                  <input class="control" id="entryDescription" type="text" maxlength="80" placeholder="Ex: boleto misterioso, mercado, salário..." required />
                </label>

                <button class="btn primary" type="submit">
                  <i data-lucide="save"></i>
                  Registrar sem drama
                </button>
              </form>
            </section>

            <section class="panel" aria-labelledby="rankingTitle">
              <div class="panel-title">
                <h3 id="rankingTitle"><i data-lucide="trending-down"></i> Ranking do sumiço</h3>
              </div>
              <div class="category-bars" id="categoryBars"></div>
            </section>
          </div>

          <div class="right-stack">
            <section class="stats-grid" aria-label="Números do mês">
              <article class="stat-card income">
                <div class="stat-top">
                  <span class="stat-label">Entradas</span>
                  <span class="stat-icon"><i data-lucide="trending-up"></i></span>
                </div>
                <strong class="stat-value" id="incomeTotal">R$ 0,00</strong>
                <p class="stat-caption" id="incomeCaption">O dinheiro chegou penteado.</p>
              </article>

              <article class="stat-card expense">
                <div class="stat-top">
                  <span class="stat-label">Saídas</span>
                  <span class="stat-icon"><i data-lucide="trending-down"></i></span>
                </div>
                <strong class="stat-value" id="expenseTotal">R$ 0,00</strong>
                <p class="stat-caption" id="expenseCaption">A fatura trouxe testemunhas.</p>
              </article>

              <article class="stat-card balance">
                <div class="stat-top">
                  <span class="stat-label">Saldo</span>
                  <span class="stat-icon"><i data-lucide="wallet-cards"></i></span>
                </div>
                <strong class="stat-value" id="balanceTotal">R$ 0,00</strong>
                <p class="stat-caption" id="balanceCaption">Suspense contábil.</p>
              </article>

              <article class="stat-card goal">
                <div class="stat-top">
                  <span class="stat-label">Meta</span>
                  <span class="stat-icon"><i data-lucide="target"></i></span>
                </div>
                <strong class="stat-value" id="goalTotal">R$ 0,00</strong>
                <p class="stat-caption" id="goalCaption">O cofrinho está observando.</p>
              </article>
            </section>

            <section class="insights-grid" aria-label="Insights financeiros">
              <article class="insight-card">
                <h3><i data-lucide="badge-alert"></i> Diagnóstico do mês</h3>
                <div class="big-message">
                  <i data-lucide="sparkles" aria-hidden="true"></i>
                  <div>
                    <strong id="diagnosisTitle">Carregando laudo financeiro</strong>
                    <p id="diagnosisText">A calculadora está colocando óculos para investigar.</p>
                  </div>
                </div>
                <div class="progress-wrap">
                  <div class="progress-meta">
                    <span id="progressLabel">Gastos sobre entradas</span>
                    <span id="progressPercent">0%</span>
                  </div>
                  <div class="progress-bar" aria-hidden="true">
                    <div class="progress-fill" id="progressFill"></div>
                  </div>
                </div>
              </article>

              <article class="insight-card">
                <h3><i data-lucide="chart-pie"></i> Mapa dos gastos</h3>
                <div class="donut-wrap">
                  <div class="donut" id="donutChart">
                    <div class="donut-center">
                      <strong id="donutTotal">R$ 0</strong>
                      <span>saídas</span>
                    </div>
                  </div>
                  <div class="legend-list" id="legendList"></div>
                </div>
              </article>
            </section>

            <section class="table-panel" aria-labelledby="tableTitle">
              <div class="panel-title">
                <div>
                  <h2 id="tableTitle"><i data-lucide="list-checks"></i> Lançamentos</h2>
                  <p id="tableSubtitle">Aqui ficam as provas do caso.</p>
                </div>
                <button class="btn danger small" id="clearMonth" type="button">
                  <i data-lucide="trash-2"></i>
                  Limpar mês
                </button>
              </div>

              <div class="table-toolbar">
                <label class="control-label" for="searchInput">
                  Buscar
                  <input class="search" id="searchInput" type="search" placeholder="Digite uma pista..." />
                </label>
                <label class="control-label" for="typeFilter">
                  Tipo
                  <select class="select" id="typeFilter">
                    <option>Todos</option>
                    <option>Entradas</option>
                    <option>Saídas</option>
                  </select>
                </label>
                <label class="control-label" for="categoryFilter">
                  Categoria
                  <select class="select" id="categoryFilter"></select>
                </label>
                <button class="btn ghost" id="resetFilters" type="button">
                  <i data-lucide="rotate-ccw"></i>
                  Filtros
                </button>
              </div>

              <div id="entriesArea"></div>
            </section>
          </div>
        </section>

        <footer class="footer">
          <span>Feito para controlar gastos sem perder a piada.</span>
          <span>Dados salvos só neste navegador.</span>
        </footer>
      </div>

      <div class="toast" id="toast" role="status" aria-live="polite">
        <strong id="toastTitle"></strong>
        <span id="toastText"></span>
      </div>
    </main>
  `;

  createIcons({ icons });
}

function hydrateControls() {
  document.querySelector("#monthInput").value = filters.month;
  document.querySelector("#goalInput").value = state.goal;
  document.querySelector("#entryDate").value = todayInMonth(filters.month);
  renderCategorySelects();

  document.querySelector("#monthInput").addEventListener("change", (event) => {
    filters.month = event.target.value || currentMonth();
    document.querySelector("#entryDate").value = todayInMonth(filters.month);
    renderAll();
  });

  document.querySelector("#saveGoal").addEventListener("click", () => {
    const value = Number(document.querySelector("#goalInput").value);
    state.goal = Math.max(0, value || 0);
    saveState();
    renderAll();
    toast("Meta salva", "O cofrinho recebeu a ordem e está se sentindo importante.");
  });

  document.querySelector("#newPhrase").addEventListener("click", () => {
    currentPhraseIndex = nextPhraseIndex();
    saveState();
    renderMood();
    toast("Nova frase", "Humor financeiro recalculado com sucesso.");
  });

  document.querySelector("#entryForm").addEventListener("submit", handleEntrySubmit);
  document.querySelector("#searchInput").addEventListener("input", (event) => {
    filters.search = event.target.value.trim().toLowerCase();
    renderEntries();
  });

  document.querySelector("#typeFilter").addEventListener("change", (event) => {
    filters.type = event.target.value;
    renderEntries();
  });

  document.querySelector("#categoryFilter").addEventListener("change", (event) => {
    filters.category = event.target.value;
    renderEntries();
  });

  document.querySelector("#resetFilters").addEventListener("click", () => {
    filters.search = "";
    filters.type = "Todos";
    filters.category = "Todas";
    document.querySelector("#searchInput").value = "";
    document.querySelector("#typeFilter").value = "Todos";
    document.querySelector("#categoryFilter").value = "Todas";
    renderEntries();
  });

  document.querySelector("#clearMonth").addEventListener("click", clearCurrentMonth);
  document.querySelector("#exportData").addEventListener("click", exportData);
  document.querySelector("#importData").addEventListener("change", importData);
  document.querySelector("#copySummary").addEventListener("click", copySummary);

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      selectedType = button.dataset.type;
      document.querySelectorAll(".segment").forEach((segment) => {
        segment.classList.toggle("active", segment.dataset.type === selectedType);
      });
      updateCategoryOptions();
    });
  });
}

function renderCategorySelects() {
  const allCategories = Object.keys(categoryMeta);
  const entryCategory = document.querySelector("#entryCategory");
  const categoryFilter = document.querySelector("#categoryFilter");

  entryCategory.innerHTML = "";
  categoryFilter.innerHTML = '<option value="Todas">Todas</option>';

  allCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    entryCategory.append(option);

    const filterOption = document.createElement("option");
    filterOption.value = category;
    filterOption.textContent = category;
    categoryFilter.append(filterOption);
  });

  updateCategoryOptions();
}

function updateCategoryOptions() {
  const entryCategory = document.querySelector("#entryCategory");
  const categories =
    selectedType === "income" ? ["Salário", "Freelance", "Outros"] : Object.keys(categoryMeta).filter((category) => !["Salário", "Freelance"].includes(category));

  entryCategory.innerHTML = "";
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    entryCategory.append(option);
  });
}

function renderAll() {
  renderHeader();
  renderMood();
  renderStats();
  renderInsights();
  renderCategoryBars();
  renderEntries();
  createIcons({ icons });
}

function renderHeader() {
  document.querySelector("#monthTitle").textContent = monthName(filters.month);
  document.querySelector("#monthSubtitle").textContent =
    "A central de inteligência que descobre para onde o salário foi antes dele alegar inocência.";
}

function renderMood() {
  const summary = monthSummary();
  const mood = document.querySelector("#moneyMood");

  if (summary.income === 0 && summary.expense === 0) {
    mood.textContent = "Sem pistas";
  } else if (summary.balance >= state.goal && summary.income > 0) {
    mood.textContent = "Cofrinho sorrindo";
  } else if (summary.balance >= 0) {
    mood.textContent = "Vivendo no limite elegante";
  } else {
    mood.textContent = "Alerta fatura";
  }

  document.querySelector("#funnyPhrase").textContent = funnyPhrases[currentPhraseIndex];

  const facts = [
    `${summary.count} lançamentos`,
    `Maior gasto: ${summary.biggestExpense ? summary.biggestExpense.category : "nenhum"}`,
    `Vilão: ${summary.villain || "em investigação"}`
  ];

  const container = document.querySelector("#quickFacts");
  container.innerHTML = "";
  facts.forEach((fact) => {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = fact;
    container.append(pill);
  });
}

function renderStats() {
  const summary = monthSummary();
  setText("#incomeTotal", money(summary.income));
  setText("#expenseTotal", money(summary.expense));
  setText("#balanceTotal", money(summary.balance));
  setText("#goalTotal", money(state.goal));

  setText(
    "#incomeCaption",
    summary.income > 0
      ? "Entrou com pose de protagonista."
      : "O salário ainda não bateu ponto."
  );
  setText(
    "#expenseCaption",
    summary.expense > 0
      ? "As saídas vieram com relatório completo."
      : "Nenhum gasto confessou presença."
  );
  setText(
    "#balanceCaption",
    summary.balance >= 0
      ? "Ainda existe oxigênio financeiro."
      : "O orçamento pediu para sentar."
  );
  setText(
    "#goalCaption",
    summary.balance >= state.goal
      ? "Meta batida. Pode comemorar sem abrir app de compras."
      : "Meta de pé, olhando fixamente."
  );
}

function renderInsights() {
  const summary = monthSummary();
  const ratio = summary.income > 0 ? Math.min(100, (summary.expense / summary.income) * 100) : 0;
  const progress = Number.isFinite(ratio) ? ratio : 0;

  document.querySelector("#progressFill").style.width = `${progress}%`;
  setText("#progressPercent", `${Math.round(progress)}%`);

  if (summary.income === 0 && summary.expense === 0) {
    setText("#diagnosisTitle", "Nenhum lançamento, nenhuma fofoca");
    setText(
      "#diagnosisText",
      "O mês está quieto demais. Ou está tudo sob controle, ou o boleto aprendeu camuflagem."
    );
  } else if (summary.balance >= state.goal && summary.income > 0) {
    setText("#diagnosisTitle", "Milagre financeiro documentado");
    setText(
      "#diagnosisText",
      `Sobraram ${money(summary.balance)}. A planilha recomenda manter a calma e não transformar alegria em carrinho cheio.`
    );
  } else if (summary.balance >= 0) {
    setText("#diagnosisTitle", "Sobreviveu, mas olhando para os lados");
    setText(
      "#diagnosisText",
      `Ainda restam ${money(summary.balance)}. Dá para respirar, só não dá para tratar cupom como chamado divino.`
    );
  } else {
    setText("#diagnosisTitle", "A fatura ganhou por pontos");
    setText(
      "#diagnosisText",
      `Faltaram ${money(Math.abs(summary.balance))}. Hora de colocar as comprinhas misteriosas no banco dos réus.`
    );
  }

  renderDonut(summary);
}

function renderDonut(summary) {
  const donut = document.querySelector("#donutChart");
  const legend = document.querySelector("#legendList");
  const categories = expenseByCategory();
  setText("#donutTotal", compactMoney(summary.expense));

  if (summary.expense <= 0 || categories.length === 0) {
    donut.style.background = "conic-gradient(#ded5ca 0 100%)";
    legend.innerHTML = `<div class="empty-state"><p>Sem gastos no mapa. Momento raro, registre em ata.</p></div>`;
    return;
  }

  let start = 0;
  const gradient = categories
    .map((item) => {
      const percent = (item.total / summary.expense) * 100;
      const end = start + percent;
      const color = categoryMeta[item.category]?.color || "#6f6763";
      const slice = `${color} ${start}% ${end}%`;
      start = end;
      return slice;
    })
    .join(", ");

  donut.style.background = `conic-gradient(${gradient})`;
  legend.innerHTML = "";
  categories.slice(0, 5).forEach((item) => {
    const row = document.createElement("div");
    row.className = "legend-item";

    const dot = document.createElement("span");
    dot.className = "legend-dot";
    dot.style.background = categoryMeta[item.category]?.color || "#6f6763";

    const label = document.createElement("span");
    label.textContent = item.category;

    const value = document.createElement("strong");
    value.textContent = money(item.total);

    row.append(dot, label, value);
    legend.append(row);
  });
}

function renderCategoryBars() {
  const container = document.querySelector("#categoryBars");
  const categories = expenseByCategory();
  container.innerHTML = "";

  if (categories.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>Ninguém fugiu ainda</h3>
        <p>Quando pintar um gasto, ele aparece aqui com nome, sobrenome e culpa financeira.</p>
      </div>
    `;
    return;
  }

  const max = Math.max(...categories.map((item) => item.total));
  categories.slice(0, 6).forEach((item) => {
    const width = max > 0 ? (item.total / max) * 100 : 0;
    const bar = document.createElement("div");
    bar.className = "bar-item";

    const head = document.createElement("div");
    head.className = "bar-head";

    const label = document.createElement("span");
    label.textContent = `${item.category}: ${roastByCategory[item.category] || "Gasto registrado sem álibi."}`;

    const value = document.createElement("strong");
    value.textContent = money(item.total);
    head.append(label, value);

    const track = document.createElement("div");
    track.className = "bar-track";

    const fill = document.createElement("div");
    fill.className = "bar-value";
    fill.style.width = `${width}%`;
    fill.style.background = categoryMeta[item.category]?.color || "#2f5f98";

    track.append(fill);
    bar.append(head, track);
    container.append(bar);
  });
}

function renderEntries() {
  const area = document.querySelector("#entriesArea");
  const entries = filteredEntries();
  const summary = monthSummary();

  setText(
    "#tableSubtitle",
    entries.length
      ? `${entries.length} prova(s) na mesa. Total do mês: ${money(summary.income - summary.expense)}.`
      : "Nenhuma prova encontrada com esses filtros."
  );

  if (entries.length === 0) {
    area.innerHTML = `
      <div class="empty-state">
        <h3>Sem lançamentos por aqui</h3>
        <p>O dinheiro está quieto. Isso é controle financeiro ou só falta de testemunha.</p>
      </div>
    `;
    createIcons({ icons });
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "table-scroll";

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Categoria</th>
        <th>Descrição</th>
        <th>Data</th>
        <th style="text-align:right;">Valor</th>
        <th style="text-align:right;">Ações</th>
      </tr>
    </thead>
  `;

  const body = document.createElement("tbody");
  entries.forEach((entry) => body.append(createEntryRow(entry)));
  table.append(body);
  wrapper.append(table);
  area.replaceChildren(wrapper);
  createIcons({ icons });
}

function createEntryRow(entry) {
  const row = document.createElement("tr");

  const typeCell = document.createElement("td");
  const typePill = document.createElement("span");
  typePill.className = `entry-kind ${entry.type}`;
  typePill.textContent = entry.type === "income" ? "Entrada" : "Saída";
  typeCell.append(typePill);

  const categoryCell = document.createElement("td");
  const category = document.createElement("span");
  category.className = "category-chip";
  category.innerHTML = `<i data-lucide="${categoryMeta[entry.category]?.icon || "circle-help"}"></i>`;
  category.append(document.createTextNode(entry.category));
  categoryCell.append(category);

  const descriptionCell = document.createElement("td");
  descriptionCell.textContent = entry.description;

  const dateCell = document.createElement("td");
  dateCell.textContent = formatDate(entry.date);

  const amountCell = document.createElement("td");
  amountCell.className = "amount-cell";
  amountCell.textContent = `${entry.type === "expense" ? "-" : "+"} ${money(entry.amount)}`;

  const actionsCell = document.createElement("td");
  const actions = document.createElement("div");
  actions.className = "row-actions";

  const duplicate = document.createElement("button");
  duplicate.className = "btn icon-only small ghost";
  duplicate.type = "button";
  duplicate.title = "Duplicar";
  duplicate.innerHTML = `<i data-lucide="copy"></i>`;
  duplicate.addEventListener("click", () => duplicateEntry(entry.id));

  const remove = document.createElement("button");
  remove.className = "btn icon-only small danger";
  remove.type = "button";
  remove.title = "Excluir";
  remove.innerHTML = `<i data-lucide="trash-2"></i>`;
  remove.addEventListener("click", () => removeEntry(entry.id));

  actions.append(duplicate, remove);
  actionsCell.append(actions);

  row.append(typeCell, categoryCell, descriptionCell, dateCell, amountCell, actionsCell);
  return row;
}

function handleEntrySubmit(event) {
  event.preventDefault();
  const date = document.querySelector("#entryDate").value || todayInMonth(filters.month);
  const amount = Number(document.querySelector("#entryAmount").value);
  const category = document.querySelector("#entryCategory").value;
  const description = document.querySelector("#entryDescription").value.trim();

  if (!amount || amount <= 0 || !description) {
    toast("Faltou informação", "Valor e descrição precisam existir. A planilha não aceita telepatia.");
    return;
  }

  const entry = {
    id: crypto.randomUUID(),
    type: selectedType,
    category,
    description,
    amount,
    date,
    month: date.slice(0, 7)
  };

  state.entries.unshift(entry);
  filters.month = entry.month;
  document.querySelector("#monthInput").value = filters.month;
  saveState();
  event.target.reset();
  document.querySelector("#entryDate").value = todayInMonth(filters.month);
  updateCategoryOptions();
  renderAll();
  toast("Lançamento registrado", roastByCategory[category] || "Mais uma pista entrou no dossiê financeiro.");
}

function duplicateEntry(id) {
  const original = state.entries.find((entry) => entry.id === id);
  if (!original) return;

  state.entries.unshift({
    ...original,
    id: crypto.randomUUID(),
    date: todayInMonth(filters.month),
    month: filters.month,
    description: `${original.description} (reprise)`
  });
  saveState();
  renderAll();
  toast("Duplicado", "Reprise financeira adicionada. Tomara que não vire temporada.");
}

function removeEntry(id) {
  const removed = state.entries.find((entry) => entry.id === id);
  state.entries = state.entries.filter((entry) => entry.id !== id);
  saveState();
  renderAll();
  toast("Lançamento excluído", removed ? `${removed.description} saiu do dossiê.` : "A pista sumiu.");
}

function clearCurrentMonth() {
  const before = state.entries.length;
  state.entries = state.entries.filter((entry) => entry.month !== filters.month);
  const removed = before - state.entries.length;
  saveState();
  renderAll();
  toast("Mês limpo", `${removed} lançamento(s) foram embora sem fazer escândalo.`);
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `financas-ana-carolina-${currentMonth()}.json`;
  link.click();
  URL.revokeObjectURL(url);
  toast("Backup exportado", "Arquivo JSON pronto para guardar como relíquia financeira.");
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = normalizeState(JSON.parse(String(reader.result)));
      saveState();
      renderAll();
      toast("Dados importados", "O histórico voltou com mala, cuia e comprovantes.");
    } catch {
      toast("Arquivo inválido", "Esse JSON não convenceu a auditoria.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

async function copySummary() {
  const summary = monthSummary();
  const text = [
    `Resumo de ${monthName(filters.month)}`,
    `Entradas: ${money(summary.income)}`,
    `Saídas: ${money(summary.expense)}`,
    `Saldo: ${money(summary.balance)}`,
    `Diagnóstico: ${document.querySelector("#diagnosisTitle").textContent}`
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    toast("Resumo copiado", "Pronto para mandar no grupo sem a parte do desespero.");
  } catch {
    toast("Não copiou", "O navegador bloqueou a área de transferência.");
  }
}

function monthSummary() {
  const entries = entriesForMonth(filters.month);
  const income = sum(entries.filter((entry) => entry.type === "income"));
  const expense = sum(entries.filter((entry) => entry.type === "expense"));
  const expenses = entries.filter((entry) => entry.type === "expense");
  const biggestExpense = expenses.toSorted((a, b) => b.amount - a.amount)[0];
  const categories = expenseByCategory();

  return {
    count: entries.length,
    income,
    expense,
    balance: income - expense,
    biggestExpense,
    villain: categories[0]?.category || ""
  };
}

function entriesForMonth(month) {
  return state.entries.filter((entry) => entry.month === month);
}

function filteredEntries() {
  return entriesForMonth(filters.month)
    .filter((entry) => {
      if (filters.type === "Entradas" && entry.type !== "income") return false;
      if (filters.type === "Saídas" && entry.type !== "expense") return false;
      if (filters.category !== "Todas" && entry.category !== filters.category) return false;
      if (!filters.search) return true;
      const haystack = `${entry.description} ${entry.category} ${entry.amount}`.toLowerCase();
      return haystack.includes(filters.search);
    })
    .toSorted((a, b) => b.date.localeCompare(a.date));
}

function expenseByCategory() {
  const map = new Map();
  entriesForMonth(filters.month)
    .filter((entry) => entry.type === "expense")
    .forEach((entry) => {
      map.set(entry.category, (map.get(entry.category) || 0) + entry.amount);
    });

  return [...map.entries()]
    .map(([category, total]) => ({ category, total }))
    .toSorted((a, b) => b.total - a.total);
}

function sum(entries) {
  return entries.reduce((total, entry) => total + Number(entry.amount || 0), 0);
}

function money(value) {
  return currency.format(Number(value || 0));
}

function compactMoney(value) {
  const number = Number(value || 0);
  if (number >= 1000) return `R$ ${(number / 1000).toFixed(1).replace(".", ",")} mil`;
  return money(number).replace(",00", "");
}

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}

function currentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function dateForCurrentMonth(day) {
  const [year, month] = currentMonth().split("-");
  return `${year}-${month}-${String(day).padStart(2, "0")}`;
}

function todayInMonth(month) {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const current = currentMonth();
  const localToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${day}`;
  return month === current ? localToday : `${month}-01`;
}

function monthName(month) {
  const [year, monthNumber] = month.split("-");
  const date = new Date(Number(year), Number(monthNumber) - 1, 1);
  const text = date.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric"
  });
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatDate(value) {
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function randomIndex(items) {
  return Math.floor(Math.random() * items.length);
}

function nextPhraseIndex() {
  if (funnyPhrases.length <= 1) return 0;
  let next = randomIndex(funnyPhrases);
  while (next === currentPhraseIndex) next = randomIndex(funnyPhrases);
  return next;
}

function toast(title, text) {
  const toastElement = document.querySelector("#toast");
  setText("#toastTitle", title);
  setText("#toastText", text);
  toastElement.classList.add("show");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3200);
}
