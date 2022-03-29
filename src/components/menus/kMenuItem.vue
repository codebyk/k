<!--
 * @Date: 2022-03-29 16:00:35
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 16:05:54
-->
<template>
    <div class="k-menu-item">
        <slot/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {

  }
})
</script>
<style lang="less">
@import './kMenuItem.less';
</style>
