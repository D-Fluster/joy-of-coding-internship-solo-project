# Joy of Coding Bootcamp 2024

## Part 03 -- Web Dev Internship Training

### Trello Ticket 07 - First Solo Full-Stack Web Project

- AKA Personal Task Manager Application

- AKA #joy-of-coding-internship-solo-project

DKF Completed @ 2024-03-30

---

# App Map

## Pages

- **Homepage:** [/app/page.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/page.tsx)
- **404 Page:** [/app/not-found.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/not-found.tsx)
- **Add New To-Do:** [/app/add/page.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/add/page.tsx)
- **View All To-Dos:** [/app/todos/page.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/todos/page.tsx)
- **View To-Dos by Category:** [/app/category/[category]/page.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/category/[category]/page.tsx)
- **View To-Dos by Status:** [/app/status/[status]/page.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/status/[status]/page.tsx)
- **View a Selected To-Do:** [/app/[id]/page.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/[id]/page.tsx)
- **Edit a Selected To-Do:** [/app/[id]/edit/page.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/[id]/edit/page.tsx)
- **Delete a Selected To-Do:** [/app/[id]/delete/confirm-delete/page.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/[id]/delete/confirm-delete/page.tsx)

## Custom Components, Definitions & Other Assets

### Back-End

- **API Routing Configurations for GET & POST:** [/app/api/todos/route.ts](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/api/todos/route.ts)
- **API Routing Configurations for PUT & DELETE:** [/app/api/todos/[id]/route.ts](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/api/todos/[id]/route.ts)
- **Prisma Client Instance**: [/prisma/db.ts](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/prisma/db.ts)
- **Prisma Database Schemas:** [/prisma/schema.prisma](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/prisma/schema.prisma)
- **Zod Validation Schemas:** [/app/validationSchemas.ts
](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/validationSchemas.ts)

### Front-End

- **Favicon:** [/app/favicon.ico](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/favicon.ico)
- **Image:** [/public/tackle-todos.png](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/public/tackle-todos.png)
- **Constant Definitions:** [/app/definitions/constants.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/definitions/constants.tsx)
- **Function Definitions:** [/app/definitions/functions.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/definitions/functions.tsx)
- **Root Layout:** [/app/layout.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/layout.tsx)
- **Navbar Component:** [/app/components/TopNav.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/components/TopNav.tsx)
- **Page Title Component:** [/app/components/PageTitle.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/components/PageTitle.tsx)
- **Form to Add New To-Dos:** [/app/components/AddForm.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/components/AddForm.tsx)
- **Form to Edit Existing To-Dos:** [/app/components/EditForm.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/components/EditForm.tsx)
- **Client Component for Viewing All To-Dos:** [/app/components/ViewAll.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/components/ViewAll.tsx)
- **Client Component for Viewing To-Dos by Category:** [/app/components/ViewCat.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/components/ViewCat.tsx)
- **Client Component for Viewing To-Dos by Status:** [/app/components/ViewStat.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/components/ViewStat.tsx)
- **Client Component for Viewing a Selected To-Do:** [/app/components/ViewCat.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/components/ViewCat.tsx)
- **Client Component for Deleting To-Dos:** [/app/components/DeleteOne.tsx](https://github.com/LAdanimo/joy-of-coding-internship-solo-project/blob/main/app/components/DeleteOne.tsx)

-----

## Prompt:

Right now you have React/Next.js knowledge, some supporting tools like Prisma and Radix UI, all while building upon your knowledge of the web. This is the final web project before you move onto the internship. A solo project will help you apply your knowledge of React or Next.js, along with the tools you've learned (Tailwind CSS, Radix UI, and Prisma). You have 2 choices:

* Build your own custom full-stack React or Next.js task manager, OR
* Complete the RedwoodJS tutorial
* _[I chose to do both with this repo being the former]_

Create a Personal Task Manager Application. This project will help you manage your tasks, and it can serve as an excellent learning experience. Create a web application that allows users to add, edit, and delete personal tasks.

**Key Features:**

* _Task List:_ Display a list of tasks, including the task name, description, and due date.
* _Task Creation_: Implement a feature to add new tasks, with fields for task name, description, and due date.
* _Task Editing:_ Allow users to edit task details such as the name, description, and due date.
* _Task Deletion:_ Enable users to delete tasks they no longer need.
* _Task Organization:_ Implement task organization or filtering options, such as sorting by due date or categorizing tasks.
* _Bonus: User Authentication:_ Add user registration and authentication to allow multiple users to manage their personal tasks. _[I haven't implemented this (yet!)]_

**Tech Stack:**

* **_Framework:_** React or Next.js _[I chose **Next.js**]_
* **_Interface:_**  Tailwind CSS for styling; Radix UI for accessibility _[I used **Tailwid CSS** and **DaisyUI**]_
* **_Database:_** mySql or Postgres with Prisma _[I chose **Postres** and **Prisma**]_

This project will give you an opportunity to apply your knowledge and encourage you to explore new concepts such as user authentication, state management, and more. It's a practical way to create something useful while continuing to expand your web development skills. Happy coding, and have fun building your Personal Task Manager!

-----

_DKF FUTURE IDEAS:_
- Authentication
- Mobile optimization
- Increase accessibility
- Add confirmation modal for deletion
- Move table styling classes to definitions
