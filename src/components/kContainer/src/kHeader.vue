<!--
 * @Date: 2022-03-29 15:24:17
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 15:32:44
-->
<template>
    <div class="k-header">
        <slot/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>
<style>
@import './kHeader.less'
</style>
