console.log("Hello, World!");

// Cool JavaScript code to change the background color every second
   export function changeBackground() {
    setInterval(() => {
      document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }, 1000);
  }