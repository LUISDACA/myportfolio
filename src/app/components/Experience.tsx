'use client'

import { useState, useEffect, useRef } from 'react'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaBuilding, FaCode } from 'react-icons/fa'

const workExperience = [
    {
        id: 1,
        position: 'Desarrollo y diseño de plataforma web',
        company: 'Homeland Colombia',
        period: 'Ene 2020 - Presente',
        description: 'Desarrollo, diseño y gestión integral de una plataforma de ventas completamente funcional utilizando WordPress.',
        technologies: ['WordPress'],
    },
    
]

const education = [
    {
        id: 1,
        degree: 'Ingeniería de Software',
        institution: 'Universidad Cooperativa de Colombia',
        period: '2023 - Actual',
        description: 'Formación en gestión y formulación de proyectos de software, fundamentos de la programación, bases de datos, redes y desarrollo de software.',
    },
    {
        id: 2,
        degree: 'Ingeniería Electrónica',
        institution: 'Universidad CESMAG',
        period: '2013 - 2018',
        description: 'Formación en fundamentos de proyectos de base tecnológica sostenibles con estándares internacionales y emprendimiento e innovación en robótica.',
    },
]

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    
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

    return (
        <section 
            id="experience" 
            ref={sectionRef}
            className="py-24 bg-gradient-to-b from-dark-secondary to-dark relative overflow-hidden"
        >
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className={`inline-block px-4 py-1.5 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
                        Mi Trayectoria
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
                        Experiencia y Formación
                    </h2>
                    <p className={`mt-4 text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
                        Mi recorrido profesional y académico que ha forjado mis habilidades en desarrollo de software.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg shadow-lg">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <FaBriefcase className="text-white" size={20} />
                            </div>
                            <span className="text-white">Experiencia Laboral</span>
                        </h3>
                        
                        <div className="space-y-8">
                            {workExperience.map((job, index) => (
                                <div 
                                    key={job.id} 
                                    className={`relative pl-8 border-l-2 border-blue-500/50 bg-dark-accent/40 rounded-r-lg p-5 hover:bg-dark-accent/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                                    style={{ transitionDelay: `${800 + index * 150}ms` }}
                                >
                                    <div className="absolute left-[-9px] top-5 w-4 h-4 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300 group-hover:shadow-md group-hover:shadow-blue-500/50"></div>
                                    
                                    <div className="mb-3">
                                        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{job.position}</h4>
                                        
                                        <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
                                            <div className="flex items-center gap-1 text-blue-400">
                                                <FaBuilding size={14} />
                                                <span>{job.company}</span>
                                            </div>
                                            <span className="text-gray-500">•</span>
                                            <div className="flex items-center gap-1 text-gray-400">
                                                <FaCalendarAlt size={12} />
                                                <span>{job.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="mb-4 text-gray-300 leading-relaxed">{job.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {job.technologies.map((tech) => (
                                            <span 
                                                key={tech} 
                                                className="px-2 py-1 bg-dark rounded-md text-xs font-medium text-gray-300 border border-gray-700 hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg shadow-lg">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <FaGraduationCap className="text-white" size={22} />
                            </div>
                            <span className="text-white">Formación Académica</span>
                        </h3>
                        
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div 
                                    key={edu.id} 
                                    className={`relative pl-8 border-l-2 border-purple-500/50 bg-dark-accent/40 rounded-r-lg p-5 hover:bg-dark-accent/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                                    style={{ transitionDelay: `${900 + index * 150}ms` }}
                                >
                                    <div className="absolute left-[-9px] top-5 w-4 h-4 rounded-full bg-purple-500 group-hover:scale-125 transition-transform duration-300 group-hover:shadow-md group-hover:shadow-purple-500/50"></div>
                                    
                                    <div className="mb-3">
                                        <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">{edu.degree}</h4>
                                        
                                        <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
                                            <div className="flex items-center gap-1 text-purple-400">
                                                <FaBuilding size={14} />
                                                <span>{edu.institution}</span>
                                            </div>
                                            <span className="text-gray-500">•</span>
                                            <div className="flex items-center gap-1 text-gray-400">
                                                <FaCalendarAlt size={12} />
                                                <span>{edu.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className={`mt-16 bg-dark-accent/30 border border-gray-800 rounded-xl p-6 shadow-lg transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <FaCode className="text-white" size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Resumen de Habilidades</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                        A lo largo de mi carrera, he adquirido experiencia en diversas tecnologías y metodologías que me permiten desarrollar soluciones efectivas y de alta calidad.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-dark p-3 rounded-lg border border-gray-800">
                            <h4 className="text-blue-400 font-medium mb-2">Frontend</h4>
                            <p className="text-gray-300 text-sm">React, Next.js, TypeScript, TailwindCSS</p>
                        </div>
                        <div className="bg-dark p-3 rounded-lg border border-gray-800">
                            <h4 className="text-blue-400 font-medium mb-2">Backend</h4>
                            <p className="text-gray-300 text-sm">Node.js, Express, Django, Python</p>
                        </div>
                        <div className="bg-dark p-3 rounded-lg border border-gray-800">
                            <h4 className="text-blue-400 font-medium mb-2">Bases de Datos</h4>
                            <p className="text-gray-300 text-sm">PostgreSQL, MongoDB, MySQL</p>
                        </div>
                        <div className="bg-dark p-3 rounded-lg border border-gray-800">
                            <h4 className="text-blue-400 font-medium mb-2">Herramientas</h4>
                            <p className="text-gray-300 text-sm">Git, Docker, AWS, Figma</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </section>
    )
}

export default Experience