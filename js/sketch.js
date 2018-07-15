const navLinks = document.querySelectorAll(".header__nav--links-item")
const bar = document.querySelector(".header__nav--bars-img")
const body = document.querySelector("body")
const wrapper = document.querySelector(".wrapper")

bar.addEventListener("click", () => {

  wrapper.classList.add("view")

  let newNav = document.createElement("div")

  let img = document.createElement("img")
  img.setAttribute("src", "http://cdn.onlinewebfonts.com/svg/img_327564.png")

  body.appendChild(newNav)

  newNav.appendChild(img)

  wrapper.classList.add("header__newNav")

  let newNav__lists = '<ul class="header__newNav--links">'

  for (let i = 0; i < navLinks.length; i++) {

    console.log(navLinks[i].textContent);

    newNav__lists += '<li class="header__newNav--links-item">' +
      "<a>" +
      navLinks[i].textContent +
      "</a></li>"
  }

  newNav__lists += "</ul>"

  newNav.innerHTML = newNav__lists

})