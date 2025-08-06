<template>
  <div>
    <h1>Home Page</h1>
    <UserForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserForm from '../components/UserForm.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    UserForm,
  },
});
</script>
