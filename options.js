var arctic = document.getElementById('arctic')
var swamp = document.getElementById('swamp')
var deep = document.getElementById('deeeep')
var ocean = document.getElementById('ocean')
var onevone = document.getElementById('1v1')
var pd = document.getElementById('pd')
var menu = document.getElementById('menu')


if (localStorage.arctic == undefined) {
  localStorage.arctic = ""
}
if (localStorage.swamp == undefined) {
  localStorage.swamp = ""
}
if (localStorage.deep == undefined) {
  localStorage.deep = ""
}
if (localStorage.ocean == undefined) {
  localStorage.ocean = ""
}
if (localStorage.onevone == undefined) {
  localStorage.onevone = ""
}
if (localStorage.pd == undefined) {
  localStorage.pd = ""
}
if (localStorage.menu == undefined) {
  localStorage.menu = ""
}

arctic.value = localStorage.arctic
swamp.value = localStorage.swamp
deep.value = localStorage.deep
ocean.value = localStorage.ocean
onevone.value = localStorage.onevone
pd.value = localStorage.pd
menu.value = localStorage.menu


arctic.addEventListener("change", function() {
  localStorage.arctic = arctic.value
});

swamp.addEventListener("change", function() {
  localStorage.swamp = swamp.value
});

deep.addEventListener("change", function() {
  localStorage.deep = deep.value
});

ocean.addEventListener("change", function() {
  localStorage.ocean = ocean.value
});

onevone.addEventListener("change", function() {
  localStorage.onevone = onevone.value
})

pd.addEventListener("change", function() {
  localStorage.pd = pd.value
})

menu.addEventListener("change", function() {
  localStorage.menu = menu.value
})

document.getElementById("save").onclick = function() {
  localStorage.arctic = arctic.value
  localStorage.swamp = swamp.value
  localStorage.deep = deep.value
  localStorage.ocean = ocean.value
  localStorage.onevone = onevone.value
  localStorage.pd = pd.value
  localStorage.menu = menu.value

}
