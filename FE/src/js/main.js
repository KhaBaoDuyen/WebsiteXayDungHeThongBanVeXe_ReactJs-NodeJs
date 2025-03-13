

// heder- slide comment
const comments = [
   "“Tuyến Sài Gòn - Đà Lạt dịch vụ tốt, tài xế vui vẻ, xe sạch sẽ! ⭐⭐⭐⭐⭐”",
   "“Xe chạy êm, đặt vé nhanh chóng. Rất hài lòng! 👍”",
   "“Tài xế thân thiện, dịch vụ chuyên nghiệp. ⭐⭐⭐⭐”",
   "“Giá cả hợp lý, đặt vé tiện lợi. Chắc chắn sẽ quay lại! ❤️”",
   "“Chuyến đi thoải mái, không bị say xe. Rất tuyệt vời! 🌟”"
];

let currentIndex = 0;
const commentContainer = document.getElementById("comment-container");

function updateComment() {
   commentContainer.textContent = comments[currentIndex];
   commentContainer.style.width = "auto";
}

function nextComment() {
   currentIndex = (currentIndex + 1) % comments.length;
   updateComment();
}
setInterval(nextComment, 3000);

// ----- thư viện
document.addEventListener('DOMContentLoaded', function () {
   const swiper = new Swiper('.mySwiper', {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
   });


   const menuToggle = document.getElementById("menu-toggle");
   const mobileDropdownMenu = document.getElementById("mobileDropdownMenu");

   menuToggle.addEventListener("click", function () {
      mobileDropdownMenu.classList.toggle("hidden");
   });


   let menu = document.getElementById("menu");
   let main = document.querySelector("main");

   if (main && main.id === "home") {
      window.addEventListener("scroll", function () {
         if (window.scrollY > 50) {
            menu.classList.remove("bg-transparent");
            menu.classList.add("bg-[#043175]");
         } else {
            menu.classList.remove("bg-[#043175]");
            menu.classList.add("bg-transparent");
         }
      });
   } else {
      menu.classList.remove("bg-transparent");
      menu.classList.add("bg-[#043175]");
   }





   //--------------- chuuyển động xe 

   const bus = document.getElementById("bus");

   if (bus) {
      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               bus.classList.add("bus-move");
            }
         });
      }, { threshold: 0.5 });

      observer.observe(bus);
   }


});