<!--
 * @Date: 2022-03-29 14:49:38
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 15:03:45
-->
<template>
    <div :class="['k-container', `k-container-${direction}`]">
        <slot/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    direction: {
      type: String,
      default: 'vertical'
    }
  },
  setup () {
    return {}
  }
})
</script>
<style lang="less">
@import './kContainer.less';
</style>
