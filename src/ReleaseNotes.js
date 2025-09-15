import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedBackground } from "animated-backgrounds";
import "./styles.css";
import Footer from "./Footer";
import Nav from "./Nav";
import uselessBotImage from "./images/uselessbot.png";
import releaseNotes from "./releaseNotesData";
import { CustomAnimation } from "./Animation";

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
    >
      {children}
    </motion.div>
  );
}

//background color
const customColor = [
  { pos: 0, color: 'rgba(88, 101, 242, 0.5)' },
  { pos: 0.5, color: 'rgba(255, 76, 210, 0.5)' },
  { pos: 1, color: 'rgba(224, 227, 255, 0.5)' }
];

export default function ReleaseNotes() {
  useEffect(() => {
    document.title = "Release Notes";
  }, []);

  return (
    <div>
      <div>
        <CustomAnimation color={customColor} />
        {/*<AnimatedBackground animationName="auroraBorealis" blendMode="normal" />*/}
      </div>

      <div>
        <Nav />

        <header>
          <img src={uselessBotImage} alt="Bot Logo" />
          <h2>Release Notes</h2>
          <p>Stay up-to-date with the latest updates!</p>
        </header>

        <section>
          {releaseNotes.map((note, index) => (
            <AnimatedSection direction={index % 2 === 0 ? "left" : "right"} key={note.version}>
              <h3>{note.version}</h3>
              <p>Released: {note.date}</p>
              {Object.entries(note.sections).map(([sectionTitle, items]) => (
                <div key={sectionTitle} className="fixDiv">
                    <h4>{sectionTitle}</h4>
                    <ul>
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