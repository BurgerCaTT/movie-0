const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 20, 
    
    navigation: {
      nextEl: '.button-swiper-next',
      prevEl: '.button-swiper-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    speed: 600, // Điều chỉnh tốc độ chuyển tiếp
    

    breakpoints: {
      
      1: {
          slidesPerView: 2, 
          spaceBetween: 20, 
      },
      // Bạn có thể thêm các điểm dừng khác cho kích thước màn hình khác nếu cần
      
      576: {
          slidesPerView: 2,
          spaceBetween: 20, 
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20, 
      },

      992: {
        slidesPerView: 4,
        spaceBetween: 20, 
      },

      1200: {
        slidesPerView: 5, // Hiển thị 1 hình ảnh khi màn hình <= 575px
        spaceBetween: 20, // Khoảng cách giữa các hình ảnh khi màn hình <= 575px
    }
    }
  });

  
  

  const swiper1 = new Swiper('.swiper-container1', {
    loop: true,
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 20, 
    
    navigation: {
      nextEl: '.button-swiper-next',
      prevEl: '.button-swiper-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    speed: 600, // Điều chỉnh tốc độ chuyển tiếp
    

    breakpoints: {
      
      1: {
          slidesPerView: 2, 
          spaceBetween: 20, 
      },
      // Bạn có thể thêm các điểm dừng khác cho kích thước màn hình khác nếu cần
      
      576: {
          slidesPerView: 2,
          spaceBetween: 20, 
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20, 
      },

      992: {
        slidesPerView: 4,
        spaceBetween: 20, 
      },

      1200: {
        slidesPerView: 5, // Hiển thị 1 hình ảnh khi màn hình <= 575px
        spaceBetween: 20, // Khoảng cách giữa các hình ảnh khi màn hình <= 575px
    }
    }
  });
    