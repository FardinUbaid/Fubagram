import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {
      userid: '',
      name: '',
      email: '',
    },
    users: [] as Array<{ userid: string; name: string; email: string }>,
  }),
  actions: {
    async insert() {
      try {
        const res = await fetch('http://localhost/Fubagram/api/controller/testController.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.user),
        });
        const result = await res.json();
        console.log('Inserted:', result);
      } catch (error) {
        console.error('Insert Error:', error);
      }
    },

    async fetchAll() {
      try {
        const res = await fetch('http://localhost/Fubagram/api/controller/testController.php');
        const result = await res.json();
        this.users = result;
        console.log('Fetched users:', result);
      } catch (error) {
        console.error('Fetch Error:', error);
      }
    },

    async update() {
      try {
        const res = await fetch('http://localhost/Fubagram/api/controller/testController.php', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.user),
        });
        const result = await res.json();
        console.log('Updated:', result);
      } catch (error) {
        console.error('Update Error:', error);
      }
    },

    async delete(userid: string) {
      try {
        const res = await fetch('http://localhost/Fubagram/api/controller/testController.php', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userid }),
        });
        const result = await res.json();
        console.log('Deleted:', result);
      } catch (error) {
        console.error('Delete Error:', error);
      }
    },
  },
});
