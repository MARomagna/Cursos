// Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a');
function ativarLink(link) {
 const url = location.href;
 const href = link.href;
 if (url.includes(href)) {
  link.classList.add('ativo');
 }
}
links.forEach(ativarLink);

// Ativar Itens do Orçamento e Prosutos
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametos) {
 const elemento = document.getElementById(parametos);
 if (elemento) {
  elemento.checked = true;
 }
}
parametros.forEach(ativarProduto);

// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button');
function ativarPergunta(event) {
 const pergunta = event.currentTarget;
 const controls = pergunta.getAttribute('aria-controls');
 const resposta = document.getElementById(controls);
 resposta.classList.toggle('ativa');
 const ativa = resposta.classList.contains('ativa');
 pergunta.setAttribute('aria-expanded', ativa);
}
function eventosPerguntas(pergunta) {
 pergunta.addEventListener('click', ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

// galeria de imagens
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');
function trocarimg(event) {
 const img = event.currentTarget;
 const media = matchMedia('(min-width:1000px)').matches;
 if (media) {
  galeriaContainer.prepend(img);
 }
}
function eventosGaleria(img) {
 img.addEventListener('click', trocarimg);
}
galeria.forEach(eventosGaleria);

// animação
if (window.SimpleAnime) {
 new SimpleAnime();
}
