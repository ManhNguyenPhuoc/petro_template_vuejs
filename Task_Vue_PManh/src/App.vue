<script setup lang="ts">
import HeaderCompoVue from './components/header/HeaderCompo.vue'
import HeroSection from './components/hero/HeroSection.vue'
import ProjectSpecs from './components/project_specs/ProjectSpecs.vue'
import VideoFeatured from './components/video_featured/VideoFeatured.vue'
import GtclCompo from './components/gtcl/GtclCompo.vue'
import SpdvCompo from './components/spdv/SpdvCompo.vue'
import DtkhCompo from './components/dtkh/DtkhCompo.vue'
import LogoPetro from './components/logo_petro/LogoPetro.vue'
import FooterCompo from './components/footer/FooterCompo.vue'
</script>

<template>
  <div class="container-app">
    <HeaderCompoVue></HeaderCompoVue>
    <HeroSection></HeroSection>
    <ProjectSpecs></ProjectSpecs>
    <VideoFeatured></VideoFeatured>
    <GtclCompo></GtclCompo>
    <SpdvCompo></SpdvCompo>
    <DtkhCompo></DtkhCompo>
    <LogoPetro></LogoPetro>
    <FooterCompo></FooterCompo>
  </div>
</template>

<style scoped></style>
