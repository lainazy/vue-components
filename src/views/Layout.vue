<template>
  <div>
    <div class="doc-header border-bottom-line">
      <div class="logo-container">
        <img src="@/assets/images/logo.png" class="logo">
        <span class="title">Vue组件说明文档</span>
      </div>
    </div>
    <div class="doc-content">
      <nav class="nav">
        <ul class="list">
          <li class="item" v-for="item in components" :key="item.name">
            <a :href="`#/doc/${lowerFirstChar(item.name)}`" class="link" :class="{'link-active': isSelected(item)}">{{item.zhName}}<span class="text-en">{{item.name}}</span></a>
          </li>
        </ul>
      </nav>
      <div class="doc-view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import components from '@/data/components';

  export default {
    name: 'layout',
    data() {
      return {
        components,
        selectedItem: '',
      };
    },
    methods: {
      lowerFirstChar(str) {
        return str.substring(0, 1).toLowerCase() + str.substring(1);
      },
      isSelected(item) {
        return this.selectedItem === item.name || this.selectedItem === this.lowerFirstChar(item.name);
      },
    },
    created() {
      this.selectedItem = this.$route.params.component;
    },
    beforeRouteUpdate(to, from, next) {
      this.selectedItem = to.params.component;
      next();
    },
  };
</script>

<style lang="scss" scoped>
  .doc-header {
    padding: 12px;
    height: 60px;
    z-index: 1;
    .logo-container {
      height: 100%;
      text-align: left;
      margin-left: 20px;
      .logo {
        height: 100%;
        vertical-align: middle;
      }
      .title {
        font-size: 20px;
        vertical-align: middle;
        margin-left: 10px;
      }
    }
  }
  .doc-content {
    height: calc(100vh - 60px);
    .nav {
      position: relative;
      float: left;
      padding-left: 24px;
      width: 240px;
      height: 100%;
      overflow: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: auto;
      background-color: #f5f9fc;
      .list {
        margin: 0;
        padding: 0;
        border-left: 1px solid #eaf0f2;
      }
      .item {
        list-style: none;
        text-align: left;
      }
      .link {
        text-decoration: none;
        display: block;
        padding: 8px 14px;
        font-size: 14px;
        color: #555;
        .text-en {
          margin-left: 6px;
          font-size: 12px;
          color: #999;
        }
        &:hover {
          color: #16aa6b;
          background-color: #eaf0f2;
        }
      }
      .link-active {
        color: #16aa6b;
        background-color: #eaf0f2;
        .text-en {
          color: #16aa6b;
        }
      }
    }
    .doc-view {
      margin-left: 240px;
      height: 100%;
      overflow: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: auto;
    }
  }
</style>
