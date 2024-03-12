import './Title.css'
import { motion, MotionConfig } from 'framer-motion'
export function Title() {
    const initial = { opacity: 0, x: 50 };
    const whileInView = { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } };
    const viewport = { once: true, amount: 0.5 };

    return (
        <MotionConfig reducedMotion='user'>
            <article>
                <main className="Main__Article">
                    <motion.div className="Main__Article--div" initial={initial} whileInView={whileInView} viewport={viewport}
                    >
                        <h1>ELEMIKE</h1>
                        <h2>Marzo 2024</h2>
                        <p>Gracias a todas las personas que esperaron este momento...</p>
                    </motion.div>

                    <div className='Main__Article--About'>
                        <motion.p initial={initial} whileInView={whileInView} viewport={viewport}
                        >
                            Hablemos de la sensación que sientes cuando escuchas ritmos nuevos, ritmos que te sacan de tu zona de confort pero aún así te interesan.Este será un proyecto que diariamente te recomendará canciones adecuadas a tu estilo de vida. Además, como es de costumbre en la casa, semanalmente seleccionaremos un artista en particular. Narraremos su historia, sus influencias, premios, álbumes, controversias y muchísimas cosas más.
                        </motion.p>

                        <motion.p initial={initial} whileInView={whileInView} viewport={viewport}
                        >
                            Me presento, mi nombre es Michael Steven Cruz Torres, más conocido como elemike. Soy estudiante de programación y mi objetivo es combinar mis dos pasiones: la carrera ya mencionada y la música. Me encantaría compartir mis conocimientos y experiencias contigo.
                        </motion.p>
                    </div>
                </main>
            </article>
        </MotionConfig>

    )
}