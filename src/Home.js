import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedBackground } from "animated-backgrounds";
import SlotCounter from 'react-slot-counter';
import "./styles.css";
import Footer from "./Footer";
import Nav from "./Nav";
import UselessBotImage from "./images/uselessbot.png";

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

export default function Home() {
  useEffect(() => {
    document.title = "Useless Bot";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/*background*/}
      <div className="absolute inset-0 -z-10">
        <AnimatedBackground animationName="auroraBorealis" blendMode="normal" />
      </div>
      <div className="relative z-10 min-h-screen">
        <Nav />

        {/*main section*/}
        <header className="flex flex-col items-center justify-center text-center mt-16">
          <img src={UselessBotImage} alt="Bot Logo" className="w-32 h-32 mb-4" />
          <h2 className="text-4xl font-bold">Useless Bot</h2>
          <p className="text-gray-300 mt-2">It might sound useless but it's actually kinda useful!</p>
          <CustomButton onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=683743410548768806&scope=bot&permissions=3590208", "_blank")}>
            Invite Now
          </CustomButton>
        </header>

        <section className="mt-16 px-6">
          <AnimatedSection direction="left">
            <h3 className="text-2xl font-bold text-pink-400">Why Choose Our Bot?</h3>
            <p className="text-gray-300 mt-2">Useless Bot is a discord bot that can help you in some sort of way!</p>
            <p className="text-gray-300 mt-2">Easily get the current weather and forecast of an area!</p>
            <p className="text-gray-300 mt-2">Ask Questions to Ucy AI and get answers! Or use Flux 1 image gen to create amazing images!</p>
            <p className="text-gray-300 mt-2">Get some jokes!</p>
            <p className="text-gray-300 mt-2">We have memes!</p>
            <p className="text-gray-300 mt-2">Play some games!</p>
            <p className="text-gray-300 mt-2">Or use economy and grind!</p>
          </AnimatedSection>
        </section>

        <section className="mt-16 px-6">
          <AnimatedSection direction="right">
            <h3 className="text-2xl font-bold text-pink-400">Useless Bot Server Count</h3>
            
            <p className="server-text">The amount of servers our Discord bot is in is over:{" "}
            <span className="server-count">
              <SlotCounter
                startValue={"0,000"}
                value="9,435"
                duration={2}
                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
              />
            </span></p>
          </AnimatedSection>
        </section>

        <section className="mt-16 px-6">
          <AnimatedSection direction="left">
            <h3 className="text-2xl font-bold text-pink-400">Join Our Community</h3>
            <p className="text-gray-300 mt-2">Become part of our Discord community and get support instantly!</p>

            <div className="buttonFlex gap-4 mt-4">
              <CustomButton onClick={() => window.open("https://discord.com/invite/zsUuNxf", "_blank")}>
                Join Discord Server
              </CustomButton>
              <CustomButton onClick={() => window.open("https://trello.com/b/wmocgz3u/useless-bot", "_blank")}>
                Join Teaching Room
              </CustomButton>
            </div>
          </AnimatedSection>
        </section>

        <section className="mt-16 px-6">
          <AnimatedSection direction="right">
            <h3 className="text-2xl font-bold text-pink-400">Premium Features</h3>
            <p className="text-gray-300 mt-2">Upgrade for even more powerful commands!</p>
          </AnimatedSection>
        </section>
      </div>
      <Footer />
    </div>
  );
}
