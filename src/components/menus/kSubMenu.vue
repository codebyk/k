<!--
 * @Date: 2022-03-29 16:28:15
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 17:35:30
-->
<!--
 * @Date: 2022-03-29 15:43:52
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 16:26:14
-->
<template>
    <ul class="k-sub-menu" @click="toggle">
        <li v-for="menu in menus" :key="menu.name">
             <slot name="title" />
             {{menu.name}}
        <div :class="`k-sub-menu-btn ${isExpanded ? 'k-sub-menu-btn-expanded' : ''}`">V</div>

        <k-sub-menu v-if="menu?.child?.length" :menus="menu.child"></k-sub-menu>
        </li>
    </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'KSubMenu',
  props: {
    menus: {
      type: Object,
      default: null
    }
  },
  emits: [],
  setup () {
    const isExpanded = ref(false)
    function toggle () {
      isExpanded.value = !isExpanded.value
      console.log(isExpanded.value)
    }
    return {
      isExpanded,
      toggle
    }
  }
})
</script>
<style lang="less">
@import './kSubMenu.less';
</style>
