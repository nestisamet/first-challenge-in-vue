import Vue from "vue";

export const store = Vue.observable({
  profile:""
});

export const mutations = {
  setProfile(profile) {
    store.profile = profile;
  }
}   