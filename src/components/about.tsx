"use client";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import personalInfo from "@/lib/content";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Quote,
} from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialIcons = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
  };

  return (
    <div className="mx-auto max-w-4xl">
      <motion.h2
        className="mb-8 text-3xl font-bold tracking-tight after:relative after:bottom-0 after:left-0 after:h-1 after:w-16 after:rounded-full after:bg-primary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        About Me
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="overflow-hidden shadow-sm transition-all hover:shadow-md">
            <CardContent className="p-6 pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 border-4 border-primary/10">
                  <AvatarImage
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                  <AvatarFallback className="text-4xl">
                    {personalInfo.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <h3 className="mt-6 text-2xl font-bold tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="mt-1 font-medium text-primary">
                  {personalInfo.title}
                </p>

                <div className="mt-3 flex items-center justify-center text-muted-foreground">
                  <MapPin className="mr-1.5 h-4 w-4" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-center space-x-4">
                  {Object.entries(personalInfo.socials).map(
                    ([platform, url]) =>
                      url && (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-colors hover:bg-secondary/80"
                          aria-label={platform}
                        >
                          {socialIcons[platform as keyof typeof socialIcons]}
                        </a>
                      )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="lg:col-span-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="shadow-sm transition-all hover:shadow-md">
            <CardContent className="p-6 pt-6">
              <h3 className="text-xl font-semibold tracking-tight">
                Biography
              </h3>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                {personalInfo.about}
              </p>

              <Separator className="my-6" />

              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  Skills & Expertise
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {personalInfo.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-none bg-primary/5 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Quote className="mr-3 h-5 w-5 flex-shrink-0 text-primary/60" />
                  <p className="text-foreground/80 italic">
                    {personalInfo.quote}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
