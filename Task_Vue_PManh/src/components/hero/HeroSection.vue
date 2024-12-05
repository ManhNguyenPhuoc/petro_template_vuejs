<template>
  <section class="hero">
    <div class="hero-left">
      <div class="hero-left-logo">
        <img src="/src/assets/img/logo-petro.png" alt="PetroVietnam BSR" />
      </div>
      <div class="hero-left-content">
        <div class="text-hero-left-content active">
          <h1>Khát vọng tiên phong</h1>
          <p>BSR tự hào là một trong những đơn vị hàng đầu trong ngành lọc hóa dầu tại Việt Nam</p>
        </div>

        <div class="btn-hero-left-content">
          <img src="/src/assets/img/next-icon.svg" alt="" />
          <img src="/src/assets/img/pre-icon.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="hero-right">
      <div class="slides">
        <!--radio buttons start-->
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        <!--radio buttons end-->

        <!--slide images start-->
        <div class="slide first">
          <img src="/src/assets/img/slider-ship-raw.png" alt="" />
        </div>
        <div class="slide">
          <img src="/src/assets/img/petrovietnam.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/src/assets/img/petrovietnam2.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/src/assets/img/petrovietnam3.jpg" alt="" />
        </div>
        <!--slide images end-->

        <!--automatic navigation start-->
        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>
        </div>
        <!-- end automatic nav start -->
      </div>

      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HeroComponent',
}
</script>

<style>
.hero {
  display: flex;
}

/* Slide */
.hero-right {
  width: 130%;
  height: 482px;
  border-radius: 0px 150px 150px 200px;
  margin-right: 70px;
  overflow: hidden;
}

.slides {
  width: 500%;
  height: 500px;
  display: flex;
}

.slides input {
  display: none;
}

.slide {
  width: 20%;
  transition: 2s;
}

.slide img {
  width: 100%;
  height: 482px;
}

/*css for manual slide navigation*/
.navigation-manual {
  position: absolute;
  width: 970px;
  margin-top: -40px;
  display: flex;
  justify-content: center;
}

.manual-btn {
  width: 20px;
  height: 5px;
  border: 2px solid #eaeaea;
  padding: 2px;
  border-radius: 100px;
  cursor: pointer;
  transition: 1s;
}

.manual-btn:not(:last-child) {
  margin-right: 40px;
}

.manual-btn:hover {
  background: var(
    --VER-1-Primary-color-gradient-3,
    linear-gradient(242deg, #ce0c14 5.95%, #ff4149 47.82%, #ce0c14 89.86%)
  );
}

#radio1:checked ~ .first {
  margin-left: 0;
}

#radio2:checked ~ .first {
  margin-left: -20%;
}

#radio3:checked ~ .first {
  margin-left: -40%;
}

#radio4:checked ~ .first {
  margin-left: -60%;
}

/*css for automatic navigation*/
.navigation-auto {
  position: absolute;
  display: flex;
  width: 970px;
  justify-content: center;
  margin-top: 460px;
}

.navigation-auto div {
  width: 20px;
  height: 5px;
  border: 2px solid #eaeaea;
  padding: 2px;
  border-radius: 100px;
  cursor: pointer;
  transition: 1s;
}

