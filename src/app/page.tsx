import Header from "@/components/header";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import personalInfo from "@/lib/content";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased">
      <Header />

      <section className="relative flex min-h-[98vh] flex-col items-center justify-center px-4 pt-20 pb-16 sm:px-6 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {personalInfo.name}
          </h1>
          {/* <p className="mt-6 text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
            {personalInfo.title}
          </p> */}
          <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/80 md:text-lg">
            {personalInfo.about.split(".")[0]}.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium border-primary text-primary hover:bg-primary/10 hover:text-primary"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium border-primary text-primary hover:bg-primary/10 hover:text-primary"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section id="about" className="py-16">
          <About />
        </section>

        <div className="mx-auto max-w-5xl">
          <div className="h-px bg-border/40"></div>
        </div>

        <section id="experience" className="py-16">
          <Experience />
        </section>

        <div className="mx-auto max-w-5xl">
          <div className="h-px bg-border/40"></div>
        </div>

        <section id="education" className="py-16">
          <Education />
        </section>

        <div className="mx-auto max-w-5xl">
          <div className="h-px bg-border/40"></div>
        </div>

        <section id="projects" className="py-16">
          <Projects />
        </section>
      </div>

      <Footer />
    </main>
  );
}
