const bouton = document.getElementById("toggle");

// 1. Vérifie si le dark mode était activé la dernière fois
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}

// 2. Quand on clique sur le bouton
bouton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // 3. Sauvegarde l’état actuel dans localStorage
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDark);
});
