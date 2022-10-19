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
*,
*::before,
*::after {
  box-sizing: border-box;
}

// Убираем внутренние отступы
ul,
ol {
  padding: 0;
}

// Убираем внешние отступы
body,
h1,
h2,
h3,
h4,
h5,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

// Выставляем основные настройки по-умолчанию для body
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
}

// Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class
ul,
ol {
  list-style: none;
}

//  Элементы a, у которых нет класса, сбрасываем до дефолтных стилей
a {
  text-decoration: none;
  color: inherit;
}

// Упрощаем работу с изображениями
img {
  max-width: 100%;
  display: block;
}

// Указываем понятную периодичность в потоке данных у article
article > * + * {
  margin-top: 1em;
}

//  Наследуем шрифты для инпутов и кнопок
input,
button,
textarea,
select {
  font: inherit;
  padding: 0;
}

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
