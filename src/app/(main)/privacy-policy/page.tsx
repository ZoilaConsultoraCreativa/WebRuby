
'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
        },
    };

    return (
        <div className="bg-background py-24 md:py-32">
            <motion.div 
                className="container max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-headline tracking-tight">Política de Privacidad</h1>
                    <p className="text-sm text-muted-foreground mt-4">Última actualización: 17-11-2025</p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-8 text-sm leading-relaxed text-foreground/80">
                    <section className="space-y-4 text-justify">
                        <p>En Ruby Villarroel Gallardo (“yo”, “mi”, “la marca”), respeto profundamente tu privacidad y me comprometo a proteger los datos personales que compartas al utilizar mi sitio web www.rubyvillarroel.cl (el “Sitio”).</p>
                        <p>Esta Política de Privacidad explica de manera clara cómo recopilo, uso, protejo y gestiono tu información personal, en cumplimiento con la legislación chilena vigente, especialmente la Ley N° 19.628 sobre Protección de la Vida Privada.</p>
                        <p>Al navegar por el Sitio o utilizar sus formularios, aceptas las prácticas descritas a continuación.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">1. Responsable del Tratamiento de Datos</h2>
                        <p>La responsable del tratamiento de tus datos personales es:</p>
                        <ul className="list-none space-y-2 bg-secondary/30 p-4 rounded-lg text-sm">
                            <li><strong>Nombre completo:</strong> Ruby Villarroel Gallardo</li>
                            <li><strong>Domicilio:</strong> Santiago, Chile</li>
                            <li><strong>Correo de contacto:</strong> coaching@rubyvillarroel.cl</li>
                        </ul>
                    </section>

                    <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">2. Datos que recopilo</h2>
                        <div>
                            <h3 className="text-xl font-headline text-foreground/90 mb-2">2.1. Datos entregados voluntariamente por el usuario</h3>
                            <p>En el formulario de contacto recopilo:</p>
                            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                <li>Nombre</li>
                                <li>Correo electrónico</li>
                                <li>Mensaje o consulta</li>
                            </ul>
                            <p className="mt-2">Estos datos son utilizados exclusivamente para responder tu solicitud o comunicarme contigo cuando sea necesario.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-headline text-foreground/90 mb-2 mt-4">2.2. Datos de navegación (recopilados automáticamente)</h3>
                            <p>El Sitio utiliza herramientas tecnológicas que registran información sobre la forma en que navegas, incluyendo:</p>
                            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                <li>Dirección IP (que puede ser anonimizada)</li>
                                <li>Ubicación aproximada</li>
                                <li>Tipo de dispositivo y navegador</li>
                                <li>Páginas visitadas</li>
                                <li>Tiempo de permanencia</li>
                                <li>Fuente de la visita (por ejemplo, redes sociales, buscadores, etc.)</li>
                            </ul>
                             <p className="mt-2">Esto se realiza mediante cookies y el uso de Google Analytics.</p>
                        </div>
                    </section>
                    
                    <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">3. Uso de Google Analytics</h2>
                        <p>El Sitio utiliza Google Analytics, un servicio proporcionado por Google LLC, para analizar el uso del Sitio y mejorar la experiencia de navegación.</p>
                        <p>Google Analytics utiliza cookies que permiten:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>Generar estadísticas de navegación</li>
                            <li>Identificar páginas más vistas</li>
                            <li>Conocer patrones de comportamiento general de los usuarios</li>
                        </ul>
                        <p className="mt-2">La información recopilada puede almacenarse en servidores ubicados fuera de Chile. Puedes desactivar el uso de cookies desde la configuración de tu navegador o instalar el complemento de inhabilitación de Google Analytics.</p>
                    </section>

                    <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">4. Finalidades del Tratamiento</h2>
                        <p>Uso tus datos personales únicamente para:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>Responder consultas y mensajes enviados a través del formulario del Sitio.</li>
                            <li>Mejorar la experiencia de navegación, usando la información recogida mediante herramientas de análisis.</li>
                            <li>Mantener la seguridad y funcionamiento del Sitio.</li>
                            <li>Cumplir con obligaciones legales cuando corresponda.</li>
                        </ul>
                        <p className="mt-2">No utilizo tus datos para fines distintos a los aquí señalados.</p>
                    </section>

                    <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">5. Base legal del tratamiento</h2>
                        <p>Trato tu información basándome en:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>Tu consentimiento, cuando rellenas el formulario de contacto o sigues navegando en el Sitio aceptando cookies.</li>
                            <li>Intereses legítimos, al analizar datos de navegación para mejorar el Sitio.</li>
                        </ul>
                        <p className="mt-2">Puedes retirar tu consentimiento en cualquier momento escribiendo a coaching@rubyvillarroel.cl.</p>
                    </section>

                    <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">6. Conservación de los datos</h2>
                        <p>Conservo tus datos solo durante el tiempo necesario para:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>Dar respuesta a tu consulta</li>
                            <li>Mantener un registro mínimo de comunicaciones</li>
                            <li>Cumplir obligaciones legales</li>
                        </ul>
                         <p className="mt-2">Una vez cumplidas estas finalidades, los datos podrán ser eliminados o bloqueados según la normativa.</p>
                    </section>
                    
                    <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">7. Comunicación de datos a terceros</h2>
                        <p>No comparto, vendo ni cedo datos personales a terceros con fines comerciales. Solo comparto información con:</p>
                         <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>Servicios tecnológicos esenciales, como hosting, correo electrónico o herramientas de análisis (por ejemplo, Google Analytics).</li>
                            <li>Autoridades competentes, si la ley lo exige.</li>
                        </ul>
                        <p className="mt-2">En caso de que los datos sean transferidos a servicios ubicados en otros países, procuraré que cuenten con estándares adecuados de seguridad.</p>
                    </section>
                    
                    <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">8. Cookies</h2>
                        <p>El Sitio utiliza cookies propias y de terceros para:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                           <li>Recordar preferencias del usuario</li>
                           <li>Analizar el uso del Sitio</li>
                           <li>Mejorar la funcionalidad y experiencia general</li>
                        </ul>
                        <p className="mt-2">Si lo deseas, puedes configurar tu navegador para rechazar cookies. Sin embargo, algunas funcionalidades podrían verse afectadas.</p>
                    </section>

                    <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">9. Derechos del Usuario</h2>
                        <p>Como titular de tus datos personales, tienes derecho a:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                           <li>Acceder a tus datos personales</li>
                           <li>Rectificar información incorrecta</li>
                           <li>Solicitar la eliminación de tus datos cuando sea procedente</li>
                           <li>Oponerte al tratamiento de tus datos para ciertos fines</li>
                        </ul>
                         <p className="mt-2">Puedes ejercer estos derechos escribiendo a: 📧 coaching@rubyvillarroel.cl</p>
                         <p>Responderé tu solicitud dentro de un plazo razonable, conforme a la Ley 19.628.</p>
                    </section>

                    <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">10. Seguridad de la Información</h2>
                        <p>Implemento medidas técnicas y administrativas razonables para proteger tus datos del acceso no autorizado o uso indebido. Sin embargo, ningún sistema es completamente infalible, por lo que no puedo garantizar una seguridad absoluta.</p>
                    </section>
                    
                     <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">11. Enlaces a sitios de terceros</h2>
                        <p>El Sitio puede contener enlaces a otros sitios web. No soy responsable de las prácticas de privacidad ni del contenido de dichos sitios. Te recomiendo revisar sus propias políticas.</p>
                    </section>

                     <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">12. Modificaciones a esta Política</h2>
                        <p>Puedo actualizar esta Política de Privacidad cuando sea necesario para reflejar cambios legales o mejoras del Sitio. Las modificaciones se publicarán en esta misma página con su fecha de actualización.</p>
                    </section>
                    
                    <section className="space-y-4 text-justify">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">13. Contacto</h2>
                        <p>Para preguntas, solicitudes o ejercicio de derechos relacionados con esta Política de Privacidad, puedes comunicarte a:</p>
                        <p className="font-semibold">📧 coaching@rubyvillarroel.cl</p>
                    </section>
                </motion.div>
            </motion.div>
        </div>
    );
}

    