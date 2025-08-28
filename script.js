
  window.addEventListener("load", () => {
    const splash = document.getElementById("splash");
    const main = document.getElementById("main-content");

    // ロード後1秒でフェードアウト
    setTimeout(() => {
      splash.style.opacity = "0";

      // 完全に透明になったら非表示に
      setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";

        // 本体をフェードイン
        setTimeout(() => {
          main.classList.add("show");
        }, 50);

      }, 1000);
    }, 1000);
  });



document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active'); // ←三本線が❌に
      navList.classList.toggle('active');   // ←フェードイン
    });
  });



  const images = [
    { src: "img/PL002.jpg", text: "だから、おもしろい、みなみそうま！" },
    { src: "img/pipopa.jpg", text: "実る、みになる！" },
    { src: "img/horsevalue.avif", text: "馬事文化にどっぷり！ホーストレッキング！" }
  ];
  
  let index = 0;
  const hero = document.querySelector(".hero");
  const heroText = document.querySelector(".hero-content");
  
  function changeSlide() {
    index = (index + 1) % images.length;
    
    // 背景画像を切り替え
    hero.style.backgroundImage = `url(${images[index].src})`;
  
    // テキストをフェードイン
    heroText.style.opacity = 0;
    setTimeout(() => {
      heroText.textContent = images[index].text;
      heroText.style.opacity = 1;
    }, 800); // フェード効果に合わせてタイミング調整
  }
  
  // 最初の画像とテキスト
  hero.style.backgroundImage = `url(${images[0].src})`;
  heroText.textContent = images[0].text;
  heroText.style.opacity = 1;
  
  // 5秒ごとに切り替え
  setInterval(changeSlide, 5000);
  