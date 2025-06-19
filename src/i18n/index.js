// i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Recursos de traducción
const resources = {
    en: {
        translation: {
            hero: {
                shaping: "Shaping",
                intoRealProjects: "into Real Projects",
                thatDeliverResults: "that Deliver Results",
                description: "Hi, i'm Sebastián, a developer based in Colombia, with a passion for code.",
                seeMyWork: "See my work"
            },
            words: {
                ideas: "Ideas",
                concepts: "Concepts",
                designs: "Designs",
                code: "Code"
            },
            abilities: {
                qualityFocus: {
                    title: "Quality Focus",
                    desc: "Delivering high-quality results while maintaining attention to every detail."
                },
                reliableCommunication: {
                    title: "Reliable Communication",
                    desc: "Keeping you updated at every step to ensure transparency and clarity."
                },
                onTimeDelivery: {
                    title: "On-Time Delivery",
                    desc: "Making sure projects are completed on schedule, with quality & attention to detail."
                }
            },
            counter: {
                yearsExperience: "Years of Experience",
                satisfiedClients: "Satisfied Clients",
                completedProjects: "Completed Projects",
                clientRetentionRate: "Client Retention Rate"
            },
            nav: {
                work: "Work",
                experience: "Experience",
                skills: "Skills",
                testimonials: "Testimonials"
            }
        }
    },
    es: {
        translation: {
            hero: {
                shaping: "Transformando",
                intoRealProjects: "en Proyectos Reales",
                thatDeliverResults: "que Entregan Resultados",
                description: "Hola, soy Sebastián, un desarrollador colombiano, con pasión por el código.",
                seeMyWork: "Ver mi trabajo"
            },
            words: {
                ideas: "Ideas",
                concepts: "Conceptos",
                designs: "Diseños",
                code: "Código"
            },
            abilities: {
                qualityFocus: {
                    title: "Enfoque en Calidad",
                    desc: "Entregando resultados de alta calidad manteniendo atención en cada detalle."
                },
                reliableCommunication: {
                    title: "Comunicación Confiable",
                    desc: "Manteniéndote actualizado en cada paso para asegurar transparencia y claridad."
                },
                onTimeDelivery: {
                    title: "Entrega a Tiempo",
                    desc: "Asegurando que los proyectos se completen a tiempo, con calidad y atención al detalle."
                }
            },
            counter: {
                yearsExperience: "Años de Experiencia",
                satisfiedClients: "Clientes Satisfechos",
                completedProjects: "Proyectos Completados",
                clientRetentionRate: "Tasa de Retención de Clientes"
            },
            nav: {
                work: "Trabajo",
                experience: "Experiencia",
                skills: "Habilidades",
                testimonials: "Testimonios"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es', // idioma por defecto (español)
        fallbackLng: 'en', // idioma de respaldo
        interpolation: {
            escapeValue: false 
        }
    });

export default i18n;