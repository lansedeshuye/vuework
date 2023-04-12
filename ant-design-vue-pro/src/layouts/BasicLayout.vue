<template>
  <div>
    <a-layout style="min-height: 100vh">
      <a-layout-sider
        width="256px"
        :trigger="null"
        v-model:collapsed="collapsed"
        collapsible
      >
        <div class="logo" />
        <SiderMenu></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <!-- <a-icon  icon 新版本被弃用
            :type="collapsed ? 'menu-fold' : 'menu-unfold'"
            @click="collapsed = !collapsed"
          ></a-icon> -->
          <!-- <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = collapsed)"
          /> -->

          <a-button
            type="primary"
            style="margin-bottom: 16px; margin-left: 24px"
            @click="toggleCollapsed"
          >
            <MenuUnfoldOutlined v-if="collapsed" />
            <MenuFoldOutlined v-else />
          </a-button>

          <Header></Header>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import SiderMenu from './SiderMenu.vue'

import {  PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined,
  MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default {
  components: {
    Header,
    Footer,
    SiderMenu,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  data () {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),
    };
  },
  setup () {
    const collapsed = ref(false);
    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };
    return {
      collapsed,
      toggleCollapsed,

    };
  },
}
</script>

<style>
.trigger {
  padding-left: 50px;
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.trigger:hover {
  color: #1890ff;
}
</style>
