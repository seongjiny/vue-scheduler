<template>
  <div>
    <button v-if="!loggedIn()" @click="kakaoLogin">
      <img src="./../assets/kakao_login_large_wide_kr.png" />
    </button>
    <br /><br />
    <button v-if="loggedIn()" @click="kakaoLogout">Logout</button>
    <br /><br />
    <button @click="printStoreValues()">Print</button>
    <button @click="changeState()">Change State</button>
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
export default {
  name: "LoginComponent",
  components: {},
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname, account_email, gender",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      console.log("Login 성공");
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          console.log(res);
          const acc = res.kakao_account;
          const nickname = acc.profile.nickname;
          const email = acc.email;
          this.$store.commit("loginUser", acc);
          console.log(nickname);
          console.log(email);
          VueCookies.set("nickname", nickname);
          VueCookies.set("email", email);
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
    kakaoLogout() {
      window.Kakao.isInitialized();

      window.Kakao.Auth.logout(function () {
        console.log("로그아웃");
        console.log(window.Kakao.Auth.getAccessToken());
        VueCookies.remove("nickname");
        VueCookies.remove("email");
        location.reload();
      });
    },
    loggedIn() {
      return window.Kakao.Auth.getAccessToken();
    },
    printStoreValues() {
      console.log("Current Store Values");
      console.log(this.$store.state.nickname);
      console.log(this.$store.state.email);
    },
    changeState() {
      this.$store.commit("loginUser", {
        profile: { nickname: "test" },
        email: "test@nav.com",
      });
    },
  },
};
</script>

<style>
img:hover {
  cursor: pointer;
}
</style>