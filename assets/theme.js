let theme = localStorage.getItem('theme')
let switchedCounter = 0

let lightModeHTML = `
   <img src="https://img.icons8.com/material-sharp/64/f0f0f0/sun.png" alt="Light Mode"/>
`
let darkModeHTML = `
   <img src="https://img.icons8.com/material-sharp/64/000000/moon.png" alt="Dark Mode"/>
`
let rainModeHTML = `
   <img src="/assets/images/frog.gif" alt="Rain Mode"/>
`

function themeButton(theme) {
   let button = document.getElementById("theme-toggle")

   if (theme === 'light') {
      button.innerHTML = lightModeHTML
   } else if (theme === 'dark') {
      button.innerHTML = darkModeHTML
   } else if (theme === 'rainbow') {
      button.innerHTML = rainModeHTML
   }
}

function themeAttribute(theme) {
   if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
   } else if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
   } else if (theme === 'rainbow') {
      document.documentElement.setAttribute('data-theme', 'rainbow')
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
   } else if (theme === 'rainbow') {
      themeAttribute('rainbow')
      localStorage.setItem('theme', 'rainbow')
      themeButton('rainbow')
   }
}


function modeSwitcher() {
   switchedCounter++ // is reset at page load

   let theme = localStorage.getItem('theme')

   if (switchedCounter > 13 && theme !== 'rainbow') {
      setTheme('rainbow')
      console.log('RAINBOW ACTIVATED')
   } else if (theme === 'rainbow') {
      setTheme('light')
      switchedCounter = 0
   } else if (theme === "dark") {
      setTheme('light')
   } else if (theme === "light") {
      setTheme('dark')
   }
}

// overly specific here to prevent usage of false storage contents
if (theme === "dark") {
   setTheme('dark')
} else if (theme === "light") {
   setTheme('light')
} else if (theme === "rainbow") {
   setTheme('rainbow')
}
