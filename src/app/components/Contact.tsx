'use client'

import { useState, useEffect, useRef } from 'react'
import { 
    FaEnvelope, 
    FaMapMarkerAlt, 
    FaPhone, 
    FaGithub, 
    FaLinkedin, 
    FaFacebook, 
    FaPaperPlane, 
    FaUser, 
    FaCommentAlt 
} from 'react-icons/fa'
import { GiBrain } from "react-icons/gi";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')
    const [messageType, setMessageType] = useState<'success' | 'error'>('success')
    const [isVisible, setIsVisible] = useState(false)
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
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        setIsSubmitting(true)
        
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            
            setIsSubmitting(false)
            setMessageType('success')
            setSubmitMessage('¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.')
            
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
        } catch {
            setIsSubmitting(false)
            setMessageType('error')
            setSubmitMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.')
        }
        
        setTimeout(() => {
            setSubmitMessage('')
        }, 5000)
    }
    
    const contactMethods = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'luis.davidca@campusucc.edu.co',
            link: 'luis.davidca@campusucc.edu.co',
            color: 'blue',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Ubicación',
            value: 'Pasto, Nariño, Colombia',
            link: '',
            color: 'red',
        },
        {
            icon: <FaPhone />,
            title: 'Teléfono',
            value: '+57 318 431 6637',
            link: 'tel:+573184316637',
            color: 'green',
        },
    ]
    
    const socialNetworks = [
        {
            icon: <FaGithub size={22} />,
            url: 'https://github.com/LUISDACA',
            label: 'GitHub',
            color: 'hover:bg-gray-800',
        },
        {
            icon: <FaLinkedin size={22} />,
            url: 'https://linkedin.com/in/luis-miguel-david-campo-17840b364',
            label: 'LinkedIn',
            color: 'hover:bg-blue-600',
        },
        {
            icon: <FaFacebook size={22} />,
            url: 'https://www.facebook.com/LuisMiguelDavidC',
            label: 'Facebook',
            color: 'hover:bg-blue-800',
        },
    ]
    
    const getContactMethodBg = (color: string) => {
        switch(color) {
            case 'blue': return 'from-blue-500/20 to-blue-600/10';
            case 'red': return 'from-red-400/20 to-red-500/10';
            case 'green': return 'from-green-500/20 to-green-600/10';
            default: return 'from-blue-500/20 to-blue-600/10';
        }
    }
    
    const getContactMethodBorder = (color: string) => {
        switch(color) {
            case 'blue': return 'border-blue-500/30';
            case 'red': return 'border-red-500/30';
            case 'green': return 'border-green-500/30';
            default: return 'border-blue-500/30';
        }
    }
    
    const getContactMethodText = (color: string) => {
        switch(color) {
            case 'blue': return 'text-blue-400';
            case 'red': return 'text-red-400';
            case 'green': return 'text-green-400';
            default: return 'text-blue-400';
        }
    }

    return (
        <section 
            id="contact" 
            ref={sectionRef}
            className="py-24 relative overflow-hidden bg-gradient-to-b from-dark-secondary to-dark"
        >
            <div className="absolute top-20 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className={`inline-block px-4 py-1.5 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
                        Ponte en contacto
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
                        Contacto
                    </h2>
                    <p className={`mt-4 text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
                        Estoy disponible para proyectos, colaboraciones o simplemente para conversar sobre tecnología.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="bg-dark-accent/40 p-8 rounded-2xl border border-gray-800 shadow-xl backdrop-blur-sm hover:bg-dark-accent/60 transition-colors duration-300">
                            <h3 className="text-2xl font-bold mb-6 text-white">¡Hablemos!</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                ¿Tienes alguna pregunta o estás interesado en colaborar en un proyecto? 
                                No dudes en contactarme a través del formulario o por cualquiera 
                                de los siguientes medios.
                            </p>
                            
                            <div className="space-y-6 mb-10">
                                {contactMethods.map((method, index) => (
                                    <div 
                                        key={method.title}
                                        className={`flex items-center gap-4 p-4 rounded-xl border ${getContactMethodBorder(method.color)} bg-gradient-to-r ${getContactMethodBg(method.color)} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                                        style={{ transitionDelay: `${800 + index * 150}ms` }}
                                    >
                                        <div className={`size-12 rounded-full bg-gradient-to-br from-dark-accent to-dark flex items-center justify-center border ${getContactMethodBorder(method.color)}`}>
                                            <span className={getContactMethodText(method.color)}>
                                                {method.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">{method.title}</p>
                                            {method.link ? (
                                                <a 
                                                    href={method.link} 
                                                    className={`${getContactMethodText(method.color)} hover:underline transition-colors`}
                                                >
                                                    {method.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-300">{method.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className={`transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <h4 className="text-lg font-medium mb-4 text-white">Sígueme en</h4>
                                <div className="flex gap-3">
                                    {socialNetworks.map((network, index) => (
                                        <a 
                                            key={network.label}
                                            href={network.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            aria-label={network.label}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center bg-dark-accent text-gray-300 border border-gray-800 ${network.color} hover:text-white hover:scale-110 transition-all duration-300`}
                                            style={{ transitionDelay: `${1100 + index * 100}ms` }}
                                        >
                                            {network.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <div className="bg-gradient-to-br from-dark-accent/40 to-dark-accent/20 p-8 rounded-2xl border border-gray-800 shadow-xl backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6 text-white">Envíame un mensaje</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block mb-2 font-medium text-gray-300">Nombre</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                                            <FaUser />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tu nombre"
                                            className="w-full p-4 pl-12 rounded-lg bg-dark border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder:text-gray-500"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block mb-2 font-medium text-gray-300">Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                                            <FaEnvelope />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="tu@email.com"
                                            className="w-full p-4 pl-12 rounded-lg bg-dark border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder:text-gray-500"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block mb-2 font-medium text-gray-300">Asunto</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
                                            <FaCommentAlt />
                                        </div>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="Asunto del mensaje"
                                            className="w-full p-4 pl-12 rounded-lg bg-dark border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder:text-gray-500"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block mb-2 font-medium text-gray-300">Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Escribe tu mensaje aquí..."
                                        className="w-full p-4 rounded-lg bg-dark border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-white placeholder:text-gray-500"
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-70 disabled:transform-none disabled:hover:shadow-none flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane /> Enviar Mensaje
                                        </>
                                    )}
                                </button>
                                
                                {submitMessage && (
                                    <div className={`mt-4 p-4 rounded-lg ${messageType === 'success' ? 'bg-green-500/20 border border-green-500/30 text-green-400' : 'bg-red-500/20 border border-red-500/30 text-red-400'} text-center transition-all duration-300`}>
                                        {submitMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
                
                <footer className={`mt-24 text-center text-gray-400 transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p>&copy; {new Date().getFullYear()} Luis Miguel David Campo. Todos los derechos reservados.</p>
                    <p className="mt-2">
                        Desarrollado con 
                        <span className="text-red-300 mx-2 text-2xl align-middle inline-block animate-pulse">
                            <GiBrain />
                        </span> 
                        utilizando Next.js, TypeScript y TailwindCSS
                    </p>
                    <div className="mt-4 text-sm">
                        <a href="#hero" className="text-gray-400 hover:text-blue-400 transition-colors">Volver al inicio</a>
                    </div>
                </footer>
            </div>
            
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </section>
    )
}

export default Contact