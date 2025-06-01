// Hiệu ứng typewriter cho hero section
const typeWriter = (elementId, text, speed = 100) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Hiệu ứng scroll mượt mà cho các liên kết navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Thay đổi style navbar khi scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Hiệu ứng hiển thị khi scroll đến phần tử
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

// Render danh sách khóa học
function renderCourses() {
    const courseGrid = document.querySelector('.course-grid');
    const courses = [
        {
            title: 'Lập trình Web cơ bản',
            instructor: 'Nguyễn Văn A',
            rating: 4.8,
            students: 1250,
            price: '499,000đ',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
        },
        {
            title: 'Thiết kế UX/UI chuyên nghiệp',
            instructor: 'Trần Thị B',
            rating: 4.9,
            students: 980,
            price: '599,000đ',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
        },
        {
            title: 'Khoa học dữ liệu cơ bản',
            instructor: 'Lê Văn C',
            rating: 4.7,
            students: 870,
            price: '699,000đ',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
        },
        {
            title: 'Tiếng Anh giao tiếp',
            instructor: 'Phạm Thị D',
            rating: 4.9,
            students: 2100,
            price: '399,000đ',
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
        }
    ];

    // Render courses
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course-card animate';
        courseElement.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="course-info">
                <h3>${course.title}</h3>
                <p class="instructor">Giảng viên: ${course.instructor}</p>
                <div class="rating">
                    <span class="stars">${'★'.repeat(Math.floor(course.rating))}${'☆'.repeat(5-Math.floor(course.rating))}</span>
                    <span>(${course.rating})</span>
                    <span class="students">${course.students.toLocaleString()} học viên</span>
                </div>
                <div class="price">${course.price}</div>
                <button class="enroll-btn">Đăng ký ngay</button>
            </div>
        `;
        courseGrid.appendChild(courseElement);
    });
}

// Hiệu ứng đếm số
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target.toLocaleString();
        }
    });
}

// Xử lý modal đăng nhập/đăng ký
function setupModal() {
    const modal = document.querySelector('.modal');
    const loginBtn = document.querySelector('.login');
    const signupBtn = document.querySelector('.signup');

    // Mở modal
    function openModal(tab = 'login') {
        modal.style.display = 'block';
        document.querySelector(`[data-tab="${tab}"]`).click();
    }

    loginBtn.addEventListener('click', () => openModal('login'));
    signupBtn.addEventListener('click', () => openModal('signup'));

    // Đóng modal
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Chuyển tab
    modal.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            modal.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const tabId = this.getAttribute('data-tab');
            modal.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(tabId).style.display = 'block';
        });
    });

    // Đóng khi click bên ngoài modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Xử lý form
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Đăng nhập thành công!');
        modal.style.display = 'none';
    });

    document.getElementById('signupForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Đăng ký thành công!');
        modal.style.display = 'none';
    });
}

// Khởi tạo khi trang tải xong
window.addEventListener('DOMContentLoaded', () => {
    typeWriter('hero-title', 'Nâng cao kỹ năng với các khóa học trực tuyến');
    renderCourses();
    setupModal();
    
    // Kích hoạt animation khi scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Kiểm tra ngay khi tải trang
    
    // Kích hoạt counter khi scroll đến
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            observer.unobserve(entries[0].target);
        }
    });
    observer.observe(document.querySelector('.stats'));
    
    // Thêm sự kiện cho nút CTA
    document.querySelector('.cta').addEventListener('click', () => {
        document.querySelector('.signup').click();
    });
    
    // Thêm sự kiện cho nút đăng ký khóa học
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('enroll-btn')) {
            document.querySelector('.signup').click();
        }
    });
});