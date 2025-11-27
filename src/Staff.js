import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet } from 'react-helmet-async';
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
    >
      {children}
    </motion.div>
  );
}

//all the developers
const developers = [
  {
    name: "Vivtorsing",
    role: "Lead Software Engineer",
    description: "Built the core features and optimized the bot! Also built this webpage!",
    image: UselessBotImage,
    youtube: "https://youtube.com/vivtorsing"
  },
  {
    name: "V",
    role: "Software Engineer",
    description: "Implemented many features to the bot!",
    image: UselessBotImage,
    youtube: ""
  },
  {
    name: "Vivtoria",
    role: "Bug Tester",
    description: "Wait why are you here?",
    image: UselessBotImage,
    youtube: "https://youtube.com/vivtorsing"
  },
  {
    name: "Sugar",
    role: "Artist",
    description: "Created the Card template!",
    image: UselessBotImage,
    youtube: ""
  }
];
  

export default function Staff() {
  useEffect(() => {
    document.title = "Useless Bot Staff";
  }, []);

  return (
    <div>
      {/*seo*/}
      <Helmet>
        <title>Useless Bot Staff</title>
        <meta name="description" content="The creators and teacher of Useless Bot!" />
      </Helmet>
      {/*background*/}
      <div>
        <CustomAnimation color={customColor}/>
        {/*<AnimatedBackground animationName="auroraBorealis" blendMode="normal" />*/}
      </div>
      <div>
        <Nav />

        {/*main section*/}
        <header>
          <img src={UselessBotImage} alt="Bot Logo" />
          <h2>Useless Bot Staff</h2>
          <p>The creators and teacher of Useless Bot!</p>
          <CustomButton onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=683743410548768806&scope=bot&permissions=3590208", "_blank")}>
            Invite Now
          </CustomButton>
        </header>

        <section>
            <AnimatedSection direction="left">
                <h3>Meet Our Developers 💖</h3>
                <p>The amazing people behind this bot!</p>

                {/*each developer*/}
                <div className="staff-grid">
                {developers.map((dev, index) => (
                    <div key={index} className="staff-card">
                    <img src={dev.image} alt={dev.name} className="staff-image" />
                    <h4 className="staff-name">{dev.name}</h4>
                    <h5 className="staff-role">{dev.role}</h5>
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