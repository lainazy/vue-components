<template>
  <transition :name="transition">
    <div class="v-toast" :class="positionClass" v-show="showValue">
      <div class="toast-wrap">
        <i class="toast-icon iconfont" :class="iconClass" v-show="showIcon"></i>
        <div class="toast-content" v-show="!!content">{{content}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
  const iconMap = {
    success: 'icon-smile',
    error: 'icon-cry',
    cancel: 'icon-embarrass',
  };
  export default {
    name: 'v-toast',
    data() {
      return {
        showValue: false,
      };
    },
    props: {
      value: Boolean,
      content: String,
      position: String,
      type: {
        type: String,
        default: 'text',
      },
      time: {
        type: Number,
        default: 2000,
      },
    },
    computed: {
      transition() {
        if (this.position === 'top') return 'slide-in-down';
        if (this.position === 'bottom') return 'slide-in-up';
        return 'fade';
      },
      positionClass() {
        if (this.position === 'top' || this.position === 'bottom') {
          return `toast-${this.position}`;
        }
        return 'toast-middle';
      },
      iconClass() {
        return iconMap[this.type];
      },
      showIcon() {
        return Object.keys(iconMap).indexOf(this.type) > -1;
      },
    },
    watch: {
      value(val) {
        this.showValue = val;
      },
      showValue(val) {
        this.$emit('input', val);
        if (val) {
          setTimeout(() => {
            this.showValue = !val;
          }, this.time);
        }
      },
    },
    created() {
      if (this.value) {
        this.showValue = this.value;
      }
    },
  };
</script>

<style lang="scss">
  $toast-font-color: #fff;
  $toast-background-color: rgba(0, 0, 0, 0.6);
  .v-toast {
    position: fixed;
    width: 100%;
    text-align: center;
    z-index: 1;
    &.toast-top {
      top: 30px;
    }
    &.toast-middle {
      top: 50%;
      transform: translate3d(0, -50%, 0);
    }
    &.toast-bottom {
      bottom: 30px;
    }
  }
  .toast-wrap {
    display: inline-block;
    padding: 10px 12px;
    max-width: 300px;
    font-size: 14px;
    color: $toast-font-color;
    background-color: $toast-background-color;
    border-radius: 4px;
    .toast-icon {
      font-size: 32px;
    }
    .toast-content {
      min-width: 50px;
      word-wrap: break-word;
    }
  }
</style>
