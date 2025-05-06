'use client'

import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')
    
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
        
        await new Promise((resolve) => setTimeout(resolve, 1500))
        
        setIsSubmitting(false)
        setSubmitMessage('¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.')
        
        setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        })
        
        setTimeout(() => {
        setSubmitMessage('')
        }, 5000)
    }
    
    return (
        <section id="contact" className="section-container">
        <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg gradient-text text-center mb-12">Contacto</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold mb-6">¡Hablemos!</h3>
                <p className="text-light-secondary mb-8">
                ¿Tienes alguna pregunta o quieres colaborar en un proyecto? 
                No dudes en contactarme a través del formulario o por cualquiera 
                de los siguientes medios.
                </p>
                
                <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaEnvelope color="var(--color-primary)" />
                    </div>
                    <div>
                    <p className="font-medium">Email</p>
                    <a 
                        href="mailto:tu@email.com" 
                        className="text-light-secondary hover:text-primary transition-colors"
                    >
                        luis.davidca@campusucc.edu.contactarme
                    </a>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaMapMarkerAlt color="var(--color-primary)" />
                    </div>
                    <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-light-secondary">Pasto, Nariño, Colombia</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaPhone color="var(--color-primary)" />
                    </div>
                    <div>
                    <p className="font-medium">Teléfono</p>
                    <a 
                        href="tel:+573001234567" 
                        className="text-light-secondary hover:text-primary transition-colors"
                    >
                        +57 318 431 6637
                    </a>
                    </div>
                </div>
                </div>
                
                <div>
                <h4 className="text-lg font-medium mb-3">Sígueme en</h4>
                <div className="flex gap-4">
                    <a 
                    href="https://github.com/LUISDACA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-light-secondary hover:text-primary transition-colors"
                    >
                    <FaGithub size={24} />
                    </a>
                    <a 
                    href="https://linkedin.com/in/luis-miguel-david-campo-17840b364" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-light-secondary hover:text-primary transition-colors"
                    >
                    <FaLinkedin size={24} />
                    </a>
                    <a 
                    href="https://www.facebook.com/LuisMiguelDavidC" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-light-secondary hover:text-primary transition-colors"
                    >
                    <FaFacebook size={24} />
                    </a>
                </div>
                </div>
            </div>
            
            <div className="bg-dark-secondary p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-6">Envíame un mensaje</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Nombre</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-dark border border-dark-accent focus:border-primary outline-none transition-colors"
                    />
                </div>
                
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-dark border border-dark-accent focus:border-primary outline-none transition-colors"
                    />
                </div>
                
                <div>
                    <label htmlFor="subject" className="block mb-1 font-medium">Asunto</label>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-dark border border-dark-accent focus:border-primary outline-none transition-colors"
                    />
                </div>
                
                <div>
                    <label htmlFor="message" className="block mb-1 font-medium">Mensaje</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-lg bg-dark border border-dark-accent focus:border-primary outline-none transition-colors resize-none"
                    ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-primary hover:bg-primary-hover text-light font-medium rounded-lg transition-colors disabled:opacity-70"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
                
                {submitMessage && (
                    <p className="text-green-400 text-center">{submitMessage}</p>
                )}
                </form>
            </div>
            </div>
        </div>
        
        <footer className="mt-24 text-center text-light-secondary">
            <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
            <p className="mt-2">
            Desarrollado con 
            <span className="text-primary mx-1">❤</span> 
            utilizando Next.js, TypeScript y TailwindCSS
            </p>
        </footer>
        </section>
    )
}

export default Contact