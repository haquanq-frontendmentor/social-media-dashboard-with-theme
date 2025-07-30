const LOCAL_THEME_VAR = "user-pref-theme";
const THEMES = { LIGHT: "light", DARK: "dark" };

const savedThme = localStorage.getItem(LOCAL_THEME_VAR);
const preferDarkColorScheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeInput = document.querySelector("#theme-btn");

const setTheme = (theme) => {
    localStorage.setItem(LOCAL_THEME_VAR, theme);
    document.documentElement.setAttribute("data-theme", theme);
};

requestAnimationFrame(() => {
    if (savedThme) {
        themeInput.checked = savedThme == THEMES.LIGHT;
        document.documentElement.setAttribute("data-theme", savedThme);
    } else if (preferDarkColorScheme) {
        setTheme(THEMES.DARK);
    }
});

themeInput.addEventListener("click", (e) => {
    setTheme(themeInput.checked ? THEMES.LIGHT : THEMES.DARK);
});
