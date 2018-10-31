<template>
  <div class="page" v-if="page">
    <article>
      <div class="content-wrapper">
        <h2>{{ page.fields.title }}</h2>
        <div class="content" v-html="page.fields.content.html"></div>
      </div>
    </article>
  </div>
</template>

<script>
  import { comfortable } from '@/comfortable.js'

  export default {
    name: 'page',
    data() {
      return {
        page: null
      }
    },
    methods: {
      getPage() {
        comfortable.getAlias(this.$route.params.slug)
        .then(result => {
          this.page = result;
        })
        .catch(err => {
          throw err;
        })
      }
    },
    created() {
      this.getPage();
    }
  }
</script>
