const secao = document.createElement('section');
secao.classList.add('depoimentos')

const titulo = document.createElement('h2');
titulo.classList.add('depoimentos__titulo')

titulo.textContent = 'Depoimentos';

secao.append(titulo);

const conteudo = document.createElement('div');
conteudo.classList.add('depoimentos__conteudo')

secao.append(conteudo);

const depoimentos = [
    {
        'autor': 'Fulano',
        'texto': 'O lugar é muito bonito. Adorei a experiência.'
    },
    {
        'autor': 'Ciclano',
        'texto': 'Passar momentos junto à natureza é sempre revigorante.'
    },
    {
        'autor': 'Beltrano',
        'texto': 'Não vejo a hora de voltar. O local é incrível'
    },
]

// Depoimentos um do lado do outro
// depoimentos.forEach(depoimento => {
//    const conteiner = document.createElement('div');
//    conteiner.classList.add('depoimentos__conteiner');

//    const texto = document.createElement('p');
//    texto.classList.add('depoimentos__texto')
//    texto.textContent = depoimento.texto

//    const autor = document.createElement('p');
//    autor.classList.add('depoimentos__autor')
//    autor.textContent = depoimento.autor

//    conteiner.append(texto);
//    conteiner.append(autor);

//    conteudo.append(conteiner);

//});

//Depoimentos em carrossel

let carrossel = 0;

const conteiner = document.createElement('div');
conteiner.classList.add('depoimentos__conteiner');

const texto = document.createElement('p');
texto.classList.add('depoimentos__texto');
texto.textContent = depoimentos[carrossel].texto;

const autor = document.createElement('p');
autor.classList.add('depoimentos__autor');
autor.textContent = depoimentos[carrossel].autor;

conteiner.append(texto);
conteiner.append(autor);

const setaDireita = document.createElement("img");
setaDireita.classList.add("depoimentos__seta");
setaDireita.src = "img/right-arrow.png";
setaDireita.alt = "seta direita";

const setaEsquerda = document.createElement("img");
setaEsquerda.classList.add("depoimentos__seta");
setaEsquerda.src = "img/left-arrow.png";
setaEsquerda.alt = "seta esquerda";

conteudo.append(setaEsquerda);
conteudo.append(conteiner);
conteudo.append(setaDireita);

const main = document.querySelector('main');

main.lastElementChild.before(secao);

setaDireita.addEventListener("click", (evento) => {
    carrossel = carrosselProximo(carrossel);
    texto.textContent = depoimentos[carrossel].texto;
    autor.textContent = depoimentos[carrossel].autor;    
});

setaEsquerda.addEventListener("click", (evento) =>{
    carrossel = carrosselAnterior(carrossel);
    texto.textContent = depoimentos[carrossel].texto;
    autor.textContent = depoimentos[carrossel].autor;  
}); 

function carrosselProximo(carrossel){
    carrossel = (carrossel +1) % depoimentos.length;
    return carrossel;
}


function carrosselAnterior(carrossel){
    carrossel = (carrossel - 1 + depoimentos.length) % depoimentos.length;
    return carrossel;
}