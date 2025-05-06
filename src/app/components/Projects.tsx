'use client'

import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projectsData = [
    {
        id: 1,
        title: 'Sistema de tutorías',
        description: 'Sistema de Tutorías y Apoyo Académico con todas las funcionalides como estudiante y administrador',
        image: '/images/project1.jpg',
        technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'LocalStorage', 'HTML + Css', ],
        github: 'https://github.com/LUISDACA/tutoriasapp.git',
        liveDemo: 'https://tutoriasapp.vercel.app/',
    },
    {
        id: 2,
        title: 'Leyenda del fútbol',
        description: 'Blog de leyenda del futbol, Roanldo "El Fenómeno" donde tenemos: Preview, historia, carrerra, logros y galeria de fotos.',
        image: '/images/project2.jpg',
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Css',],
        github: 'https://github.com/LUISDACA/talleria.git',
        liveDemo: 'https://talleria.vercel.app/',
    },
    {
        id: 3,
        title: 'Sabores Caseros',
        description: 'Plataforma de pedidos electrónico para un restaurante con carrito de compras, pagos en línea, panel de administración y demás funcionalidades.',
        image: '/images/project3.jpg',
        technologies: ['Django', 'Python', 'JavaScript', 'TailwindCSS', 'Vite + React', 'PostgreSQL'],
        github: 'https://github.com/LUISDACA/sabores_caseros.git',
        liveDemo: 'https://github.com/LUISDACA/sabores_caseros.git',
    },
    ]

    const Projects = () => {
    return (
        <section id="projects" className="section-container">
        <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg gradient-text text-center mb-12">Mis Proyectos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
                <div 
                key={project.id}
                className="card hover:shadow-glow group"
                >
                
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-light-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                    <span 
                        key={tech} 
                        className="px-2 py-1 bg-dark rounded-md text-sm font-medium text-light-secondary"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                
                <div className="flex gap-4">
                    <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors"
                    >
                    <FaGithub /> Código
                    </a>
                    <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors"
                    >
                    <FaExternalLinkAlt /> Demo
                    </a>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}

export default Projects