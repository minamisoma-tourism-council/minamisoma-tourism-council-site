document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
  
    setInterval(() => {
      // 今のスライドを消す
      slides[currentIndex].classList.remove("active");
  
      // 次のスライドに移動
      currentIndex = (currentIndex + 1) % slides.length;
  
      // 次のスライドを表示
      slides[currentIndex].classList.add("active");
    }, 5000); // 5秒ごとに切り替え
  });

  // ポップアニメーション
const pops = document.querySelectorAll(".pop");

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


/// カードクリックで対象セクションへスクロール
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const targetId = card.getAttribute("data-target");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });




  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".pop-img");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    images.forEach((img) => observer.observe(img));
  });






  const eventCards = document.querySelectorAll('.event-card');

function showEventCards() {
    const triggerBottom = window.innerHeight * 0.85;

    eventCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom){
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', showEventCards);
window.addEventListener('load', showEventCards);