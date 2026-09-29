document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      window.location.href = "estudiante.html";
    });
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const type = document.getElementById("userType").value;
      if (type === "driver") {
        window.location.href = "conductor.html";
      } else {
        window.location.href = "login.html";
      }
    });
  }

  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", e => {
      e.preventDefault();
      window.location.href = "resultados.html";
    });

    const directions = document.querySelectorAll(".direction");
    directions.forEach(btn => {
      btn.addEventListener("click", () => {
        directions.forEach(x => x.classList.remove("active"));
        btn.classList.add("active");
        const origin = document.getElementById("origin");
        const destination = document.getElementById("destination");
        if (btn.dataset.value === "universidad") {
          destination.value = "Universidad Continental";
          origin.placeholder = "Ej. Av. Ferrocarril 123";
        } else {
          origin.value = "Universidad Continental";
          destination.value = "";
          destination.placeholder = "Ej. Av. Ferrocarril 123";
        }
      });
    });
  }

  const createTripForm = document.getElementById("createTripForm");
  if (createTripForm) {
    createTripForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("¡Viaje publicado correctamente!");
      window.location.href = "conductor.html";
    });
  }

  const emergency = document.querySelector(".emergency");
  if (emergency) {
    emergency.addEventListener("click", () => {
      alert("🚨 Emergencia simulada. En una versión real se contactaría a los servicios de emergencia y al administrador.");
    });
  }
});
