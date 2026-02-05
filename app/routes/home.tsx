import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumX" },
    { name: "description", content: "ResumX: Because Recruiters Scan… We Analyze." },
  ];
}

export default function Home() {
    const { isLoading, auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => { 
        if (!auth.isAuthenticated) {
            navigate('/auth?next=/'); //when no  logged in and tries accessing protected routes then redirected to the auth page!
        }
    }, [auth.isAuthenticated])

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