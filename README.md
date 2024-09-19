# MountainAsh Website

This repository contains the source code for the MountainAsh website, built using the Astro framework and the Astroship template.

## Table of Contents

- [Getting Started](#getting-started)
- [Development](#development)
- [Folder Structure](#folder-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Resources](#resources)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/mountainash-io/mountainash-web.git
   cd mountainash-web
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Start the development server:
   ```
   pnpm run dev
   ```

4. Open your browser and visit `http://localhost:3000` to see the website.

## Development

- All Astro files are located in the `/src` directory.
- To create a new page, add a new `.astro` file in the `/src/pages` directory.
- Components can be found and added in the `/src/components` directory.
- Styles are managed using Tailwind CSS. The configuration file is `tailwind.config.cjs`.

### Branch-specific Development

To test branch-specific builds locally:

```
pnpm run dev:branch
```

This command sets the `GITHUB_REF_NAME` to your current git branch name.

## Folder Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

## Customization

1. **Navbar**: Edit `/src/components/navbar/navbar.astro` to update the navigation menu.
2. **Footer**: Modify `/src/components/footer.astro` to change the footer content.
3. **Homepage**: Update `/src/pages/index.astro` to change the main landing page.
4. **About Page**: Edit `/src/pages/about.astro` for the about page content.
5. **Contact Page**: Modify `/src/pages/contact.astro` for the contact page.
6. **Styles**: Global styles can be adjusted in `/src/layouts/Layout.astro`.

## Deployment

This website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is managed by the GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

To deploy changes:

1. Make your changes locally and commit them.
2. Push the changes to the main branch on GitHub:
   ```
   git push origin main
   ```
3. The GitHub Actions workflow will automatically build and deploy the site.
4. Once completed, your changes will be live at `https://mountainash-io.github.io/mountainash-web/`

## Troubleshooting

- If you encounter issues with dependencies, try removing the `pnpm-lock.yaml` file and running `pnpm install` again.
- For deployment issues, check the Actions tab in the GitHub repository for error logs.

## Resources

- [Astro Documentation](https://docs.astro.build/en/getting-started/)
- [Astroship Template](https://astroship.web3templates.com/)
- [Astroship GitHub Repository](https://github.com/surjithctly/astroship)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

For any additional help or questions, please open an issue in the GitHub repository.