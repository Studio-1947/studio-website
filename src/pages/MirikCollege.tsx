import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function MirikCollege() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Layout>
            <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-orange-500 selection:text-white pb-32">
                {/* Navigation */}
                <div className="pt-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
                    <a
                        href="/#works"
                        className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase hover:text-[#ff3b00] transition-colors duration-300"
                    >
                        <span className="w-8 h-[1px] bg-[#e0e0e0] group-hover:bg-[#ff3b00] mr-4 transition-colors duration-300"></span>
                        Back to Works
                    </a>
                </div>

                {/* Hero Section - Asymmetric, Typographic Brutalism */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mt-20 mb-32 relative">
                    <div className="grid lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8 z-10">
                            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black leading-[0.85] tracking-tighter uppercase text-white mix-blend-difference mb-8">
                                Mirik
                                <br />
                                <span className="text-transparent border-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>College</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl border-l border-orange-500 pl-6 lowercase tracking-wide">
                                Capacity Building through trainings beyond the Classroom
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex justify-end">
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 text-right max-w-[200px] mb-4">
                                [ Studio 1947 x Department of Geography ]
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 bg-zinc-900 border border-zinc-800 p-2">
                        <div className="aspect-[21/9] relative overflow-hidden group">
                            <img
                                src="/ourworks/mirikCollege/hPsp1gqsEAKqySTgcQxHEDH6k.avif"
                                alt="Mirik College Students"
                                className="w-full h-full object-cover transform duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 max-w-xl">
                                <p className="text-sm font-medium leading-relaxed drop-shadow-md">
                                    What happens when you take geography out of the textbook and drop it right in the middle of the hills of Darjeeling? That’s exactly what we’re doing with Mirik College. Together, we designed a 60-hour intensive program that blended classroom learning, hands-on workshops, and fieldwork into one big cauldron. Just being a part of academic activity, practical training, and on-ground discovery, it is built around curiosity and experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Vision - Staggered Layout */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32">
                    <div className="grid md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-4 relative h-[600px]">
                            <img
                                src="/ourworks/mirikCollege/3KguPnfKGnnn5Zholn8BgucID4.avif"
                                alt="Fieldwork"
                                className="w-full h-full object-cover grayscale opacity-80"
                            />
                        </div>
                        <div className="md:col-span-7 md:col-start-6">
                            <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-8">The Vision</h2>
                            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                                <p>
                                    Instead of only hearing about livelihoods, communities, and human-nature relationships, students get to experience them firsthand. One day, they are in a classroom discussing how local economies work. Next, they walk through tea garden villages, talking to the residents, observing daily routines, and seeing how theory plays out in real life.
                                </p>
                                <p>
                                    The aim is simple. Learning should not stop at just notes and exams. It should move, ask questions, and sometimes feel uncomfortable in a good way. This approach helps students understand that geography is not abstract. It lives in people’s homes, work, and everyday decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Structure - Break the Grid */}
                <section className="bg-white text-black py-32 mb-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-100 -z-10 transform -skew-x-12 translate-x-32"></div>

                    <div className="px-6 lg:px-12 max-w-[1600px] mx-auto">
                        <div className="mb-20 max-w-3xl">
                            <h2 className="text-4xl lg:text-6xl font-black uppercase mb-6 tracking-tighter">Project Structure &<br />Learning Design</h2>
                            <p className="text-xl text-gray-600">The program was divided into three components, each building on the previous one and guiding students from theory to practice.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Component 1 */}
                            <div className="p-8 border-2 border-black flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-300 min-h-[400px]">
                                <div>
                                    <div className="text-6xl font-black text-gray-200 group-hover:text-zinc-800 mb-6 font-mono">01</div>
                                    <h3 className="text-2xl font-bold mb-4 uppercase">Classroom-Based Component</h3>
                                    <div className="text-sm font-bold tracking-widest uppercase mb-6 text-orange-600">20 Hours</div>
                                    <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-400">
                                        The project began inside the classroom, where students were introduced to key ideas around livelihoods, settlement patterns, regional development, and human-environment relationships. These sessions helped students place tea gardens within a wider geographic and social context, preparing them to approach the field with both curiosity and sensitivity.
                                    </p>
                                </div>
                            </div>

                            {/* Component 2 */}
                            <div className="p-8 border-2 border-black flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-300 min-h-[400px] md:translate-y-12 bg-white">
                                <div>
                                    <div className="text-6xl font-black text-gray-200 group-hover:text-zinc-800 mb-6 font-mono">02</div>
                                    <h3 className="text-2xl font-bold mb-4 uppercase">Interactive Workshop Component</h3>
                                    <div className="text-sm font-bold tracking-widest uppercase mb-6 text-orange-600">20 Hours</div>
                                    <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-400">
                                        Workshops jointly led by faculty members and the Studio 1947 team marked a shift from learning about research to learning how to do research. Students were trained in ethical field engagement, basic data collection, and creating an overall report. Discussions focused not only on what questions to ask, but also on how to ask them and why listening mattered as much as writing the answers.
                                    </p>
                                </div>
                            </div>

                            {/* Component 3 */}
                            <div className="p-8 border-2 border-black flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-300 min-h-[400px] md:translate-y-24 bg-white">
                                <div>
                                    <div className="text-6xl font-black text-gray-200 group-hover:text-zinc-800 mb-6 font-mono">03</div>
                                    <h3 className="text-2xl font-bold mb-4 uppercase">Fieldwork Component</h3>
                                    <div className="text-sm font-bold tracking-widest uppercase mb-6 text-orange-600">20 Hours</div>
                                    <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-400">
                                        Fieldwork formed the heart of the project. This was where concepts from the classroom met lived experience, and where students began to understand geography as something shaped by people’s daily lives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Field Sites and Methodology - Image Heavy Assymetry */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-8">Field Sites & Methodology</h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
                                The survey was conducted in Mandir Goan (Soureni) and Phuguri, two villages located within a short distance from Mirik. These sites were chosen to understand everyday life within tea plantation regions and to allow students to observe working and living conditions closely.
                            </p>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                Students visited households directly, conducting face-to-face surveys to understand income sources, employment patterns, access to basic services, and household challenges. Walking from home to home, listening to personal accounts, and observing surroundings helped ground the survey data in real experiences.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img src="/ourworks/mirikCollege/2R27gHEv1ONa6Sv8jn3Ez0CDnMU.avif" alt="Field Site 1" className="w-full aspect-square object-cover filter brightness-75 hover:brightness-100 transition-all duration-500" />
                                <div className="bg-zinc-900 aspect-video flex items-center justify-center p-6 border border-zinc-800">
                                    <p className="text-xs font-mono uppercase text-gray-500 text-center">Mandir Goan (Soureni)</p>
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="bg-orange-600 aspect-video flex items-center justify-center p-6 text-center text-xs font-mono uppercase text-black font-bold">
                                    <p>Phuguri Village</p>
                                </div>
                                <img src="/ourworks/mirikCollege/Yb84rzK26Gy0guKVBdeHGsNeuLk.avif" alt="Field Site 2" className="w-full aspect-square object-cover filter brightness-75 hover:brightness-100 transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Composition & Post Fieldwork */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Team Composition */}
                        <div className="lg:col-span-5 border-t border-zinc-800 pt-12">
                            <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Team Composition</h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <span className="text-orange-500 font-bold">01</span>
                                    <p className="text-gray-300 leading-relaxed text-sm">Five students from the Department of Geography, Mirik College</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-orange-500 font-bold">02</span>
                                    <p className="text-gray-300 leading-relaxed text-sm">One faculty member from Mirik College, providing academic guidance throughout</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-orange-500 font-bold">03</span>
                                    <p className="text-gray-300 leading-relaxed text-sm">Three members from Studio 1947, supporting research design, field coordination, and analysis</p>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-zinc-900 border-l-[3px] border-orange-500">
                                <p className="text-sm font-light text-gray-400 italic">This collaborative structure allowed students to learn within an academic framework while also being exposed to professional research practices and mentorship.</p>
                            </div>
                        </div>

                        {/* Space */}
                        <div className="hidden lg:block lg:col-span-1"></div>

                        {/* Post-Fieldwork */}
                        <div className="lg:col-span-6 border-t border-zinc-800 pt-12">
                            <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Post-Fieldwork</h2>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Fieldwork did not mark the end of the learning process. After surveys were completed, students made weekly visits to the Studio 1947 office, where they worked closely with the team to reflect on their findings.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed mb-8">
                                These 20 hours sessions focused on organizing survey responses, analysing the collected data, and discussing what the data revealed about livelihoods in the two villages. Students were guided through the process of turning raw information into structured and clear written reports. This phase closely resembled an internship experience, offering sustained mentorship and practical exposure beyond routine coursework.
                            </p>

                            <div className="w-full h-64 overflow-hidden relative group border border-zinc-800 p-1">
                                <img src="/ourworks/mirikCollege/FsYJCR9aKQUrBqCAK6Ub0uKk.avif" alt="Post Fieldwork Analysis" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outcomes & Studio 1947 Perspective */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto">
                    <div className="bg-orange-600 text-black p-8 md:p-16 relative overflow-hidden">
                        {/* Background elements for depth */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

                        <div className="grid md:grid-cols-2 gap-16 relative z-10">
                            <div>
                                <h2 className="text-2xl lg:text-4xl font-black uppercase mb-6 tracking-tight">Outcomes & Learning Impact</h2>
                                <div className="w-12 h-1 bg-black mb-6"></div>
                                <p className="text-black/80 font-medium leading-relaxed mb-6 text-sm md:text-base">
                                    The project resulted in a detailed, ground-level understanding of livelihood conditions in the selected villages, based entirely on primary data collected by the students. Beyond the research output, the process strengthened students’ confidence in conducting fieldwork, engaging with communities respectfully, and connecting theory with observation.
                                </p>
                                <p className="text-black/80 font-medium leading-relaxed text-sm md:text-base">
                                    At the conclusion of the project, all participating students received certificates issued by Studio 1947, recognizing their completion of the program and their active involvement in applied research.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl lg:text-4xl font-black uppercase mb-6 tracking-tight">How do we at Studio 1947 look at it?</h2>
                                <div className="w-12 h-1 bg-black mb-6"></div>
                                <p className="font-bold text-lg md:text-xl leading-snug mb-6">
                                    Capacity building is a core focus of Studio 1947, and this collaboration showed how academic learning becomes stronger when paired with real-world engagement.
                                </p>
                                <p className="text-black/80 font-medium leading-relaxed text-sm md:text-base">
                                    Through a mix of classroom sessions, interactive workshops, and fieldwork, students developed practical research skills alongside theoretical understanding. More than a single study, the project strengthened student capacity while laying the foundation for future collaborations with Mirik College, reinforcing the value of local, participatory research rooted in local lived experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
