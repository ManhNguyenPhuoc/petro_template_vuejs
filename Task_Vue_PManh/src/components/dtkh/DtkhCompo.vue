<template>
  <!-- Section 6 -->
  <section class="DTKH">
    <div class="DTKH-container">
      <div class="DTKH-title">
        <p>đối tác khách hàng</p>
      </div>
      <div class="DTKH-logo">
        <div class="DTKH-logo-item">
          <img src="/src/assets/img/anphat-petro.png" alt="" />
        </div>
        <div class="DTKH-logo-item">
          <img src="/src/assets/img/saigon-petro.png" alt="" />
        </div>
        <div class="DTKH-logo-item">
          <img src="/src/assets/img/mipec.png" alt="" />
        </div>
        <div class="DTKH-logo-item">
          <img src="/src/assets/img/hoduco.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- End sec6 -->
</template>

<script lang="ts">
export default {
  name: 'DtkhComponent',
}
</script>

<style>
.DTKH-container {
  display: flex;
  flex-direction: column;
  gap: 61px;
  margin-top: 68px;
  align-items: center;
  justify-content: center;
}

.DTKH-title {
  color: var(--VER-1-Primary-color-darker, #084f82);
  text-align: center;
  font-family: Lato;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  align-self: stretch;
}

.DTKH-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

/* Responsive */
@media screen and (min-width: 319px) and (max-width: 425.8px) {
  .DTKH-logo {
    gap: 20px;
    flex-wrap: wrap;
  }

  .DTKH-title {
    font-size: 32px;
  }
}

@media screen and (min-width: 425.8px) and (max-width: 580px) {
  .DTKH-logo {
    gap: 20px;
    flex-wrap: wrap;
  }

  .DTKH-title {
    font-size: 32px;
  }
}

@media screen and (min-width: 581px) and (max-width: 590px) {
  .DTKH-logo {
    gap: 20px;
    flex-wrap: wrap;
  }

  .DTKH-title {
    font-size: 32px;
  }
}

@media screen and (min-width: 591px) and (max-width: 619px) {
  .DTKH-logo {
    gap: 20px;
    flex-wrap: wrap;
  }

  .DTKH-title {
    font-size: 32px;
  }
}

@media screen and (min-width: 620px) and (max-width: 768px) {
  .DTKH-logo {
    gap: 20px;
    flex-wrap: wrap;
  }

  .DTKH-title {
    font-size: 32px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .DTKH-logo img {
    width: 220px;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1300px) {
  .DTKH-logo {
    gap: 14px;
  }
}
</style>
