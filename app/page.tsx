import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ExternalLink, 
  Cpu, 
  Printer, 
  Smartphone, 
  Terminal
} from "lucide-react";
import Oneko from "./components/Oneko";

const personalInfo = {
  name: "Vasco Magolo",
  role: "IoT & Mobile Developer",
  bio: "Passionate about bridging the physical and digital worlds. Founder of ISION, focused on modern IoT, mobile apps, and embedded systems.",
  github: "https://github.com/VascoMagolo",
  linkedin: "https://www.linkedin.com/in/vasco-magolo/",
  email: "mailto:vascomagolo@gmail.com",
  cvLink: "/cvVascoMagolo.pdf", 
};

const projects = [
  {
    title: "ISION",
    description: "Innovative IoT solutions and smart city infrastructure startup.",
    status: "doing", // Green
    tech: ["Next.js", "IoT", "React-Native", "LoRaWAN"],
    link: "https://ision.vercel.app/",
    githubLink: "https://github.com/ISION-IoT-Solutions"
  },
  {
    title: "RTTC",
    description: "Mobile app bridging communication gaps with voice, text, and OCR translation.",
    status: "doing", // Green
    tech: ["React Native", "Expo", "OCR", "TTS/STT"],
    link: "https://github.com/VascoMagolo/RTTC",
  },
  {
    title: "Smart Garden",
    description: "Automated gardening system with ESP32 and sensors (Final Year Project).",
    status: "done", // Red
    tech: ["C++", "IoT", "ESP32", "Sensors", "LoRaWAN"],
    link: "https://github.com/VascoMagolo/SmartGarden-PAP2023",
  },
  {
    title: "This Portfolio",
    description: "My personal digital space built with Next.js, Tailwind and a cat.",
    status: "doing", // Green
    tech: ["Next.js", "Tailwind", "Oneko.js"],
    link: "https://github.com/Portfolio",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-neutral-200 selection:bg-green-500/30 selection:text-green-200 font-sans px-4 py-8 md:py-16 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <Oneko />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        <section className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 animate-fade-in-up">
          <div className="space-y-6 max-w-2xl">
            <div>
              <h2 className="text-green-500 font-medium tracking-wide text-sm mb-2 uppercase">
                {personalInfo.role}
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase font-display">
                {personalInfo.name}
              </h1>
            </div>
            
            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href={personalInfo.cvLink} 
                download
                className="flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-400 border border-green-500/50 font-bold rounded-lg hover:bg-green-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]"
              >
                <FileText size={20} /> Download CV
              </a>
              <a 
                href={personalInfo.email}
                className="flex items-center gap-2 px-6 py-3 border border-neutral-700 bg-neutral-900/50 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <Mail size={20} /> Contact Me
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4 w-full md:w-auto">
            <div className="bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-3 shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">
                AVAILABLE FOR WORK
              </span>
            </div>

            <div className="flex gap-3">
              <SocialButton href={personalInfo.github} icon={<Github size={22} />} />
              <SocialButton href={personalInfo.linkedin} icon={<Linkedin size={22} />} />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="md:col-span-2 bg-neutral-900/30 border border-green-500/30 p-6 rounded-2xl relative overflow-hidden group hover:border-green-500/60 transition-colors">
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Cpu className="text-green-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Hardware & Circuit Design</h3>
            <p className="text-neutral-400">Learning to design custom circuit boards and embedded systems using KiCad.</p>
          </div>

          <div className="bg-neutral-900/30 border border-neutral-800 p-6 rounded-2xl hover:border-neutral-600 transition-colors group">
            <Printer className="text-neutral-300 group-hover:text-green-400 w-10 h-10 mb-4 transition-colors" />
            <h3 className="text-xl font-bold text-white mb-2">3D Printing</h3>
            <p className="text-neutral-400 text-sm">Modeling & printing functional parts.</p>
          </div>

          <div className="bg-neutral-900/30 border border-neutral-800 p-6 rounded-2xl hover:border-neutral-600 transition-colors group">
            <Smartphone className="text-neutral-300 group-hover:text-green-400 w-10 h-10 mb-4 transition-colors" />
            <h3 className="text-xl font-bold text-white mb-2">Mobile Apps</h3>
            <p className="text-neutral-400 text-sm">React Native & Expo development.</p>
          </div>

           <div className="md:col-span-2 bg-neutral-900/30 border border-neutral-800 p-6 rounded-2xl hover:border-neutral-600 transition-colors group">
            <Terminal className="text-neutral-300 group-hover:text-green-400 w-10 h-10 mb-4 transition-colors" />
            <h3 className="text-xl font-bold text-white mb-2">Software & Firmware</h3>
            <p className="text-neutral-400">Bridging hardware with software using C++, Python and Next.js.</p>
          </div>

        </section>

        <section>
          <div className="flex items-center justify-between mb-8 pt-8 border-t border-neutral-900">
            <h2 className="text-2xl font-bold text-white">
              Selected Projects
            </h2>
            
            <div className="flex gap-4 text-xs font-medium text-neutral-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]"></span>
                Active
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]"></span>
                Done
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group flex flex-col p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-300 relative overflow-hidden"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0" />

                <div className="absolute top-6 right-6 flex items-center gap-2 z-10 pointer-events-none">
                  <div className={`w-3 h-3 rounded-full shadow-[0_0_10px] transition-all duration-500 ${
                    project.status === 'doing' 
                      ? 'bg-green-500 shadow-green-500/80 animate-pulse' 
                      : 'bg-red-500 shadow-red-500/80'
                  }`} />
                </div>

                <div className="z-10 relative pointer-events-none space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors flex items-center gap-2">
                    {project.title}
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0" />
                  </h3>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 z-10 relative flex flex-wrap gap-2 items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium px-2.5 py-1 bg-neutral-800/80 border border-neutral-700/50 rounded text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-400 hover:text-white transition-colors z-20 pointer-events-auto border border-neutral-700"
                      title="View Organization GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

function SocialButton({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl transition-all border border-neutral-800 hover:border-neutral-600 hover:scale-105"
    >
      {icon}
    </a>
  );
}