// فتح وإغلاق القائمة الثلاثية
const toggleBtn = document.querySelector('.menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});

// تغيير اللغة
const languageSelector = document.getElementById('language-selector');

if (languageSelector) {
  languageSelector.addEventListener('change', function () {
    const selectedLang = this.value;
    alert('تم اختيار اللغة: ' + selectedLang + ' (سيتم دعم الترجمة قريباً)');
    // هنا يمكنك لاحقاً تغيير المحتوى حسب اللغة
  });
}

// إشعار بسيط للمستقبل
window.addEventListener('load', () => {
  console.log("مرحبًا بك في Taibi Exchange - واجهة جاهزة للتطوير!");
});