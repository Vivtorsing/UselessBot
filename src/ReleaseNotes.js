import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedBackground } from "animated-backgrounds";
import "./styles.css";
import Footer from "./Footer";
import Nav from "./Nav";
import uselessBotImage from "./images/uselessbot.png";
import releaseNotes from "./releaseNotesData";

function AnimatedSection({ children, direction = "left" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.5, rootMargin: "0px 0px -100px 0px" });

  const sectionVariants = {
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants[direction]}
      className="bg-[#23272A] p-6 rounded-lg shadow-lg mb-6"
    >
      {children}
    </motion.div>
  );
}

export default function ReleaseNotes() {
  useEffect(() => {
    document.title = "Release Notes";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatedBackground animationName="auroraBorealis" blendMode="normal" />
      </div>

      <div className="relative z-10 min-h-screen">
        <Nav />

        <header className="flex flex-col items-center justify-center text-center mt-16">
          <img src={uselessBotImage} alt="Bot Logo" className="w-32 h-32 mb-4" />
          <h2 className="text-4xl font-bold text-pink-400">Release Notes</h2>
          <p className="text-gray-300 mt-2">Stay up-to-date with the latest updates!</p>
        </header>

        <section className="mt-12 px-6 max-w-3xl mx-auto">
          {releaseNotes.map((note, index) => (
            <AnimatedSection direction={index % 2 === 0 ? "left" : "right"} key={note.version}>
              <h3 className="text-2xl text-pink-300 text-center font-bold">{note.version}</h3>
              <p className="text-sm text-gray-400 text-center mb-4">Released: {note.date}</p>
              {Object.entries(note.sections).map(([sectionTitle, items]) => (
                <div key={sectionTitle} className="fixDiv">
                    <h4 className="text-xl text-pink-400 font-semibold mb-2">{sectionTitle}</h4>
                    <ul className="list-disc list-inside text-gray-200 space-y-2">
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                    </ul>
                </div>
                ))}

            </AnimatedSection>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
}