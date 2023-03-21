import axios from 'axios';
import { defineStore } from 'pinia';

const API_URL = "https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/";
export const useCountStore = defineStore("state", {
  state: () => {
    return {
      data: []
    };
  },
  actions: {
    async userState() {
      try {
        await axios
          .get(API_URL + `/users`)
          .then((res) => {
            this.data = res
            return res;
          });
      } catch (error) {
        this.alertErro = true;
      }
    },
    async taskStaste() {
      try {
        await axios
          .get(API_URL + `/tasks`)
          .then((res) => {
            this.data = res
            return res;
          });
      } catch (error) {
        this.alertErro = true;
      }
    },
    registerUser(payload) {
      try {
        axios.post(API_URL + `/users`, payload)
      }
      catch (error) {
        this.alertErro = true
      }
    },
    registerTasks(payload) {
      try {
        axios.post(API_URL + `/tasks`, payload)
      }
      catch (error) {
        this.alertErro = true
      }
    },
    atulizarTasks(atualizarPayload, id) {
      try {
        axios.put(API_URL + `/tasks/${id}`, atualizarPayload)
      }
      catch (error) {
        this.alertErro = true
      }
    },
    deleteTasks(id) {
      try {
        axios.delete(API_URL + `/tasks/${id}`)
      }
      catch (error) {
        this.alertErro = true
      }
    },
    doneTasks(payload) {
      this.taskStaste()
      setTimeout(() => {
        let Done = this.data.data.filter(e => e.done == payload.done)
        if (payload.done == 'Todos') {
          Done = this.data.data.filter(e => e)
          return this.data.data = Done
        }
        else {
          this.data.data = Done
        }
         this.data.data = Done
      }, 400);
    },
  }
});
