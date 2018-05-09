<template>
  <button class="v-button" :class="classes" :style="styles" :disabled="disabled">
    <div class="ripple-wrapper" @touchstart="start" @touchend="end" @touchcancel="end" @mousedown="start" @mouseup="end" @mouseleave="end">
      <v-circle-ripple v-for="ripple in ripples" :key="ripple.key" :color="ripple.color" :opacity="ripple.opacity" :merge-style="ripple.style" />
    </div>
    <slot></slot>
  </button>
</template>

<script>
  import CircleRipple from './CircleRipple';

  export default {
    name: 'v-button',
    data() {
      return {
        rippleKey: 0,
        ripples: [],
        hasTouchEvent: 'ontouchstart' in document,
      };
    },
    props: {
      color: {
        type: String,
      },
      bgColor: {
        type: String,
      },
      rippleColor: {
        type: String,
      },
      rippleOpacity: {
        type: [String, Number],
      },
      shadow: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      classes() {
        return {
          shadow: this.shadow,
          disabled: this.disabled,
        };
      },
      styles() {
        return {
          color: this.color,
          backgroundColor: this.bgColor,
        };
      },
    },
    methods: {
      start(e) {
        if (this.disabled) return;
        if (this.hasTouchEvent && !e.touches) return;
        /* eslint no-plusplus: 0 */
        const ripple = {
          key: this.rippleKey++,
          color: this.rippleColor,
          opacity: this.rippleOpacity,
          style: this.getRippleStyle(e),
        };
        this.ripples.push(ripple);
      },
      end(e) {
        // TODO: android4上貌似触发touchmove事件之后不会再触发touchend事件，暂未对该情况做兼容处理
        if (this.hasTouchEvent && !e.touches) return;
        if (this.ripples.length === 0) return;
        this.ripples.splice(0, 1);
      },
      getRippleStyle(e) {
        const { target } = e;
        const rect = target.getBoundingClientRect();
        const isTouchEvent = e.touches && e.touches.length;
        const pointerClientX = isTouchEvent ? Math.floor(e.touches[0].clientX) : e.clientX;
        const pointerClientY = isTouchEvent ? Math.floor(e.touches[0].clientY) : e.clientY;
        const left = pointerClientX - rect.left;
        const top = pointerClientY - rect.top;
        const right = rect.right - pointerClientX;
        const bottom = rect.bottom - pointerClientY;
        const leftTopDiagLen = this.calcDiagLen(left, top);
        const rightTopDiagLen = this.calcDiagLen(right, top);
        const leftBottomDiagLen = this.calcDiagLen(left, bottom);
        const rightBottomDiagLen = this.calcDiagLen(right, bottom);
        const rippleCircleRadius = Math.ceil(Math.max(leftTopDiagLen, rightTopDiagLen, leftBottomDiagLen, rightBottomDiagLen));
        const rippleCircleDiameter = rippleCircleRadius * 2;
        return {
          width: `${rippleCircleDiameter}px`,
          height: `${rippleCircleDiameter}px`,
          left: `${left}px`,
          top: `${top}px`,
        };
      },
      calcDiagLen(a, b) {
        return Math.sqrt(a * a + b * b);
      },
    },
    components: {
      [CircleRipple.name]: CircleRipple,
    },
  };
</script>

<style lang="scss" scoped>
  .v-button {
    overflow: hidden;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    &.shadow {
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.1);
    }
    &.disabled {
      color: rgba(0, 0, 0, 0.3);
      background-color: #e6e6e6;
      box-shadow: none;
      cursor: not-allowed;
    }
  }
  .ripple-wrapper {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
