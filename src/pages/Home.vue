<!--
 * @Date: 2022-03-24 11:34:08
 * @Author: zhuo hongkai
 * @LastEditors: zhuo hongkai
 * @LastEditTime: 2022-03-29 17:28:17
-->
<template>
<k-container :direction="'horizontal'" class="main-container">
  <k-aside>
    <k-menus :menus="menus">
      <template #menuHeader>header</template>
      <!-- eslint-disable-next-line vue/no-v-for-template-key -->
      <template #menuFooter>footer</template>
    </k-menus>
  </k-aside>
  <k-container>
    <k-header></k-header>
    <k-main class="main-content">
      Home
        <k-button :type="type" :size="size" :shape="shape" :disabled="disabled">button1</k-button>
        <k-button v-bind="state">b</k-button>
        <k-button @click="toggle">切换</k-button>

        <k-button-group>
          <k-button v-bind="state">b1</k-button>
          <k-button v-bind="state">b2</k-button>
          <k-button type="danger" shape="text">b2</k-button>
          <k-button type="success" shape="text">b2</k-button>
        </k-button-group>

        <k-button-group>
          <k-button type="primary">b1</k-button>
          <k-button type="danger" shape="border">b2</k-button>
          <k-button type="success">b3</k-button>
        </k-button-group>
    </k-main>
    <k-footer></k-footer>
  </k-container>
</k-container>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import KButton from '../components/button/src/button.vue'
import KButtonGroup from '../components/button/src/buttonGroup.vue'
import KContainer from '../components/kContainer/src/kContainer.vue'
import KAside from '../components/kContainer/src/kAside.vue'
import KHeader from '../components/kContainer/src/kHeader.vue'
import KMain from '../components/kContainer/src/kMain.vue'
import KFooter from '../components/kContainer/src/kFooter.vue'
import KMenus from '../components/menus/kMenus.vue'
import KMenuItem from '../components/menus/kMenuItem.vue'
import KSubMenu from '../components/menus/kSubMenu.vue'

export default defineComponent({
  name: 'homePage',
  components: { KButton, KButtonGroup, KContainer, KAside, KHeader, KMain, KFooter, KMenus, KMenuItem, KSubMenu },
  setup () {
    const colors = ['primary', 'success', 'warn', 'danger']
    const sizes = ['mini', 'small', 'default', 'large']
    const shapes = ['default', 'round', 'circle', 'text', 'border']
    const menus = [
      { name: '菜单1', child: [] },
      { name: '菜单2', child: [] },
      {
        name: '菜单3',
        child: [
          { name: '菜单3-1', child: [] },
          { name: '菜单3-2', child: [] },
          { name: '菜单3-3', child: [] }]
      },
      {
        name: '菜单4',
        child: [
          { name: '菜单4-1', child: [] },
          { name: '菜单4-2', child: [] },
          {
            name: '菜单4-3',
            child: [{ name: '菜单4-3-1', child: [] },
              { name: '菜单4-3-2', child: [] },
              { name: '菜单4-3-3', child: [] }]
          }
        ]
      },
      { name: '菜单5', child: [] },
      { name: '菜单6', child: [] },
      { name: '菜单7', child: [] }
    ]
    let index = 0
    const state = reactive({
      type: 'primary',
      size: 'default',
      shape: 'default',
      disabled: false,
      loading: false
    })

    function toggle () {
      const currentIndex = ++index
      state.type = colors[currentIndex % 4]
      state.size = sizes[currentIndex % 4]
      state.shape = shapes[currentIndex % 5]
      state.disabled = !state.disabled
      state.loading = !state.loading
    }

    return {
      state,
      ...toRefs(state),
      menus,
      toggle
    }
  }
})
</script>
