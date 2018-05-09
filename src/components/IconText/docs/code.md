```html
<template>
  <div class="wrapper">
    <v-icon-text class="icon-text-class float" icon="icon-smile" />
    <v-icon-text class="icon-text-class float" icon="icon-smile" text="图标在文字左侧 (默认)" spacing="4px" />
    <v-icon-text class="icon-text-class float" icon="icon-smile" text="图标在文字右侧" position="right" spacing="4px" />
    <v-icon-text class="icon-text-class float" :image="require('@/assets/images/logo.png')" text="图标在文字上侧" text-size="12px" position="top" spacing="4px" />
    <v-icon-text class="icon-text-class float" :image="imageSrc" text="图标在文字下侧" text-size="12px" position="bottom" spacing="4px" />
    <v-icon-text class="icon-text-class float" text="图标在文字左侧 (默认)" spacing="4px">
      <i class="slot-icon iconfont icon-smile"></i>
    </v-icon-text>
    <v-icon-text class="icon-text-class float" text="图标在文字左侧 (默认)" spacing="4px">
      <img class="slot-image" src="@/assets/images/logo.png" alt="logo">
    </v-icon-text>
  </div>
</template>

<script>
  import IconText from 'vue-components/IconText';
  import logo from '@/assets/images/logo.png';

  export default {
    data() {
      return {
        imageSrc: logo,
      };
    },
    components: {
      [IconText.name]: IconText,
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 20px 40px;
    overflow: hidden;
    .float {
      float: left;
      clear: both;
    }
  }
  .icon-text-class {
    display: inline-block;
    margin: 6px auto;
    padding: 6px 12px;
    background-color: #f5f5f5;
    border-radius: 3px;
    .slot-icon {
      font-size: 24px;
      line-height: 1;
      vertical-align: middle;
    }
    .slot-image {
      width: 24px;
      height: 24px;
      vertical-align: middle;
    }
  }
</style>
```
