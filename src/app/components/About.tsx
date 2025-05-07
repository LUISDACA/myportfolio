'use client'

import { useEffect, useState } from 'react';
import { FaReact, FaNode, FaCss3, FaUserGraduate } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiVercel, SiHtml5, SiJavascript, SiVite, SiPostgresql, SiMongodb, SiPython } from 'react-icons/si';

const About = () => {
    const [visible, setVisible] = useState(false);
    
    const technologies = [
        { name: 'Python', icon: <SiPython size={40} color="#3B83BD"/>, proficiency: 90 },
        { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" />, proficiency: 85 },
        { name: 'JavaScript', icon: <SiJavascript size={40} color="#f0db4f"/>, proficiency: 95 },
        { name: 'React', icon: <FaReact size={40} color="#61DAFB" />, proficiency: 90 },
        { name: 'Next.js', icon: <SiNextdotjs size={40} color="white" />, proficiency: 80 },
        { name: 'Node.js', icon: <FaNode size={40} color="#339933" />, proficiency: 85 },
        { name: 'TailwindCSS', icon: <SiTailwindcss size={40} color="#38B2AC" />, proficiency: 90 },
        { name: 'Vercel', icon: <SiVercel size={40} color="white" />, proficiency: 75 },
        { name: 'HTML', icon: <SiHtml5 size={40} color="#FF7F00" />, proficiency: 95 },
        { name: 'CSS', icon: <FaCss3 size={40} color="#0099FF" />, proficiency: 90 },
        { name: 'Vite', icon: <SiVite size={40} color="#CCA9DD" />, proficiency: 80 },
        { name: 'PostgreSQL', icon: <SiPostgresql size={40} color="#61DAFB" />, proficiency: 75 },
        { name: 'MongoDB', icon: <SiMongodb size={40} color="#88DC65" />, proficiency: 80 }
    ];

    useEffect(() => {
        setVisible(true);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.add('translate-y-0');
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.remove('translate-y-8');
                }
            });
        }, { threshold: 0.1 });

        const hiddenElements = document.querySelectorAll('.animate-on-scroll');
        hiddenElements.forEach(el => observer.observe(el));

        return () => {
            hiddenElements.forEach(el => observer.unobserve(el));
        };
    }, []);
    
    return (
        <section id="about" className="py-24 bg-gradient-to-b from-dark-secondary to-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transform transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    Sobre Mí
                </h2>
                
                <div className="grid md:grid-cols-5 gap-8 mb-20">
                    <div className="md:col-span-2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
                        <div className="bg-dark rounded-2xl shadow-2xl border border-gray-800 overflow-hidden hover:border-blue-500/30 transition-all duration-300 h-full">
                            <div className="p-6 relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                
                                <div className="flex flex-col items-center relative z-10">
                                    <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6 p-1">
                                        <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                                            <FaUserGraduate size={40} className="text-blue-400" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-white mb-1">Ingeniero de Software</h3>                                    
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Desarrollo Frontend</span>
                                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Robótica</span>
                                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Desarrollo Backend</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:col-span-3 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
                        <div className="space-y-4 p-6 bg-dark rounded-2xl border border-gray-800 shadow-xl h-full flex flex-col justify-center">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Estudiante de Ingeniería de Software con un fuerte interés en la robótica, la automatización y 
                                los sistemas inteligentes. Me apasiona el desarrollo de soluciones que integren software y hardware 
                                para resolver problemas reales.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Mi enfoque está en la creación de soluciones tecnológicas que combinan el desarrollo de software 
                                con la robótica. Me apasiona entender cómo el código puede interactuar con el mundo físico para 
                                automatizar tareas y mejorar procesos en distintos contextos.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Constantemente me mantengo actualizado con las últimas tendencias y 
                                tecnologías, comprometido con el aprendizaje continuo y el 
                                mejoramiento de mis habilidades.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
                    <h3 className="text-2xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Tecnologías que domino
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                            <div 
                                key={tech.name}
                                className={`flex flex-col gap-4 p-6 rounded-xl bg-dark hover:bg-dark-accent/50 transition-all duration-500 border border-gray-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 group animate-on-scroll opacity-0 translate-y-8`}
                                style={{ transitionDelay: `${400 + (index * 50)}ms` }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        {tech.icon}
                                    </div>
                                    <span className="font-semibold text-lg text-gray-200">{tech.name}</span>
                                </div>
                                
                                <div className="mt-2">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-400">Nivel</span>
                                        <span className="text-sm font-medium text-blue-400">{tech.proficiency}%</span>
                                    </div>
                                    <div className="w-full h-2.5 bg-gray-800 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out-expo w-0"
                                            style={{ width: visible ? `${tech.proficiency}%` : '0%' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;