<template>
  <Layout>
    <main role="main" class="post" :style="cssProps">
      <header class="post__header header">
        <div class="header__wrapper">
          <h1 class="header__title display-xl">{{ $page.post.title }}</h1>
          <hr class="header__divider" />
          <div class="header__summary">{{ $page.post.excerpt }}</div>
        </div>
      </header>

      <article class="post__article container container--sm">
        <p class="post__details">
          {{ $page.post.category }} / {{ $page.post.author }} /
          {{ formatDate($page.post.created_at) }}
        </p>

        <VueRemarkContent class="post__content" />

        <BaseLinkLikeButton class="post__backBtn" to="/blog">Back to Blog</BaseLinkLikeButton>
      </article>
    </main>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title,
    title_color,
    title_meta,
    excerpt,
    author,
    created_at,
    category,
    image,
    image_caption
  }
}
</page-query>

<script>
export default {
  // GraphQL data in the <script> - https://github.com/gridsome/gridsome/issues/306#issuecomment-475967333
  metaInfo() {
    return {
      title: this.$page.post.title_meta
    }
  },
  computed: {
    cssProps() {
      return {
        '--background-image-url': `url('${this.$page.post.image.src}')`,
        '--color-title': this.$page.post.title_color
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
