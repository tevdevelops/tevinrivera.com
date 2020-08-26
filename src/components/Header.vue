<template>
  <div class="header-wrapper">
    <header
      :class="[
        { shrink: navShrinked },
        { 'shrink-override': navOpened },
        'header',
        'header--desktop'
      ]"
    >
      <a
        href="/"
        :class="[{ shrink: navShrinked }, { 'shrink-override': navOpened }, 'header__logo']"
        v-html="logo"
      ></a>
      <nav class="nav">
        <a></a>
      </nav>
    </header>

    <header
      :class="[
        { shrink: navShrinked },
        { 'shrink-override': navOpened },
        'header',
        'header--mobile'
      ]"
    >
      <a
        href="/"
        :class="[{ shrink: navShrinked }, { 'shrink-override': navOpened }, 'header__logo']"
        v-html="logo"
      ></a>
      <button :class="['header__toggle', { active: navOpened }]" @click="toggleMenu">
        {{ navOpened ? 'Close' : 'Menu' }}
      </button>
      <div
        :class="['header__container', { active: navOpened }]"
        role="menu"
        :aria-expanded="navOpened ? 'true' : 'false'"
        @click="closeMenu"
      >
        <nav class="nav edge--top--reverse">
          <a></a>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      navOpened: false,
      navShrinked: false
    }
  },

  computed: {
    logo() {
      return this.$static.option.logo.raw
    }
  },

  created() {
    if (process.isClient) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },

  methods: {
    handleScroll() {
      this.navShrinked = window.scrollY > 124
    },

    toggleMenu() {
      this.navOpened = !this.navOpened
    },

    closeMenu() {
      this.navOpened = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
