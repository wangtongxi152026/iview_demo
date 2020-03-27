import Main from "@/components/main";
// - 控制面板             - Dashboard
//   - 分析页               - Analytic
//   - 监控页               - Monitor
//   - 工作台               - Workspace
// - 表单页             - Form
//   - 基础表单页               - Basic Form
//   - 分步表单页               - Step Form
//   - 高级表单页               - Advanced From
// - 列表页             - List
//   - 查询表格               - Standard Table
//   - 标准列表               - Standard List
//   - 卡片列表               - Card List
//   - 搜索列表（项目/应用/文章）               - Search List (Project/Applications/Article)
// - 详情页             - Profile
//   - 基础详情页               - Simple Profile
//   - 高级详情页               - Advanced Profile
// - 结果             - Result
//   - 成功页               - Success
//   - 失败页               - Failed
// - 异常             - Exception
//   - 403 无权限               - 403
//   - 404 找不到               - 404
//   - 500 服务器出错               - 500
// - 帐户             - User
//   - 登录               - Login
//   - 注册               - Register
//   - 注册成功               - Register Result

export default [
  // {
  //   path: "/login",
  //   name: "login",
  //   meta: {
  //     title: "Login - 登录",
  //     hideInMenu: true
  //   },
  //   component: () => import("@/view/login/login.vue")
  // },

  {
    path: "/",
    name: "Dashboard",
    meta: {
      icon: "md-home",
      title: "首页"
    },
    component: Main,
    children: [
      {
        path: "/Analytic",
        name: "Analytic",
        meta: {
          icon: "md-happy",
          title: "分析页"
        },
        component: () => import("@/view/Analytic")
      },
      {
        path: "/Monitor",
        name: "Monitor",
        meta: {
          icon: "md-happy",
          title: "监控页"
        },
        component: () => import("@/view/Monitor")
      },
      {
        path: "/Workspace",
        name: "Workspace",
        meta: {
          icon: "md-happy",
          title: "工作台"
        },
        component: () => import("@/view/Workspace")
      }
    ]
  },
  {
    path: "/Form",
    name: "Form",
    meta: {
      icon: "ios-create",
      title: "表单页"
    },
    component: Main,
    children: [
      {
        path: "/BasicForm",
        name: "Basic_Form",
        meta: {
          icon: "md-happy",
          title: "基础表单页"
        },
        component: () => import("@/view/basic-form")
      },
      {
        path: "/StepForm",
        name: "Step_Form",
        meta: {
          icon: "md-happy",
          title: "分步表单页"
        },
        component: () => import("@/view/Monitor")
      },
      {
        path: "/AdvancedFrom",
        name: "Advanced_From",
        meta: {
          icon: "md-happy",
          title: "高级表单页"
        },
        component: () => import("@/view/Workspace")
      }
    ]
  },

  {
    path: "/List",
    name: "List",
    meta: {
      icon: "md-menu",
      title: "列表页"
    },
    component: Main,
    //2
    children: [
      {
        path: "/StandardTable",
        name: "Standard_Table",
        meta: {
          icon: "ios-create",
          title: "查询表格"
        },
        component: () => import("@/view/Analytic")
      },

      {
        path: "/StandardList",
        name: "Standard_List",
        meta: {
          icon: "ios-create",
          title: "标准列表"
        },
        component: () => import("@/view/Analytic")
      },
      {
        path: "/CardList",
        name: "Card_List",
        meta: {
          icon: "ios-create",
          title: "卡片列表"
        },
        component: () => import("@/view/Analytic")
      },
      {
        path: "/Search List",
        name: "Search_List",
        meta: {
          icon: "ios-create",
          showAlways: true,
          title: "搜索列表"
        },
        component: () => import("@/view/Analytic"),
        //3
        children: [
          {
            path: "/SearchList/project",
            name: "Search_List_Project",
            meta: {
              icon: "md-happy",
              title: "搜索列表(项目)"
            },
            component: () => import("@/view/Analytic")
          },
          {
            path: "/SearchList/Applications",
            name: "Search_List_App",
            meta: {
              icon: "md-apps",
              title: "搜索列表(应用)"
            },
            component: () => import("@/view/Analytic")
          },
          {
            path: "/SearchList/Article",
            name: "Search_List_Article",
            meta: {
              icon: "md-happy",
              title: "搜索列表(文章)"
            },
            component: () => import("@/view/Analytic")
          }
        ]
      }
    ]
  },

  {
    path: "/Profile",
    name: "Profile",
    meta: {
      icon: "ios-list",
      title: "详情页"
    },
    component: Main,
    children: [
      {
        path: "/SimpleProfile",
        name: "Simple_Profile",
        meta: {
          icon: "md-happy",
          title: "基础详情页"
        },
        component: () => import("@/view/Simple-Profile")
      },

      {
        path: "/AdvancedProfile",
        name: "Advanced_Profile",
        meta: {
          icon: "md-happy",
          title: "高级详情页"
        },
        component: () => import("@/view/Workspace")
      }
    ]
  },
  {
    path: "/Result",
    name: "Result",
    meta: {
      icon: "ios-checkmark-circle-outline",
      title: "结果"
    },
    component: Main,
    children: [
      {
        path: "/Success",
        name: "Success",
        meta: {
          icon: "md-happy",
          title: "成功页"
        },
        component: () => import("@/view/ResultSuccess")
      },

      {
        path: "/Failed",
        name: "Failed",
        meta: {
          icon: "md-happy",
          title: "失败页"
        },
        component: () => import("@/view/ResultFail")
      }
    ]
  },
  {
    path: "/Exception",
    name: "Exception",
    meta: {
      icon: "ios-warning-outline",
      title: "异常"
    },
    component: Main,
    children: [
      {
        path: "/403",
        name: "403",
        meta: {
          icon: "md-happy",
          title: "403"
        },
        component: () => import("@/view/Analytic")
      },

      {
        path: "/404",
        name: "404",
        meta: {
          icon: "md-happy",
          title: "404"
        },
        component: () => import("@/view/Workspace")
      },

      {
        path: "/505",
        name: "505",
        meta: {
          icon: "md-happy",
          title: "505"
        },
        component: () => import("@/view/Workspace")
      }
    ]
  },
  {
    path: "User",
    name: "User",
    meta: {
      icon: "ios-contact-outline",
      title: "帐户"
    },
    component: Main,
    children: [
      {
        path: "/Login",
        name: "Login",
        meta: {
          icon: "ios-contact-outline",
          title: "登录"
        },
        component: () => import("@/view/Analytic")
      },
      {
        path: "/Register",
        name: "Register",
        meta: {
          icon: "ios-person-add-outline",
          title: "注册"
        },
        component: () => import("@/view/Analytic")
      },

      {
        path: "/RegisterResult",
        name: "Register_Result",
        meta: {
          icon: "ios-contact-outline",
          title: "注册成功"
        },
        component: () => import("@/view/Workspace")
      }
    ]
  }
];
