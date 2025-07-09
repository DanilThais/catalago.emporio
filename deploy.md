# Deployment Guide - Netlify

## How to deploy the project

This project is configured to deploy to Netlify, which provides seamless deployment without requiring Git in the development environment.

### Automatic Deployment

The project includes a `netlify.toml` configuration file that automatically handles the build and deployment process when you use the deploy action in this environment.

### Manual Deployment to Netlify

If you want to deploy manually to your own Netlify account:

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Drag and drop the `dist` folder to the Netlify dashboard
   - Or use the Netlify CLI: `npx netlify deploy --prod --dir=dist`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Generate production files in the `dist` folder
- `npm run preview` - Preview the production build locally
- `npm run type-check` - Run TypeScript type checking

### Build Configuration

The project is configured with:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 (specified in netlify.toml)

### Notes

- The `dist` folder contains the built application ready for deployment
- Always test locally with `npm run preview` before deploying
- The build process automatically optimizes assets for production
- PWA features are included and will work on the deployed site

### Troubleshooting

If you encounter build issues:

1. Clear the build cache: `rm -rf dist && npm run build`
2. Check that all dependencies are installed: `npm install`
3. Verify TypeScript compilation: `npm run type-check`
4. Test the build locally: `npm run preview`