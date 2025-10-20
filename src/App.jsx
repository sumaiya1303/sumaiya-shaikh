import React, { useState } from 'react';


const portfolioData = {
  name: "Sumaiya Ibrahim Shaikh",
  contact: {
    phone: "+1-562-208-8511",
    email: "shaikhsumaiyaibrahim@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumaiya-ibrahim-shaikh/",
    github: "https://github.com/Sumaiya-Shaikh",
    location: "California, US",
  },
  headline: "Software Engineer & AI Researcher",
  summary: "A passionate Software Engineer with a Master's in Computer Science, specializing in Data Engineering, Machine Learning, and Cloud technologies. Proven experience in designing scalable ETL pipelines, implementing MLOps, and developing AI-driven applications. Eager to leverage expertise in NLP and cloud-native solutions to build innovative and impactful products.",
  experience: [
    {
      role: "Research Assistant",
      company: "California State University, Dominguez Hills",
      period: "Jan 2025 – May 2025",
      description: "Researched and implemented low-resource Neural Machine Translation (NMT) models for clinical text, improving BLEU by 15%. Fine-tuned mBART & NLLB-200 using PyTorch with FP16 mixed-precision on A100 GPUs, reducing training time by 30%.",
    },
    {
      role: "Software Engineer",
      company: "Accenture",
      period: "Sep 2022 – Aug 2024",
      description: "Designed and optimized ETL pipelines in Informatica, cutting data load time by 20%. Automated large-scale ingestion workflows using AWS S3 + Kafka + PySpark, processing 20M+ daily records. Implemented CI/CD pipelines achieving zero-downtime deployments.",
    },
  ],
  publications: [
    {
      title: "Advancing Clinical Translation in Nepali through Fine-Tuned Multilingual Models",
      journal: "RANLP 2025",
      year: "2025",
      description: "Co-authored a peer-reviewed paper on domain adaptation techniques for NMT models in clinical settings, demonstrating significant improvements in translation quality with limited bilingual data.",
      link: "https://acl-bg.org/proceedings/2025/RANLP%202025/pdf/2025.ranlp-1.6.pdf"
    },
    {
      title: "Digital Currency Price Prediction Using Machine Learning",
      journal: "IJRSET",
      year: "2023",
      description: "Published findings on applying LSTM neural networks for financial forecasting, achieving over 95% prediction accuracy and showcasing deep learning's potential in investment analysis.",
      link: "https://www.ijraset.com/best-journal/digital-currency-price-prediction-using-machine-learning"
    }
  ],
  projects: [
    {
      title: "Hyper-Personalized Financial Product Engine",
      tech: "Python, AWS Bedrock, LangChain, OpenAI GPT-4, DynamoDB",
      description: "Developing an AI recommendation system for financial products. Integrates LLMs via LangChain to generate natural-language explanations, enhancing user trust and transparency.",
    },
    {
      title: "AI Email & Task Sorter",
      tech: "Python, OpenAI GPT-4-mini API, Gmail IMAP, Todoist API",
      description: "Built an automation pipeline integrating Gmail with GPT-4-mini to automatically classify, summarize, and route over 1K emails into Todoist tasks, achieving 98% accuracy.",
    },
    {
      title: "Digital Currency Price Prediction",
      tech: "Python, LSTM, Scikit-learn, IJRSET Publication",
      description: "Engineered a time-series forecasting pipeline using LSTM neural networks, achieving 95% prediction accuracy and outperforming regression baselines. Published findings in IJRSET 2023.",
    },
  ],
skills: {
    "Programming & Scripting": ["Python", "Java", "JavaScript", "UNIX", "SQL", "PL/SQL", "MongoDB", "SQL Server", "DynamoDB"],
    "Machine Learning & AI": ["NLP", "Neural Networks", "Deep Learning", "LLM Integration", "LangChain", "TensorFlow", "PyTorch", "Scikit-learn"],
    "Data Engineering & Big Data": ["ETL Development", "Informatica", "PySpark", "Databricks", "Apache Spark", "Hadoop", "Snowflake", "Kafka"],
    "Cloud & DevOps": ["AWS", "GCP", "Oracle Cloud", "Git","Docker", "Kubernetes", "Terraform", "CI/CD", "Jenkins"],
    "Web & API Development": ["Django REST Framework", "Spring Boot", "React.js", "Tailwind CSS", "GraphQL", "RESTful APIs", "Microservices"],
    "Software Engineering Practices": ["Agile", "Scrum", "Kanban", "SDLC", "SQA", "TDD", "BDD"]
  },
  education: {
    degree: "Master of Science in Computer Science",
    university: "California State University, Dominguez Hills (CSUDH)",
    graduation: "Expected May 2026",
    gpa: "3.86/4.00",
  },
  certifications: ["Oracle Cloud Infrastructure 2022 Foundations Associate"],
};


