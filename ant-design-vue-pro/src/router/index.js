import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/404.vue";
// import RenderRouteUserView from "../components/RenderRouteUserView.vue";

const routes = [
  {
    path: "/user",
    hideInMenu: true,
    // component: { render: h => h("router-view") },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout.vue"),
    children: [
      //重定向
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Login.vue"),
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Register.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
    children: [
      //重定向
      {
        path: "/",
        redirect: "/dashboard/analysis",
      },
      // dashboard
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { icon: "dashboard", title: "仪表盘" },
        // component: { render: h => h("router-view") }, 旧版本要写，新版本不用写，写了还不行
        // component: () =>
        //   import(/* webpackChunkName: "layouts" */ "../layouts/DashboardLayout.vue"),
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            meta: { title: "分析页" },
            component: () =>
              import(/* webpackChunkName: "dashboard" */ "../views/dashboard/Analysis.vue"),
          }

        ]

      },
      // form
      {
        path: "/form",
        name: "from",
        meta: { icon: "form", title: "表单" },
        // component: { render: h => h("router-view") },
        children: [
          {
            path: "/form/besic-form",
            name: "besic-form",
            meta: { title: "基础表单" },
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/froms/BesicForm.vue"),
          },
          {
            path: "/form/step-form",
            name: "step-form",
            meta: { title: "分布表单" },
            hideChildrenInMenu: true,
            component: () =>
              import(/* webpackChunkName: "from" */ "../views/froms/StepForm.vue"),
            children: [
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info",
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () =>
                  import(/* webpackChunkName: "from" */ "../views/froms/StepFormInfo.vue"),
              },
              {
                path: "/form/step-form/confirm",
                name: "confirm",
                component: () =>
                  import(/* webpackChunkName: "from" */ "../views/froms/StepFormConfirm.vue"),
              },
              {
                path: "/form/step-form/result",
                name: "result",
                component: () =>
                  import(/* webpackChunkName: "from" */ "../views/froms/StepFormResult.vue"),
              }
            ]
          }

        ]
      }


    ]
  },
  {
    path: "/:pathMatch(.*)", //vue2 使用* , vue3 必须使用正则表达式 /:pathMatch(.*) 或者/:catchAll(.*)
    name: "404",
    hideInMenu: true,
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
