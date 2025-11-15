// modo claro / oscuro
const btn = document.getElementById('themeToggle');
const body = document.body;

// si ya tenía un tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.className = savedTheme;
  btn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

btn.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  const isDark = body.classList.contains('dark');
  btn.textContent = isDark ? '☀️' : '🌙';

  // guardar preferencia
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
