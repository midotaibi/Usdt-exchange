document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  menuToggle.addEventListener("click", function () {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });

  const languageSelector = document.getElementById("language-selector");
  languageSelector.addEventListener("change", function () {
    const selectedLang = languageSelector.value;
    alert("سيتم تغيير اللغة إلى: " + selectedLang);
    // يمكنك مستقبلاً ترجمة المحتوى تلقائياً هنا حسب اللغة
  });
});