const setUpTheme = (themeName) => {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};

const changeTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "theme-light") {
    setUpTheme("theme-light");
  } else {
    setUpTheme("theme-dark");
  }
};

export { setUpTheme, changeTheme };
