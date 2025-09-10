import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { AnimatedBackground } from "animated-backgrounds";
import SlotCounter from 'react-slot-counter';
import "./styles.css";
import Footer from "./Footer";
import Nav from "./Nav";
import UselessBotImage from "./images/uselessbot.png";
import aiImage from './images/aiImage.png';
import aiImageForest from './images/aiImageForest.png';
import aiImageAnime from './images/aiImageAnime.png';
import aiImageReal from './images/aiImageReal.png';
import aiImageFood from './images/aiImageFood.png';
import weatherFree from './images/weatherFree.png';
import weatherPremium from './images/weatherPremium.png';
import dmai from './images/dmai.png';
import aiChat from './images/aiChat.gif';
import games from './images/games.gif';
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

//make a feature section to show what featuers we have
function FeatureSection({ title, description, image, direction = "left" }) {
  return (
    <AnimatedSection direction={direction}>
      <div className="feature-section">
        {direction === "left" && (
          <img src={image} alt={title} className="feature-image" />
        )}
        <div className="feature-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {direction === "right" && (
          <img src={image} alt={title} className="feature-image" />
        )}
      </div>
    </AnimatedSection>
  );
}

//feature with multiple images
function FeatureImageCarouselSection({ title, description, images, direction = "left", interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <AnimatedSection direction={direction}>
      <div className="feature-section">
        {direction === "left" && (
          <div className="feature-image-wrapper">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`${title} example`}
                className="feature-image-absolute"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>
        )}

        <div className="feature-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        {direction === "right" && (
          <div className="feature-image-wrapper">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`${title} example`}
                className="feature-image-absolute"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

//weather feature with scroll animation
function FeatureWeatherSection({ direction = "left" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const freeOpacity = useTransform(scrollYProgress, [.4, 0.5], [1, 0]);
  const premiumOpacity = useTransform(scrollYProgress, [0.5, .6], [0, 1]);

  return (
      <AnimatedSection direction={direction}>
        <div ref={ref} style={{background: "none", boxShadow: "none"}}>
        <div className="feature-section">
          {direction === "left" && (
            <div className="feature-image-wrapper">
              <motion.img
                src={weatherFree}
                alt="Free Weather"
                className="feature-image-absolute"
                style={{ opacity: freeOpacity }}
              />
              <motion.img
                src={weatherPremium}
                alt="Premium Weather"
                className="feature-image-absolute"
                style={{ opacity: premiumOpacity }}
              />
            </div>
          )}

          <div className="feature-text-wrapper">
            <motion.div style={{ opacity: freeOpacity }}>
              <h3>🌦️ Weather</h3>
              <p>Quickly check today’s weather with simple commands.</p>
            </motion.div>
            <motion.div style={{ opacity: premiumOpacity }}>
              <h3>✨ Premium Weather</h3>
              <p>Enjoy a beautiful dashboard view with hourly, daily, and alerts.</p>
            </motion.div>
          </div>

          {direction === "right" && (
            <div className="feature-image-wrapper">
              <motion.img
                src={weatherFree}
                alt="Free Weather"
                className="feature-image-absolute"
                style={{ opacity: freeOpacity }}
              />
              <motion.img
                src={weatherPremium}
                alt="Premium Weather"
                className="feature-image-absolute"
                style={{ opacity: premiumOpacity }}
              />
            </div>
          )}
        </div>
        </div>
      </AnimatedSection>
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
        <CustomAnimation/>
        {/*<AnimatedBackground animationName="auroraBorealis" blendMode="normal" />*/}
      </div>
      <div className="relative z-10 min-h-screen">
        <Nav />

        {/*main section*/}
        <header className="flex flex-col items-center justify-center text-center mt-16">
          {/*<img src={UselessBotImage} alt="Bot Logo" className="w-32 h-32 mb-4" />*/}
          <motion.img 
            src={UselessBotImage} 
            alt="Useless Bot Logo" 
            className="hero-logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <h2 className="text-4xl font-bold">Useless Bot</h2>
          <p className="text-gray-300 mt-2">It might sound useless but it's actually kinda useful!</p>
          <CustomButton onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=683743410548768806&scope=bot&permissions=3590208", "_blank")}>
            Invite Now
          </CustomButton>
        </header>

        {/*features*/}
        <section>
          <FeatureSection
            title="🤖 AI Chat"
            description="Talk to Ucy AI, a ChatGPT AI assistant, directly inside Discord."
            image={aiChat}
            direction="left"
          />
          <p></p>
          <FeatureImageCarouselSection
            title="🎨 AI Image"
            description="Generate stunning photos using Flux1 AI, even better than MidJourney."
            images={[aiImage, aiImageForest, aiImageAnime, aiImageReal, aiImageFood]}
            direction="right"
          />
          <p></p>
          <FeatureSection
            title="🧠 DMAI"
            description="A smarter AI chat that remembers past conversations for a more human experience and followup."
            image={dmai}
            direction="left"
          />
          <p></p>
          <FeatureWeatherSection direction="right" />
          <p></p>
          <FeatureSection
            title="🎮 Economy & Games"
            description="Play, grind, earn, and have fun with friends while competing for coins."
            image={games}
            direction="left"
          />
          <p></p>
          <FeatureSection
            title="And More!"
            description="Tons of other commands that you might enjoy!"
            image={UselessBotImage}
            direction="right"
          />
        </section>

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
