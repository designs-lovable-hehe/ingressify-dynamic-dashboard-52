
export const getInitialTheme = (): boolean => {
  // Check if theme was previously set
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  
  // Check system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const setTheme = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};
