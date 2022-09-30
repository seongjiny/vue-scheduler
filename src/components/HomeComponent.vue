<template>
  <div>
    <p v-if="loggedIn()">어서오세요 {{ userName }} 님</p>
    <p v-else>로그인 후 서비스를 이용 할 수 있습니다.</p>
  </div>
  <button @click="print">로그인 여부</button>
  <br />
  <hr />
  {{ $store.state.nickname }}
  {{ $store.state.email }}
</template>

<script>
import { mapState } from "vuex";
import VueCookies from "vue-cookies";
export default {
  data() {
    //현재 컴포넌트에서 사용할 데이터셋
    return {
      userName: VueCookies.get("nickname"),
    };
  },
  name: "HomeComponent",
  computed: {
    ...mapState(["nickname"]),
    ...mapState(["email"]),
  },
  methods: {
    loggedIn() {
      return VueCookies.isKey("email") && VueCookies.isKey("nickname");
    },
    print() {
      console.log(VueCookies.isKey("email"));
      console.log(VueCookies.isKey("nickname"));
      console.log(this.loggedIn());
      console.log(VueCookies.isKey("email") && VueCookies.isKey("nickname"));
    },
  },
};
</script>

<style>
</style>