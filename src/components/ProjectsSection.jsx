import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    description: "I Developed a responsive campus restaurant website enabling online ordering and menu management.",
    image: "/projects/project1.png",
    tags: ["MERN", "TailwindCSS"],
    demoUrl: "https://restaurant-website-psi-tawny.vercel.app/",
    githubUrl: "https://github.com/Amritsks/Restaurant-website",
  },
  {
    id: 2,
    title: "Speech Studio",
    description:
      "Developed a Speech Studio app with real-time voice-to-text and text-to-speech features, enhanced with interactive wave animations.",
    image: "/projects/project2.png",
    tags: ["MERN", "TailwindCSS"],
    demoUrl: "https://speech-studio-five.vercel.app/",
    githubUrl: "https://github.com/Amritsks/SpeechStudio",
  },
  {
    id: 3,
    title: "CartIndia (E-commerce website)",
    description:
      "A complete,Core production-ready e-commerce platform built using React (Vite), Node.js, Express, MongoDB, JWT Authentication, Cloudinary Image Upload, and Socket.io real-time updates.",
    image: "/projects/project3.png",
    tags: ["React.jsx", "TailwindCSS"],
    demoUrl: "https://cart-india-e-commerce-website.vercel.app/",
    githubUrl: "https://github.com/Amritsks/CartIndia--E-commerce-Website",
  },
  {
    id: 4,
    title: "Task handler",
    description:
      "TaskHandler Board is a full-stack productivity tool built with React and FastAPI. It helps individuals and teams visually manage projects using boards, lists, and cards — while integrating AI task extraction to automatically break down unstructured input (like text summaries or chat notes) into actionable tasks.",
    image: "/projects/project4.png",
    tags: ["React.jsx", "TailwindCSS"],
    demoUrl: "https://task-handler-nine.vercel.app/dashboard",
    githubUrl: "https://github.com/Amritsks/TaskHandler",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Amritsks"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