// --- SVG Icon Components ---
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block h-5 w-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block h-5 w-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

// --- Reusable Components ---
const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-20 ${className}`}>
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      {children}
    </div>
  </section>
);

const Card = ({ children, className = '' }) => (
  <div className={`bg-white border border-black/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${className}`}>
    {children}
  </div>
);

const Button = ({ href, children, variant = 'primary', className = '' }) => {
  const baseClasses = 'inline-block rounded-full px-8 py-3 font-semibold transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-burgundy-700/50';
  const styles = {
    primary: 'bg-taupe-300 text-indigo-900 shadow-lg',
    ghost: 'bg-transparent border-2 border-offwhite/75 text-offwhite',
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} className={`${baseClasses} ${styles[variant]} ${className}`}>
      {children}
    </Tag>
  );
};


// --- Section Components ---
const Header = ({ name, contact }) => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#7f2447] to-indigo-900 text-white shadow-md">
      <nav className="container mx-auto px-6 lg:px-8 max-w-6xl flex justify-between items-center py-4">
        <a href="#hero" className="text-xl font-bold hover:text-offwhite transition-colors">{name}</a>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#experience" className="hover:text-offwhite transition-colors">Experience</a>
          <a href="#projects" className="hover:text-offwhite transition-colors">Projects</a>
          <a href="#skills" className="hover:text-offwhite transition-colors">Skills</a>
          <a href="#contact" className="hover:text-offwhite transition-colors">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href={contact.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-offwhite transition-colors"><GithubIcon /></a>
          <a href={contact.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-offwhite transition-colors"><LinkedInIcon /></a>
          <a href={`mailto:${contact.email}`} aria-label="Email" className="hover:text-offwhite transition-colors"><MailIcon /></a>
        </div>
      </nav>
    </header>
  );
};

const Hero = ({ name, headline, summary }) => {
  return (
    <Section id="hero" className="relative text-white text-center overflow-hidden !py-24 md:!py-32 bg-gradient-to-r from-[#7f2447] to-indigo-900"



    >
      <div className="relative z-10">
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }} className="font-extrabold leading-tight mb-4">{name}</h1>
        <p className="text-2xl md:text-3xl font-light text-offwhite/90 mb-8">{headline}</p>
        <p className="max-w-3xl mx-auto text-offwhite/80 leading-relaxed mb-12">{summary}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#contact" variant="ghost">Get in Touch</Button>
          <a target="_blank" rel="noreferrer" href="Sumaiya_Ibrahim_Shaikh_Resume.pdf" className="px-6 py-3 rounded-full ring-2 ring-white hover:scale-104" variant="ghost">Download My Resume </a>

        </div>

      </div>
    </Section>
  );
};

const Experience = ({ experience }) => (
  <Section id="experience">
    <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Professional Experience</h2>
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
      {experience.map((job, index) => (
        <Card key={index}>
          <p className="text-sm font-semibold text-violet-600 mb-1">{job.period}</p>
          <h3 className="text-xl font-bold text-indigo-900">{job.role}</h3>
          <p className="text-lg font-medium text-text mb-3">{job.company}</p>
          <p className="text-muted-text leading-relaxed">{job.description}</p>
        </Card>
      ))}
    </div>
  </Section>
);


const Publications = ({ publications }) => (
  <Section id="publications">
    <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Publications & Research</h2>
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {publications.map((pub, index) => (<Card key={index} className="flex flex-col"> 
        <div className="flex-grow"> 
          <p className="text-sm font-semibold text-violet-600 mb-1">{pub.journal} • {pub.year}</p> 
          <h3 className="text-xl font-bold text-indigo-900 mb-3">{pub.title}</h3> 
          <p className="text-muted-text leading-relaxed">{pub.description}</p> 
          </div> <div className="mt-6"> <a target="_blank" href={pub.link} variant="ghost" className="px-6 py-2 rounded-full ring-2 ring-white hover:scale-104 text-indigo-900  ">
            Read Paper </a> </div> </Card>))}
    </div>
  </Section>
);

const Projects = ({ projects }) => (
  <Section id="projects" className="bg-indigo-900/5">
    <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Featured Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card key={index}>
          <div className="h-1.5 w-1/3 rounded-full bg-gradient-to-r from-burgundy-700 via-rose-400 to-taupe-300 mb-4"></div>
          <h3 className="text-xl font-bold text-indigo-900 mb-2">{project.title}</h3>
          <p className="text-sm font-semibold text-violet-600 mb-3">{project.tech}</p>
          <p className="text-muted-text leading-relaxed">{project.description}</p>
        </Card>
      ))}
    </div>
  </Section>
);

const Skills = ({ skills }) => (
  <Section id="skills">
    <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Technical Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="bg-white p-6 rounded-lg shadow-sm border border-black/5">
          <h3 className="text-lg font-bold text-indigo-900 mb-4">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillList.map(skill => (
              <span key={skill} className="bg-taupe-300/40 text-indigo-900 text-sm font-medium px-3 py-1 rounded-2xl  ring-1 ring-indigo-900/6">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const CtaStripe = () => (
  <div className="py-12 bg-offwhite">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <div className="relative rounded-2xl p-8 md:p-12 text-white overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-900 shadow-xl">
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Let's build something great together.</h2>
            <p className="text-offwhite/80 max-w-xl">I'm currently seeking new opportunities. If you have a project in mind or just want to connect, feel free to reach out.</p>
          </div>
          <div className="flex-shrink-0">
            <Button href={`mailto:${portfolioData.contact.email}`} variant="ghost">Email Me</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const About = ({ education, certifications }) => (
  <Section id="about" className="bg-indigo-900/5">
    <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Education & Credentials</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <h3 className="text-xl font-bold text-indigo-900">Education</h3>
        <p className="text-lg font-medium text-text mt-2">{education.degree}</p>
        <p className="text-muted-text">{education.university}</p>
        <p className="text-sm text-violet-600 mt-1">{education.graduation}</p>
        {/* <p className="text-sm text-muted-text">GPA: {education.gpa}</p> */}
      </Card>
      <Card>
        <h3 className="text-xl font-bold text-indigo-900">Certifications</h3>
        <ul className="list-disc list-inside mt-2 text-muted-text space-y-1">
          {certifications.map(cert => <li key={cert}>{cert}</li>)}
        </ul>
      </Card>
    </div>
  </Section>
);


const Contact = ({ email }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-900">Contact Me</h2>
        <p className="mt-4 text-muted-text">
          Have a question or proposal, or just want to say hello? Go ahead.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-12 max-w-xl mx-auto">
        <div className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Full name</label>
            <input type="text" name="name" id="name" required placeholder="Your Name" className="block w-full rounded-lg border-black/10 bg-white p-3 shadow-sm focus:border-burgundy-700 focus:ring-2 focus:ring-burgundy-700/50" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required placeholder="Your Email" className="block w-full rounded-lg border-black/10 bg-white p-3 shadow-sm focus:border-burgundy-700 focus:ring-2 focus:ring-burgundy-700/50" />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" rows="4" required placeholder="Your Message" className="block w-full rounded-lg border-black/10 bg-white p-3 shadow-sm focus:border-burgundy-700 focus:ring-2 focus:ring-burgundy-700/50"></textarea>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button type="submit" className="inline-block rounded-full px-10 py-4 font-semibold transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-burgundy-700/50 bg-indigo-900 text-white shadow-lg">
            Send Message
          </button>
        </div>
      </form>
    </Section>
  );
};

const Footer = ({ name }) => {
  const [year] = useState(new Date().getFullYear());
  return (
    <footer className="bg-indigo-900 text-white py-8 mt-12">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <p>&copy; {year} {name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <>
      <Header name={portfolioData.name} contact={portfolioData.contact} />
      <main>
        <Hero name={portfolioData.name} headline={portfolioData.headline} summary={portfolioData.summary} />
        <Experience experience={portfolioData.experience} />
        <Publications publications={portfolioData.publications} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <CtaStripe />
        <About education={portfolioData.education} certifications={portfolioData.certifications} />
        <Contact email={portfolioData.contact.email} />
      </main>
      <Footer name={portfolioData.name} />
    </>
  );
}

