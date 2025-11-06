window.addEventListener('load', () => {
  const audios = document.querySelectorAll('.audios');
  const playButtons = document.querySelectorAll('.play-button');
  const pauseButtons = document.querySelectorAll('.pause-button');

  playButtons.forEach((buttons, index) => {
    buttons.addEventListener('click', function () {
      pauseButtons[index].classList.remove('pause-button');
      buttons.classList.add('hidden');
      audios[index].play();
    });
  });

  pauseButtons.forEach((buttons, index) => {
    buttons.addEventListener('click', function () {
      audios[index].pause();
      audios[index].currentTime = 0;
      buttons.classList.add('pause-button');
      playButtons[index].classList.remove('hidden');
    });
  });
});
