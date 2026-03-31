"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import personalInfo from "@/lib/content";
import Image from "next/image";
import { ExternalLink, Github, FolderGit2, Star } from "lucide-react";

const Projects = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const featuredProject = personalInfo.projects[0];
  const otherProjects = personalInfo.projects.slice(1);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          className="mb-16 flex items-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideIn}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
        </motion.div>

        {featuredProject && (
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="group relative overflow-hidden rounded-xl bg-secondary/10 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute right-4 top-4 z-10 rounded-full bg-primary/90 p-2 text-background shadow-lg">
                <Star className="h-4 w-4" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 overflow-hidden bg-secondary/10 lg:h-full">
                  {featuredProject.image ? (
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <FolderGit2 className="h-24 w-24 text-primary/40" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col p-8">
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
                    {featuredProject.title}
                  </h3>

                  <p className="mb-6 text-base leading-relaxed text-foreground/80">
                    {featuredProject.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {featuredProject.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm transition-colors hover:bg-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {featuredProject.tags.length > 5 && (
                      <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-foreground/70">
                        +{featuredProject.tags.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex gap-3">
                    {featuredProject.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/30 hover:border-primary hover:bg-primary/10"
                      >
                        <a
                          href={featuredProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {featuredProject.link && (
                      <Button variant="default" size="sm">
                        <a
                          href={featuredProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="group relative flex h-full flex-col overflow-hidden border border-transparent bg-secondary/10 backdrop-blur-md shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-primary/50">
                <div className="relative h-52 overflow-hidden bg-secondary/10">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full flex-col bg-zinc-950 font-mono text-xs">
                      <div className="flex items-center gap-1.5 border-b border-zinc-800 px-3 py-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                        <span className="ml-2 text-zinc-500">dashboard</span>
                      </div>
                      <div className="flex flex-1 flex-col justify-center gap-1.5 px-4 py-3 text-[11px]">
                        <span className="text-green-400/80">● api_requests <span className="text-zinc-400">1,204 req/min</span></span>
                        <span className="text-green-400/80">● response_p99 <span className="text-zinc-400">142ms</span></span>
                        <span className="text-yellow-400/70">⚠ error_rate   <span className="text-zinc-400">0.3%</span></span>
                        <span className="text-green-400/80">● cpu_usage    <span className="text-zinc-400">38%</span></span>
                        <span className="text-green-400/80">● mem_usage    <span className="text-zinc-400">512 MiB</span></span>
                        <span className="mt-1 text-primary/60">▋</span>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm transition-colors hover:bg-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {/* {project.tags.length > 3 && (
                      <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-foreground/70">
                        +{project.tags.length - 3} more
                      </span>
                    )} */}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/50 bg-secondary/5 p-4">
                  <div className="flex w-full justify-end gap-2">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-primary/10"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-primary/10"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
