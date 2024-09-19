import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// const githubRepoName = 'mountainash-web';
// const baseSegments = [githubRepoName];

// // Use GITHUB_REF_NAME if available (in GitHub Actions), otherwise use a default or leave it empty
// const branchName = process.env.GITHUB_REF_NAME || '';

// if (branchName && branchName !== 'main') {
//   baseSegments.push(branchName);
// }

// const base = `/${baseSegments.join('/')}`;

// https://astro.build/config
export default defineConfig({
  site: "https:///mountainash-io.github.io",
  base: 'mountainash-web',  
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
