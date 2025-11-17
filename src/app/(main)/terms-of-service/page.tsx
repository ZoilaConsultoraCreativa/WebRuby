'use client';

import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
                    <h1 className="text-3xl md:text-4xl font-headline tracking-tight">Términos y Condiciones de Uso</h1>
                    <p className="text-sm text-muted-foreground mt-4">Última actualización: 17-11-2025</p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-8 text-sm leading-relaxed text-foreground/80">
                    <section className="space-y-4 text-justify">
                        <p>Bienvenida/o al sitio web www.rubyvillarroel.cl (el “Sitio”). Este Sitio es administrado por Ruby Villarroel Gallardo, coach profesional y consultora.</p>
                        <p>Al acceder y utilizar este Sitio, el usuario acepta quedar vinculado por los presentes Términos y Condiciones de Uso (“Términos”), así como por la Política de Privacidad disponible en el mismo Sitio. Si no estás de acuerdo con alguno de los puntos, se recomienda no utilizar el Sitio.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">1. Responsable del Sitio</h2>
                         <ul className="list-none space-y-2 bg-secondary/30 p-4 rounded-lg text-sm">
                            <li><strong>Nombre:</strong> Ruby Villarroel Gallardo</li>
                            <li><strong>Correo de contacto:</strong> coaching@rubyvillarroel.cl</li>
                            <li><strong>Ubicación:</strong> Santiago, Chile</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">2. Uso del Sitio</h2>
                        <p className="text-justify">El usuario se compromete a utilizar el Sitio de forma responsable y de acuerdo con la legislación chilena vigente. Queda estrictamente prohibido:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>Utilizar el Sitio con fines ilícitos, fraudulentos o que perjudiquen a terceros.</li>
                            <li>Intentar acceder sin autorización a secciones restringidas, bases de datos o sistemas informáticos.</li>
                            <li>Interferir en el funcionamiento del Sitio mediante virus, malware o cualquier otro método tecnológico dañino.</li>
                            <li>Reproducir, distribuir o modificar contenidos del Sitio sin autorización expresa.</li>
                        </ul>
                    </section>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">3. Información proporcionada en el Sitio</h2>
                        <p className="text-justify">La información publicada en el Sitio, incluyendo textos, imágenes, contenidos educativos, promocionales o informativos, se entrega únicamente con fines generales. Si bien se procura mantener la información actualizada y correcta, no se garantiza que esté completa, libre de errores o completamente vigente.</p>
                        <p className="text-justify">El uso de la información disponible en el Sitio es responsabilidad exclusiva del usuario.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">4. Formularios y datos proporcionados por el usuario</h2>
                        <p className="text-justify">Al enviar información a través del formulario de contacto, el usuario garantiza que los datos ingresados:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>Son verdaderos, actualizados y completos.</li>
                            <li>No infringen derechos de terceros.</li>
                            <li>No contienen contenido ofensivo, ilícito o inapropiado.</li>
                        </ul>
                        <p className="mt-2 text-justify">Toda información enviada será tratada de acuerdo con la Política de Privacidad del Sitio.</p>
                    </section>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">5. Propiedad Intelectual</h2>
                        <p className="text-justify">Todo el contenido del Sitio, incluyendo:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                           <li>Textos</li>
                           <li>Fotografías</li>
                           <li>Videos</li>
                           <li>Gráficos</li>
                           <li>Logotipos</li>
                           <li>Documentos descargables</li>
                           <li>Material académico o profesional</li>
                        </ul>
                        <p className="mt-2 text-justify">es propiedad exclusiva de Ruby Villarroel Gallardo, o bien se utiliza bajo licencias correspondientes.</p>
                        <p className="mt-2 text-justify">Queda estrictamente prohibido copiar, reproducir, distribuir, modificar o utilizar cualquier contenido sin autorización previa y por escrito.</p>
                        <p className="mt-2 text-justify">Se exceptúa el uso personal, no comercial, que no implique alteración del contenido.</p>
                    </section>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">6. Servicios ofrecidos</h2>
                        <p className="text-justify">El Sitio puede incluir información sobre servicios profesionales, talleres, cursos, sesiones o actividades relacionadas con coaching profesional, liderazgo, cultura organizacional u otros servicios complementarios. La publicación de estos servicios no constituye una oferta irrevocable. Ruby Villarroel se reserva el derecho a:</p>
                         <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>Modificar precios</li>
                            <li>Actualizar descripciones</li>
                            <li>Cambiar disponibilidad</li>
                            <li>Añadir o retirar servicios</li>
                        </ul>
                        <p className="mt-2 text-justify">Los acuerdos comerciales específicos se formalizarán fuera del Sitio mediante contratos, cotizaciones o comunicación directa.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">7. Enlaces a sitios de terceros</h2>
                        <p className="text-justify">El Sitio puede incluir enlaces externos hacia redes sociales, plataformas de pago u otros sitios. Estos enlaces son únicamente para conveniencia del usuario.</p>
                        <p className="text-justify">Ruby Villarroel Gallardo no es responsable por el contenido, políticas, seguridad ni prácticas de privacidad de estos sitios terceros. Se recomienda revisar sus propios términos y políticas.</p>
                    </section>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">8. Limitación de responsabilidad</h2>
                        <p className="text-justify">En ningún caso Ruby Villarroel Gallardo será responsable por:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                           <li>Daños derivados del uso o imposibilidad de uso del Sitio.</li>
                           <li>Pérdida de datos o información.</li>
                           <li>Fallas, errores técnicos o indisponibilidad temporal del Sitio.</li>
                           <li>Contenidos generados por terceros o enlaces externos.</li>
                        </ul>
                        <p className="mt-2 text-justify">Si bien se adoptan medidas razonables de seguridad, no se garantiza que el Sitio esté libre de interrupciones o componentes dañinos.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">9. Cookies y herramientas analíticas</h2>
                        <p className="text-justify">El Sitio utiliza cookies y tecnologías similares para mejorar la experiencia del usuario y analizar el uso del sitio. Al navegar en el Sitio, el usuario acepta el uso de estas tecnologías.</p>
                         <p className="mt-2 text-justify">Para mayor detalle, revisar la Política de Privacidad.</p>
                    </section>

                     <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">10. Modificaciones a los Términos</h2>
                        <p className="text-justify">Ruby Villarroel Gallardo se reserva el derecho de modificar los presentes Términos en cualquier momento. Las modificaciones serán publicadas en esta misma página y entrarán en vigencia desde su publicación.</p>
                        <p className="text-justify">Se recomienda revisar periódicamente los Términos para mantenerse informado.</p>
                    </section>
                    
                     <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">11. Legislación aplicable y jurisdicción</h2>
                        <p className="text-justify">Estos Términos se rigen por la legislación de la República de Chile, incluyendo la Ley N° 19.628 y demás normas pertinentes.</p>
                        <p className="text-justify">Cualquier controversia será sometida a los tribunales ordinarios de justicia de Santiago de Chile.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-headline text-foreground border-b pb-2">12. Contacto</h2>
                        <p className="text-justify">Para consultas relacionadas con estos Términos y Condiciones, puedes escribir a:</p>
                        <p className="font-semibold text-justify">📧 coaching@rubyvillarroel.cl</p>
                    </section>
                </motion.div>
            </motion.div>
        </div>
    );
}
