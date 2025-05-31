// ===== Biến toàn cục cho slideshow =====
let currentSlide = 0; // Chỉ số slide hiện tại
const slides = document.querySelectorAll(".slide"); // Các slide ảnh
const dots = document.querySelectorAll(".dot"); // Các dot điều hướng

// ===== Modal Elements =====
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// ===== Dữ liệu khoá học =====
const coursesData = {
  web: {
    title: "Khoá học Lập trình Web",
    content:
      "Học từ cơ bản đến nâng cao về HTML, CSS, JavaScript, giúp bạn tạo ra các trang web hiện đại và responsive.",
  },
  data: {
    title: "Khoá học Phân tích dữ liệu",
    content:
      "Sử dụng Python, Excel, và các công cụ phân tích để xử lý và trực quan hoá dữ liệu hiệu quả.",
  },
  uiux: {
    title: "Khoá học Thiết kế UI/UX",
    content:
      "Tìm hiểu cách thiết kế giao diện người dùng đẹp mắt, thân thiện, nâng cao trải nghiệm người dùng.",
  },
};

// Hàm hiển thị slide theo index
function showSlide(index) {
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active-dot"));

  slides[index].classList.add("active");
  dots[index].classList.add("active-dot");

  currentSlide = index;
  // Reset video nếu có trong slide hiện tại
  const currentVideo = slides[index].querySelector("video");
  if (currentVideo) {
    currentVideo.currentTime = 0;
    currentVideo.play();
  }
}

// Nút điều hướng trái
document.querySelector(".prev").addEventListener("click", () => {
  showSlide(currentSlide - 1);
  resetInterval(); // Reset timer tự động chuyển slide
});

// ===== Nút điều hướng phải =====
document.querySelector(".next").addEventListener("click", () => {
  showSlide(currentSlide + 1);
  resetInterval();
});

// ===== Click vào dot điều hướng =====
dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    showSlide(idx);
    resetInterval();
  });
});

// ===== Tự động chuyển slide mỗi 4 giây =====
let slideInterval = setInterval(() => {
  showSlide(currentSlide + 1);
}, 4000);

// ===== Hàm reset interval khi người dùng tương tác =====
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 4000);
}

// ===== Khởi tạo slideshow ở slide đầu tiên =====
showSlide(currentSlide);

// ===== Phần code modal và scroll event (giữ nguyên như bạn đã có) =====

// 2. Hiệu ứng scroll: header và fade-in
window.addEventListener("scroll", () => {
  const header = document.getElementById("mainHeader");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  document.querySelectorAll(".fade-in").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// 3. Cuộn mượt tới section "#courses"
document.querySelector('a[href="#courses"]').addEventListener("click", (e) => {
  e.preventDefault();
  const section = document.querySelector("#courses");
  section.scrollIntoView({ behavior: "smooth" });
});

// 4. Logic hiển thị Modal khi bấm vào khoá học
document.querySelectorAll(".course").forEach((course) => {
  course.addEventListener("click", () => {
    const key = course.getAttribute("data-course");
    if (coursesData[key]) {
      modalTitle.textContent = coursesData[key].title;
      modalContent.textContent = coursesData[key].content;
      modalOverlay.classList.add("active");

      // Khóa cuộn trang phía sau
      document.body.style.overflow = "hidden";
    }
  });
});

// 5. Đóng Modal: khi bấm nút close hoặc bên ngoài modal
modalCloseBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// 6. Đóng Modal: khi nhấn phím ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

showSlide(currentSlide);
