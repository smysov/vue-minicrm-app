<template>
  <header class="header">
    <div class="navbar">
      <div class="container">
        <div class="navbar__content">
          <span class="navbar__logo">Users CRM</span>
          <ul class="navbar__list">
            <li
              v-for="link of links"
              :key="link.name"
            >
              <router-link
                class="navbar__link"
                :to="link.url"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'home',
          url: '/',
        },
        {
          name: 'users',
          url: '/users',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .router-link-exact-active {
    position: relative;
    color: #318a1d;
    &::before {
      position: absolute;
      bottom: -3px;
      content: '';
      width: 100%;
      height: 3px;
      background-color: #318a1d;
    }
  }
</style>
