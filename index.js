function gotoShop() {
    const a = document.getElementById("home").style
    const b = document.getElementById("shop").style
    const c = document.getElementById("contact").style

    a.display = "none"
    b.display = "flex"
    c.display = "none"

    document.getElementById("b").style.color = "pink"
    document.getElementById("c").style.color = "black"
    document.getElementById("a").style.color = "black"

}
function gotoContact() {
    const a = document.getElementById("home").style
    const b = document.getElementById("shop").style
    const c = document.getElementById("contact").style

    a.display = "none"
    b.display = "none"
    c.display ="flex"

    document.getElementById("c").style.color = "pink"
    document.getElementById("a").style.color = "black"
    document.getElementById("b").style.color = "black"
}
function gotoHome() {
    const a = document.getElementById("home").style
    const b = document.getElementById("shop").style
    const c = document.getElementById("contact").style

    a.display = "flex"
    b.display = "none"
    c.display = "none"

    document.getElementById("a").style.color = "pink"
    document.getElementById("b").style.color = "black"
    document.getElementById("c").style.color = "black"
}

