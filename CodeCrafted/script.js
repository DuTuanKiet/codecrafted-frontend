// Biến toàn cục cho slideshow
let currentSlide = 0; // Chỉ số slide hiện tại
const slides = document.querySelectorAll(".slide"); // Các slide ảnh
const dots = document.querySelectorAll(".dot"); // Các dot điều hướng

// Khai báo biến cho nút prev và next
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

// Modal Elements
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const modalCloseBtn = document.getElementById("modal-close-btn");

// Dữ liệu khoá học
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

// Bắt sự kiện cho nút prev
btnPrev.addEventListener("click", () => {
  showSlide(currentSlide - 1);
  resetInterval(); // Reset timer tự động chuyển slide
});

// Bắt sự kiện cho nút next
btnNext.addEventListener("click", () => {
  showSlide(currentSlide + 1);
  resetInterval();
});

// Click vào dot điều hướng
dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    showSlide(idx);
    resetInterval();
  });
});

// Tự động chuyển slide mỗi 4 giây
let slideInterval = setInterval(() => {
  showSlide(currentSlide + 1);
}, 4000);

// Hàm reset interval khi người dùng tương tác
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 4000);
}

// Khởi tạo slideshow ở slide đầu tiên
showSlide(currentSlide);

// Scroll event: header, back to top, fade-in
const backToTopBtn = document.getElementById("backToTop");
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  // Hiện/ẩn nút back to top
  if (window.scrollY > 100) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }

  // Thêm class scrolled cho header khi cuộn xuống
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Hiệu ứng fade-in cho các phần tử có class .fade-in
  document.querySelectorAll(".fade-in").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Cuộn mượt tới section "#"
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
const authBtn = document.getElementById("authBtn");
const authModal = document.getElementById("authModal");
const closeAuthModal = document.getElementById("closeAuthModal");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const modaltitle = document.getElementById("modal-title");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

// Mở modal với form đăng nhập mặc định
authBtn.addEventListener("click", () => {
  modalTitle.textContent = "Đăng nhập";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  showRegister.style.display = "inline";
  showLogin.style.display = "none";
  authModal.style.display = "flex";
  authModal.setAttribute("aria-hidden", "false");
});

// Đóng modal
closeAuthModal.addEventListener("click", () => {
  authModal.style.display = "none";
  authModal.setAttribute("aria-hidden", "true");
});

// Chuyển sang form đăng ký
showRegister.addEventListener("click", (e) => {
  e.preventDefault();
  modalTitle.textContent = "Đăng ký";
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  showRegister.style.display = "none";
  showLogin.style.display = "inline";
});

// Chuyển sang form đăng nhập
showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  modalTitle.textContent = "Đăng nhập";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  showRegister.style.display = "inline";
  showLogin.style.display = "none";
});

// Ngoài ra bạn có thể thêm logic đóng modal khi click ra ngoài modal nếu muốn
window.addEventListener("click", (e) => {
  if (e.target === authModal) {
    authModal.style.display = "none";
    authModal.setAttribute("aria-hidden", "true");
  }
});
// Xử lý nút "back to top" khi click
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // cuộn mượt
  });
});
