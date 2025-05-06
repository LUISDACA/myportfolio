'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
        } 
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)
    
    const navItems = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Experiencia', href: '#experience' },
        { name: 'Contacto', href: '#contact' },
    ]

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-secondary backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

            <div className="flex-shrink-0">
                <Link href="#hero" className="text-2xl font-bold gradient-text">
                MiPortafolio
                </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="text-light-secondary hover:text-primary transition-colors duration-300"
                >
                    {item.name}
                </Link>
                ))}
            </nav>
            
            <div className="md:hidden">
                <button 
                onClick={toggleMenu}
                className="text-light-secondary hover:text-primary focus:outline-none"
                >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            </div>
            
            {isOpen && (
            <div className="md:hidden bg-dark-secondary">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                    <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-light-secondary hover:text-primary hover:bg-dark-accent"
                    onClick={() => setIsOpen(false)}
                    >
                    {item.name}
                    </Link>
                ))}
                </div>
            </div>
            )}
        </div>
        </header>
    )
}

export default Header