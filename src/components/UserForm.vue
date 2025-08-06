<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="userStore.user.userid" placeholder="User ID" />
    <input type="text" v-model="userStore.user.name" placeholder="Name" />
    <input type="email" v-model="userStore.user.email" placeholder="Email" />
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../stores/userStore';

export default defineComponent({
  name: 'UserForm',
  setup() {
    const userStore = useUserStore();

    const submit = async () => {
      await userStore.sendToBackend();
    };

    return { userStore, submit };
  },
});
</script>
