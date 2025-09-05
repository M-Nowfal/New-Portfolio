import { ProjectCard } from "./projectCard";

// Example usage with sample data
export function Projects() {
  const projects = [
    {
      id: 1,
      title: "FTC Finna Tuition Centre",
      category: "Advanced",
      description: "I built a web app for a tuition centre to manage student attendance, fee tracking, and faculty coordination. It provides a central dashboard for admins, making record-keeping easier, faster, and more transparent.",
      image: "/projects/ftc.jpeg",
      githubUrl: "https://github.com/M-Nowfal/finna-tuition-centre",
      liveUrl: "https://finna-tuition-centre-drab.vercel.app/",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Byte-Cart E-Commerce Platform",
      category: "Intermediate",
      description: "A full-featured e-commerce site using Next.js and MongoDB. Supports authentication and cart functions. Covers 50% of Amazon's core features, with server-side rendering for performance and SEO.",
      image: "/projects/e-commerce.jpg",
      githubUrl: "https://github.com/M-Nowfal/Byte-Cart",
      liveUrl: "http://byte-cart.vercel.app/",
      technologies: ["Next.js", "React", "MongoDB", "Tailwind CSS", "Authentication"]
    }
  ];

  return (
    <section className="py-16 px-4" id="projects">
      <div className="py-10"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative mb-16">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/10 to-amber-600/10 blur-3xl opacity-75 rounded-full mx-auto w-3/4"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold relative bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse-slow">
              My Projects
            </h1>
            <div className="w-24 h-2 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full mx-auto mt-6 mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I've built to showcase my skills and passion for development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
