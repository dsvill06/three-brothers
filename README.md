# Next.js SaaS Starter

This is a starter template for building a SaaS application using **Next.js** with support for authentication and a dashboard for logged-in users.

**Demo: [https://next-saas-start.vercel.app/](https://next-saas-start.vercel.app/)**

## Features

- Authentication with email and password
- Team management with role-based access control
- Dashboard for logged-in users
- Activity logging
- Team member invitations
- User profile management

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: Custom JWT-based authentication
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your database with `npm run db:setup`
4. Run the development server with `npm run dev`

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
POSTGRES_URL=your_postgres_url
AUTH_SECRET=your_auth_secret
BASE_URL=http://localhost:3000
```

## Database Setup

The application uses Drizzle ORM for database management. You can:

- Generate migrations: `npm run db:generate`
- Apply migrations: `npm run db:migrate`
- View database: `npm run db:studio`
- Seed database: `npm run db:seed`

## License

MIT

