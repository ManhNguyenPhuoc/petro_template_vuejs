<template>
  <!-- Section 3 -->
  <section class="video-featured-section">
    <div class="video-featured-section-container">
      <div class="video-featured-icon">
        <div class="video-featured-icon-item btn-next">
          <img src="/src/assets/img/next-icon.svg" alt="" />
        </div>
        <img src="/src/assets/img/news-icon.svg" alt="" class="video-featured-icon-item" />
        <img
          src="/src/assets/img/Icon100.svg"
          alt=""
          class="video-featured-icon-item icon-middle-video"
        />
        <img src="/src/assets/img/cap-icon.svg" alt="" class="video-featured-icon-item" />
        <div class="video-featured-icon-item btn-pre">
          <img src="/src/assets/img/pre-icon.svg" alt="" />
        </div>
      </div>
      <!-- btn hide -->
      <div class="btn-hide-mobile">
        <div class="btn-hide-item left-btn-hide">
          <img src="/src/assets/img/next-icon.svg" alt="" />
        </div>

        <div class="btn-hide-item right-btn-hide">
          <img src="/src/assets/img/pre-icon.svg" alt="" />
        </div>
      </div>
      <!-- end btn hide -->
      <div class="video-featured-title">
        <p>Video nổi bật</p>
      </div>

      <div class="video-featured-news">
        <div class="video-featured-news-item left-featured-item">
          <div class="video-item-block">
            <img
              width="100%"
              height="265.5px"
              src="/src/assets/img/factory-evening.png"
              alt="Image 1"
            />
            <div class="factory-block-para para-move">
              <div class="factory-block-para-container text-change">
                <p>BSR đảm bảo tốt chế độ chính sách cho người lao động</p>
                <div class="factory-block-view-date">
                  <div>11/11/2024</div>
                  <div class="block-eye-view">
                    <fa icon="fa-eye" />
                    <div class="number-view">1,141</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="video-featured-news-item">
          <img
            width="100%"
            height="308.779px"
            src="/src/assets/img/people-factory.png"
            alt="Image 1"
          />
          <div class="factory-block-para para-move">
            <div class="factory-block-para-container block-middle text-change">
              <p>BSR đảm bảo tốt chế độ chính sách cho người lao động</p>
              <div class="factory-block-view-date">
                <div>11/11/2024</div>
                <div class="block-eye-view">
                  <fa icon="fa-eye" />
                  <div class="number-view">1,141</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="video-featured-news-item right-featured-item">
          <div class="video-item-block">
            <img
              width="100%"
              height="265.5px"
              src="/src/assets/img/factory-morning.png"
              alt="Image 1"
            />
            <div class="factory-block-para para-move">
              <div class="factory-block-para-container text-change">
                <p>BSR đảm bảo tốt chế độ chính sách cho người lao động</p>
                <div class="factory-block-view-date">
                  <div>11/11/2024</div>
                  <div class="block-eye-view">
                    <fa icon="fa-eye" />
                    <div class="number-view">1,141</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="video-featured-next">
        <div class="next-slider-news">
          <div class="next-slider-news-item"></div>
          <div class="next-slider-news-item"></div>
          <div class="next-slider-news-item"></div>
          <div class="next-slider-news-item"></div>
        </div>
      </div>
      <div class="video-featured-button">
        <div class="video-button-container">
          <p>Xem tất cả</p>
        </div>
      </div>
      <div class="VHDN">
        <div class="VHDN-container">
          <h2 class="VHDN-title">văn hóa doanh nghiệp</h2>
          <p class="VHDN-para">
            BSR luôn quan tâm đến đời sống vật chất và tinh thần của người lao động như thực hiện
            đầy đủ các chế độ phúc lợi, BHXH, BHYT, BHTN, chế độ khen thưởng,...
          </p>
          <div class="VHDN-button">
            <div class="VHDN-button-item">
              <p class="VHDN-button-item-text">tin về văn hóa doanh nghiệp</p>
            </div>
            <div class="VHDN-button-item">
              <p class="VHDN-button-item-text VHDN-buton-right">hoạt động văn hóa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Sec3 -->
</template>

<script lang="ts">
export default {
  name: 'VideoFeaturedComponent',
}
</script>
<style>
.btn-hide-mobile {
  display: none;
}

.video-featured-section {
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 100%;
  height: 1210px;
  background-image: url(/src/assets/img/blue-factory.png);
  background-repeat: no-repeat;
  background-position: top center; /* Căn giữa hình nền theo chiều ngang */
}

