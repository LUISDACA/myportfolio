'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode } from 'react-icons/fa'

type ProjectColor = 'blue' | 'yellow' | 'emerald' | undefined;

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    liveDemo: string;
    color: ProjectColor;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: 'Sistema de tutorías',
        description: 'Sistema de Tutorías y Apoyo Académico con todas las funcionalides como estudiante y administrador',
        image: '/images/project1.jpg',
        technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'LocalStorage', 'HTML + Css'],
        github: 'https://github.com/LUISDACA/tutoriasapp.git',
        liveDemo: 'https://tutoriasapp.vercel.app/',
        color: 'blue'
    },
    {
        id: 2,
        title: 'Leyenda del fútbol',
        description: 'Blog de leyenda del futbol, Ronaldo "El Fenómeno" donde tenemos: Preview, historia, carrera, logros y galeria de fotos.',
        image: '/images/project2.jpg',
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Css'],
        github: 'https://github.com/LUISDACA/talleria.git',
        liveDemo: 'https://talleria.vercel.app/',
        color: 'yellow'
    },
    {
        id: 3,
        title: 'Sabores Caseros',
        description: 'Plataforma de pedidos electrónico para un restaurante con carrito de compras, pagos en línea, panel de administración y demás funcionalidades.',
        image: '/images/project3.jpg',
        technologies: ['Django', 'Python', 'JavaScript', 'TailwindCSS', 'Vite + React', 'PostgreSQL'],
        github: 'https://github.com/LUISDACA/SaboresCaseros.git',
        liveDemo: 'https://github.com/LUISDACA/SaboresCaseros.git',
        color: 'emerald'
    },
]

const Projects = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const sectionRef = useRef<HTMLElement | null>(null)
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )
        
        const currentRef = sectionRef.current
        
        if (currentRef) {
            observer.observe(currentRef)
        }
        
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    const getProjectBackgroundClass = (color: ProjectColor): string => {
        switch(color) {
            case 'blue': 
                return 'bg-gradient-to-b from-blue-900/60 to-dark-accent/95';
            case 'yellow': 
                return 'bg-gradient-to-b from-yellow-900/60 to-dark-accent/95';
            case 'emerald': 
                return 'bg-gradient-to-b from-emerald-900/60 to-dark-accent/95';
            default: 
                return 'bg-dark-accent';
        }
    }
    
    const getGradientClass = (color: ProjectColor): string => {
        switch(color) {
            case 'blue': return 'from-blue-600/20 to-blue-800/20'
            case 'yellow': return 'from-yellow-500/20 to-yellow-600/20'
            case 'emerald': return 'from-emerald-500/20 to-emerald-700/20'
            default: return 'from-blue-600/20 to-blue-800/20'
        }
    }
    
    const getBorderClass = (color: ProjectColor): string => {
        switch(color) {
            case 'blue': return 'border-blue-500/30'
            case 'yellow': return 'border-yellow-500/30'
            case 'emerald': return 'border-emerald-500/30'
            default: return 'border-blue-500/30'
        }
    }
    
    const getTextClass = (color: ProjectColor): string => {
        switch(color) {
            case 'blue': return 'text-blue-400'
            case 'yellow': return 'text-yellow-400'
            case 'emerald': return 'text-emerald-400'
            default: return 'text-blue-400'
        }
    }

    return (
        <section 
            id="projects" 
            ref={sectionRef}
            className="py-24 relative overflow-hidden bg-gradient-to-b from-dark-secondary to-dark"
        >
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className={`inline-block px-4 py-1.5 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
                        Portafolio
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
                        Mis Proyectos
                    </h2>
                    <p className={`mt-4 text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
                        Aquí encontrarás una selección de proyectos en los que he trabajado, combinando desarrollo web y tecnologías innovadoras.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div 
                            key={project.id}
                            className={`${getProjectBackgroundClass(project.color)} border border-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-700 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${500 + index * 150}ms` }}
                        >
                            <div className="relative p-1">
                                <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(project.color)} rounded-t-xl opacity-60`}></div>
                                <div className="relative w-full h-52 rounded-t-lg overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full flex items-center justify-center bg-dark/80 backdrop-blur-sm text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                                            aria-label="Ver código en GitHub"
                                        >
                                            <FaGithub size={22} />
                                        </a>
                                        <a 
                                            href={project.liveDemo} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full flex items-center justify-center bg-dark/80 backdrop-blur-sm text-white hover:bg-purple-500 transition-all duration-300 transform hover:scale-110"
                                            aria-label="Ver demo en vivo"
                                        >
                                            <FaExternalLinkAlt size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6 relative">
                                <div className={`absolute -top-4 left-6 py-1 px-3 bg-gradient-to-r ${getGradientClass(project.color)} backdrop-blur-sm rounded-full border ${getBorderClass(project.color)} shadow-lg`}>
                                    <p className={`text-xs font-semibold ${getTextClass(project.color)}`}>
                                        Proyecto {project.id}
                                    </p>
                                </div>
                                
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="px-2 py-1 bg-dark rounded-md text-xs font-medium text-gray-300 border border-gray-800 hover:border-blue-500/30 transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex gap-4 pt-3 border-t border-gray-800">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                                    >
                                        <FaCode /> <span>Código fuente</span>
                                    </a>
                                    <a 
                                        href={project.liveDemo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors ml-auto"
                                    >
                                        <FaLaptopCode /> <span>Ver demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className={`mt-16 text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <a 
                        href="https://github.com/LUISDACA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
                    >
                        <FaGithub /> Ver más proyectos en GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
