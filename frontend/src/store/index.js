import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import { EncryptStorage } from 'encrypt-storage';
import axios from 'axios';
import qs from 'qs';

export const encryptStorage = new EncryptStorage(toString('exposed2024'), {
  storageType: 'localStorage',
  stateManagementUse: true
});

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    UPDATE_USER(state, payload){
      state.user = payload
    },
  },
  actions: {
    async login({commit}, data) {
      console.log("CODE: ", data)
      try {        
				const payload = {
					client_id: process.env.VUE_APP_TWITCH_CLIENT_ID,
					client_secret: process.env.VUE_APP_TWITCH_CLIENT_SECRET,
					code: data.code,
					grant_type: 'authorization_code',
					redirect_uri: process.env.VUE_APP_AUTH_REDIRECT_URL
				}
        const res = await axios({
          url: `${process.env.VUE_APP_TWITCH_AUTH_TOKEN_URL}`,
          method: 'post',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
          data: qs.stringify(payload)
        })
        console.log("RESPONSE: ", res.data)

        if (res.status !== 200) {
          throw new Error("Unable to get access token.")
        }

        commit('UPDATE_USER', res.data);
      } catch (error) {
        console.error("AUTH_ERROR: ", error);
        alert("Not able to login. Something went wrong!")
      }
    },
    logout({commit}) {
      commit('UPDATE_USER', {})
    }
  },
  modules: {
  },
  plugins: [createPersistedState({ 
    storage: { 
      setItem: (key, state) => encryptStorage.setItem(key, state),
      getItem: (key) => encryptStorage.getItem(key),
      removeItem: (key) => encryptStorage.removeItem(key)
    }
  })],
})
