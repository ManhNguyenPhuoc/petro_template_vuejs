<template>
  <!-- Section 4 -->
  <section class="GTCL">
    <div class="GTCL-container">
      <h1 class="GTCL-title">GIÁ TRỊ CỐT LÕI</h1>
      <div class="GTCL-center-logo">
        <img src="/src/assets/img/logo-petro.png" alt="PetroVietnam BSR Logo" />
      </div>
      <div class="GTCL-curve-icons">
        <div class="GTCL-icon-item icon-side-left icon-beside">
          <img src="/src/assets/img/fire-shield.png" alt="Icon 1" />
        </div>
        <div class="GTCL-icon-item icon-middle-side">
          <img src="/src/assets/img/blue-people.png" alt="Icon 2" />
        </div>
        <div class="GTCL-icon-item icon-middle-item">
          <img src="/src/assets/img/doan-ket.png" alt="Icon 3" />
        </div>
        <div class="GTCL-icon-item icon-middle-side">
          <img src="/src/assets/img/bong-den.png" alt="Icon 4" />
        </div>
        <div class="GTCL-icon-item icon-side-right icon-beside">
          <img src="/src/assets/img/vong-xoay.png" alt="Icon 5" />
        </div>
      </div>
      <div class="line-circle"></div>
    </div>
  </section>
  <!-- End sec4 -->
</template>

<script lang="ts">
export default {
  name: 'GtclComponent',
}
</script>

<style>
.GTCL {
  padding-top: 70px;
  position: relative;
}

.GTCL-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.GTCL-title {
  text-align: center;
  font-family: Lato;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: 56px; /* 140% */

  background: var(
    --VER-1-Primary-color-gradient-3,
    linear-gradient(242deg, #ce0c14 5.95%, #ff4149 47.82%, #ce0c14 89.86%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.GTCL-center-logo {
  padding-top: 23px;
  padding-bottom: 40.77px;
}

.GTCL-curve-icons {
  display: flex;
}

.GTCL-icon-item {
  background-image: url(/src/assets/img/circle-bluewhite.svg);
  background-repeat: no-repeat;
  background-position: center;
  width: 146px;
  height: 146px;
  z-index: 1;
}

.icon-middle-item {
  margin: 0 133px 0 133px;
}

.GTCL-icon-item img {
  border-radius: 16px;
  position: relative;
  top: 28px;
  left: 40px;
}

.line-circle {
  position: absolute;
  bottom: 60px;
  width: 990px;
  height: 990px;
  border: 24px solid #23689b;
  border-radius: 990px;
  border-top: none;
  border-left: none;
  border-right: none;
}

.icon-side-left {
  margin-right: 20px;
}

.icon-side-right {
  margin-left: 20px;
}

.icon-middle-side {
  position: relative;
  bottom: 90px;
}

.icon-beside {
  position: relative;
  bottom: 270px;
}

.gtcl-curve-icons::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #007bff;
  top: 50%;
  z-index: -1;
  border-radius: 10px;
  transform: rotate(180deg);
}

/* Responsive */
@media screen and (min-width: 319px) and (max-width: 425.8px) {
  .GTCL {
    height: 600px;
  }

  .GTCL-title {
    font-size: 32px;
  }

  .GTCL-center-logo img {
    width: 150px;
    height: 150px;
  }

  .icon-middle-item {
    margin: 0 0 0 0;
    top: 10px;
  }

  .icon-middle-side {
    bottom: 62px;
  }

  .icon-side-left {
    left: 162px;
    top: 86px;
  }

  .icon-side-right {
    right: 162px;
    top: 86px;
  }

  .line-circle {
    display: none;
  }
}

@media screen and (min-width: 425.8px) and (max-width: 580px) {
  .GTCL {
    height: 600px;
  }

  .GTCL-title {
    font-size: 32px;
  }

  .GTCL-center-logo img {
    width: 150px;
    height: 150px;
  }

  .icon-middle-item {
    margin: 0 0 0 0;
    top: 10px;
  }

  .icon-middle-side {
    bottom: 62px;
  }

  .icon-side-left {
    left: 162px;
    top: 86px;
  }

  .icon-side-right {
    right: 162px;
    top: 86px;
  }

  .line-circle {
    display: none;
  }
}

@media screen and (min-width: 581px) and (max-width: 590px) {
  .GTCL-title {
    font-size: 36px;
  }

  .GTCL-center-logo img {
    width: 250px;
    height: 250px;
  }

  .icon-middle-item {
    margin: 0 60px 0 60px;
  }

  .icon-side-left {
    left: 120px;
  }

  .icon-side-right {
    right: 120px;
  }

  .line-circle {
    width: 500px;
    height: 900px;
  }
}

@media screen and (min-width: 591px) and (max-width: 619px) {
  .GTCL-title {
    font-size: 36px;
  }

  .GTCL-center-logo img {
    width: 250px;
    height: 250px;
  }

  .icon-middle-item {
    margin: 0 60px 0 60px;
  }

  .icon-side-left {
    left: 120px;
  }

  .icon-side-right {
    right: 120px;
  }

  .line-circle {
    width: 500px;
    height: 900px;
  }
}

@media screen and (min-width: 620px) and (max-width: 768px) {
  .GTCL-title {
    font-size: 36px;
  }

  .GTCL-center-logo img {
    width: 250px;
    height: 250px;
  }

  .icon-middle-item {
    margin: 0 60px 0 60px;
  }

  .icon-side-left {
    left: 120px;
  }

  .icon-side-right {
    right: 120px;
  }

  .line-circle {
    width: 500px;
    height: 900px;
    border: 30px solid #23689b;
    border-radius: 990px;
    border-top: none;
    border-left: none;
    border-right: none;
  }
}

@media screen and (min-width: 769px) and (max-width: 884px) {
  .line-circle {
    width: 830px;
    height: 830px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .icon-middle-item {
    margin: 0 80px 0 80px;
  }

  .GTCL-center-logo img {
    width: 250px;
    height: 250px;
  }

  .line-circle {
    width: 830px;
    height: 830px;
  }
}

@media screen and (min-width: 1256px) and (max-width: 1300px) {
  .line-circle {
    width: 954px;
    height: 900px;
  }
}
</style>
