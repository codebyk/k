<!--
 * @Date: 2022-03-29 15:27:07
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 15:33:59
-->
<template>
    <div class="k-main">
        <slot/>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>
<style>
@import './kMain.less';
</style>
