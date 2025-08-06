<template>
  <div class="q-pa-lg bg-dark text-white min-vh-100">
    <div class="text-h4 text-center q-mb-xl">Home Page</div>

    <div class="q-mx-auto" style="max-width: 500px">
      <UserForm />
    </div>
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
