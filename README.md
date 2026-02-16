# Jess Site

Personal website for Dr. J. Garelik built with React and Vite.

## Live Site

The site is available at: **https://www.drjgarelik.com**

## Deployment

This site is deployed to GitHub Pages with a custom domain configuration.

### Deploying Updates

To deploy changes to the live site:

```bash
npm run deploy
```

This will:
1. Build the production bundle (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. The site will be live at www.drjgarelik.com

### Custom Domain Setup

The site uses a custom domain (`www.drjgarelik.com`) configured via:

1. **CNAME File**: Located in `public/CNAME` containing `www.drjgarelik.com`
2. **DNS Configuration**: Your domain registrar must have the following DNS records:
   - **CNAME record**: `www` → `yungmonez.github.io`
   - Alternatively, for apex domain:
     - **A records** pointing to GitHub Pages IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - **CNAME record**: `www` → `yungmonez.github.io`

3. **GitHub Pages Settings**: 
   - Repository → Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Custom domain: `www.drjgarelik.com`
   - Enforce HTTPS: Enabled (recommended)

### Troubleshooting

If the site shows a 404 error:
- Verify DNS records are properly configured at your domain registrar
- Confirm the CNAME file exists in the `gh-pages` branch
- Check GitHub Pages settings in the repository
- DNS propagation can take up to 48 hours

## Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- React 19
- Vite 7
- Lucide React (icons)
- ESLint (code quality)
- gh-pages (deployment)
