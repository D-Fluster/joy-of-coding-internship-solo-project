import Image from "next/image";

import { MdOutlineChecklist } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>
          <MdOutlineChecklist color="purple" size="xl" />
          MANAGE TODOS TUS TO-DOS&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
      </div>
    </main>
  );
}
