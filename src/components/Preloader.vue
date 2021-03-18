<template>
  <div class="preloader">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>

  .preloader {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    padding-top: 30px;
  }
  .loader {
    height: 40px;
    width: 40px;
    border: 5px solid rgba(0, 163, 85, 0.848);
    border-top: 5px solid #0c8a03;
    border-radius: 50%;
    animation: rotate 1s infinite linear;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
