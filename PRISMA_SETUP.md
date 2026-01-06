# Prisma ORM Setup

Prisma has been successfully configured for PostgreSQL.

## Files Created/Modified

- **prisma/schema.prisma** - Database schema with example User and Post models
- **app/modules/common/lib/db.server.ts** - Prisma Client singleton for database access
- **.env** - Database connection string configuration
- **prisma.config.ts** - Prisma configuration file

## Next Steps

### 1. Configure Your Database Connection

Update the `DATABASE_URL` in `.env` with your PostgreSQL credentials:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

### 2. Run Your First Migration

Create your database schema:

```bash
npx prisma migrate dev --name init
```

This will:

- Create the database if it doesn't exist
- Run migrations to create tables based on your schema
- Generate Prisma Client

### 3. Use Prisma in Your Code

Import and use the Prisma client in your server-side code:

```typescript
import { prisma } from "~/modules/common/lib/db.server";

// Create a user
const user = await prisma.user.create({
  data: {
    email: "user@example.com",
    name: "John Doe",
  },
});

// Find all users
const users = await prisma.user.findMany();
```

### 4. Useful Commands

```bash
# Generate Prisma Client after schema changes
npx prisma generate

# Create and apply a migration
npx prisma migrate dev --name your_migration_name

# Open Prisma Studio (database GUI)
npx prisma studio

# Push schema changes without migrations (for prototyping)
npx prisma db push

# Reset database (⚠️ deletes all data)
npx prisma migrate reset
```

## Documentation

- [Prisma Docs](https://www.prisma.io/docs)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- [Prisma Client API](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)
