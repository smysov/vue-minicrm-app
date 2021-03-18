<template>
  <div class="wrapper__content">
    <header-main />
    <section>
      <div class="container">
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
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import headerMain from '../components/HeaderMain.vue';

export default {
  components: { headerMain },
  data() {
    return {
      users: [
      ],
      currentSort: 'name',
      currentSortDir: 'asc',
    };
  },
  computed: {
    usersSort() {
      return this.users.sort((a, b) => {
        let modification = 1;
        if (this.currentSortDir === 'desc') modification = -1;
        if (a[this.currentSort] < b[this.currentSort]) {
          return -1 * modification;
        }
        if (a[this.currentSort] > b[this.currentSort]) {
          return 1 * modification;
        }
        return 0;
      });
    },
  },
  created() {
    try {
      axios
        .get(
          `
      https://jsonplaceholder.typicode.com/users
      `,
        )
        .then((response) => {
          this.users = response.data;
        });
    } catch (error) {
      Promise.reject(error);
    }
  },
  methods: {
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = e;
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
      top: 0;
      right: -19px;

      @media (min-width: 480px) {
        top: 2px;
      }

      @media (min-width: 768px) {
        top: 3px;
      }
    }

    &::after {
      top: -3px;
      right: -24px;
      transform: rotate(180deg);

      @media (min-width: 480px) {
        top: -1px;
      }

       @media (min-width: 768px) {
        top: 0;
      }
    }
  }
</style>
