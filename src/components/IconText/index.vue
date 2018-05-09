<template>
  <div class="v-icon-text">
    <span :class="textClass" :style="textStyle" v-if="text && (position === 'right' || position === 'bottom')">{{text}}</span>
    <slot>
      <i class="icon iconfont" :class="iconClass" :style="iconStyle" v-if="!image"></i>
      <img :src="image" :class="imageClass" :style="imageStyle" v-else>
    </slot>
    <span :class="textClass" :style="textStyle" v-if="text && (position === 'left' || position === 'top')">{{text}}</span>
  </div>
</template>

<script>
  export default {
    name: 'v-icon-text',
    props: {
      icon: {
        type: String,
      },
      image: {
        type: String,
      },
      text: {
        type: String,
      },
      iconSize: {
        type: String,
        default: '24px',
      },
      imageSize: {
        type: String,
        default: '24px',
      },
      textSize: {
        type: String,
        default: '14px',
      },
      iconColor: {
        type: String,
      },
      textColor: {
        type: String,
      },
      position: {
        type: String,
        default: 'left',
      },
      spacing: {
        type: String,
      },
    },
    computed: {
      iconClass() {
        if (this.position === 'top' || this.position === 'bottom') return this.icon;
        return `${this.icon} middle`;
      },
      imageClass() {
        if (this.position === 'top' || this.position === 'bottom') return '';
        return 'middle';
      },
      textClass() {
        if (this.position === 'top' || this.position === 'bottom') return 'block';
        return 'middle';
      },
      iconStyle() {
        if (this.icon && this.iconSize) {
          return {
            fontSize: this.iconSize,
          };
        }
        return {};
      },
      imageStyle() {
        if (this.image && this.imageSize) {
          return {
            width: this.imageSize,
            height: this.imageSize,
          };
        }
        return {};
      },
      textStyle() {
        return {
          [`margin-${this.position}`]: this.spacing,
          fontSize: this.textSize,
          color: this.textColor,
        };
      },
    },
  };
</script>

<style lang="scss" scoped>
  .v-icon-text {
    text-align: center;
    font-size: 0;
    .icon {
      line-height: 1;
    }
    .middle {
      vertical-align: middle;
    }
    .block {
      display: block;
    }
  }
</style>

