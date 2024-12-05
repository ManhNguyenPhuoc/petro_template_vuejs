<template>
  <header class="header">
    <!-- Hamburger Menu -->
    <div class="hamburger" @click="toggleDropdown">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Navigation Menu -->
    <nav class="nav">
      <ul class="nav-list">
        <li><a href="#">Về BSR</a></li>
        <li><a href="#">Tin tức - Sự kiện</a></li>
        <li><a href="#">Sản phẩm - Dịch vụ</a></li>
        <li><a href="#">Nhà đầu tư</a></li>
        <li><a href="#">Đối tác</a></li>
      </ul>
    </nav>

    <!-- Social Icons -->
    <div class="social-icons">
      <a href="#"><img src="/src/assets/img/zalo_new.jpg" alt="Zalo" /></a>
      <a href="https://www.facebook.com/manh.phuoc.9615">
        <img src="/src/assets/img/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://www.youtube.com/watch?v=sAoRIcdIUjU">
        <img src="/src/assets/img/youtube.svg" alt="YouTube" />
      </a>
    </div>

    <!-- Hidden Dropdown Menu (Mobile) -->
    <nav class="dropdown-menu" :class="{ show: isDropdownVisible }">
      <ul>
        <li><a href="#">VỀ BSR</a></li>
        <li><a href="#">TIN TỨC - SỰ KIỆN</a></li>
        <li><a href="#">SẢN PHẨM - DỊCH VỤ</a></li>
        <li><a href="#">NHÀ ĐẦU TƯ</a></li>
        <li><a href="#">ĐỐI TÁC</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isDropdownVisible: false, // Dùng để điều khiển việc hiển thị/ẩn dropdown
    }
  },
  methods: {
    // Hàm toggle dropdown menu khi nhấn vào hamburger
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible
    },
  },
}
</script>

<style>
.hamburger {
  display: none; /* Hidden by default */
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #004d99;
  border-radius: 2px;
}

/* Dropdown menu for hamburger */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 3px #004d99;
  padding: 10px 0;
  z-index: 1;
}

.dropdown-menu.show {
  display: block;
  opacity: 1;
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu ul li {
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}

.dropdown-menu ul li a {
  text-decoration: none;
  color: #004d99;
  font-size: 1rem;
}

.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  text-align: right;
}

.nav-list li a {
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 30px 18px;
  color: #23689b;
  font-weight: 600;
  line-height: 20px;
}

.nav-list li a:hover {
  background: var(
    --VER-1-Primary-color-gradient-1,
    linear-gradient(229deg, #084f82 3.95%, #63a9dc 83.28%)
  );
  box-shadow: -3px -4px 10px 0px #1b5ca8 inset;
  color: var(--VER-1-Neutral-color-light, #fff);
}

.social-icons {
  display: flex;
  gap: 8px;
  margin-left: 130px;
  margin-right: 70px;
  padding-right: 8px;
}

.social-icons img {
  width: 40px;
  height: 40px;
}

/* Responsive */
@media screen and (min-width: 319px) and (max-width: 425.8px) {
  .social-icons img {
    width: 30px;
    height: 30px;
  }

  .header {
    justify-content: space-between;
    border-width: 1px 0;
  }
  .nav {
    display: none;
  }

  .hamburger {
    display: flex;
    padding: 30px 0 30px 30px;
  }

  .social-icons {
    margin-right: 16px;
  }
}
@media screen and (min-width: 425.8px) and (max-width: 580px) {
  .social-icons img {
    width: 30px;
    height: 30px;
  }

  .header {
    justify-content: space-between;
    border-width: 1px 0;
  }
  .nav {
    display: none;
  }

  .hamburger {
    display: flex;
    padding: 30px 0 30px 30px;
  }

  .social-icons {
    margin-right: 16px;
  }
}
@media screen and (min-width: 581px) and (max-width: 590px) {
  .header {
    justify-content: space-between;
    border-width: 1px 0;
  }
  .nav {
    display: none;
  }

  .hamburger {
    display: flex;
    padding: 30px 0 30px 30px;
  }

  .social-icons {
    margin-right: 20px;
  }
}

@media screen and (min-width: 591px) and (max-width: 619px) {
  .header {
    justify-content: space-between;
    border-width: 1px 0;
  }
  .nav {
    display: none;
  }

  .hamburger {
    display: flex;
    padding: 30px 0 30px 30px;
  }

  .social-icons {
    margin-right: 20px;
  }
}
@media screen and (min-width: 620px) and (max-width: 768px) {
  .header {
    justify-content: space-between;
    border-width: 1px 0;
  }
  .nav {
    display: none;
  }

  /* Show hamburger menu */
  .hamburger {
    display: flex;
    padding: 30px 0 30px 30px;
  }

  .social-icons {
    margin-right: 20px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .nav-list li a {
    font-size: 12px;
  }

  .social-icons {
    margin-left: 20px;
    margin-right: 10px;
    padding-right: 8px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1300px) {
  .nav-list li a {
    font-size: 14px;
  }

  .social-icons img {
    width: 32px;
    height: 32px;
  }

  .social-icons {
    margin-left: 80px;
    margin-right: 70px;
    padding-right: 8px;
  }
}
</style>
