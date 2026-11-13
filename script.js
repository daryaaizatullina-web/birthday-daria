const envelopeScreen = document.getElementById("envelope-screen");
const mainScreen = document.getElementById("main-screen");
const envelopeWrapper = document.querySelector(".envelope-wrapper");

// Блокируем скролл при загрузке страницы (пока открыт конверт)
document.body.classList.remove("unlocked");

envelopeWrapper.addEventListener("click", () => {
  // 1. Прячем конверт (уезжает вверх)
  envelopeScreen.classList.add("hidden");

  // 2. Разрешаем скролл страницы
  document.body.classList.add("unlocked");

  // 3. Убираем конверт из DOM через 1 секунду (когда закончится анимация)
  setTimeout(() => {
    envelopeScreen.style.display = "none";
  }, 1000);

  // 4. Показываем приглашение
  setTimeout(() => {
    mainScreen.style.display = "flex";
    // Небольшая задержка, чтобы браузер успел отрисовать элемент перед анимацией
    setTimeout(() => {
      mainScreen.classList.add("active");
    }, 50);
  }, 300);
});

// ===== Искры на фоне =====
const sparklesContainer = document.getElementById("sparkles");
const sparkleCount = 60;

function createSparkles() {
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    const size = Math.random() * 3 + 1.5;
    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.animationDelay = Math.random() * 5 + "s";
    sparkle.style.animationDuration = Math.random() * 3 + 3 + "s";

    sparklesContainer.appendChild(sparkle);
  }
}

setTimeout(createSparkles, 1000);
