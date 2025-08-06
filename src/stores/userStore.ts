import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {
      userid: '',
      name: '',
      email: '',
    },
  }),
  actions: {
    async sendToBackend() {
      try {
        const res = await fetch('http://localhost/Fubagram/api/controller/testController.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.user),
        });
        const result = await res.json();
        console.log(result);
      } catch (error) {
        console.error('Error sending data:', error);
      }
    },
  },
});
