// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import axios from "axios";

import router from "./router";
import i18n from "./locale";
import config from "@/config";

import store from "./store";

import OneitfarmIgd from "@oneitfarm/idg";
import iview from "iview";
import "iview/dist/styles/iview.css";

// import config from "./config/index.json";
import install from "./install";
import qs from "qs";

Vue.config.productionTip = false;
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config;

Vue.use(iview, {
  i18n: (key, value) => i18n.t(key, value)
});

Vue.use(OneitfarmIgd);
// Vue.use(iview);

install(Vue, { router, i18n, store });

/* eslint-disable no-new */
const BACKEND_URL = "http://w5c78ffca86a24-dev.oneitfarm.com";
new Vue({
  el: "#app",
  router,
  i18n,
  store,
  components: { App },
  template: "<App/>",
  created() {
    window.vm = this;
    this.$oneitfarm.request = {
      post: axios.post,
      get: axios.get
    };
    this.$oneitfarm.getApiBaseUrl = service => {
      return (
        BACKEND_URL +
        "index.php/Proxy/proxy?service=" +
        service +
        "&url=main.php"
      );
    };
    this.$oneitfarm.getAppkey = () => {
      return "eqqrkitj7povbnzc419bdruwxhaxmykg";
    };
    this.$oneitfarm.getChannel = () => {
      return "0";
    };
    this.$oneitfarm.loginSuccess = token => {
      window.location.href = "http://www.ci123.com";
    };
    this.$oneitfarm.loginWithCaptchaSuccess = token => {
      window.location.href = "http://www.ci123.com";
    };
    this.$oneitfarm.transferPost = (serviceAppId, api, params) => {
      const URL =
        window.backend_url +
        "index.php/Proxy/proxy?service=" +
        serviceAppId +
        "&url=" +
        api;
      axios
        .post(URL, qs.stringify(params))
        .then(function(response) {
          console.log(response);
          return response;
        })
        .catch(function(error) {
          console.log(error);
        });
    };
  }
});
