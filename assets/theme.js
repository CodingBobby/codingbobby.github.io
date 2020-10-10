let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)")
let theme = sessionStorage.getItem('theme')

let lightModeHTML = `
   <img src="https://img.icons8.com/material-sharp/64/f0f0f0/sun.png" alt="Light Mode"/>
`
let darkModeHTML = `
   <img src="https://img.icons8.com/material-sharp/24/000000/moon.png" alt="Dark Mode"/>
`

function themeButton(theme) {
   let button = document.getElementById("theme-toggle")

   if (theme === 'light') {
      button.innerHTML = lightModeHTML
   } else if (theme === 'dark') {
      button.innerHTML = darkModeHTML
   }
}

function themeAttribute(theme) {
   if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
   } else if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
   }
}

function setTheme(theme) {
   if (theme === 'light') {
      themeAttribute('light')
      sessionStorage.setItem('theme', 'light')
      themeButton('dark')
   } else if (theme === 'dark') {
      themeAttribute('dark')
      sessionStorage.setItem('theme', 'dark')
      themeButton('light')
   }
}

if (systemInitiatedDark.matches) {
   themeButton('light')
} else {
   themeButton('dark')
}

function prefersColorTest(systemInitiatedDark) {
   if (systemInitiatedDark.matches) {
      themeAttribute('dark')		
      themeButton('light')
      sessionStorage.setItem('theme', '')
   } else {
      themeAttribute('light')
      themeButton('dark')
      sessionStorage.setItem('theme', '')
   }
}
systemInitiatedDark.addListener(prefersColorTest)

function modeSwitcher() {
   let theme = sessionStorage.getItem('theme') 
   if (theme === "dark") {
      setTheme('light')
   }	else if (theme === "light") {
      setTheme('dark')
   } else if (systemInitiatedDark.matches) {	
      setTheme('light')
   } else {
      setTheme('dark')
   }
}

if (theme === "dark") {
   setTheme('dark')
} else if (theme === "light") {
   setTheme('light')
}
