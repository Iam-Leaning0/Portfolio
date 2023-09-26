const themeToggleBTn = document.querySelectorAll('#theme-Toggle');

// state
const theme = localStorage.getItem('theme');

// on mount
theme && document.body.classList.add(theme);

// Handlers 
const handleThemeToggle = () => {
  document.body.classList.toggle('light-mode');

  // keep theme state on the document load
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light-mode');
  } else {
    localStorage.removeItem('theme');
    document.body.removeAttribute('class');
  }

};

themeToggleBTn.forEach(btn =>
  btn.addEventListener('click', handleThemeToggle)
);

