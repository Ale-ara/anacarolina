(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},t=([e,n,r])=>{let i=document.createElementNS(`http://www.w3.org/2000/svg`,e);return Object.keys(n).forEach(e=>{i.setAttribute(e,String(n[e]))}),r?.length&&r.forEach(e=>{let n=t(e);i.appendChild(n)}),i},n=(n,r={})=>t([`svg`,{...e,...r},n]),r=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},i=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),a=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),o=e=>{let t=a(e);return t.charAt(0).toUpperCase()+t.slice(1)},s=e=>Array.from(e.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),c=e=>typeof e==`string`?e:!e||!e.class?``:e.class&&typeof e.class==`string`?e.class.split(` `):e.class&&Array.isArray(e.class)?e.class:``,l=(t,{nameAttr:a,icons:l,attrs:u})=>{let d=t.getAttribute(a);if(d==null)return;let f=l[o(d)];if(!f)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);let p=s(t),m=r(p)?{}:{"aria-hidden":`true`},h={...e,"data-lucide":d,...m,...u,...p},g=c(p),_=c(u),v=i(`lucide`,`lucide-${d}`,...g,..._);v&&Object.assign(h,{class:v});let y=n(f,h);return t.parentNode?.replaceChild(y,t)},u=[[`path`,{d:`M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`}]],d=[[`path`,{d:`M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`}],[`path`,{d:`m9 12 2 2 4-4`}]],f=[[`path`,{d:`M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`}],[`path`,{d:`M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8`}],[`path`,{d:`M12 18V6`}]],p=[[`path`,{d:`M16 2v4`}],[`path`,{d:`M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25`}],[`path`,{d:`m22 22-1.875-1.875`}],[`path`,{d:`M3 10h18`}],[`path`,{d:`M8 2v4`}],[`circle`,{cx:`18`,cy:`18`,r:`3`}]],m=[[`path`,{d:`M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2`}],[`circle`,{cx:`7`,cy:`17`,r:`2`}],[`path`,{d:`M9 17h6`}],[`circle`,{cx:`17`,cy:`17`,r:`2`}]],h=[[`path`,{d:`M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z`}],[`path`,{d:`M21.21 15.89A10 10 0 1 1 8 2.83`}]],g=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8`}],[`path`,{d:`M12 18V6`}]],_=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`}],[`path`,{d:`M12 17h.01`}]],v=[[`path`,{d:`M10 2v2`}],[`path`,{d:`M14 2v2`}],[`path`,{d:`M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1`}],[`path`,{d:`M6 2v2`}]],y=[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`}]],ee=[[`path`,{d:`M12 15V3`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}],[`path`,{d:`m7 10 5 5 5-5`}]],te=[[`path`,{d:`M12 7v14`}],[`path`,{d:`M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8`}],[`path`,{d:`M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5`}],[`rect`,{x:`3`,y:`7`,width:`18`,height:`4`,rx:`1`}]],ne=[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`}],[`path`,{d:`M22 10v6`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`}]],re=[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`}],[`path`,{d:`M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27`}]],ie=[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}]],ae=[[`path`,{d:`M13 5h8`}],[`path`,{d:`M13 12h8`}],[`path`,{d:`M13 19h8`}],[`path`,{d:`m3 17 2 2 4-4`}],[`path`,{d:`m3 7 2 2 4-4`}]],b=[[`path`,{d:`M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z`}],[`path`,{d:`M16 10h.01`}],[`path`,{d:`M2 8v1a2 2 0 0 0 2 2h1`}]],oe=[[`path`,{d:`M5 12h14`}],[`path`,{d:`M12 5v14`}]],se=[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`}],[`path`,{d:`M21 3v5h-5`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`}],[`path`,{d:`M8 16H3v5`}]],ce=[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`}],[`path`,{d:`M3 3v5h5`}]],le=[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`}]],ue=[[`path`,{d:`m21 21-4.34-4.34`}],[`circle`,{cx:`11`,cy:`11`,r:`8`}]],de=[[`path`,{d:`M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z`}]],fe=[[`circle`,{cx:`8`,cy:`21`,r:`1`}],[`circle`,{cx:`19`,cy:`21`,r:`1`}],[`path`,{d:`M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12`}]],pe=[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`}],[`path`,{d:`M12 18h.01`}]],x=[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`}],[`path`,{d:`M20 2v4`}],[`path`,{d:`M22 4h-4`}],[`circle`,{cx:`4`,cy:`20`,r:`2`}]],S=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`circle`,{cx:`12`,cy:`12`,r:`6`}],[`circle`,{cx:`12`,cy:`12`,r:`2`}]],C=[[`path`,{d:`M10 11v6`}],[`path`,{d:`M14 11v6`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]],me=[[`path`,{d:`M16 17h6v-6`}],[`path`,{d:`m22 17-8.5-8.5-5 5L2 7`}]],he=[[`path`,{d:`M16 7h6v6`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`}]],ge=[[`path`,{d:`M12 3v12`}],[`path`,{d:`m17 8-5-5-5 5`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}]],_e=[[`path`,{d:`M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2`}],[`path`,{d:`M7 2v20`}],[`path`,{d:`M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7`}]],ve=[[`path`,{d:`M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21`}],[`path`,{d:`M3 7h18`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}]],ye=[[`path`,{d:`m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72`}],[`path`,{d:`m14 7 3 3`}],[`path`,{d:`M5 6v4`}],[`path`,{d:`M19 14v4`}],[`path`,{d:`M10 2v2`}],[`path`,{d:`M7 8H3`}],[`path`,{d:`M21 16h-4`}],[`path`,{d:`M11 3H9`}]],be=[[`path`,{d:`M18 6 6 18`}],[`path`,{d:`m6 6 12 12`}]],w=({icons:e={},nameAttr:t=`data-lucide`,attrs:n={},root:r=document,inTemplates:i}={})=>{if(!Object.values(e).length)throw Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(r===void 0)throw Error("`createIcons()` only works in a browser environment.");if(Array.from(r.querySelectorAll(`[${t}]`)).forEach(r=>l(r,{nameAttr:t,icons:e,attrs:n})),i&&Array.from(r.querySelectorAll(`template`)).forEach(r=>w({icons:e,nameAttr:t,attrs:n,root:r.content,inTemplates:i})),t===`data-lucide`){let t=r.querySelectorAll(`[icon-name]`);t.length>0&&(console.warn(`[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide`),Array.from(t).forEach(t=>l(t,{nameAttr:`icon-name`,icons:e,attrs:n})))}},T=`financas-ana-carolina.v2`,xe=new Intl.NumberFormat(`pt-BR`,{style:`currency`,currency:`BRL`}),E={Salário:{color:`#0f766e`,icon:`badge-dollar-sign`},Freelance:{color:`#2f5f98`,icon:`sparkles`},Moradia:{color:`#7c3aed`,icon:`home`},Mercado:{color:`#d89000`,icon:`shopping-cart`},Comida:{color:`#e65f4f`,icon:`utensils`},Transporte:{color:`#2f5f98`,icon:`car`},Saúde:{color:`#b91b63`,icon:`heart-pulse`},Estudos:{color:`#0f766e`,icon:`graduation-cap`},Beleza:{color:`#b91b63`,icon:`shirt`},Presentes:{color:`#d89000`,icon:`gift`},Assinaturas:{color:`#241f21`,icon:`smartphone`},Outros:{color:`#6f6763`,icon:`circle-help`}},D=[`Hoje a meta é simples: gastar menos do que uma celebridade em crise de cupom.`,`Se o carrinho online chamar, finja que está sem sinal e vá beber água.`,`O salário entrou elegante. Vamos tentar não transformar ele em lembrança afetiva.`,`Planilha atualizada: o dinheiro não sumiu, ele só foi viver novas experiências.`,`Comprinha pequena é igual fofoca: começa inocente e termina dominando o mês.`,`Pix enviado sem pensar conta como cardio financeiro: acelera o coração na hora.`,`A fatura não julga. Ela apenas aparece com provas, datas e valores.`,`Modo contenção ativado: hoje o cartão vai descansar como atleta depois de final.`,`Se sobrar dinheiro, ninguém grita. A gente acena discretamente para não assustar.`,`A calculadora pediu férias, mas a Ana Carolina pediu controle. Democracia difícil.`],O={Salário:`O protagonista chegou. Agora é impedir que ele faça participação especial.`,Freelance:`Dinheiro extra detectado. A tentação de comemorar com gasto extra também.`,Moradia:`A casa custa caro, mas pelo menos ela não cobra couvert artístico.`,Mercado:`Mercado: onde três itens viram uma tese sobre inflação.`,Comida:`Lanche emocional registrado. O coração agradece, o saldo faz reunião.`,Transporte:`Indo e vindo, principalmente o dinheiro indo.`,Saúde:`Gasto responsável. Até a planilha ficou menos dramática.`,Estudos:`Investimento no futuro. O presente reclamou, mas passa.`,Beleza:`Autoestima lançada com sucesso. O orçamento pediu um minutinho.`,Presentes:`Generosidade é linda. Só não pode virar modalidade olímpica.`,Assinaturas:`Mais uma assinatura. Em breve o streaming assiste você.`,Outros:`Categoria Outros: o esconderijo oficial das despesas com identidade secreta.`},k=[{type:`income`,category:`Salário`,description:`Salário Ana Carolina`,amount:4200},{type:`expense`,category:`Moradia`,description:`Aluguel e condomínio`,amount:1350},{type:`expense`,category:`Mercado`,description:`Mercado da semana, também conhecido como susto no caixa`,amount:486.9},{type:`expense`,category:`Comida`,description:`Lanche que era só um agrado e virou evento`,amount:72.5},{type:`expense`,category:`Transporte`,description:`Uber da pressa oficial`,amount:38.2},{type:`expense`,category:`Assinaturas`,description:`Streaming, música e pequenos boletos camuflados`,amount:89.9},{type:`expense`,category:`Beleza`,description:`Mimo de autocuidado com nota fiscal`,amount:120}],A={BadgeAlert:u,BadgeCheck:d,BadgeDollarSign:f,CalendarSearch:p,Car:m,ChartPie:h,CircleDollarSign:g,CircleHelp:_,Coffee:v,Copy:y,Download:ee,Gift:te,GraduationCap:ne,HeartPulse:re,Home:ie,ListChecks:ae,PiggyBank:b,Plus:oe,RefreshCw:se,RotateCcw:ce,Save:le,Search:ue,Shirt:de,ShoppingCart:fe,Smartphone:pe,Sparkles:x,Target:S,Trash2:C,TrendingDown:me,TrendingUp:he,Upload:ge,Utensils:_e,WalletCards:ve,WandSparkles:ye,X:be},j=document.querySelector(`#app`),M=Se(),N=`expense`,P=M.phraseIndex??Q(D),F={month:Y(),search:``,category:`Todas`,type:`Todos`},I;Ce(),we(),B();function Se(){let e=localStorage.getItem(T);if(e)try{return L(JSON.parse(e))}catch{localStorage.removeItem(T)}let t=Y(),n={goal:500,phraseIndex:Q(D),entries:k.map((e,n)=>({...e,id:crypto.randomUUID(),date:Ve(n+2),month:t}))};return localStorage.setItem(T,JSON.stringify(n)),n}function L(e){return{goal:Number(e.goal||500),phraseIndex:Number.isInteger(e.phraseIndex)?e.phraseIndex:Q(D),entries:Array.isArray(e.entries)?e.entries.map(e=>({id:e.id||crypto.randomUUID(),type:e.type===`income`?`income`:`expense`,category:e.category||`Outros`,description:e.description||`Lançamento sem RG`,amount:Number(e.amount||e.value||0),date:e.date||`${e.month||Y()}-01`,month:e.month||(e.date||Y()).slice(0,7)})):[]}}function R(){M.phraseIndex=P,localStorage.setItem(T,JSON.stringify(M))}function Ce(){j.innerHTML=`
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
  `,w({icons:A})}function we(){document.querySelector(`#monthInput`).value=F.month,document.querySelector(`#goalInput`).value=M.goal,document.querySelector(`#entryDate`).value=X(F.month),Te(),document.querySelector(`#monthInput`).addEventListener(`change`,e=>{F.month=e.target.value||Y(),document.querySelector(`#entryDate`).value=X(F.month),B()}),document.querySelector(`#saveGoal`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#goalInput`).value);M.goal=Math.max(0,e||0),R(),B(),$(`Meta salva`,`O cofrinho recebeu a ordem e está se sentindo importante.`)}),document.querySelector(`#newPhrase`).addEventListener(`click`,()=>{P=Ue(),R(),V(),$(`Nova frase`,`Humor financeiro recalculado com sucesso.`)}),document.querySelector(`#entryForm`).addEventListener(`submit`,Me),document.querySelector(`#searchInput`).addEventListener(`input`,e=>{F.search=e.target.value.trim().toLowerCase(),H()}),document.querySelector(`#typeFilter`).addEventListener(`change`,e=>{F.type=e.target.value,H()}),document.querySelector(`#categoryFilter`).addEventListener(`change`,e=>{F.category=e.target.value,H()}),document.querySelector(`#resetFilters`).addEventListener(`click`,()=>{F.search=``,F.type=`Todos`,F.category=`Todas`,document.querySelector(`#searchInput`).value=``,document.querySelector(`#typeFilter`).value=`Todos`,document.querySelector(`#categoryFilter`).value=`Todas`,H()}),document.querySelector(`#clearMonth`).addEventListener(`click`,Fe),document.querySelector(`#exportData`).addEventListener(`click`,Ie),document.querySelector(`#importData`).addEventListener(`change`,Le),document.querySelector(`#copySummary`).addEventListener(`click`,Re),document.querySelectorAll(`.segment`).forEach(e=>{e.addEventListener(`click`,()=>{N=e.dataset.type,document.querySelectorAll(`.segment`).forEach(e=>{e.classList.toggle(`active`,e.dataset.type===N)}),z()})})}function Te(){let e=Object.keys(E),t=document.querySelector(`#entryCategory`),n=document.querySelector(`#categoryFilter`);t.innerHTML=``,n.innerHTML=`<option value="Todas">Todas</option>`,e.forEach(e=>{let r=document.createElement(`option`);r.value=e,r.textContent=e,t.append(r);let i=document.createElement(`option`);i.value=e,i.textContent=e,n.append(i)}),z()}function z(){let e=document.querySelector(`#entryCategory`),t=N===`income`?[`Salário`,`Freelance`,`Outros`]:Object.keys(E).filter(e=>![`Salário`,`Freelance`].includes(e));e.innerHTML=``,t.forEach(t=>{let n=document.createElement(`option`);n.value=t,n.textContent=t,e.append(n)})}function B(){Ee(),V(),De(),Oe(),Ae(),H(),w({icons:A})}function Ee(){document.querySelector(`#monthTitle`).textContent=Z(F.month),document.querySelector(`#monthSubtitle`).textContent=`A central de inteligência que descobre para onde o salário foi antes dele alegar inocência.`}function V(){let e=U(),t=document.querySelector(`#moneyMood`);e.income===0&&e.expense===0?t.textContent=`Sem pistas`:e.balance>=M.goal&&e.income>0?t.textContent=`Cofrinho sorrindo`:e.balance>=0?t.textContent=`Vivendo no limite elegante`:t.textContent=`Alerta fatura`,document.querySelector(`#funnyPhrase`).textContent=D[P];let n=[`${e.count} lançamentos`,`Maior gasto: ${e.biggestExpense?e.biggestExpense.category:`nenhum`}`,`Vilão: ${e.villain||`em investigação`}`],r=document.querySelector(`#quickFacts`);r.innerHTML=``,n.forEach(e=>{let t=document.createElement(`span`);t.className=`pill`,t.textContent=e,r.append(t)})}function De(){let e=U();J(`#incomeTotal`,q(e.income)),J(`#expenseTotal`,q(e.expense)),J(`#balanceTotal`,q(e.balance)),J(`#goalTotal`,q(M.goal)),J(`#incomeCaption`,e.income>0?`Entrou com pose de protagonista.`:`O salário ainda não bateu ponto.`),J(`#expenseCaption`,e.expense>0?`As saídas vieram com relatório completo.`:`Nenhum gasto confessou presença.`),J(`#balanceCaption`,e.balance>=0?`Ainda existe oxigênio financeiro.`:`O orçamento pediu para sentar.`),J(`#goalCaption`,e.balance>=M.goal?`Meta batida. Pode comemorar sem abrir app de compras.`:`Meta de pé, olhando fixamente.`)}function Oe(){let e=U(),t=e.income>0?Math.min(100,e.expense/e.income*100):0,n=Number.isFinite(t)?t:0;document.querySelector(`#progressFill`).style.width=`${n}%`,J(`#progressPercent`,`${Math.round(n)}%`),e.income===0&&e.expense===0?(J(`#diagnosisTitle`,`Nenhum lançamento, nenhuma fofoca`),J(`#diagnosisText`,`O mês está quieto demais. Ou está tudo sob controle, ou o boleto aprendeu camuflagem.`)):e.balance>=M.goal&&e.income>0?(J(`#diagnosisTitle`,`Milagre financeiro documentado`),J(`#diagnosisText`,`Sobraram ${q(e.balance)}. A planilha recomenda manter a calma e não transformar alegria em carrinho cheio.`)):e.balance>=0?(J(`#diagnosisTitle`,`Sobreviveu, mas olhando para os lados`),J(`#diagnosisText`,`Ainda restam ${q(e.balance)}. Dá para respirar, só não dá para tratar cupom como chamado divino.`)):(J(`#diagnosisTitle`,`A fatura ganhou por pontos`),J(`#diagnosisText`,`Faltaram ${q(Math.abs(e.balance))}. Hora de colocar as comprinhas misteriosas no banco dos réus.`)),ke(e)}function ke(e){let t=document.querySelector(`#donutChart`),n=document.querySelector(`#legendList`),r=G();if(J(`#donutTotal`,Be(e.expense)),e.expense<=0||r.length===0){t.style.background=`conic-gradient(#ded5ca 0 100%)`,n.innerHTML=`<div class="empty-state"><p>Sem gastos no mapa. Momento raro, registre em ata.</p></div>`;return}let i=0,a=r.map(t=>{let n=t.total/e.expense*100,r=i+n,a=`${E[t.category]?.color||`#6f6763`} ${i}% ${r}%`;return i=r,a}).join(`, `);t.style.background=`conic-gradient(${a})`,n.innerHTML=``,r.slice(0,5).forEach(e=>{let t=document.createElement(`div`);t.className=`legend-item`;let r=document.createElement(`span`);r.className=`legend-dot`,r.style.background=E[e.category]?.color||`#6f6763`;let i=document.createElement(`span`);i.textContent=e.category;let a=document.createElement(`strong`);a.textContent=q(e.total),t.append(r,i,a),n.append(t)})}function Ae(){let e=document.querySelector(`#categoryBars`),t=G();if(e.innerHTML=``,t.length===0){e.innerHTML=`
      <div class="empty-state">
        <h3>Ninguém fugiu ainda</h3>
        <p>Quando pintar um gasto, ele aparece aqui com nome, sobrenome e culpa financeira.</p>
      </div>
    `;return}let n=Math.max(...t.map(e=>e.total));t.slice(0,6).forEach(t=>{let r=n>0?t.total/n*100:0,i=document.createElement(`div`);i.className=`bar-item`;let a=document.createElement(`div`);a.className=`bar-head`;let o=document.createElement(`span`);o.textContent=`${t.category}: ${O[t.category]||`Gasto registrado sem álibi.`}`;let s=document.createElement(`strong`);s.textContent=q(t.total),a.append(o,s);let c=document.createElement(`div`);c.className=`bar-track`;let l=document.createElement(`div`);l.className=`bar-value`,l.style.width=`${r}%`,l.style.background=E[t.category]?.color||`#2f5f98`,c.append(l),i.append(a,c),e.append(i)})}function H(){let e=document.querySelector(`#entriesArea`),t=ze(),n=U();if(J(`#tableSubtitle`,t.length?`${t.length} prova(s) na mesa. Total do mês: ${q(n.income-n.expense)}.`:`Nenhuma prova encontrada com esses filtros.`),t.length===0){e.innerHTML=`
      <div class="empty-state">
        <h3>Sem lançamentos por aqui</h3>
        <p>O dinheiro está quieto. Isso é controle financeiro ou só falta de testemunha.</p>
      </div>
    `,w({icons:A});return}let r=document.createElement(`div`);r.className=`table-scroll`;let i=document.createElement(`table`);i.innerHTML=`
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
  `;let a=document.createElement(`tbody`);t.forEach(e=>a.append(je(e))),i.append(a),r.append(i),e.replaceChildren(r),w({icons:A})}function je(e){let t=document.createElement(`tr`),n=document.createElement(`td`),r=document.createElement(`span`);r.className=`entry-kind ${e.type}`,r.textContent=e.type===`income`?`Entrada`:`Saída`,n.append(r);let i=document.createElement(`td`),a=document.createElement(`span`);a.className=`category-chip`,a.innerHTML=`<i data-lucide="${E[e.category]?.icon||`circle-help`}"></i>`,a.append(document.createTextNode(e.category)),i.append(a);let o=document.createElement(`td`);o.textContent=e.description;let s=document.createElement(`td`);s.textContent=He(e.date);let c=document.createElement(`td`);c.className=`amount-cell`,c.textContent=`${e.type===`expense`?`-`:`+`} ${q(e.amount)}`;let l=document.createElement(`td`),u=document.createElement(`div`);u.className=`row-actions`;let d=document.createElement(`button`);d.className=`btn icon-only small ghost`,d.type=`button`,d.title=`Duplicar`,d.innerHTML=`<i data-lucide="copy"></i>`,d.addEventListener(`click`,()=>Ne(e.id));let f=document.createElement(`button`);return f.className=`btn icon-only small danger`,f.type=`button`,f.title=`Excluir`,f.innerHTML=`<i data-lucide="trash-2"></i>`,f.addEventListener(`click`,()=>Pe(e.id)),u.append(d,f),l.append(u),t.append(n,i,o,s,c,l),t}function Me(e){e.preventDefault();let t=document.querySelector(`#entryDate`).value||X(F.month),n=Number(document.querySelector(`#entryAmount`).value),r=document.querySelector(`#entryCategory`).value,i=document.querySelector(`#entryDescription`).value.trim();if(!n||n<=0||!i){$(`Faltou informação`,`Valor e descrição precisam existir. A planilha não aceita telepatia.`);return}let a={id:crypto.randomUUID(),type:N,category:r,description:i,amount:n,date:t,month:t.slice(0,7)};M.entries.unshift(a),F.month=a.month,document.querySelector(`#monthInput`).value=F.month,R(),e.target.reset(),document.querySelector(`#entryDate`).value=X(F.month),z(),B(),$(`Lançamento registrado`,O[r]||`Mais uma pista entrou no dossiê financeiro.`)}function Ne(e){let t=M.entries.find(t=>t.id===e);t&&(M.entries.unshift({...t,id:crypto.randomUUID(),date:X(F.month),month:F.month,description:`${t.description} (reprise)`}),R(),B(),$(`Duplicado`,`Reprise financeira adicionada. Tomara que não vire temporada.`))}function Pe(e){let t=M.entries.find(t=>t.id===e);M.entries=M.entries.filter(t=>t.id!==e),R(),B(),$(`Lançamento excluído`,t?`${t.description} saiu do dossiê.`:`A pista sumiu.`)}function Fe(){let e=M.entries.length;M.entries=M.entries.filter(e=>e.month!==F.month);let t=e-M.entries.length;R(),B(),$(`Mês limpo`,`${t} lançamento(s) foram embora sem fazer escândalo.`)}function Ie(){let e=new Blob([JSON.stringify(M,null,2)],{type:`application/json`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`financas-ana-carolina-${Y()}.json`,n.click(),URL.revokeObjectURL(t),$(`Backup exportado`,`Arquivo JSON pronto para guardar como relíquia financeira.`)}function Le(e){let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=()=>{try{M=L(JSON.parse(String(n.result))),R(),B(),$(`Dados importados`,`O histórico voltou com mala, cuia e comprovantes.`)}catch{$(`Arquivo inválido`,`Esse JSON não convenceu a auditoria.`)}finally{e.target.value=``}},n.readAsText(t)}async function Re(){let e=U(),t=[`Resumo de ${Z(F.month)}`,`Entradas: ${q(e.income)}`,`Saídas: ${q(e.expense)}`,`Saldo: ${q(e.balance)}`,`Diagnóstico: ${document.querySelector(`#diagnosisTitle`).textContent}`].join(`
`);try{await navigator.clipboard.writeText(t),$(`Resumo copiado`,`Pronto para mandar no grupo sem a parte do desespero.`)}catch{$(`Não copiou`,`O navegador bloqueou a área de transferência.`)}}function U(){let e=W(F.month),t=K(e.filter(e=>e.type===`income`)),n=K(e.filter(e=>e.type===`expense`)),r=e.filter(e=>e.type===`expense`).toSorted((e,t)=>t.amount-e.amount)[0],i=G();return{count:e.length,income:t,expense:n,balance:t-n,biggestExpense:r,villain:i[0]?.category||``}}function W(e){return M.entries.filter(t=>t.month===e)}function ze(){return W(F.month).filter(e=>F.type===`Entradas`&&e.type!==`income`||F.type===`Saídas`&&e.type!==`expense`||F.category!==`Todas`&&e.category!==F.category?!1:F.search?`${e.description} ${e.category} ${e.amount}`.toLowerCase().includes(F.search):!0).toSorted((e,t)=>t.date.localeCompare(e.date))}function G(){let e=new Map;return W(F.month).filter(e=>e.type===`expense`).forEach(t=>{e.set(t.category,(e.get(t.category)||0)+t.amount)}),[...e.entries()].map(([e,t])=>({category:e,total:t})).toSorted((e,t)=>t.total-e.total)}function K(e){return e.reduce((e,t)=>e+Number(t.amount||0),0)}function q(e){return xe.format(Number(e||0))}function Be(e){let t=Number(e||0);return t>=1e3?`R$ ${(t/1e3).toFixed(1).replace(`.`,`,`)} mil`:q(t).replace(`,00`,``)}function J(e,t){document.querySelector(e).textContent=t}function Y(){let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}`}function Ve(e){let[t,n]=Y().split(`-`);return`${t}-${n}-${String(e).padStart(2,`0`)}`}function X(e){let t=new Date,n=String(t.getDate()).padStart(2,`0`),r=Y(),i=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${n}`;return e===r?i:`${e}-01`}function Z(e){let[t,n]=e.split(`-`),r=new Date(Number(t),Number(n)-1,1).toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`});return r.charAt(0).toUpperCase()+r.slice(1)}function He(e){let[t,n,r]=e.split(`-`);return`${r}/${n}/${t}`}function Q(e){return Math.floor(Math.random()*e.length)}function Ue(){if(D.length<=1)return 0;let e=Q(D);for(;e===P;)e=Q(D);return e}function $(e,t){let n=document.querySelector(`#toast`);J(`#toastTitle`,e),J(`#toastText`,t),n.classList.add(`show`),window.clearTimeout(I),I=window.setTimeout(()=>{n.classList.remove(`show`)},3200)}