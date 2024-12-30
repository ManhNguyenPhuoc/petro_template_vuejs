<template>
  <!-- Section 5 -->
  <section class="SPDV">
    <div class="SPDV-container">
      <div class="SPDV-item">
        <h2 class="SPDV-title">sản phẩm dịch vụ</h2>
      </div>
      <div class="SPDV-item">
        <p class="SPDV-overview">
          BSR tin rằng thỏa mãn nhu cầu khách hàng là nền tảng của sự thành công trong sản xuất kinh
          doanh. Mọi hoạt động của BSR đều xuất phát từ sự chân thành, chủ động lắng nghe, cùng tạo
          giá trị và mang lại giá trị cho nhau.
        </p>
      </div>
      <div class="SPDV-item SPDV-slider-container">
        <div class="SPDV-slider-item next-icon-slider">
          <img src="/src/assets/img/next-icon.svg" alt="" />
        </div>
        <div class="SPDV-slider-item background-xang">
          <img class="SPDV-img" src="/src/assets/img/xang.svg" alt="" />
          <p class="text-slider-SPDV">Xăng</p>
        </div>
        <div class="SPDV-slider-item background-KHL">
          <img class="SPDV-img" src="/src/assets/img/khi-hoa-long.svg" alt="" />
          <p class="text-slider-SPDV">Khí hóa lỏng</p>
        </div>
        <div class="SPDV-slider-item background-dau">
          <img class="SPDV-img" src="/src/assets/img/dau.svg" alt="" />
          <p class="text-slider-SPDV">Dầu</p>
        </div>
        <div class="SPDV-slider-item background-hatnhua">
          <img class="SPDV-img" src="/src/assets/img/hat-nhua.svg" alt="" />
          <p class="text-slider-SPDV">Hạt nhựa</p>
        </div>
        <div class="SPDV-slider-item prev-icon-slider">
          <img src="/src/assets/img/pre-icon.svg" alt="" />
        </div>
      </div>
      <div class="SPDV-item">
        <div class="next-slider-SPDV">
          <div class="next-slider-SPDV-item"></div>
          <div class="next-slider-SPDV-item"></div>
          <div class="next-slider-SPDV-item"></div>
          <div class="next-slider-SPDV-item"></div>
        </div>
      </div>
    </div>
  </section>
  <!-- End sec5 -->
</template>

<script lang="ts">
export default {
  name: 'SpdvComponent',
}
</script>

<style>
.SPDV {
  margin-top: 62px;
  background: url(/src/assets/img/blue-sea-beauty.png) lightgray 50% / cover no-repeat;
  width: 100%;
  height: 753px;
}

.SPDV-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding-top: 76px;
  padding-bottom: 76px;
}

