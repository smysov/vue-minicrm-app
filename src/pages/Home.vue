<template>
  <div class="wrapper__content">
    <header-main />
    <section>
      <div class="container">
        <div class="information">
          <p class="information__description">
            A simple CRM system with user filtering by name,
            age, and phone number. The application
            implements a simple pagination!
          </p>
          <div class="information__wrapper-image">
            <img
              class="information__image"
              src="../assets/images/intro.jpg"
              alt="New collection"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import headerMain from '../components/HeaderMain.vue';

export default {
  components: { headerMain },
};
</script>

<style lang="scss">
.information__description {
  font-family: 'Mint Round', Arial, serif;;
  font-size: 22px;
  font-weight: 700;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 28px;
  }
}
</style>
