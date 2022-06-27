import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-sans text-4xl font-bold">Home</h1>
      <Link href="/markets">Markets</Link>
    </div>
  );
}
