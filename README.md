# Joy of Coding Bootcamp 2024

## Part 03 -- Web Dev Internship Training

### Trello Ticket 07 - First Solo Full-Stack Web Project

- AKA Personal Task Manager Application

- AKA # joy-of-coding-internship-solo-project

DKF Completed @ 2024-03-30

---

# App Map

## Pages

- **Homepage:** /app/page.tsx
- **404 Page:** /app/not-found.tsx
- **Add New To-Do:** /app/add/page.tsxs
- **View All To-Dos:** /app/todos/page.tsx
- **View To-Dos by Category:** /app/category/[category]/page.tsx
- **View To-Dos by Status:** /app/status/[status]/page.tsx
- **View a Selected To-Do:** /app/[id]/page.tsx
- **Edit a Selected To-Do:** /app/[id]/edit/page.tsx
- **Delete a Selected To-Do:** /app/[id]/delete/confirm-delete/page.tsx

## Custom Components & Definitions

- **Root Layout:** /app/layout.tsx
- **API Routing Configurations for GET & POST**: /app/api/todos/route.ts
- **API Routing Configurations for PUT & DELETE**: /app/api/todos/[id]/route.ts
- **Constant Definitions:** /app/definitions/constants.tsx
- **Function Definitions:** /app/definitions/functions.tsx
- **Navbar Component:** /app/components/TopNav.tsx
- **Page Title Component:** /app/components/PageTitle.tsx
- **Form to Add New To-Dos:** /app/components/AddForm.tsx
- **Form to Edit Existing To-Dos:** /app/components/EditForm.tsx
- **Client Component for Viewing All To-Dos:** /app/components/ViewAll.tsx
- **Client Component for Viewing To-Dos by Category:** /app/components/ViewCat.tsx
- **Client Component for Viewing To-Dos by Status:** /app/components/ViewStat.tsx
- **Client Component for Viewing a Selected To-Do:** /app/components/ViewCat.tsx
- **Client Component for Deleting To-Dos:** /app/components/DeleteOne.tsx
- **Prisma Client Instance**: /prisma/db.ts
- **Prisma Database Schemas:** /prisma/schema.prisma
- **Zod Validation Schemas:** /app/validationSchemas.ts

* DKF FUTURE IDEAS:

- Add a confirmation modal to deletion
- Move table styling classes to the "constants" definitions

* DKF Notes:

- Deploy a serverless application that uses Prisma to Vercel: https://www.prisma.io/docs/orm/prisma-client/deployment/serverless/deploy-to-vercel
