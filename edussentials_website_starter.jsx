import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Mic,
  FileText,
  CheckCircle,
  Mail,
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  Layers,
  Users,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <GraduationCap />,
    title: "Bespoke Recorded CPD",
    text: "Flexible, affordable professional development tailored to your school priorities.",
    price: "from £195",
  },
  {
    icon: <Layers />,
    title: "English Curriculum Review",
    text: "A strategic review of sequencing, challenge, coherence, inclusion and assessment structures.",
    price: "from £495",
  },
  {
    icon: <ClipboardCheck />,
    title: "Moderation, Marking & Mocks",
    text: "External marking, moderation, standardisation and cohort feedback to support accuracy and workload.",
    price: "from £250",
  },
  {
    icon: <Users />,
    title: "Whole Department Support",
    text: "Strategic support combining curriculum review, CPD, marking, moderation and implementation guidance.",
    price: "from £995",
  },
];

const principles = ["Clarity", "Coherence", "Challenge", "Practicality", "Sustainability"];

export default function EdussentialsWebsite() {
  return (
    <div className="min-h-screen bg-[#fbfbf8] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-[#8bbfbd]/40 bg-[#fbfbf8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8bbfbd] text-white shadow-sm">
              <Sparkles size={23} />
            </div>
            <div>
              <p className="text-2xl font-black tracking-tight">Edussentials</p>
              <p className="text-xs font-medium uppercase tracking-wide text-[#6aa6a3]">Research-informed English consultancy</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm font-bold text-[#111111] md:flex">
            <a href="#services" className="hover:text-[#6aa6a3]">Services</a>
            <a href="#principles" className="hover:text-[#6aa6a3]">Principles</a>
            <a href="#about" className="hover:text-[#6aa6a3]">About</a>
            <a href="#contact" className="hover:text-[#6aa6a3]">Contact</a>
          </nav>
          <Button className="rounded-full bg-[#6aa6a3] px-5 font-bold hover:bg-[#5b9693]">Enquire Now</Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24">
          <div className="absolute left-0 top-0 h-3 w-full bg-[#8bbfbd]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-5 inline-flex rounded-full bg-[#dceeee] px-5 py-2 text-sm font-black uppercase tracking-wide text-[#5b9693]">
                Research-informed English consultancy · Est. 2024
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Practical English improvement rooted in research, leadership and classroom reality.
              </h1>
              <div className="mt-6 h-0.5 w-56 bg-[#8bbfbd]" />
              <p className="mt-7 max-w-2xl text-xl leading-9 text-[#2e2e2e]">
                Supporting schools, English departments and trusts through strategic, practical and research-informed improvement.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-full bg-[#6aa6a3] px-7 py-6 text-base font-bold hover:bg-[#5b9693]">
                  Work With Edussentials <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button variant="outline" className="rounded-full border-[#6aa6a3] px-7 py-6 text-base font-bold text-[#111111]">
                  View Services
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="rounded-[2rem] bg-[#dceeee] p-8 shadow-xl">
                <p className="text-sm font-black uppercase tracking-wide text-[#5b9693]">Services</p>
                <h2 className="mt-3 text-3xl font-black">Clear support for the areas that matter most.</h2>
                <div className="mt-6 space-y-3 text-[#111111]">
                  {[
                    "Bespoke Recorded CPD",
                    "English Curriculum Review",
                    "Moderation and Marking Packages",
                    "Mock Examination Support",
                    "Assessment and Feedback Consultancy",
                    "Disadvantage and Inclusion Support",
                    "KS3 and KS4 Curriculum Development",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 text-[#5b9693]" size={20} />
                      <p className="font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="border-y border-[#8bbfbd]/40 bg-white px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <div>
              <p className="font-black uppercase tracking-wide text-[#5b9693]">About Edussentials</p>
              <div className="mt-2 h-1 w-10 bg-[#6aa6a3]" />
              <h2 className="mt-6 text-4xl font-black leading-tight">Strong English provision should be ambitious, inclusive and intellectually challenging for every student.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-[#2e2e2e]">
              <p>
                Edussentials supports schools and English departments with curriculum coherence, effective pedagogy, accurate assessment and meaningful student outcomes.
              </p>
              <p>
                Led by an experienced Head of English, former Trust Lead Professional and doctoral researcher in Education, Edussentials combines strategic leadership experience with current classroom practice and research-informed thinking.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-black uppercase tracking-wide text-[#5b9693]">Consultancy Services</p>
            <div className="mt-2 h-1 w-10 bg-[#6aa6a3]" />
            <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight">Why schools work with Edussentials.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#2e2e2e]">
              Schools and English departments face increasing pressure to improve outcomes while maintaining ambitious and inclusive learning experiences.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Card key={service.title} className="rounded-[1.75rem] border-[#8bbfbd]/30 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#dceeee] text-[#5b9693]">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-black">{service.title}</h3>
                    <p className="mt-3 min-h-24 text-sm leading-6 text-[#2e2e2e]">{service.text}</p>
                    <div className="mt-5 rounded-2xl bg-[#6aa6a3] px-4 py-3 text-center text-lg font-black text-white">
                      {service.price}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="principles" className="bg-[#eef6f6] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-black uppercase tracking-wide text-[#5b9693]">Five Principles</p>
            <div className="mt-2 h-1 w-10 bg-[#6aa6a3]" />
            <h2 className="mt-6 text-4xl font-black">Guiding every Edussentials engagement.</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {principles.map((item, index) => (
                <div key={item} className="rounded-[1.5rem] bg-white p-6 text-center shadow-sm">
                  <p className="text-2xl font-light text-[#5b9693]">0{index + 1}</p>
                  <p className="mt-3 text-lg font-black">{item}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-[#2e2e2e]">
              These principles are held in tension to support genuine, lasting improvement rather than generic training.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <div>
              <p className="font-black uppercase tracking-wide text-[#5b9693]">Disadvantage · Challenge · Inclusion</p>
              <div className="mt-2 h-1 w-10 bg-[#6aa6a3]" />
              <h2 className="mt-6 text-4xl font-black leading-tight">Supporting disadvantaged learners — without reducing ambition.</h2>
              <p className="mt-5 text-lg leading-8 text-[#2e2e2e]">
                A key focus of Edussentials is helping schools think carefully about how support can sometimes become simplification.
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#dceeee] p-8">
              <Target className="mb-5 text-[#5b9693]" size={34} />
              <h3 className="text-2xl font-black">Support should never become a ceiling.</h3>
              <div className="mt-6 grid gap-3">
                {[
                  "Maintain high challenge",
                  "Improve access to difficult concepts",
                  "Strengthen academic confidence",
                  "Develop analytical thinking",
                  "Support literacy growth",
                  "Create inclusive, ambitious classrooms",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4">
                    <CheckCircle className="text-[#5b9693]" size={19} />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#111111] px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <Mail className="mx-auto mb-5 text-[#8bbfbd]" size={38} />
            <p className="font-black uppercase tracking-wide text-[#8bbfbd]">Contact</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">Let’s strengthen English provision together.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Support can be tailored to your context, priorities and budget. Get in touch to discuss bespoke CPD, curriculum review, mock marking, moderation support or strategic consultancy.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="rounded-full bg-[#6aa6a3] px-7 py-6 text-base font-bold hover:bg-[#5b9693]">
                info@edussentials.co.uk
              </Button>
              <Button variant="outline" className="rounded-full border-[#8bbfbd] px-7 py-6 text-base font-bold text-white hover:bg-white hover:text-[#111111]">
                07442713582
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#8bbfbd]/40 bg-[#fbfbf8] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm font-medium text-[#5b9693] md:flex-row">
          <p>© 2026 Edussentials. Research-informed English consultancy.</p>
          <p>Schools • Departments • Trusts</p>
        </div>
      </footer>
    </div>
  );
}
