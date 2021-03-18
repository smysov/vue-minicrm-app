<template>
  <div class="wrapper__content">
    <header-main />
    <section>
      <div class="container">
        <preloader v-if="loading" />
        <template v-else>
          <!--Table-->
          <table>
            <!--Header-->
            <thead>
              <tr>
                <th @click="sort('name')">
                  <span>Name</span>
                </th>
                <th @click="sort('email')">
                  <span>Email</span>
                </th>
                <th @click="sort('phone')">
                  <span>Phone</span>
                </th>
              </tr>
            </thead>
            <!--Body-->
            <tbody>
              <tr
                v-for="user of usersSort"
                :key="user.id"
              >
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.phone }}</td>
              </tr>
            </tbody>
          </table>
          <div class="pagination">
            <button @click="prevPage">
              &larr;
            </button>
            <button @click="nextPage">
              &rarr;
            </button>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import headerMain from '../components/HeaderMain.vue';
import preloader from '../components/Preloader';

export default {
  components: { headerMain, preloader },
  data() {
    return {
      users: [
      ],
      currentSort: 'name',
      currentSortDir: 'asc',
      page: {
        currentPage: 1,
        length: 3,
      },
      loading: true,
    };
  },
  computed: {
    usersSort() {
      return this.users
        .sort((a, b) => {
          let modification = 1;
          if (this.currentSortDir === 'desc') modification = -1;
          if (a[this.currentSort] < b[this.currentSort]) {
            return -1 * modification;
          }
          if (a[this.currentSort] > b[this.currentSort]) {
            return 1 * modification;
          }
          return 0;
        })
        .filter((user, index) => {
          const start = (this.page.currentPage - 1) * this.page.length;
          const end = this.page.currentPage * this.page.length - 1;
          if (index >= start && index <= end) return true;
          return false;
        });
    },
  },
  async mounted() {
    try {
      const response = await axios.get(
        `
      https://jsonplaceholder.typicode.com/users
      `,
      );
      this.users = response.data;

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1500);
      });
    } catch (error) {
      Promise.reject(error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = e;
    },
    prevPage() {
      if (this.page.currentPage > 1) this.page.currentPage -= 1;
    },
    nextPage() {
      if (this.page.currentPage * this.page.length < this.users.length) {
        this.page.currentPage += 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  span {
    position: relative;

    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 18px;
      height: 20px;
      background: url('/assets/images/arrow.svg') no-repeat;
    }

    &::before {
      top: -1px;
      right: -20px;

      @media (min-width: 480px) {
        top: 2px;
      }
    }

    &::after {
      top: -4px;
      right: -14px;
      transform: rotate(180deg);

      @media (min-width: 480px) {
        top: -3px;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    column-gap: 20px;
  }
</style>
