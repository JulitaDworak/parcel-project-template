!function(){var t,e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),n=document.querySelector("body");function a(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(){t=setInterval((function(){n.style.backgroundColor=a()}),1e3),e.disabled=!0,o.disabled=!1})),o.addEventListener("click",(function(){clearInterval(t),console.log("Interval with id ".concat(t," has stopped!")),e.disabled=!1,o.disabled=!0})),console.log(a())}();
//# sourceMappingURL=01-color-switcher.07909448.js.map
