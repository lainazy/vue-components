<template>
  <div class="doc">
    <h2>代码示例</h2>
    <div class="example">
      <div class="preview">
        <iframe :src="`#/${component}`" frameborder="0"></iframe>
      </div>
      <div class="code" v-html="code" v-highlight></div>
    </div>
    <h2>API</h2>
    <div class="api" v-html="api" v-highlight></div>
  </div>
</template>

<script>
  import marked from 'marked';
  import hljs from 'highlight.js';

  export default {
    name: 'doc',
    data() {
      return {
        component: '',
        code: '',
        api: '',
      };
    },
    methods: {
      upperFirstChar(str) {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
      },
      importMarkdownFile(component) {
        import(`@/components/${component}/docs/code.md`)
          .then(data => {
            this.code = marked(data);
          })
          .catch(error => {
            console.error(error);
          });
        import(`@/components/${component}/docs/api.md`)
          .then(data => {
            this.api = marked(data);
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
    directives: {
      highlight(el) {
        const blocks = el.querySelectorAll('pre code');
        blocks.forEach(block => {
          hljs.highlightBlock(block);
        });
      },
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.component = vm.upperFirstChar(to.params.component);
        vm.importMarkdownFile(vm.component);
      });
    },
    beforeRouteUpdate(to, from, next) {
      this.component = this.upperFirstChar(to.params.component);
      this.importMarkdownFile(this.component);
      next();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '~highlight.js/styles/github-gist.css';
  .hljs {
    // 修改highlight.js样式
    padding: 16px 24px;
    min-height: 667px;
  }
  .doc {
    padding: 4px 24px;
    text-align: left;
    >h2 {
      font-weight: 400;
      color: #555;
    }
    .example {
      margin: 0 16px;
      background-color: #fafafa;
      border: 1px solid #ececec;
      .preview {
        float: left;
        width: 375px;
        height: 667px;
        background-color: #fff;
        border-bottom: 1px dashed #ececec;
        box-sizing: content-box;
        >iframe {
          width: 100%;
          height: 100%;
        }
      }
      .code {
        margin-left: 375px;
        min-height: 667px;
        border-left: 1px dashed #ececec;
      }
    }
    .api {
      margin: 0 16px;
      table {
        width: 100%;
        margin-top: 5px;
        margin-bottom: 20px;
        border-collapse: collapse;
        thead {
          background-color: #f5f9fc;
        }
        tr {
          height: 40px;
        }
        th,
        td {
          border: 1px solid #ececec;
          padding: 0 8px;
          color: #555;
        }
      }
    }
  }
</style>
