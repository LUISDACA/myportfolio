'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowDown, FaHandshake } from 'react-icons/fa';
import { FiPhoneCall } from "react-icons/fi";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 300);
    }, []);
    
    return (
        <section id="hero" className="py-24 bg-gradient-to-b from-dark-secondary to-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full backdrop-blur-sm mb-4">
                                <p className="text-blue-400 font-medium flex items-center">
                                    <FaHandshake className="mr-2"/> Hola, soy
                                </p>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Luis M. David C.
                                </span>
                            </h1>
                            <h2 className="text-2xl font-bold mb-4 text-gray-300 flex items-center">
                                <span>Ingeniero de software en proceso</span>
                                <span className="ml-2 h-4 w-1 bg-blue-500 inline-block animate-cursor-blink"></span>
                            </h2>
                        </div>
                        
                        <p className={`text-lg text-gray-300 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            Soy estudiante de Ingeniería de Software y me apasiona la robótica. 
                            Me gusta explorar cómo el software puede dar vida a sistemas físicos, 
                            combinando la lógica de la programación con el mundo real para crear 
                            soluciones innovadoras y automatizadas.
                        </p>
                        
                        <div className={`flex flex-wrap gap-4 pt-2 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <a 
                                href="#contact" 
                                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 flex items-center gap-2"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <FiPhoneCall /> <span>Contáctame</span>
                            </a>
                            <a 
                                href="/cv.pdf" 
                                target="_blank"
                                className="px-6 py-3 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
                            >
                                <FaFileDownload /> <span>Descargar CV</span>
                            </a>
                        </div>
                        
                        <div className={`flex gap-5 mt-8 pt-4 border-t border-gray-800 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <a 
                                href="https://github.com/LUISDACA" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 text-gray-300 hover:text-white hover:bg-blue-500/20 hover:-translate-y-2 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a 
                                href="https://linkedin.com/in/luis-miguel-david-campo-17840b364" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 text-gray-300 hover:text-white hover:bg-blue-500/20 hover:-translate-y-2 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                    
                    <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-10 opacity-0 scale-95'}`}>
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-blue-500/50 rounded-tl-xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-blue-500/50 rounded-br-xl"></div>
                            
                            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1 shadow-xl shadow-black/50">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm"></div>
                                <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Luis Miguel - Foto de perfil"
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
