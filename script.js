const musica = document.querySelector('audio');

document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', stopMusic);


function tocarMusica () {
  musica.play()
  document.querySelector('.botao-pause').style.display = 'block';
  document.querySelector('.botao-play').style.display = 'none';
  
}

function stopMusic () {
  musica.pause()
  document.querySelector('.botao-pause').style.display = 'none';
  document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra() {
  let barra = document.querySelector('progress');
  barra.style.width = ((musica.currentTime / musica.duration) * 100) + '%';
  let tempoDecorrido = document.querySelector('.inicio')
}