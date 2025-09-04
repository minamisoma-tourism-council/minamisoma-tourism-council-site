window.addEventListener("load", () => {
    const splash = document.getElementById("splash");
    const main = document.getElementById("main-content");
  
    setTimeout(() => {
      splash.style.opacity = "0";
      setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";
        setTimeout(() => main.classList.add("show"), 50);
      }, 1000);
    }, 1000);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
 
  
    // ヒーロースライド
    const slides = [
      { src: "img/sea.svg", overlay: "img/wave.svg" },
      { src: "img/pipopa.svg", overlay: "img/gourmet.svg" },
      { src: "img/horseculture.svg", overlay: "img/horse-text.svg" }
    ];
    let index = 0;
    const hero = document.querySelector(".hero");
    const heroText = document.querySelector(".hero-content");
    const heroOverlayImg = document.querySelector(".hero-overlay img");
    const [bg1, bg2] = [document.createElement("div"), document.createElement("div")];
    [bg1, bg2].forEach(bg => { bg.classList.add("hero-bg"); hero.appendChild(bg); });
    bg1.style.backgroundImage = `url(${slides[0].src})`;
    bg1.classList.add("visible");
    heroText.textContent = slides[0].text || "";
    heroOverlayImg.src = slides[0].overlay;
    function changeSlide() {
      index = (index + 1) % slides.length;
      const current = hero.querySelector(".hero-bg.visible");
      const next = current === bg1 ? bg2 : bg1;
      next.style.backgroundImage = `url(${slides[index].src})`;
      next.classList.add("visible");
      heroText.style.opacity = 0;
      heroOverlayImg.style.opacity = 0;
      setTimeout(() => {
        heroText.textContent = slides[index].text || "";
        heroOverlayImg.src = slides[index].overlay;
        heroText.style.opacity = 1;
        heroOverlayImg.style.opacity = 1;
      }, 1000);
      setTimeout(() => current.classList.remove("visible"), 1000);
    }
    setInterval(changeSlide, 5000);
  
    // ポップアニメーション
    const pops = document.querySelectorAll(".pop, .special");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hide");
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.add("hide");
        }
      });
    }, { threshold: 0.3 });
    pops.forEach(el => observer.observe(el));
  
    // ニュース読み込み
    fetch('news.json')
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById('news-list');
        data.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `<span class="date">${item.date}</span><a href="${item.url}" target="_blank">${item.title}</a>`;
          list.appendChild(li);
        });
      })
      .catch(err => console.error('ニュース読み込み失敗:', err));
  });
  