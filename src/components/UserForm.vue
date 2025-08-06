<template>
  <q-form
    @submit.prevent="submit"
    class="q-gutter-md q-pa-md bg-grey-2 rounded-borders shadow-2"
    style="max-width: 400px; margin: auto"
  >
    <q-input
      v-model="userStore.user.userid"
      label="User ID"
      outlined
      dense
      lazy-rules
      :rules="[(val) => !!val || 'User ID is required']"
    />

    <q-input
      v-model="userStore.user.name"
      label="Name"
      outlined
      dense
      lazy-rules
      :rules="[(val) => !!val || 'Name is required']"
    />

    <q-input
      v-model="userStore.user.email"
      label="Email"
      type="email"
      outlined
      dense
      lazy-rules
      :rules="[
        (val) => !!val || 'Email is required',
        (val) => /.+@.+\..+/.test(val) || 'Enter a valid email',
      ]"
    />

    <div class="row justify-end q-gutter-sm">
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="secondary" flat @click="resetForm" />
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../stores/userStore';

export default defineComponent({
  name: 'UserForm',
  setup() {
    const userStore = useUserStore();

    const submit = async () => {
      await userStore.insert();
    };

    const resetForm = () => {
      userStore.user = { userid: '', name: '', email: '' };
    };

    return { userStore, submit, resetForm };
  },
});
</script>
