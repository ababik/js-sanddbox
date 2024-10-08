document.addEventListener("readystatechange", () => {
    console.log("readystatechange", document.readyState)
})
window.addEventListener("load", () => {
    console.log("load")
})
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded")
    const script = document.createElement("script")
    script.setAttribute("src", "dependency.js")
    script.setAttribute("async", "true")
    document.body.appendChild(script)
})

