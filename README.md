# Gaming Analytics Site

A modern Next.js static site for gaming analytics platform PLAYLYTICS.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment to Render

This project is configured for static site deployment on Render.

### Automatic Deployment

1. Connect your GitHub repository to Render
2. Create a new **Static Site** service
3. Configure the following settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `out`
   - **Node.js Version**: 20.11.0

### Manual Deployment

1. Build the project locally:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `out` directory

3. Upload the contents of the `out` directory to your web server

## Project Structure

- `app/` - Next.js app router pages and components
- `components/` - Reusable UI components
- `public/` - Static assets
- `styles/` - Global styles and Tailwind CSS

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components
- Lucide React Icons 