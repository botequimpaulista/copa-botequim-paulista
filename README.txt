BOTEQUIM PAULISTA — LANDING PAGE
================================

Estrutura
---------
index.html          página principal
styles.css          estilos responsivos e identidade visual
script.js           menu mobile, animações e configuração do cardápio principal
assets/img/         fotos, logo e favicon utilizados
assets/docs/        carta de vinhos oficial em PDF

Identidade aplicada
-------------------
Cores base do moodboard:
#171717 — preto
#DEDEDE — cinza claro
#A6283C — vermelho

Observação importante sobre o cardápio principal
------------------------------------------------
O arquivo de cardápio principal recebido para este projeto está identificado como
"Praça Figueiras". Ele foi utilizado SOMENTE como origem das fotografias de pratos,
não como cardápio do Botequim Paulista, para evitar publicar nome, preços ou itens de
outra marca.

Por isso, a Carta de Vinhos do Botequim Paulista está 100% funcional no site, enquanto
o botão "Cardápio da casa" fica preparado para receber o link oficial.

Para ativar o cardápio principal:
1. Abra script.js
2. Localize: const MAIN_MENU_URL = "";
3. Insira o URL final ou um PDF dentro de assets/docs/

Exemplo local:
const MAIN_MENU_URL = "assets/docs/cardapio-botequim-paulista.pdf";


Atualização desta versão
-------------------------
- Hero atualizada com destaque para o espaço kids
- Inclusão de uma seção dedicada ao espaço kids
- Nova imagem de fachada noturna já com o logo Botequim Paulista
- Novas fotos adicionadas em assets/img/

Publicação
----------
O projeto é estático e pode ser publicado diretamente em Vercel, Netlify, GitHub Pages
ou em qualquer hospedagem que aceite HTML/CSS/JavaScript.

As fontes usam Google Fonts com fallback local. Se o carregamento externo estiver
bloqueado, o site continua funcional com as fontes de sistema.

Integrações e rodapé
--------------------
- Google Tag Manager: GTM-TKMXCBX5
- Telefone comercial no rodapé: +55 11 91732-0346
- Crédito de marketing e comunicação para Agência Ely, com link para https://agenciaely.com.br
