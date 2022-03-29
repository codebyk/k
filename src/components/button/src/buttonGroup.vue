<!--
 * @Date: 2022-03-29 11:55:57
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 14:35:22
-->
<template>
    <div class="k-button-group">
        <slot/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'KButtonGroup',
  setup () {
    return {

    }
  }
})
</script>
<style lang="less">
@import "./buttonGroup.less";
</style>
