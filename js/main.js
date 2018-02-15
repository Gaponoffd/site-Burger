
  //Скролы
$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: "#myMenu"
    });
});

//Слайдер
$('.burgers__content').slick();

///Мобильная версия меню
var navMobBtnOpen = document.querySelector('.hmbrg-menu__link');
var navMobBtnClose = document.querySelector('.close__link');
var navMobBtn = document.querySelector('.nav-mobile');

navMobBtnOpen.addEventListener('click', function(e){
    e.preventDefault();
    navMobBtn.classList.add('nav-mobile_activ')
})

navMobBtnClose.addEventListener('click', function(e){
    e.preventDefault();
    navMobBtn.classList.remove('nav-mobile_activ')
})

/////Аккордеоны 
////team

var teamName = document.querySelectorAll(".team__link");
var teamItem = document.querySelectorAll(".team__elem");
for (let i = 0; i < teamName.length; i++) {
    teamName[i].addEventListener("click", function(e) {

        e.preventDefault();

        for (let j = 0; j < teamItem.length; j++) {
            if (j !== i) {
                teamItem[j].classList.remove("team__elem_activ");
            };
        };

        this.closest('.team__elem').classList.toggle("team__elem_activ");
    });
};

////menu
var teamNameMenu = document.querySelectorAll(".menu__link");
var teamItemMenu = document.querySelectorAll(".menu__elem");
for (let l = 0; l < teamNameMenu.length; l++) {
    teamNameMenu[l].addEventListener("click", function(e) {

        e.preventDefault();

        for (let y = 0; y < teamItemMenu.length; y++) {
            if (y !== l) {
                teamItemMenu[y].classList.remove("menu__elem_activ");
            };
        };

        this.closest('.menu__elem').classList.toggle("menu__elem_activ");
    });
};

///Оверлей
var reviewsOverlay = document.querySelector('.reviews-overlay');
var reviewsOverlayClose = document.querySelector('.reviews-overlay__close');
var reviewsLink = document.querySelectorAll('.reviews__link');


for (k=0; k<reviewsLink.length; k++){
    reviewsLink[k].addEventListener('click', function(e){
        e.preventDefault()
        reviewsOverlay.classList.add('reviews-overlay_activ')
    })    
  
}

reviewsOverlayClose.addEventListener('click', function(e){
    e.preventDefault()
    reviewsOverlay.classList.remove('reviews-overlay_activ')
})    
