<!--
 * @Date: 2022-03-29 15:43:52
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 17:37:20
-->
<template>
    <ul :class="`k-menus k-menus-${type}`">
        <slot name="menuHeader"/>
        <li v-for="menu in menus" :key="menu.name">
            {{menu.name}}
            <k-sub-menu v-if="menu?.child?.length" :menus="menu.child"></k-sub-menu>
        </li>
        <slot name="menuFooter"/>
        <div v-if="showToggle">toggle</div>
    </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import kSubMenu from './kSubMenu.vue'

export default defineComponent({
  components: { kSubMenu },
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'vertical'
    },
    activeItem: {
      type: String,
      default: ''
    },
    showToggle: {
      type: Boolean,
      default: false
    }
  },
  emits: [],
  setup () {

  }
})
</script>
<style lang="less">
@import './kMenus.less';
</style>
