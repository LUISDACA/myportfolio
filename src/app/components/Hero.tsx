'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
        setIsVisible(true)
    }, [])
    
    return (
        <section 
        id="hero" 
        className="min-h-screen flex items-center section-container"
        >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <p className="text-primary mb-2 font-medium">¡Hola, soy</p>
            <h1 className="heading-xl gradient-text">
                Luis M. David C.
            </h1>
            <h2 className="text-2xl font-bold mb-4 text-light-secondary">
                Ingeniero de software en proceso
            </h2>
            <p className="text-lg text-light-secondary mb-6">
                Especializado en crear experiencias digitales excepcionales. 
                Transformo ideas en aplicaciones web modernas y atractivas 
                utilizando las últimas tecnologías.
            </p>
            
            <div className="flex flex-wrap gap-4">
                <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-light font-medium transition-colors duration-300"
                >
                Contáctame
                </a>
                <a 
                href="/cv.pdf" 
                target="_blank"
                className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 font-medium transition-colors duration-300 flex items-center gap-2"
                >
                <FaFileDownload /> CV
                </a>
            </div>
            
            <div className="flex gap-4 mt-8">
                <a 
                href="https://github.com/LUISDACA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-secondary hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
                >
                <FaGithub size={28} />
                </a>
                <a 
                href="https://linkedin.com/in/luis-miguel-david-campo-17840b364" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-secondary hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
                >
                <FaLinkedin size={28} />
                </a>
            </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden border-2 border-primary/20">
                <Image
                src="/images/profile.jpg"
                alt="Luis Miguel - Foto de perfil"
                fill
                className="object-cover"
                priority
                />
            </div>
            </div>
        </div>
        </section>
    )
}

export default Hero