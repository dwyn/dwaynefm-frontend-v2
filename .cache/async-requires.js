// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---packages-core-src-templates-posts-js": () => import("./../../packages/core/src/templates/posts.js" /* webpackChunkName: "component---packages-core-src-templates-posts-js" */),
  "component---packages-core-src-templates-post-js": () => import("./../../packages/core/src/templates/post.js" /* webpackChunkName: "component---packages-core-src-templates-post-js" */),
  "component---packages-core-src-templates-collection-category-js": () => import("./../../packages/core/src/templates/collection.category.js" /* webpackChunkName: "component---packages-core-src-templates-collection-category-js" */),
  "component---packages-core-src-templates-collection-tag-js": () => import("./../../packages/core/src/templates/collection.tag.js" /* webpackChunkName: "component---packages-core-src-templates-collection-tag-js" */),
  "component---packages-core-src-templates-collection-author-js": () => import("./../../packages/core/src/templates/collection.author.js" /* webpackChunkName: "component---packages-core-src-templates-collection-author-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---packages-shared-src-pages-404-jsx": () => import("./../../packages/shared/src/pages/404.jsx" /* webpackChunkName: "component---packages-shared-src-pages-404-jsx" */),
  "component---packages-shared-src-pages-authors-jsx": () => import("./../../packages/shared/src/pages/authors.jsx" /* webpackChunkName: "component---packages-shared-src-pages-authors-jsx" */),
  "component---packages-shared-src-pages-contact-jsx": () => import("./../../packages/shared/src/pages/contact.jsx" /* webpackChunkName: "component---packages-shared-src-pages-contact-jsx" */)
}

