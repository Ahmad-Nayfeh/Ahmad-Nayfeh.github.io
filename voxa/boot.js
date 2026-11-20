// Applies the saved language and theme before first paint (kept in a file so the page needs no inline script).
(function () {
  try {
    var l = localStorage.getItem('voxa.lang') || 'ar';
    var t = localStorage.getItem('voxa.theme') || 'system';
    document.documentElement.lang = l;
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    if (t === 'dark' || (t === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
