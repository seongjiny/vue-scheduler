import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
const routes = [
    // 순서 중요 중복일 경우 위에 부터
    // {
    //     path: "/detail/:id",
    //     component: DetailComponent,
    //     children: [
    //         {
    //             path: "author",
    //             component: AuthorComponent,
    //         },
    //         {
    //             path: "comment",
    //             component: CommentComponent,
    //         }
    //     ]
    // },
    {
        path: "/login",
        component: LoginComponent,
    },
    {
        path: "/",
        component: HomeComponent,
    },
    // {
    //     path: "/:anything(.*)",
    //     component: HomeComponent,
    // },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 