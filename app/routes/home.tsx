import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumX" },
    { name: "description", content: "ResumX: Because Recruiters Scan… We Analyze." },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your Applications & Resume Ratings!</h1>
        <h2>Upload your resume and let AI handle the rest.</h2>
      </div>

      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume: Resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
        </div>
      )}
    </section>


  </main>
}