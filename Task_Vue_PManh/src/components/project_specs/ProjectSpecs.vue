<template>
  <!-- Section 2 -->
  <section class="project-specs-block">
    <div class="project-specs-item">
      <img src="/src/assets/img/money-icon.svg" alt="" class="project-specs-item-icon" />
      <p class="project-specs-item-text">tổng vốn đâu tư</p>
      <div class="project-specs-item-big-text">
        <p>Trên 3 tỷ USD</p>
      </div>
    </div>
    <div class="project-specs-item">
      <img src="/src/assets/img/setting-icon.svg" alt="" class="project-specs-item-icon" />
      <p class="project-specs-item-text">Công suất chế biến</p>
      <div class="project-specs-item-big-text">
        <p>6.5 triệu tấn dầu thô/năm</p>
      </div>
    </div>
    <div class="project-specs-item">
      <img src="/src/assets/img/book-icon.svg" alt="" class="project-specs-item-icon" />
      <p class="project-specs-item-text">diện tích nhà máy</p>
      <div class="project-specs-item-big-text">
        <p>808 hecta</p>
      </div>
    </div>
    <div class="project-specs-item">
      <img src="/src/assets/img/circle-icon.svg" alt="" class="project-specs-item-icon" />
      <p class="project-specs-item-text">nguồn cung thị trường</p>
      <div class="project-specs-item-big-text">
        <p>Đảm bảo 30%</p>
      </div>
    </div>
  </section>
  <!-- End sec2 -->
</template>

<script lang="ts">
export default {
  name: 'ProjectSpecsComponent',
}
</script>

<style>
.project-specs-block {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
}

.project-specs-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 280px;
  gap: 12px;
}

.project-specs-item:hover .project-specs-item-big-text {
  display: block;
}

.project-specs-item-icon {
  background-image: url(/src/assets/img/back-vector.svg);
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  width: 129.906px;
  height: 150px;
  padding: 25px 15px;
}

.project-specs-item-text {
  color: var(--VER-1-Primary-color-default, #22689b);
  text-align: center;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 33.6px; /* 168% */
  text-transform: uppercase;
}

.project-specs-item-big-text {
  display: none;
  width: 100%;
  height: auto;
  align-self: stretch;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 34px; /* 106.25% */
  background: var(
    --VER-1-Primary-color-gradient-3,
    linear-gradient(242deg, #ce0c14 5.95%, #ff4149 47.82%, #ce0c14 89.86%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Responsive */
@media screen and (min-width: 319px) and (max-width: 425.8px) {
  .project-specs-block {
    gap: 60px;
    flex-wrap: wrap;
  }

  .project-specs-item {
    width: 240px;
    gap: 8px;
  }

  .project-specs-item-icon {
    width: 120px;
    height: 150px;
    padding: 25px 15px;
  }

  .project-specs-item-text {
    font-size: 18px;
    line-height: 30px; /* 168% */
  }

  .project-specs-item-big-text {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (min-width: 425.8px) and (max-width: 580px) {
  .project-specs-block {
    gap: 60px;
    flex-wrap: wrap;
  }

  .project-specs-item {
    width: 240px;
    gap: 8px;
  }

  .project-specs-item-icon {
    width: 120px;
    height: 150px;
    padding: 25px 15px;
  }

  .project-specs-item-text {
    font-size: 18px;
    line-height: 30px; /* 168% */
  }

  .project-specs-item-big-text {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (min-width: 581px) and (max-width: 590px) {
  .project-specs-block {
    gap: 20px;
  }

  .project-specs-item {
    width: 240px;
    gap: 8px;
  }

  .project-specs-item-icon {
    width: 120px;
    height: 150px;
    padding: 25px 15px;
  }

  .project-specs-item-text {
    font-size: 18px;
    line-height: 30px; /* 168% */
  }

  .project-specs-item-big-text {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (min-width: 591px) and (max-width: 619px) {
  .project-specs-block {
    gap: 20px;
  }

  .project-specs-item {
    width: 240px;
    gap: 8px;
  }

  .project-specs-item-icon {
    width: 120px;
    height: 150px;
    padding: 25px 15px;
  }

  .project-specs-item-text {
    font-size: 18px;
    line-height: 30px; /* 168% */
  }

  .project-specs-item-big-text {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (min-width: 620px) and (max-width: 768px) {
  .project-specs-block {
    gap: 20px;
  }

  .project-specs-item {
    width: 240px;
    gap: 8px;
  }

  .project-specs-item-icon {
    width: 120px;
    height: 150px;
    padding: 25px 15px;
  }

  .project-specs-item-text {
    font-size: 18px;
    line-height: 30px; /* 168% */
  }

  .project-specs-item-big-text {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .project-specs-block {
    gap: 20px;
  }

  .project-specs-item {
    width: 240px;
    gap: 8px;
  }

  .project-specs-item-icon {
    width: 120px;
    height: 150px;
    padding: 25px 15px;
  }

  .project-specs-item-text {
    font-size: 18px;
    line-height: 30px; /* 168% */
  }

  .project-specs-item-big-text {
    font-size: 26px;
    line-height: 30px;
  }
}
</style>
