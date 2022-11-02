<template>
  <b-modal size="xl" ref="modalRef">
    <template #modal-header>
      <h2>{{title}}</h2>
    </template>
    <p>Description: {{description}}</p>
    <template #modal-footer>
      <p>User: <b-badge variant="primary">{{user}}</b-badge></p>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "ModalTask",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    user: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      required: false,
    },
    time: {
      type: String,
      default: "",
    },
    color: {
      type: String,
    },
  },
  methods: {
    openModal() {
      this.$refs.modalRef.show();
    },
    hideModal() {
      this.$refs.modalRef.hide();
    }
  },
  computed: {
    backgroundStyle() {
      return {'background-color': this.color}
    }
  }
}
</script>

<style scoped>

</style>