.SPDV-title {
  text-align: center;
  font-family: Lato;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  background: var(
    --VER-1-Primary-color-gradient-4,
    linear-gradient(242deg, #ffd700 6.61%, #ffec83 48.48%, #ffd700 90.36%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.SPDV-overview {
  margin: 0 228px 0 228px;
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px; /* 140% */
}

.SPDV-slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.SPDV-slider-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.SPDV-slider-item p {
  text-align: center;
  font-size: 34px;
  font-style: normal;
  font-weight: 900;
  line-height: 56px; /* 164.706% */
  text-transform: uppercase;
  background: var(
    --VER-1-Primary-color-gradient-4,
    linear-gradient(242deg, #ffd700 6.61%, #ffec83 48.48%, #ffd700 90.36%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: stretch;
}

.background-xang {
  width: 310px;
  height: 380px;
  border-radius: 20px;
  border: 2px solid var(--VER-1-Neutral-color-light, #fff);
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    url(/src/assets/img/xang-background.png) lightgray 50% / cover no-repeat;
}

.background-KHL {
  width: 310px;
  height: 380px;
  border-radius: 20px;
  border: 2px solid var(--VER-1-Neutral-color-light, #fff);
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    url(/src/assets/img/khi-hoa-long-background.png) lightgray 50% / cover no-repeat;
}

.background-dau {
  width: 310px;
  height: 380px;
  border-radius: 20px;
  border: 2px solid var(--VER-1-Neutral-color-light, #fff);
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    url(/src/assets/img/dau-background.png) lightgray 50% / cover no-repeat;
}

.background-hatnhua {
  width: 310px;
  height: 380px;
  border-radius: 20px;
  border: 2px solid var(--VER-1-Neutral-color-light, #fff);
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    url(/src/assets/img/hatnhua-background.png) lightgray 50% / cover no-repeat;
}

.next-icon-slider {
  position: relative;
  left: 5px;
}

.prev-icon-slider {
  position: relative;
  right: 5px;
}

.next-slider-SPDV {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.next-slider-SPDV-item {
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background: var(--VER-1-Neutral-color-50, #eaeaea);
}

.next-slider-SPDV-item:hover {
  border-radius: 100px;
  background: var(
    --VER-1-Primary-color-gradient-1,
    linear-gradient(229deg, #084f82 3.95%, #63a9dc 83.28%)
  );
  width: 30px;
  height: 8px;
}

/* Responsive */
@media screen and (min-width: 319px) and (max-width: 425.8px) {
  .SPDV-container {
    gap: 30px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .SPDV-slider-item p {
    font-size: 28px;
  }

  .next-icon-slider {
    display: none;
  }

  .prev-icon-slider {
    display: none;
  }

  .SPDV {
    height: 1700px;
  }

  .SPDV-overview {
    margin: 0 25px 0 15px;
    font-size: 16px;
    line-height: 30px;
  }

  .SPDV-title {
    font-size: 32px;
  }

  .background-xang {
    width: 260px;
    height: 320px;
  }

  .background-KHL {
    width: 260px;
    height: 320px;
  }

  .background-dau {
    width: 260px;
    height: 320px;
  }

  .background-hatnhua {
    width: 260px;
    height: 320px;
  }
}

@media screen and (min-width: 425.8px) and (max-width: 580px) {
  .SPDV-container {
    gap: 30px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .SPDV-slider-item p {
    font-size: 28px;
  }

  .next-icon-slider {
    display: none;
  }

  .prev-icon-slider {
    display: none;
  }

  .SPDV {
    height: 1700px;
  }

  .SPDV-overview {
    margin: 0 25px 0 15px;
    font-size: 16px;
    line-height: 30px;
  }

  .SPDV-title {
    font-size: 32px;
  }

  .background-xang {
    width: 260px;
    height: 320px;
  }

  .background-KHL {
    width: 260px;
    height: 320px;
  }

  .background-dau {
    width: 260px;
    height: 320px;
  }

  .background-hatnhua {
    width: 260px;
    height: 320px;
  }
}

@media screen and (min-width: 581px) and (max-width: 590px) {
  .SPDV-container {
    gap: 30px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .SPDV-slider-item p {
    font-size: 28px;
  }

  .next-icon-slider {
    display: none;
  }

  .prev-icon-slider {
    display: none;
  }

  .SPDV {
    height: 1000px;
  }

  .background-xang {
    width: 260px;
    height: 320px;
  }

  .background-KHL {
    width: 260px;
    height: 320px;
  }

  .background-dau {
    width: 260px;
    height: 320px;
  }

  .background-hatnhua {
    width: 260px;
    height: 320px;
  }

  .SPDV-overview {
    margin: 0 100px 0 100px;
    font-size: 16px;
  }
}

@media screen and (min-width: 591px) and (max-width: 619px) {
  .SPDV-container {
    gap: 30px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .SPDV-slider-item p {
    font-size: 28px;
  }

  .next-icon-slider {
    display: none;
  }

  .prev-icon-slider {
    display: none;
  }

  .SPDV {
    height: 1000px;
  }

  .background-xang {
    width: 260px;
    height: 320px;
  }

  .background-KHL {
    width: 260px;
    height: 320px;
  }

  .background-dau {
    width: 260px;
    height: 320px;
  }

  .background-hatnhua {
    width: 260px;
    height: 320px;
  }

  .SPDV-overview {
    margin: 0 100px 0 100px;
    font-size: 16px;
  }
}

@media screen and (min-width: 620px) and (max-width: 768px) {
  .SPDV-container {
    gap: 30px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .SPDV-slider-item p {
    font-size: 28px;
  }

  .next-icon-slider {
    display: none;
  }

  .prev-icon-slider {
    display: none;
  }

  .SPDV {
    height: 1000px;
  }

  .background-xang {
    width: 260px;
    height: 320px;
  }

  .background-KHL {
    width: 260px;
    height: 320px;
  }

  .background-dau {
    width: 260px;
    height: 320px;
  }

  .background-hatnhua {
    width: 260px;
    height: 320px;
  }

  .SPDV-overview {
    margin: 0 100px 0 100px;
    font-size: 16px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .SPDV-container {
    gap: 30px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .SPDV-slider-item p {
    font-size: 28px;
  }

  .next-icon-slider {
    display: none;
  }

  .prev-icon-slider {
    display: none;
  }

  .SPDV {
    height: 1000px;
  }

  .background-xang {
    width: 260px;
    height: 320px;
  }

  .background-KHL {
    width: 260px;
    height: 320px;
  }

  .background-dau {
    width: 260px;
    height: 320px;
  }

  .background-hatnhua {
    width: 260px;
    height: 320px;
  }

  .SPDV-slider-item {
    flex: 1 1 calc(50% - 10px);
  }

  .SPDV-overview {
    margin: 0 100px 0 100px;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1300px) {
  .background-xang {
    width: 250px;
    height: 350px;
  }

  .background-KHL {
    width: 250px;
    height: 350px;
  }

  .background-dau {
    width: 250px;
    height: 350px;
  }

  .background-hatnhua {
    width: 250px;
    height: 350px;
  }

  .SPDV-slider-item p {
    font-size: 28px;
  }
}
</style>
