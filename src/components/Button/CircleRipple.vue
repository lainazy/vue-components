<template>
  <transition name="ripple">
    <div class="circle-ripple" :style="styles"></div>
  </transition>
</template>

<script>
  export default {
    name: 'v-circle-ripple',
    props: {
      mergeStyle: {
        type: Object,
        default() {
          return {};
        },
      },
      color: {
        type: String,
      },
      opacity: {
        type: [String, Number],
      },
    },
    computed: {
      styles() {
        return Object.assign({}, {
          color: this.color,
          opacity: this.opacity,
        }, this.mergeStyle);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .circle-ripple {
    position: absolute;
    border-radius: 50%;
    background-color: currentColor;
    background-clip: padding-box;
    pointer-events: none;
    user-select: none;
    opacity: 0.1;
    transform: translate(-50%, -50%);
  }
  .ripple-enter-active,
  .ripple-leave-active {
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s ease-out, transform .25s ease-out;
  }
  .ripple-enter {
    transform: translate(-50%, -50%) scale(0);
  }
  .ripple-leave-to {
    opacity: 0 !important;
  }
</style>

