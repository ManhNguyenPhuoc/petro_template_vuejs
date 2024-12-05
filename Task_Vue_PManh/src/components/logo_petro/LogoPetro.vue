<template>
  <!-- Section 7 -->
  <section class="logo-mini">
    <div class="logo-mini-container">
      <div class="logo-petro-mini">
        <img src="/src/assets/img/logo-petro-mini.png" alt="" />
      </div>
      <div class="title-logo-petro-mini">
        <p>Công ty cổ phần Lọc hóa dầu Bình Sơn - BSR</p>
      </div>
    </div>
  </section>
  <!-- End sec7 -->
</template>

<script lang="ts">
export default {
  name: 'LogoPetroComponent',
}
</script>

<style>
.logo-mini {
  background: #c7eafb;
  height: 200px;
  width: 100%;
  margin-top: 68px;
}

.logo-mini-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 19px;
}

.title-logo-petro-mini {
  align-self: stretch;
  text-align: center;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

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
  .logo-mini {
    background: #c7eafb;
    height: 200px;
    width: 100%;
    margin-top: 68px;
  }
  .title-logo-petro-mini p {
    font-size: 16px;
  }
}

@media screen and (min-width: 425.8px) and (max-width: 580px) {
  .logo-mini {
    background: #c7eafb;
    height: 200px;
    width: 100%;
    margin-top: 68px;
  }
  .title-logo-petro-mini p {
    font-size: 16px;
  }
}
</style>
