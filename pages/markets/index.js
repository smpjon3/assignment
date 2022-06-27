import Link from "next/link";

function Markets() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-sans text-4xl font-bold">Markets</h1>
      <div className="list-none flex gap-x-4">
        <Link href="/markets/profile">Profile</Link>
        <Link href="/markets/profile?premium=true">Profile Premium</Link>
      </div>
    </div>
  );
}

export default Markets;
