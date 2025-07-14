# Portfolio Deployment Guide

Your Next.js portfolio is configured for static export and can be deployed to multiple platforms.

## Quick Deploy Options

### 1. Vercel (Recommended - Easiest)
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel (sign up at vercel.com first)
vercel login

# Deploy
vercel --prod
```

### 2. Netlify
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the `out` folder (after running `npm run build`) to deploy
3. Or connect your GitHub repository for automatic deployments

### 3. GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as source
4. The workflow will automatically deploy on push to main branch

### 4. Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase (if not already done)
firebase init hosting

# Deploy
firebase deploy
```

## Build Commands

Before deploying, always build your project:
```bash
npm run build
```

This creates a static export in the `out` folder.

## Custom Domain Setup

After deployment, you can set up a custom domain:
- **Vercel**: Go to project settings > Domains
- **Netlify**: Go to site settings > Domain management
- **GitHub Pages**: Go to repository settings > Pages
- **Firebase**: Go to project settings > Hosting

## Environment Variables

If you add environment variables later, make sure to configure them in your hosting platform's settings.

## Troubleshooting

- If images don't load, check that the paths in your components are correct
- For routing issues, ensure your hosting platform supports SPA routing
- For build errors, check the console output for specific issues 