<!--
 * @Date: 2022-03-29 15:15:17
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 15:26:08
-->
<template>
    <div class="k-aside">
        <slot/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {

    }
  }
})
</script>
<style lang="less">
@import './kAside.less';
</style>
