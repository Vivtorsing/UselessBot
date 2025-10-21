import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Helmet } from 'react-helmet-async';
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
    <div>
      {/*seo*/}
      <Helmet>
        <title>Useless Bot</title>
        <meta name="description" content="Useless Bot is a Discord multipurpose bot that tells you the weather, forecast, ChatGPT 4o, AI chat, Flux image generations, jokes, memes, minesweeper, anime, minecraft, 8ball" />
      </Helmet>
      {/*background*/}
      <div>
        <CustomAnimation/>
        {/*<AnimatedBackground animationName="auroraBorealis" blendMode="normal" />*/}
      </div>
      <div>
        <Nav />

        {/*main section*/}
        <header>
          {/*<img src={UselessBotImage} alt="Bot Logo" className="w-32 h-32 mb-4" />*/}
          <motion.img 
            src={UselessBotImage} 
            alt="Useless Bot Logo" 
            className="hero-logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <h2>Useless Bot</h2>
          <p>It might sound useless but it's actually kinda useful!</p>
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

        <section>
          <AnimatedSection direction="left">
            <h3>Why Choose Our Bot?</h3>
            <p>Useless Bot is a discord bot that can help you in some sort of way!</p>
            <p>Easily get the current weather and forecast of an area!</p>
            <p>Ask Questions to Ucy AI and get answers! Or use Flux 1 image gen to create amazing images!</p>
            <p>Get some jokes!</p>
            <p>We have memes!</p>
            <p>Play some games!</p>
            <p>Or use economy and grind!</p>
          </AnimatedSection>
        </section>

        <section>
          <AnimatedSection direction="right">
            <h3>Useless Bot Server Count</h3>
            
            <p className="server-text">The amount of servers our Discord bot is in is over:{" "}
            <span className="server-count">
              <SlotCounter
                startValue={"00,000"}
                value="10,235"
                duration={2}
                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
              />
            </span></p>
          </AnimatedSection>
        </section>

        <section>
          <AnimatedSection direction="left">
            <h3>Join Our Community</h3>
            <p>Become part of our Discord community and get support instantly!</p>

            <CustomButton onClick={() => window.open("https://discord.com/invite/zsUuNxf", "_blank")}>
              Join Discord Server
            </CustomButton>
            <CustomButton onClick={() => window.open("https://trello.com/b/wmocgz3u/useless-bot", "_blank")}>
              Join Teaching Room
            </CustomButton>
          </AnimatedSection>
        </section>

        <section>
          <AnimatedSection direction="right">
            <h3>Premium Features</h3>
            <p>Upgrade for even more powerful commands!</p>
          </AnimatedSection>
        </section>
      </div>
      <Footer />
    </div>
  );
}
