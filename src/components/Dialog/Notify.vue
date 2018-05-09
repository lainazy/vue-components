<template>
  <transition :name="transition">
    <div class="v-notify" :class="positionClass" v-show="showValue && !!content">
      <div class="notify-wrap">
        <div class="notify-content">{{content}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'v-notify',
    data() {
      return {
        showValue: false,
      };
    },
    props: {
      value: Boolean,
      content: String,
      position: String,
      time: {
        type: Number,
        default: 5000,
      },
    },
    computed: {
      transition() {
        if (this.position === 'bottom') return 'slide-in-up';
        return 'slide-in-down';
      },
      positionClass() {
        if (this.position === 'bottom') {
          return 'notify-bottom';
        }
        return 'notify-top';
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
  $notify-font-color: #d8d8d8;
  $notify-background-color: rgba(0, 0, 0, 0.6);
  .v-notify {
    position: fixed;
    width: 100%;
    text-align: center;
    z-index: 1;
    &.notify-top {
      top: 0;
    }
    &.notify-bottom {
      bottom: 0;
    }
  }
  .notify-wrap {
    padding: 8px 12px;
    line-height: 18px;
    font-size: 14px;
    color: $notify-font-color;
    background-color: $notify-background-color;
    .notify-content {
      word-wrap: break-word;
    }
  }
</style>
