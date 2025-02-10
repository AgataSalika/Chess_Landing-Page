/*=============== SWIPERSTEPS===============*/
const swiperSteps = new Swiper('.swiperSteps', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination-S',
    clickable: true,   
  },

  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
   1200: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.arrow_next-s',
    prevEl: '.arrow_prev-s',
  },
});


/*=============== SWIPERMEMBERS===============*/

const swiperMembers = new Swiper('.swiper.swiperMembers', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // swiper-pagination-fraction-color: #313131,
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.arrow_next-m',
    prevEl: '.arrow_prev-m',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});