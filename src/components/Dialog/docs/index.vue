<template>
  <div class="wrapper">
    <v-button class="button-class" shadow @click.native="handleAlert">Alert</v-button>
    <v-button class="button-class" shadow @click.native="handleConfirm">Confirm</v-button>
    <v-button class="button-class" shadow @click.native="handlePrompt">Prompt</v-button>
    <v-button class="button-class" shadow @click.native="handleLoading">Loading</v-button>
    <v-button class="button-class" shadow @click.native="handleNotify">Notify</v-button>
    <v-button class="button-class" shadow @click.native="handleToast">Toast</v-button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {
    Button,
    Dialog,
  } from '@/components';

  Vue.use(Dialog.Alert);
  Vue.use(Dialog.Confirm);
  Vue.use(Dialog.Prompt);
  Vue.use(Dialog.Loading);
  Vue.use(Dialog.Notify);
  Vue.use(Dialog.Toast);

  export default {
    methods: {
      showAlert(content, title = '提示', onShow, onHide) {
        this.$alert.show({
          title,
          content,
          onShow,
          onHide,
        });
      },
      showConfirm(content, title = '提示', onConfirm, onCancel) {
        this.$confirm.show({
          title,
          content,
          onCancel,
          onConfirm,
        });
      },
      showPrompt(placeholder, title = '提示', onConfirm, onCancel) {
        this.$prompt.show({
          title,
          placeholder,
          onCancel,
          onConfirm,
        });
      },
      showLoading(onShow, onHide, type = 'blink', useSvg = false) {
        this.$loading.show({
          type,
          useSvg,
          onShow,
          onHide,
        });
      },
      showNotify(content, position = 'top', time = 3000, onShow, onHide) {
        this.$notify.show({
          content,
          position,
          time,
          onShow,
          onHide,
        });
      },
      showToast(content, position = 'bottom', type = 'text', time = 2000, onShow, onHide) {
        this.$toast.show({
          content,
          position,
          type,
          time,
          onShow,
          onHide,
        });
      },
      handleAlert() {
        this.showAlert('提示内容');
      },
      handleConfirm() {
        this.showConfirm('确认信息', undefined, () => {});
      },
      handlePrompt() {
        this.showPrompt('备注', undefined, res => {
          console.log(res);
        });
      },
      handleLoading() {
        this.showLoading();
        setTimeout(() => {
          this.$loading.hide();
        }, 2000);
      },
      handleNotify() {
        this.showNotify('提示内容');
      },
      handleToast() {
        this.showToast('提示内容');
      },
    },
    components: {
      [Button.name]: Button,
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 20px 15%;
  }
  .button-class {
    width: 100%;
    margin: 6px auto;
    padding: 8px 16px;
    font-size: 14px;
    color: cadetblue;
    background-color: transparent;
    border-radius: 3px;
  }
</style>

