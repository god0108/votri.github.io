document.getElementById("enterButton").addEventListener("click", function() {
    document.body.classList.add("hide");
  
    setTimeout(function() {
      document.querySelector(".landing-page").style.display = "none";
      document.querySelector(".slideshow-container").style.display = "block";
      document.body.classList.remove("hide");
    }, 1000);
  });
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const messages = document.getElementsByClassName("message");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        messages[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    messages[slideIndex - 1].style.display = "block";

    // Dừng slide trong 1 phút (60000ms) trước khi tự động chuyển tiếp
    setTimeout(function() {
        plusSlides(1);
    }, 300000);
}

function plusSlides(n) {
    clearTimeout(); // Xóa bỏ bất kỳ setTimeout đang chạy

    slideIndex += n;
    const slides = document.getElementsByClassName("mySlides");
    const messages = document.getElementsByClassName("message");

    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        messages[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    messages[slideIndex - 1].style.display = "block";

    // Dừng slide trong 1 phút (60000ms) trước khi tự động chuyển tiếp
    setTimeout(function() {
        plusSlides(1);
    }, 300000);
}

const slides = document.getElementsByClassName("mySlides");
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 39) { // Kiểm tra xem mã phím có phải là spacebar (32)
      event.preventDefault(); // Ngăn chặn hành vi mặc định của spacebar (cuộn trang)
      plusSlides(1);
    }
    else if (event.keyCode === 37) { // Kiểm tra xem mã phím có phải là mũi tên trái (37)
    event.preventDefault(); // Ngăn chặn hành vi mặc định của mũi tên trái (di chuyển đến trang trước)
    plusSlides(-1); // Quay lại slide trước đó
  }
  });
  for (let i = 0; i < slides.length; i++) {
    if (i === 0) {
        slides[i].addEventListener("click", function() {
            plusSlides(1);
        });
      }
    
}
