import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeIQ" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover" >
    <section className="main-section" >
      <div className="page-heading py-16" >
        <h1>Own Your Job Search Journey</h1>
        <h2>Track applications, analyze performance, and get AI-powered resume ratings.</h2>
      </div>
    </section>

  </main>
}
