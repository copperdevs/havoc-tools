// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Havoc Tools";
export const SITE_DESCRIPTION =
  "Tools for Havoc";
export const TWITTER_HANDLE = "@HAVOC_FPS";
export const MY_NAME = "Havoc Tools";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
