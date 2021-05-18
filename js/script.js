$('.section__slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        dots: false
      }
    },
  ]
});
function myFunction(x) {
  x.classList.toggle("change");
}
// burger.style.left = "-100%"
function burgermenu() {
  var burger = document.querySelector(".burger__menu")
  if (burger.style.left === "-1000px") {
    burger.style.left = "0px"
  } else {
    burger.style.left = "-1000px"
  }
}
burgermenu();
var pageWidth = window.innerWidth
if(pageWidth <= "900") {
  let listItem = document.querySelectorAll('.first_item');
  // let f_nav_items = document.querySelectorAll(".footer_nav_item");
  listItem.forEach(item => {
    item.onclick = () => {
      var hideMenu = item.nextElementSibling;
      if (hideMenu.style.display === "none") {
        hideMenu.style.display = "block";
      } else {
        hideMenu.style.display = "none";
      }
    }
  })
}else {
  console.log(false);
}
document.querySelectorAll('.first_item').forEach(function (element) {
  if (element.style.display = "block"){
      element.click();
  }
});
