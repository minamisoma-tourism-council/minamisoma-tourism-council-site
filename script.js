// ------------------- スプラッシュ画面 -------------------
window.addEventListener("load", () => {
    const splash = document.getElementById("splash");
    const main = document.getElementById("main-content");
  
    setTimeout(() => {
      splash.style.opacity = "0";
  
      setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";
  
        setTimeout(() => {
          main.classList.add("show");
        }, 50);
  
      }, 1000);
    }, 1000);
  });
  
  // ------------------- ハンバーガーメニュー -------------------
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active'); 
      navList.classList.toggle('active');   
    });
  });
  
  // ------------------- ヒーロースライド -------------------
  const slides = [
    { src: "img/PL001.jpg", overlay:"img/wave.png" },
    { src: "img/pipopa.png", overlay:"img/gourmet.png"},
    { src: "img/horsevalue.avif", overlay:"img/horse.png" }
  ];
  
  let index = 0;
  const hero = document.querySelector(".hero");
  const heroText = document.querySelector(".hero-content");
  const heroOverlayImg = document.querySelector(".hero-overlay img");
  
  // 背景用のレイヤーを2つ作成
  const bg1 = document.createElement("div");
  const bg2 = document.createElement("div");
  [bg1, bg2].forEach(bg => {
    bg.classList.add("hero-bg");
    hero.appendChild(bg);
  });
  
  // 最初の背景とoverlay
  bg1.style.backgroundImage = `url(${slides[0].src})`;
  bg1.classList.add("visible");
  heroText.textContent = slides[0].text || "";
  heroOverlayImg.src = slides[0].overlay;
  heroOverlayImg.style.opacity = 1;
  
  // ------------------- スライド切替関数 -------------------
  function changeSlide() {
    index = (index + 1) % slides.length;
  
    const current = hero.querySelector(".hero-bg.visible");
    const next = current === bg1 ? bg2 : bg1;
  
    // 背景画像をセットしてフェードイン
    next.style.backgroundImage = `url(${slides[index].src})`;
    next.classList.add("visible");
  
    // テキストとoverlayを一旦フェードアウト
    heroText.style.opacity = 0;
    heroOverlayImg.style.opacity = 0;
  
    // 🔽 背景が変わり始めて 400ms 後に overlay を切り替え
    setTimeout(() => {
      heroText.textContent = slides[index].text || "";
      heroOverlayImg.src = slides[index].overlay;
  
      heroText.style.opacity = 1;
      heroOverlayImg.style.opacity = 1;
    }, 1000);
  
    // 古い背景を消す
    setTimeout(() => {
      current.classList.remove("visible");
    }, 1000);
  }
  
  // 5秒ごとに切り替え
  setInterval(changeSlide, 5000);