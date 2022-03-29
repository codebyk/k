<!--
 * @Date: 2022-03-29 15:34:39
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 15:37:51
-->
<template>
    <div class="k-footer">
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
@import './kFooter.less';
</style>
