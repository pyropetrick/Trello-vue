<template>
  <b-modal ref="modalRef" hide-footer>
    <template #modal-header>
      <h1>Task Form</h1>
    </template>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="input-group-1" label="Title Task" label-for="input-1">
        <b-form-input id="input-1" v-model="form.title" placeholder="Type task" required/>
        <b-form-invalid-feedback :state="validationTitle">
          Your Title Task must be 5 or more characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationTitle">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group >
      <b-form-group id="input-group-2" label="Description Task" label-for="input-2">
        <b-form-textarea id="input-2" v-model="form.desc" placeholder="Type description..."/>
      </b-form-group >
      <b-form-group id="input-group-3" label="Select User" label-for="input-3">
        <b-form-select id="input-3" class="m-0 pl-3" v-model="form.user" :options="getUsers" required>
          <template #first>
            <b-form-select-option :value="null" disabled>-- Please select user --</b-form-select-option>
          </template>
        </b-form-select>
        <b-form-invalid-feedback :state="validationUser">
          Select User please
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationUser">
          Nice.
        </b-form-valid-feedback>
      </b-form-group>
      <b-button type="reset" variant="danger" @click="onReset">Cancel</b-button>
      <b-button  type="submit" variant="primary">
        Confirm
      </b-button>
    </b-form>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  emits: ['form-data'],
  data: () => ({
    form: {
      title: '',
      desc: '',
      user: '',
    }
  }),
  methods: {
    ...mapActions(["setModalActive", "getUsersFromApi"]),

    onSubmit() {
      this.$emit('formData', this.form);
      this.form.title = "";
      this.form.desc = "";
      this.form.user = "";
      this.hideModal();
    },
    onReset() {
      this.form.title = "";
      this.form.desc = "";
      this.form.user = "";
      this.hideModal();
    },
    showModal() {
      this.$refs.modalRef.show();
    },
    hideModal() {
      this.$refs.modalRef.hide();
    },
  },
  computed: {
    ...mapGetters(["getModalAction", "getUsers"]),
    validationTitle() {
      return this.form.title.length > 5;
    },
    validationUser() {
      return this.form.user.length > 0;
    }
  },
  beforeCreate() {},
};
</script>

<style lang="scss" scoped>
</style>
