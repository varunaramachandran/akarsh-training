<template>
  <div class="container">
    <form @submit.prevent="formSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          class="form-control"
          v-model="username"
          placeholder="Enter email"
        />
        <small class="form-text text-muted">username.</small>
        <template v-if="$v.username.$error">
          <span class="error-msg" v-if="!$v.username.required"
            >This is required.</span
          >
          <span class="error-msg" v-if="!$v.username.minLength"
            >Minlength error.</span
          >
        </template>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      username: "",
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    formSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log("No error");
    },
  },
};
</script>