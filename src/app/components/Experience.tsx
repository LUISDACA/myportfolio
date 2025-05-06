'use client'

import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const workExperience = [
    {
        id: 1,
        position: 'Desarrollador Web Senior',
        company: 'Empresa Innovadora',
        period: 'Ene 2022 - Presente',
        description: 'Desarrollo de aplicaciones web utilizando React, Next.js y TypeScript. Implementación de arquitecturas modernas y optimización de rendimiento en aplicaciones existentes.',
        technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js'],
    },
    {
        id: 2,
        position: 'Desarrollador Frontend',
        company: 'Agencia Digital',
        period: 'Mar 2020 - Dic 2021',
        description: 'Creación de interfaces de usuario interactivas y responsivas. Colaboración en equipos ágiles para entregar proyectos de alta calidad para clientes de diversos sectores.',
        technologies: ['React', 'JavaScript', 'SCSS', 'Redux', 'REST APIs'],
    },
    {
        id: 3,
        position: 'Desarrollador Junior',
        company: 'Startup Tech',
        period: 'Jun 2018 - Feb 2020',
        description: 'Desarrollo y mantenimiento de aplicaciones web. Implementación de nuevas funcionalidades y corrección de errores en proyectos existentes.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP'],
    },
    ]

    const education = [
    {
        id: 1,
        degree: 'Ingeniería de Software',
        institution: 'Universidad Cooperativa de Colombia',
        period: '2023 - Actual',
        description: 'Formación en gestión y formulación de proyectos de software, fundamentos de la programación, bases de datos, redes y desarrollo de software..',
    },
    {
        id: 2,
        degree: 'Ingeniería Electrónica',
        institution: 'Universidad CESMAG',
        period: '2013 - 2018',
        description: 'Formación en fundamentos de proyectos de base tecnológica sostenibles con estándares internacionales y emprendimiento e innovación en robotica.. ',
    },
    ]

    const Experience = () => {
    return (
        <section id="experience" className="section-container bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg gradient-text text-center mb-12">Experiencia y Formación</h2>
            
            <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FaBriefcase color="var(--color-primary)" />
                Experiencia Laboral
            </h3>
            
            <div className="space-y-12">
                {workExperience.map((job) => (
                <div key={job.id} className="relative pl-8 border-l-2 border-primary/30">
                    <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-primary"></div>
                    
                    <div className="mb-2">
                    <h4 className="text-xl font-bold">{job.position}</h4>
                    <p className="text-primary">{job.company}</p>
                    <p className="text-sm text-light-secondary">{job.period}</p>
                    </div>
                    
                    <p className="mb-3 text-light-secondary">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                        <span 
                        key={tech} 
                        className="px-2 py-1 bg-dark rounded-md text-sm font-medium text-light-secondary"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            </div>
            
            <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FaGraduationCap color="var(--color-primary)" />
                Formación Académica
            </h3>
            
            <div className="space-y-12">
                {education.map((edu) => (
                <div key={edu.id} className="relative pl-8 border-l-2 border-primary/30">
                    <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-primary"></div>
                    
                    <div className="mb-2">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p className="text-primary">{edu.institution}</p>
                    <p className="text-sm text-light-secondary">{edu.period}</p>
                    </div>
                    
                    <p className="text-light-secondary">{edu.description}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    )
}

export default Experience