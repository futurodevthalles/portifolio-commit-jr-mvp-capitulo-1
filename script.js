/* ===========================================================
   SCRIPT.JS — Comportamentos compartilhados do site
   - Abrir/fechar o menu no mobile
   - Animar as barras de progresso quando entram na tela
   =========================================================== */

// Botão de menu (ícone "hambúrguer") que aparece só no celular
const navToggle = document.querySelector(".nav-toggle");
const navMobile = document.querySelector(".nav-mobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", () => {
    navMobile.classList.toggle("open");
  });
}

// Anima as barras de progresso (currículo) só quando elas
// aparecem na tela, usando IntersectionObserver.
const bars = document.querySelectorAll(".bar-fill");

if (bars.length > 0) {
  bars.forEach((bar) => {
    // guarda a largura final definida no HTML (ex: "80%")
    bar.dataset.targetWidth = bar.style.width;
    bar.style.width = "0%";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = "width 1s ease";
          entry.target.style.width = entry.target.dataset.targetWidth;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach((bar) => observer.observe(bar));
}
