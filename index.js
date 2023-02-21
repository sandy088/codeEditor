let code = document.getElementById("code")

code.addEventListener("input", function(){
    code.innerHTML = Prism.highlight(code.value, Prism.languages.javascript, "javascript");
})