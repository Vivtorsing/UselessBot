import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedBackground } from "animated-backgrounds";
import "./styles.css";
import Footer from "./Footer";
import Nav from "./Nav";
import UselessBotImage from "./images/uselessbot.png";
import { CustomAnimation } from "./Animation";

function CustomButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg transition"
    >
      {children}
    </button>
  );
}

//animation
const sectionVariants = {
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
  right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }
};

//background color
const customColor = [
  { pos: 0, color: 'rgba(255, 155, 0, 0.5)' },
  { pos: .5, color: 'rgba(2555, 0, 100, 0.5)' },
  { pos: 1, color: 'rgba(255, 0, 255, 0.5)' }
];

function AnimatedSection({ children, direction = "left" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.5, rootMargin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants[direction]}
      className="bg-[#23272A] p-6 rounded-lg shadow-lg"
    >
      {children}
    </motion.div>
  );
}

//all the developers
const developers = [
  {
    name: "V",
    description: "Software Engineer - Implemented many features to the bot!",
    image: UselessBotImage,
    youtube: ""
  },
  {
    name: "Vivtorsing",
    description: "Lead Software Engineer - Built the core features and optimized the bot! Also built this webpage!",
    image: UselessBotImage,
    youtube: "https://youtube.com/vivtorsing"
  },
  {
    name: "Vivtoria",
    description: "Bug Tester - Wait why are you here?",
    image: UselessBotImage,
    youtube: "https://youtube.com/vivtorsing"
  }
];
  

export default function Staff() {
  useEffect(() => {
    document.title = "Useless Bot Staff";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/*background*/}
      <div className="absolute inset-0 -z-10">
        <CustomAnimation color={customColor}/>
        {/*<AnimatedBackground animationName="auroraBorealis" blendMode="normal" />*/}
      </div>
      <div className="relative z-10 min-h-screen">
        <Nav />

        {/*main section*/}
        <header className="flex flex-col items-center justify-center text-center mt-16">
          <img src={UselessBotImage} alt="Bot Logo" className="w-32 h-32 mb-4" />
          <h2 className="text-4xl font-bold">Useless Bot Staff</h2>
          <p className="text-gray-300 mt-2">The creators and teacher of Useless Bot!</p>
          <CustomButton onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=683743410548768806&scope=bot&permissions=3590208", "_blank")}>
            Invite Now
          </CustomButton>
        </header>

        <section className="mt-16 px-6">
            <AnimatedSection direction="left">
                <h3 className="text-3xl font-bold text-pink-400 text-center">Meet Our Developers 💖</h3>
                <p className="text-gray-300 text-center mt-2">The amazing people behind this bot!</p>

                {/*each developer*/}
                <div className="staff-grid">
                {developers.map((dev, index) => (
                    <div key={index} className="staff-card">
                    <img src={dev.image} alt={dev.name} className="staff-image" />
                    <h4 className="staff-name">{dev.name}</h4>
                    <p className="staff-description">{dev.description}</p>
                    {dev.youtube && (
                        <a href={dev.youtube} target="_blank" rel="noopener noreferrer" className="youtube-link">
                        🎥 Watch on YouTube
                        </a>
                    )}
                    </div>
                ))}
                </div>
            </AnimatedSection>
        </section>
      </div>
      <Footer />
    </div>
  );
}