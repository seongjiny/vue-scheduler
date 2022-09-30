import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            nickname: 'abc',
            email: 'abc@naver.com',
        };
    },  
    mutations: {
        loginUser(state, acc) {
            console.log("Changing Login user by following acc");
            console.log(acc);
            state.nickname = acc.profile.nickname;
            state.email = acc.email;
        },
        logoutUser(state) {
            state.nickname = null;
            state.email = null;
        }
    }

})

export default store