import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="flex min-h-screen items-center justify-center bg-slate-100">
        <h1 className="text-4xl font-semibold text-slate-900">
          Aris Travel Agent
        </h1>
      </section>
    </main>
  );
}