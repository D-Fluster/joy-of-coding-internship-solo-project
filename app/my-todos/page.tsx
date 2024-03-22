// Parent component for todo "dashboard" for logged in users

// import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";

import Link from "next/link";

export default function MisTodos() {
  return (
    <div>
      <Breadcrumbs />
      <p className="m-44">My Todos</p>
      <Link href="/" className="text-5xl">
        Home
      </Link>
    </div>
  );
}
