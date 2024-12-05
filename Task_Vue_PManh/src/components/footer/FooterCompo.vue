<template>
  <!-- Footer -->
  <footer class="information-petro">
    <div class="info-petro-item">
      <div class="info-petro-item-block">
        <img src="/src/assets/img/Location.svg" alt="" class="icon-info" />
        <p class="text-info">208 Đại lộ Hùng Vương - Thành Phố Quảng Ngãi - Tỉnh Quảng Ngãi</p>
      </div>
    </div>
    <div class="info-petro-item">
      <div class="info-petro-item-block">
        <img src="/src/assets/img/Call.svg" alt="" class="icon-info" />
        <p class="text-info">(84-255)3825825 - Fax: (84-55)3825826</p>
      </div>
    </div>
    <div class="info-petro-item">
      <div class="info-petro-item-block">
        <img src="/src/assets/img/Message.svg" alt="" class="icon-info" />
        <p class="text-info">idoc@bsr.com.vn</p>
      </div>
    </div>
  </footer>
  <!-- End footer -->
</template>

<script lang="ts">
export default {}
</script>

<style>
.information-petro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background: var(
    --VER-1-Primary-color-gradient-1,
    linear-gradient(229deg, #084f82 3.95%, #63a9dc 83.28%)
  );
  padding-right: 91px;
  padding-left: 91px;
}

.info-petro-item-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.text-info {
  color: var(--VER-1-Neutral-color-light, #fff);
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px; /* 350% */
}

/* Responsive */
@media screen and (min-width: 319px) and (max-width: 425.8px) {
  .information-petro {
    height: 150px;
    flex-direction: column;
    padding: 6px 8px 6px 8px;
  }

  .text-info {
    font-size: 10px;
    line-height: 20px;
  }

  .info-petro-item-block {
    gap: 4px;
  }
}

@media screen and (min-width: 425.8px) and (max-width: 580px) {
  .information-petro {
    height: 150px;
    flex-direction: column;
    padding: 6px 8px 6px 8px;
  }

  .text-info {
    font-size: 10px;
    line-height: 20px;
  }

  .info-petro-item-block {
    gap: 4px;
  }
}

@media screen and (min-width: 581px) and (max-width: 590px) {
  .information-petro {
    gap: 20px;
    padding-right: 6px;
    padding-left: 6px;
  }

  .text-info {
    font-size: 14px;
    line-height: 30px;
  }

  .info-petro-item-block {
    gap: 4px;
  }
}

@media screen and (min-width: 591px) and (max-width: 619px) {
  .information-petro {
    gap: 20px;
    padding-right: 6px;
    padding-left: 6px;
  }

  .text-info {
    font-size: 14px;
    line-height: 30px;
  }

  .info-petro-item-block {
    gap: 4px;
  }
}

@media screen and (min-width: 620px) and (max-width: 768px) {
  .information-petro {
    gap: 20px;
    padding-right: 6px;
    padding-left: 6px;
  }

  .text-info {
    font-size: 14px;
    line-height: 30px;
  }

  .info-petro-item-block {
    gap: 4px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .text-info {
    font-size: 12px;
  }
}
</style>
