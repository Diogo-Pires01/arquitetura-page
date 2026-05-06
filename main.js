window.addEventListener("scroll", () => {
  document
    .querySelector(".header")
    .classList.toggle("scrolled", window.scrollY > 50);
});

document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");
  const fill = document.querySelector(".preloader-fill");
  const percent = document.querySelector(".preloader-percent");
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 2.2 + 0.9;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => preloader.classList.add("done"), 300);
      setTimeout(() => preloader.remove(), 1200);
    }
    fill.style.width = progress + "%";
    percent.textContent = Math.floor(progress) + "%";
  }, 35);

  const form = document.querySelector(".contato-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    }).then((res) => {
      if (res.ok) {
        Toastify({
          text: "Mensagem enviada com sucesso!",
          duration: 3000,
          gravity: "top",
          position: "right",
          style: {
            background: "#2ecc71",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
          },
        }).showToast();
        form.reset();
      } else {
        Toastify({
          text: "Erro ao enviar. Tente novamente.",
          duration: 3000,
          gravity: "top",
          position: "right",
          style: {
            background: "#c0392b",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
          },
        }).showToast();
      }
    });
  });
});
