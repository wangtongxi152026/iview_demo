import Vue from "vue";
import VueI18n from "vue-i18n";
import customZhCn from "./lang/zh-CN";
import customEnUs from "./lang/en-US";
import zhCnLocale from "iview/src/locale/lang/zh-CN";
import enUsLocale from "iview/src/locale/lang/en-US";
import { localRead } from "@/libs/util";
Vue.use(VueI18n);

let lang = localRead("local") || "zh-CN";
Vue.config.lang = lang;
let i18n = {
  locale: "zh-CN",
  messages: {
    "zh-CN": Object.assign(zhCnLocale, customZhCn),
    "en-US": Object.assign(enUsLocale, customEnUs)
  }
};

export default new VueI18n(i18n);

export const i18nOptions = i18n;
