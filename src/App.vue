<template>
  <div>
    <the-header></the-header>
    <div class="home">
      <b-container fluid>
        <div class="trello-list-cards">
          <TodoCard
            v-for="card in cards"
            :key="card.id"
            :title="card.title"
            :id="card.id"
          />
        </div>
      </b-container>
    </div>
    <ModalWarning v-if="getWarningActive"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheHeader from "@/components/common/TheHeader.vue";
import TodoCard from "@/components/TodoCard.vue";
import ModalWarning from "@/components/ModalWarning.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TodoCard,
    ModalWarning,
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