.video-featured-section-container {
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  gap: 40px;
  margin: 57px 92px 125px 92px;
}

.video-featured-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 55px;
}

.icon-middle-video {
  padding: 12px 12px 0 0;
}

.video-featured-icon .btn-pre {
  padding-left: 32.5px;
}

.video-featured-icon .btn-next {
  padding-right: 32.5px;
}

.video-featured-title {
  text-align: center;
  text-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  font-family: Lato;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
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

.video-featured-news {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  height: 371px;
  padding-top: 56px;
}

.factory-block-para {
  width: 100%;
}

.factory-block-para {
  width: 100%;
  height: 100%;
  border-radius: 20px 0px;
  background: var(--VER-1-Neutral-color-light, #fff);
}

.factory-block-view-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.factory-block-para-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 11px 14px 10px 18px;
}

.block-middle {
  display: flex;
  flex-direction: column;
  gap: 14.34px;
  padding: 12.79px 16.3px 13.34px 20.95px;
}

.para-move {
  position: relative;
  bottom: 52px;
  left: 21px;
}

.right-featured-item {
  margin-left: 30px;
}

.left-featured-item {
  margin-right: 30px;
}

.text-change p {
  color: var(--VER-1-Neutral-color-500, #2e2e2e);
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.factory-block-view-date {
  color: var(--VER-1-Neutral-color-300, #a3a3a3);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.block-eye-view {
  display: flex;
  align-items: center;
}

.next-slider-news {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.next-slider-news-item {
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background: var(--VER-1-Neutral-color-50, #eaeaea);
}

.next-slider-news-item:hover {
  border-radius: 100px;
  background: var(
    --VER-1-Primary-color-gradient-1,
    linear-gradient(229deg, #084f82 3.95%, #63a9dc 83.28%)
  );
  width: 30px;
  height: 8px;
}

.video-featured-button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.video-button-container:hover {
  background-color: #004d99;
}

.video-button-container {
  display: flex;
  width: 126px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid var(--VER-1-Primary-color-darker, #084f82);
  background: var(--VER-1-Primary-color-lighter, #afe1ff);
}

.video-button-container p {
  color: var(--VER-1-Neutral-color-light, #fff);
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 12px 20px;
}

.VHDN {
  display: flex;
  justify-content: center;
  align-items: center;
}

.VHDN-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: var(--VER-1-Neutral-color-light, #fff);
  box-shadow: -5px 6px 4px 0px rgba(99, 169, 220, 0.3);
  margin-left: 68px;
  margin-right: 68px;
}

.VHDN-button {
  display: flex;
  gap: 30px;
}

.VHDN-title {
  color: var(--VER-1-Primary-color-darker, #084f82);
  text-align: center;
  font-family: Lato;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding: 34px 0 22px 0;
}

.VHDN-para {
  text-align: center;
  margin: 0 64px 0 63px;
  color: var(--VER-1-Neutral-color-500, #2e2e2e);
  text-align: center;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.VHDN-button {
  margin-top: 36px;
  padding-bottom: 33px;
  width: 85%;
}

.VHDN-button-item {
  border-radius: 20px;
  background: var(
    --VER-1-Primary-color-gradient-1,
    linear-gradient(229deg, #084f82 3.95%, #63a9dc 83.28%)
  );
  width: 100%;
}

.VHDN-button-item-text {
  color: var(--VER-1-Neutral-color-light, #fff);
  text-align: center;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding: 28px 0 27px 0;
}

/* Responsive */
@media screen and (min-width: 319px) and (max-width: 425.8px) {
  .btn-hide-mobile {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .btn-pre {
    display: none;
  }
  .btn-next {
    display: none;
  }

  .video-featured-icon {
    gap: 4px;
  }

  .video-featured-section {
    background-repeat: repeat-y;
    height: 2360px;
  }

  .video-featured-news {
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    padding-top: 0px;
  }

  .factory-block-view-date {
    font-size: 12px;
  }

  .text-change p {
    font-size: 16px;
  }

  .video-featured-section-container {
    margin-top: 70px;
    gap: 40px;
    margin: 57px 50px 125px 50px;
  }

  .next-slider-news {
    position: relative;
    top: 740px;
    gap: 20px;
  }

  .next-slider-news-item {
    width: 16px;
    height: 16px;
  }

  .VHDN {
    position: relative;
    top: 780px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .VHDN-container {
    margin-left: 0;
    margin-right: 0;
  }

  .VHDN-title {
    font-size: 26px;
  }

  .VHDN-button-item-text {
    font-size: 16px;
  }

  .VHDN-para {
    font-size: 14px;
    line-height: 40px;
  }

  .VHDN-buton-right {
    padding: 35px 0 27px 0;
  }

  .VHDN-button {
    gap: 20px;
  }

  .video-featured-button {
    position: relative;
    top: 742px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 425.8px) and (max-width: 580px) {
  .btn-hide-mobile {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .btn-pre {
    display: none;
  }
  .btn-next {
    display: none;
  }

  .video-featured-icon {
    gap: 4px;
  }

  .video-featured-section {
    background-repeat: repeat-y;
    height: 2360px;
  }

  .video-featured-news {
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    padding-top: 0px;
  }

  .factory-block-view-date {
    font-size: 12px;
  }

  .text-change p {
    font-size: 16px;
  }

  .video-featured-section-container {
    margin-top: 70px;
    gap: 40px;
    margin: 57px 50px 125px 50px;
  }

  .next-slider-news {
    position: relative;
    top: 740px;
    gap: 20px;
  }

  .next-slider-news-item {
    width: 16px;
    height: 16px;
  }

  .VHDN {
    position: relative;
    top: 780px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .VHDN-container {
    margin-left: 0;
    margin-right: 0;
  }

  .VHDN-title {
    font-size: 26px;
  }

  .VHDN-button-item-text {
    font-size: 16px;
  }

  .VHDN-para {
    font-size: 14px;
    line-height: 40px;
  }

  .VHDN-buton-right {
    padding: 35px 0 27px 0;
  }

  .VHDN-button {
    gap: 20px;
  }

  .video-featured-button {
    position: relative;
    top: 742px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 581px) and (max-width: 590px) {
  .video-featured-icon {
    gap: 10px;
  }

  .video-featured-section {
    height: 1300px;
  }

  .video-featured-news {
    justify-content: space-between;
    gap: 20px;
  }

  .factory-block-view-date {
    font-size: 12px;
  }

  .text-change p {
    font-size: 16px;
  }

  .video-featured-section-container {
    margin-top: 70px;
    gap: 40px;
    margin: 57px 50px 125px 50px;
  }

  .VHDN-title {
    font-size: 30px;
  }

  .VHDN-button-item-text {
    font-size: 16px;
  }

  .VHDN-para {
    font-size: 16px;
  }

  .VHDN-buton-right {
    padding: 35px 0 27px 0;
  }

  .VHDN-button {
    gap: 20px;
  }
}

@media screen and (min-width: 591px) and (max-width: 619px) {
  .video-featured-icon {
    gap: 20px;
  }

  .video-featured-section {
    height: 1300px;
  }

  .video-featured-news {
    justify-content: space-between;
    gap: 20px;
  }

  .factory-block-view-date {
    font-size: 12px;
  }

  .text-change p {
    font-size: 16px;
  }

  .video-featured-section-container {
    margin-top: 70px;
    gap: 40px;
    margin: 57px 50px 125px 50px;
  }

  .VHDN-title {
    font-size: 30px;
  }

  .VHDN-button-item-text {
    font-size: 16px;
  }

  .VHDN-para {
    font-size: 16px;
  }

  .VHDN-buton-right {
    padding: 35px 0 27px 0;
  }

  .VHDN-button {
    gap: 20px;
  }
}

@media screen and (min-width: 620px) and (max-width: 768px) {
  .video-featured-icon {
    gap: 20px;
  }

  .video-featured-section {
    height: 1300px;
  }

  .video-featured-news {
    justify-content: space-between;
    gap: 20px;
  }

  .factory-block-view-date {
    font-size: 12px;
  }

  .text-change p {
    font-size: 16px;
  }

  .video-featured-section-container {
    margin-top: 70px;
    gap: 40px;
    margin: 57px 50px 125px 50px;
  }

  .VHDN-title {
    font-size: 30px;
  }

  .VHDN-button-item-text {
    font-size: 16px;
  }

  .VHDN-para {
    font-size: 16px;
  }

  .VHDN-buton-right {
    padding: 35px 0 27px 0;
  }

  .VHDN-button {
    gap: 20px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .VHDN-button {
    gap: 24px;
  }

  .VHDN-title {
    font-size: 36px;
  }

  .VHDN-button-item-text {
    font-size: 20px;
  }

  .VHDN-buton-right {
    padding: 35px 0 27px 0;
  }

  .video-featured-section-container {
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    gap: 40px;
    margin: 57px 50px 125px 50px;
  }
}
</style>
