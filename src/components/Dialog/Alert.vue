<template>
  <v-wrapper class="v-alert" :no-mask="noMask" v-model="showValue">
    <div class="dialog-title" v-if="!!title">{{title}}</div>
    <div class="dialog-content">
      <div v-html="content"></div>
    </div>
    <div class="dialog-buttons border-top-line">
      <a href="javascript:;" class="button-confirm" @click="hide">{{buttonText}}</a>
    </div>
  </v-wrapper>
</template>

<script>
  import Wrapper from './Wrapper';

  export default {
    name: 'v-alert',
    data() {
      return {
        showValue: false,
      };
    },
    props: {
      value: Boolean,
      title: String,
      content: String,
      noMask: Boolean,
      buttonColor: {
        type: String,
        default: 'transparent',
      },
      buttonText: {
        type: String,
        default: '确定',
      },
    },
    methods: {
      hide() {
        this.showValue = false;
      },
    },
    watch: {
      value(val) {
        this.showValue = val;
      },
      showValue(val) {
        this.$emit('input', val);
      },
    },
    components: {
      [Wrapper.name]: Wrapper,
    },
    created() {
      if (this.value) {
        this.showValue = this.value;
      }
    },
  };
</script>
