const setUpTheme = (themeName) => {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};

const changeTheme = (theme) => {
  if (theme === "theme-light") {
    setUpTheme("theme-light");
  } else {
    setUpTheme("theme-dark");
  }
};

export { setUpTheme, changeTheme };
