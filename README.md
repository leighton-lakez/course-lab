# CourseLab - Course Platform

A full-featured course platform built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## Features

- User authentication (sign up, sign in, sign out)
- Course catalog with detailed course pages
- User dashboard to track enrolled courses
- About page with testimonials
- Contact form
- Admin functionality (role-based access)
- Responsive design
- SQLite database with Prisma ORM

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. The project is already set up in `C:\Projects\course-lab`

2. Install dependencies (already done):
   ```bash
   npm install
   ```

3. The database is already configured with sample data

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Test Accounts

The database has been seeded with test accounts:

**Admin Account:**
- Email: `admin@courselab.com`
- Password: `admin123`

**Student Account:**
- Email: `student@example.com`
- Password: `student123`

## Project Structure

```
course-lab/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   └── contact/        # Contact form endpoint
│   ├── auth/               # Authentication pages
│   ├── courses/            # Courses page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── dashboard/          # User dashboard
│   └── layout.tsx          # Root layout
├── components/              # React components
│   ├── Navbar.tsx
│   ├── SessionProvider.tsx
│   └── ContactForm.tsx
├── lib/                     # Utility functions
│   ├── auth.ts             # NextAuth configuration
│   └── prisma.ts           # Prisma client instance
├── prisma/                  # Database
│   ├── schema.prisma       # Database schema
│   └── seed.ts             # Database seeding script
└── types/                   # TypeScript type definitions
```

## Database

The application uses SQLite for development. The database includes:

- **Users**: Admin and student accounts
- **Courses**: 6 sample courses with various levels
- **Testimonials**: 6 featured testimonials
- **Contact Messages**: Stored contact form submissions
- **Enrollments**: Track which users are enrolled in which courses

### Database Commands

```bash
# View database in Prisma Studio
npx prisma studio

# Reset database and reseed
npx prisma db push --force-reset
npm run seed

# Generate Prisma client after schema changes
npx prisma generate
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database with sample data

## Key Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Prisma** - Modern database ORM
- **NextAuth.js** - Authentication for Next.js
- **bcryptjs** - Password hashing
- **SQLite** - Lightweight database

## Features to Add (Future Enhancements)

- Course detail pages
- Payment integration (Stripe)
- Course progress tracking
- Video content delivery
- Course reviews and ratings
- Admin dashboard for managing courses
- Email notifications
- Search and filtering
- User profile pages

## Environment Variables

The `.env` file contains:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"
```

Make sure to change the `NEXTAUTH_SECRET` in production!

## License

MIT

## Support

For issues or questions, use the contact form at `/contact` or email support@courselab.com
