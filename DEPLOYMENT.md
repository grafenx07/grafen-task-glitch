# Deployment Guide 🚀

## Quick Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel --prod
```

### Method 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click "Deploy"

---

## Deploy to Netlify

### Method 1: Netlify CLI

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Login:**
```bash
netlify login
```

3. **Deploy:**
```bash
netlify deploy --prod
```

### Method 2: Netlify Dashboard

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Netlify Configuration

Create a `netlify.toml` file:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Deploy to GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/grafen-taskglitch"
}
```

3. **Update vite.config.ts:**
```typescript
export default defineConfig({
  base: '/grafen-taskglitch/',
  // ... rest of config
})
```

4. **Deploy:**
```bash
npm run deploy
```

---

## Environment Variables

If you need to add environment variables:

### Vercel
Add in Vercel Dashboard → Settings → Environment Variables

### Netlify
Add in Netlify Dashboard → Site settings → Environment variables

### Local Development
Create a `.env.local` file:
```
VITE_API_URL=your_api_url
```

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All features work (add, edit, delete tasks)
- [ ] ROI calculations are correct
- [ ] No console errors
- [ ] CSV export works
- [ ] Responsive design on mobile
- [ ] Performance is good (use Lighthouse)
- [ ] No security warnings

---

## Troubleshooting

### Issue: 404 on refresh
**Solution:** Add redirect rules in `vercel.json` or `netlify.toml` (already included)

### Issue: Build fails
**Solution:** Check Node.js version (should be 16+)

### Issue: Assets not loading
**Solution:** Verify `base` path in `vite.config.ts`

---

## Performance Optimization

Before deploying, run:

```bash
npm run build
npm run preview
```

Check the build output for:
- Bundle size warnings
- Unused dependencies
- Image optimization opportunities

---

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records

---

## Monitoring & Analytics

Consider adding:
- **Vercel Analytics:** Built-in performance monitoring
- **Google Analytics:** User tracking
- **Sentry:** Error tracking
- **LogRocket:** Session replay

---

**Happy Deploying! 🎉**