.navigation-auto div:not(:last-child) {
  margin-right: 40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1 {
  background: var(
    --VER-1-Primary-color-gradient-3,
    linear-gradient(242deg, #ce0c14 5.95%, #ff4149 47.82%, #ce0c14 89.86%)
  );
}

#radio2:checked ~ .navigation-auto .auto-btn2 {
  background: var(
    --VER-1-Primary-color-gradient-3,
    linear-gradient(242deg, #ce0c14 5.95%, #ff4149 47.82%, #ce0c14 89.86%)
  );
}

#radio3:checked ~ .navigation-auto .auto-btn3 {
  background: var(
    --VER-1-Primary-color-gradient-3,
    linear-gradient(242deg, #ce0c14 5.95%, #ff4149 47.82%, #ce0c14 89.86%)
  );
}

#radio4:checked ~ .navigation-auto .auto-btn4 {
  background: var(
    --VER-1-Primary-color-gradient-3,
    linear-gradient(242deg, #ce0c14 5.95%, #ff4149 47.82%, #ce0c14 89.86%)
  );
}
/* end slide */

.hero-left-logo {
  position: relative;
  width: 80%;
  height: 301px;
  margin-left: 75px;
  bottom: 61px;
}

.hero-left-content {
  position: relative;
  top: -27px;
  left: 70px;
  width: 110%;
  height: 180px;
  border-radius: 100px 0px 100px 100px;
  background: #22689b;
}

.text-hero-left-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 29px;
}

.text-hero-left-content p {
  color: var(--VER-1-Accent-default, #ffd700);
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-align: justify;
}

.text-hero-left-content h1 {
  color: var(--VER-1-Accent-default, #ffd700);
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  text-transform: uppercase;
  padding-top: 40px;
}

.btn-hero-left-content {
  display: flex;
  gap: 10px;
  position: relative;
  left: 75px;
  top: 20px;
}

.btn-hero-left-content img {
  cursor: pointer;
}

.next-icon-list {
  display: flex;
  justify-content: center;
  gap: 10px;
  position: relative;
  top: 451px;
}

.next-icon-item {
  width: 20px;
  height: 5px;
  border-radius: 100px;
  background: var(--VER-1-Neutral-color-50, #eaeaea);
}

.next-icon-item:hover {
  width: 30px;
  height: 5px;
  cursor: pointer;
  border-radius: 100px;
  background: var(
    --VER-1-Primary-color-gradient-3,
    linear-gradient(242deg, #ce0c14 5.95%, #ff4149 47.82%, #ce0c14 89.86%)
  );
}

/* Responsive */
@media screen and (min-width: 319px) and (max-width: 425.8px) {
  .text-hero-left-content h1 {
    font-size: 16px;
  }

  .text-hero-left-content p {
    font-size: 14px;
  }

  .hamburger {
    display: flex;
    padding: 30px 0 30px 30px;
  }

  .hero-left-logo img {
    width: 170px;
    height: 170px;
  }

  .hero-left-logo {
    left: -42px;
    bottom: -14px;
  }

  .hero-right {
    border-radius: 50px 50px 50px 50px;
    margin-right: 30px;
  }

  .text-hero-left-content {
    position: relative;
    bottom: 28px;
    left: 10px;
    gap: 10px;
    margin: 0 28px;
  }

  .hero-left-content {
    top: -27px;
    left: 24px;
    border-radius: 70px 0px 70px 70px;
  }

  .btn-hero-left-content {
    gap: 8px;
    left: 75px;
    top: -5px;
  }

  .navigation-auto {
    display: none;
  }

  .navigation-manual {
    display: none;
  }
}

@media screen and (min-width: 425.8px) and (max-width: 580px) {
  .text-hero-left-content h1 {
    font-size: 16px;
  }

  .text-hero-left-content p {
    font-size: 14px;
  }

  .hamburger {
    display: flex;
    padding: 30px 0 30px 30px;
  }

  .hero-left-logo img {
    width: 170px;
    height: 170px;
  }

  .hero-left-logo {
    left: -42px;
    bottom: -14px;
  }

  .hero-right {
    border-radius: 50px 50px 50px 50px;
    margin-right: 30px;
  }

  .text-hero-left-content {
    position: relative;
    bottom: 28px;
    left: 10px;
    gap: 10px;
    margin: 0 28px;
  }

  .hero-left-content {
    top: -27px;
    left: 24px;
    border-radius: 70px 0px 70px 70px;
  }

  .btn-hero-left-content {
    gap: 8px;
    left: 75px;
    top: -5px;
  }

  .navigation-auto {
    display: none;
  }

  .navigation-manual {
    display: none;
  }
}

@media screen and (min-width: 581px) and (max-width: 590px) {
  .text-hero-left-content h1 {
    font-size: 16px;
  }

  .text-hero-left-content p {
    font-size: 14px;
  }

  .hamburger {
    display: flex;
    padding: 30px 0 30px 30px;
  }

  .hero-left-logo img {
    width: 170px;
    height: 170px;
  }

  .hero-left-logo {
    bottom: -30px;
  }

  .hero-right {
    border-radius: 100px 100px 100px 100px;
    margin-right: 30px;
  }

  .hero-left-logo {
    left: -16px;
    bottom: -10px;
  }

  .text-hero-left-content {
    position: relative;
    bottom: 28px;
    left: 10px;
    gap: 10px;
    margin: 0 28px;
  }

  .hero-left-content {
    top: -27px;
    left: 40px;
    border-radius: 70px 0px 70px 70px;
  }

  .btn-hero-left-content {
    gap: 8px;
    left: 75px;
    top: -10px;
  }

  .navigation-auto {
    display: none;
  }

  .navigation-manual {
    display: none;
  }
}

@media screen and (min-width: 591px) and (max-width: 619px) {
  .hamburger {
    display: flex;
    padding: 30px 0 30px 30px;
  }

  .hero-left-logo img {
    width: 170px;
    height: 170px;
  }

  .hero-left-logo {
    bottom: -30px;
  }

  .hero-right {
    border-radius: 100px 100px 100px 100px;
    margin-right: 30px;
  }

  .hero-left-logo {
    left: -16px;
    bottom: -10px;
  }

  .text-hero-left-content p {
    font-size: 14px;
    font-weight: 350;
  }

  .text-hero-left-content h1 {
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
  }

  .text-hero-left-content {
    position: relative;
    bottom: 28px;
    left: 10px;
    gap: 10px;
    margin: 0 28px;
  }

  .hero-left-content {
    top: -27px;
    left: 40px;
    border-radius: 70px 0px 70px 70px;
  }

  .btn-hero-left-content {
    gap: 8px;
    left: 75px;
    top: -10px;
  }

  .navigation-auto {
    display: none;
  }

  .navigation-manual {
    display: none;
  }
}

@media screen and (min-width: 620px) and (max-width: 768px) {
  /* Show hamburger menu */
  .hamburger {
    display: flex;
    padding: 30px 0 30px 30px;
  }

  .hero-left-logo img {
    width: 170px;
    height: 170px;
  }

  .hero-left-logo {
    bottom: -30px;
  }

  .hero-right {
    border-radius: 100px 100px 100px 100px;
    margin-right: 30px;
  }

  .hero-left-logo {
    left: -16px;
    bottom: -10px;
  }

  .text-hero-left-content p {
    font-size: 16px;
    font-weight: 350;
  }

  .text-hero-left-content h1 {
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
  }

  .text-hero-left-content {
    position: relative;
    bottom: 28px;
    left: 10px;
    gap: 10px;
    margin: 0 28px;
  }

  .hero-left-content {
    top: -27px;
    left: 40px;
    border-radius: 70px 0px 70px 70px;
  }

  .btn-hero-left-content {
    gap: 8px;
    left: 75px;
    top: -10px;
  }

  .navigation-auto {
    display: none;
  }

  .navigation-manual {
    display: none;
  }
}

@media screen and (min-width: 769px) and (max-width: 884px) {
  .navigation-auto {
    display: none;
  }

  .navigation-manual {
    display: none;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .hero-left-logo {
    position: relative;
    width: 80%;
    height: 301px;
    margin-left: 40px;
    bottom: 30px;
    padding-right: 30px;
  }

  .hero-left-logo img {
    width: 200px;
    height: 200px;
  }

  .hero-right {
    width: 190%;
    height: 482px;
    margin-right: 20px;
  }

  .text-hero-left-content p {
    font-size: 16px;
    font-weight: 350;
  }

  .text-hero-left-content h1 {
    font-size: 20px;
    font-weight: 700;
  }

  .text-hero-left-content {
    position: relative;
    bottom: 28px;
    left: 10px;
    gap: 10px;
    margin: 0 28px;
  }

  .hero-left-content {
    position: relative;
    top: -27px;
    left: 40px;
    width: 110%;
    height: 180px;
    border-radius: 100px 0px 100px 100px;
    background: #22689b;
  }

  .next-icon-item {
    width: 20px;
    height: 5px;
  }

  .btn-hero-left-content {
    width: 32px;
    height: 32px;
    gap: 8px;
    left: 75px;
    top: -24px;
  }

  .navigation-manual {
    width: 734px;
  }

  .navigation-auto {
    width: 734px;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1300px) {
  .btn-hero-left-content {
    display: flex;
    gap: 10px;
    position: relative;
    left: 75px;
    top: -8px;
  }

  .hero-left-logo img {
    width: 250px;
    height: 250px;
  }

  .text-hero-left-content {
    gap: 12px;
  }

  .text-hero-left-content p {
    font-size: 20px;
    font-weight: 350;
  }

  .text-hero-left-content h1 {
    font-size: 24px;
    font-weight: 700;
  }

  .navigation-manual {
    width: 734px;
  }

  .navigation-auto {
    width: 734px;
  }
}

@media screen and (min-width: 1256px) and (max-width: 1300px) {
  .btn-hero-left-content {
    left: 75px;
    top: -6px;
  }

  .navigation-manual {
    width: 816px;
  }

  .navigation-auto {
    width: 816px;
  }

  .line-circle {
    width: 954px;
    height: 900px;
  }
}
</style>
