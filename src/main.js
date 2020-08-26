// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

/* Nomralize.css */
import "normalize.css"

import DefaultLayout from '~/layouts/Default.vue'

/**
 * Export
 */
export default function(Vue, { router, head, isClient }) {
  // Global Head Metadata
  head.meta.push(
    {
      key: "author",
      name: "author",
      content: "TevDevelops"
    },
    {
      key: "description",
      name: "description",
      content: "I am TevDevelops. I create things in the intersection of art and tech. Websites, apps, photos, movies, experiments with digital art. Based in Philadelphia | Made in Camden, NJ"
    },
    {
      key: "keywords",
      name: "keywords",
      content: "tevin, rivera, tevdevelops, developer, philadelphia, artist, creator"
    },
    { key: "robots", name: "robots", content: "index, follow, noodp, noydir" }
  )

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
