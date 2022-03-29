<!--
 * @Date: 2022-03-24 11:36:59
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 11:51:08
-->
<template>
  <button
    @click="change"
    :disabled="disabled"
    :loading="loading"
    :class="[
      'k-button',
      `k-button-${type}`,
      `k-button-${size}`,
      `k-button-shape-${shape}`,
      `${disabled || loading ? 'k-button-disabled' : ''}`
    ]"
    :style="buttonStyle"
  >
    <slot/>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
type SHAPES = 'default' | 'round' | 'circle' | 'text' | 'border'

export default defineComponent({
  name: 'KButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    shape: {
      type: String as PropType<SHAPES>,
      default: 'default'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    buttonStyle: {
      type: Object,
      default: null
    }
  },
  setup () {
    return {}
  }
})
</script>
<style lang="less">
@import "./button.less";
</style>
