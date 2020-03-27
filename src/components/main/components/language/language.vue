<template>
  <div>
    <Badge class="badge" :count="99" type="success">
      <Icon type="ios-notifications-outline" size="26"></Icon>
    </Badge>
    <Tooltip class="icon-help" content="使用文档">
      <Icon type="ios-help-circle-outline" />
    </Tooltip>
    <Input style="margin-right:50px;width:200px" search placeholder="输入搜索内容" />
    <Dropdown style="margin-right:50px" trigger="click" @on-click="selectLang">
      <a href="javascript:void(0)">
        {{ title }}
        <Icon :size="18" type="md-arrow-dropdown" />
      </a>

      <DropdownMenu slot="list">
        <DropdownItem v-for="(value, key) in localList" :name="key" :key="`lang-${key}`">{{ value }}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: 'Language',
  props: {
    lang: String
  },
  data () {
    return {
      langList: {
        'zh-CN': '语言',

        'en-US': 'Lang'
      },
      localList: {
        'zh-CN': '中文简体',

        'en-US': 'English'
      }
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }
  },
  computed: {
    title () {
      return this.langList[this.lang]
    }
  },
  methods: {
    selectLang (name) {
      this.$emit('on-lang-change', name)
    }
  }
}
</script>

<style lang='less' scoped>
.badge {
  margin-right: 50px;
  .ivu-badge-count-success {
    top: 13px !important;
  }
}

.icon-help {
  margin-right: 30px;
  font-size: 25px;
  cursor: pointer;
}
</style>