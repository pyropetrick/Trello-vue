<template>
  <div>
    <the-header></the-header>
    <div class="home">
      <the-container>
        <div class="trello-list-cards">
          <the-card
            v-for="card in cards"
            :key="card.id"
            :title="card.title"
            :id="card.id"
          ></the-card>
        </div>
      </the-container>
    </div>
    <the-modal v-if="getModalActive"></the-modal>
    <the-warning v-if="getWarningActive"></the-warning>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheHeader from "@/components/blocks/TheHeader.vue";
import TheContainer from "@/components/blocks/TheContainer";
import TheCard from "@/components/TheCard.vue";
import TheModal from "@/components/TheModal";
import TheWarning from "@/components/TheWarning";

export default {
  name: "App",
  components: {
    TheHeader,
    TheContainer,
    TheCard,
    TheModal,
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
