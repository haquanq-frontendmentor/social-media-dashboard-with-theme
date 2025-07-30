const LOCAL_THEME_VAR = "user-pref-theme";
const savedThme = localStorage.getItem(LOCAL_THEME_VAR);
const themeInput = document.querySelector("#theme-btn");

function changeTheme(theme) {
    localStorage.setItem(LOCAL_THEME_VAR, theme);
    document.documentElement.setAttribute("data-theme", theme);
}

if (savedThme) {
    if (savedThme == "light") {
        themeInput.checked = true;
    }
    document.documentElement.setAttribute("data-theme", savedThme);
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    changeTheme("light");
}

themeInput.addEventListener("click", (e) => {
    document.body.classList.add("changing-theme");
    setTimeout(() => document.body.classList.remove("changing-theme"), 200);

    if (themeInput.checked) {
        changeTheme("light");
    } else {
        changeTheme("dark");
    }
});
