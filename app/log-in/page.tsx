// // COPIED FROM NEXT.JS LEARN DASHBOARD APP

import Link from "next/link";

export default function LogIn() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <p className="text-5xl">Logo</p>
          </div>
        </div>
        <p>Login Form</p>
        <Link href="/" className="text-5xl">
          Home
        </Link>
        {/* <LogInForm /> */}
      </div>
    </main>
  );
}
