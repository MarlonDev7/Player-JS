var musicas = [
    {titulo: 'Hotline Bling', artista:'Drake', src:'musicas/Drake - Hotline Bling.mp3', img:'imagens/drake.png'},

    { titulo:'Fix You', artista: 'Coldplay', src:'musicas/Coldplay - Fix You.mp3', img:'imagens/fix you.jpg'},

    {titulo: 'Viva La Vida', artista: 'Coldplay', src:'musicas/Coldplay - Viva La Vida.mp3', img:'imagens/viva la vida.jpg'},
];

let musica = document.querySelector('audio');
let indexMusica = 0;

var duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
document.querySelector('.anterior').addEventListener('click', () => {    
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);

});
document.querySelector('.proxima').addEventListener('click', () => {   
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica); 

})

//RenderizarMusica
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

    });
}

// Funções
function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
    
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos  = '0' + campoSegundos
    }
    return campoMinutos+':'+campoSegundos

}



