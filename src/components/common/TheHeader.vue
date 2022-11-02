<template>
  <div class="header">
    <div class="container">
      <div class="header__logo">
        <a href="#" class="header__logo-link">
          <svg width="0" height="0" class="hidden">
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Trello"
              role="img"
              viewBox="0 0 512 512"
              id="trello_icon_130813"
            >
              <rect width="512" height="512" rx="15%"></rect>
              <rect
                height="188"
                rx="23"
                width="132"
                x="284"
                y="95"
                fill="#fff"
              ></rect>
              <rect
                height="296"
                rx="23"
                width="132"
                x="97"
                y="95"
                fill="#fff"
              ></rect>
            </symbol>
          </svg>
          <svg class="header__logo-svg">
            <use xlink:href="#trello_icon_130813"></use>
          </svg>
          <p class="header__logo-title">Trello</p>
        </a>
      </div>
      <div class="header__time-frame">
        <div class="header__time">{{ time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-header",
  components: {},
  data: () => ({
    time: new Date().toLocaleString("ru", {
      hour: "numeric",
      minute: "numeric",
    }),
  }),
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 10px;
  position: absolute;
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #545454;
    border-radius: 5px;
    padding: 10px;
    background-color: #ececec;
  }

  &__logo {
    &-link {
      //width: 36px;
      //height: 36px;
      display: flex;
      align-items: center;
      gap: 0 10px;
    }

    &-title {
      font-weight: 600;

      font-family: "Roboto Light";
      font-size: 25px;
      letter-spacing: 1px;
      transition: all 0.2s ease-in-out;
    }

    &-svg {
      width: 32px;
      height: 32px;
      fill: #0079bf;

      &:hover {
        cursor: pointer;
      }
    }
  }

  &__time-frame {
    border: 1px solid #a9a9a9;
    border-radius: 5px;
    background-color: white;
    width: 100px;
    height: 45px;
  }

  &__time {
    text-align: center;
    padding: 10px;
    font-size: 19px;
    font-weight: bold;
    font-family: "Roboto Light";
    color: #545454;
  }
}
</style>
