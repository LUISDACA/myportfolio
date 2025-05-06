'use client'

import { FaReact, FaNode, FaCss3 } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiVercel, SiHtml5, SiJavascript, SiVite, SiPostgresql, SiMongodb, SiPython } from 'react-icons/si'

const About = () => {
    const technologies = [
        { name: 'Python', icon: <SiPython size={40} color="#3B83BD"/>},
        { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
        { name: 'JavaScript', icon: <SiJavascript size={40} color="#f0db4f"/>},
        { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
        { name: 'Next.js', icon: <SiNextdotjs size={40} color="white" /> },
        { name: 'Node.js', icon: <FaNode size={40} color="#339933" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss size={40} color="#38B2AC" /> },
        { name: 'Vercel', icon: <SiVercel size={40} color="white" /> },
        { name: 'HTML', icon: <SiHtml5 size={40} color="#FF7F00" /> },
        { name: 'CSS', icon: <FaCss3 size={40} color="#0099FF"  />},
        { name: 'Vite', icon: <SiVite size={40} color="#CCA9DD"  />},
        { name: 'PostgreSQL', icon: <SiPostgresql size={40} color="#61DAFB"  />},
        { name: 'MongoDB', icon: <SiMongodb size={40} color="#88DC65"  />}

    ]
    
    return (
        <section id="about" className="section-container bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg gradient-text text-center mb-8">Sobre Mí</h2>
            
            <div className="mb-12">
            <p className="text-lg mb-4">
                Soy un desarrollador web apasionado por crear soluciones digitales 
                elegantes y funcionales. Con amplia experiencia en desarrollo 
                frontend y backend, me especializo en construir aplicaciones web 
                modernas y de alto rendimiento.
            </p>
            <p className="text-lg mb-4">
                Mi enfoque se centra en la creación de interfaces intuitivas y 
                experiencias de usuario excepcionales, siempre buscando la mejor 
                solución para cada proyecto utilizando las tecnologías más adecuadas.
            </p>
            <p className="text-lg mb-4">
                Constantemente me mantengo actualizado con las últimas tendencias y 
                tecnologías, comprometido con el aprendizaje continuo y el 
                mejoramiento de mis habilidades.
            </p>
            </div>
            
            <div>
            <h3 className="text-2xl font-bold mb-6 text-center">
                Tecnologías que domino
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                {technologies.map((tech) => (
                <div 
                    key={tech.name}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-dark hover:bg-dark-accent transition-colors"
                >
                    {tech.icon}
                    <span className="font-medium">{tech.name}</span>
                </div>
                ))}
            </div>
            </div>
        </div>
    </section>
)
}

export default About