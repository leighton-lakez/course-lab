# Deployment Guide

## Important: Database Consideration

The current setup uses SQLite, which works great for local development but **won't work on Vercel** because Vercel uses serverless functions that don't have persistent file storage.

## Option 1: Quick Deploy with PostgreSQL (Recommended for Production)

### Step 1: Create a Free PostgreSQL Database

Use one of these free options:
- **Vercel Postgres** (easiest, integrates directly)
- **Neon** (https://neon.tech) - Free tier
- **Supabase** (https://supabase.com) - Free tier

### Step 2: Update Database Configuration

1. Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"  // Change from sqlite
  url      = env("DATABASE_URL")
}
```

2. Run migrations:
```bash
npx prisma db push
npm run seed
```

### Step 3: Deploy to Vercel

1. Sign up at https://vercel.com (free)

2. Run deployment command:
```bash
cd C:\Projects\course-lab
vercel
```

3. Follow the prompts:
   - Login to Vercel
   - Link to your project
   - Accept default settings

4. Set environment variables in Vercel dashboard:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`
   - `NEXTAUTH_URL` - Your production URL (Vercel will provide this)

## Option 2: Deploy with Netlify + PostgreSQL

1. Sign up at https://netlify.com
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Run: `netlify deploy`
4. Add environment variables in Netlify dashboard

## Option 3: Keep SQLite for Demo (Quick but Limited)

If you just want a quick demo deployment:

1. Deploy to **Railway** (https://railway.app):
   - Supports persistent storage
   - Free tier available
   - SQLite will work here

2. Steps:
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

## Recommended: Use Vercel with PostgreSQL

For the best production experience:

### Quick Setup with Vercel Postgres:

1. Go to https://vercel.com and sign up
2. Click "Add New" → "Project"
3. Import your git repository
4. In project settings, go to "Storage"
5. Create a Postgres database
6. It will automatically set DATABASE_URL
7. Add other environment variables:
   - `NEXTAUTH_SECRET`: Generate a secure random string
   - `NEXTAUTH_URL`: Will be auto-set by Vercel

### Manual Deployment Steps:

```bash
# From your project directory
cd C:\Projects\course-lab

# Login to Vercel
vercel login

# Deploy
vercel

# When prompted:
# - Set up and deploy: Yes
# - Which scope: (choose your account)
# - Link to existing project: No
# - Project name: course-lab (or your choice)
# - Directory: ./ (press Enter)
# - Override settings: No

# After deployment, set environment variables:
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL

# Redeploy with environment variables
vercel --prod
```

## Post-Deployment:

1. Your site will be live at: `https://course-lab-xxxxx.vercel.app`
2. Run seed command to populate database:
   - If using Vercel Postgres, you may need to run seed locally with production DATABASE_URL

## Testing Your Deployment:

1. Visit your live URL
2. Try signing up for a new account
3. Browse courses
4. Test the contact form
5. Sign in with test accounts (if seeded)

## Troubleshooting:

**Build fails?**
- Check logs in Vercel dashboard
- Ensure all environment variables are set

**Database connection error?**
- Verify DATABASE_URL is correct
- Check database is accessible from Vercel's region

**Authentication not working?**
- Ensure NEXTAUTH_URL matches your deployment URL
- NEXTAUTH_SECRET must be set

## Cost:

- **Vercel**: Free tier includes 100GB bandwidth, unlimited projects
- **Vercel Postgres**: Free tier includes 256MB database
- **Total**: $0/month for hobby projects

---

## Ready to Deploy?

The easiest path:

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Connect your GitHub (or push to GitHub first)
4. Vercel will auto-detect Next.js
5. Add a Postgres database from Vercel dashboard
6. Click Deploy!

That's it! Your course platform will be live in minutes.
