let theme = localStorage.getItem('theme')

let lightModeHTML = `
   <img src="https://img.icons8.com/material-sharp/64/f0f0f0/sun.png" alt="Light Mode"/>
`
let darkModeHTML = `
   <img src="https://img.icons8.com/material-sharp/64/000000/moon.png" alt="Dark Mode"/>
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
      localStorage.setItem('theme', 'light')
      themeButton('dark')
   } else if (theme === 'dark') {
      themeAttribute('dark')
      localStorage.setItem('theme', 'dark')
      themeButton('light')
   }
}


function modeSwitcher() {
   let theme = localStorage.getItem('theme') 
   if (theme === "dark") {
      setTheme('light')
   }	else if (theme === "light") {
      setTheme('dark')
   }
}

if (theme === "dark") {
   setTheme('dark')
} else { // if light or none is set
   setTheme('light')
}
