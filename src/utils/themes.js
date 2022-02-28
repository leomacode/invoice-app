const setUpTheme = (themeName) => {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};

const changeTheme = (theme) => {
  theme === "theme-light"
    ? setUpTheme("theme-light")
    : setUpTheme("theme-dark");
};

export { setUpTheme, changeTheme };
