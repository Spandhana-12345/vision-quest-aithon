import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CodeEditor } from "@/components/CodeEditor";
import { ExerciseGenerator } from "@/components/ExerciseGenerator";
import { InteractiveTutorials } from "@/components/InteractiveTutorials";
import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CodeEditor />
      <ExerciseGenerator />
      <InteractiveTutorials />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Index;
