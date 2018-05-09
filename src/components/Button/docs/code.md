```html
<template>
  <div class="wrapper">
    <v-button class="button-class float">基础按钮</v-button>
    <v-button class="button-class float" shadow>基础按钮(有阴影效果)</v-button>
    <v-button class="button-class float purple" ripple-opacity="0.3">基础按钮(有背景色)</v-button>
    <v-button class="button-class float" disabled>基础按钮(禁用)</v-button>
    <v-button class="button-class float light-gray">
      <v-icon-text :image="require('@/assets/images/logo.png')" text="图标按钮" spacing="8px" />
    </v-button>
  </div>
</template>

<script>
  import Button from 'vue-components/Button';
  import IconText from 'vue-components/IconText';

  export default {
    components: {
      [Button.name]: Button,
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
  .button-class {
    margin: 6px auto;
    padding: 8px 16px;
    font-size: 14px;
    color: cadetblue;
    background-color: transparent;
    border-radius: 3px;
    &.purple {
      color: #fff;
      background-color: #7e57c2;
    }
    &.light-gray {
      color: #333;
      background-color: #f5f5f5;
    }
  }
</style>
```
