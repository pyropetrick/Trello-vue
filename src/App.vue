<template>
  <div>
    <the-header></the-header>
    <div class="home">
      <div class="container">
        <div class="trello-list-cards">
          <the-card
            v-for="card in cards"
            :key="card.id"
            :title="card.title"
            :id="card.id"
          >
          </the-card>
        </div>
      </div>
    </div>
    <the-warning v-if="getWarningActive"></the-warning>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheHeader from "@/components/common/TheHeader.vue";
import TheCard from "@/components/TheCard.vue";
import TheWarning from "@/components/TheWarning.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheCard,
    TheWarning,
  },
  data: () => ({
    cards: [
      {
        title: "Todo",
        id: "ToDo",
      },
      {
        title: "In Progress",
        id: "Progress",
      },
      {
        title: "Completed",
        id: "Complete",
      },
    ],
  }),

  methods: {
    ...mapActions(["getUsersFromApi"]),
  },
  computed: {
    ...mapGetters(["getModalActive", "getWarningActive"]),
  },
  beforeCreate() {},
  created() {
    this.getUsersFromApi();
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  errorCaptured() {},
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  display: flex;
  align-items: center;

  background-color: #f4f4f4;
}

.trello-list-cards {
  display: flex;
  justify-content: center;
  gap: 50px;
}
</style>
