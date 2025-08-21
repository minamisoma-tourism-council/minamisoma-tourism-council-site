const images = [
    'img/PL002.jpg',
    'img/PL003.jpg',
    'img/PL004.jpg',
    'img/PL005.jpg',
    'img/PL006.jpg',
    'img/PL007.jpg'
  ];
  
  let index = 0;
  
  function changeBackground() {
    index = (index + 1) % images.length;
    document.body.style.backgroundImage = `url(${images[index]})`;
  }
  
  // 5秒ごとに背景を切り替え
  setInterval(changeBackground, 5000);