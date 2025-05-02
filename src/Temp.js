//template
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedBackground } from "animated-backgrounds";
import "./styles.css";
import Footer from "./Footer";
import Nav from "./Nav";
import botImage from "./images/bot.png";

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

export default function Premium() {
  useEffect(() => {
    document.title = "Bot Premium";
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
          <img src={botImage} alt="Bot Logo" className="w-32 h-32 mb-4" />
          <h2 className="text-4xl font-bold">Bot Premium</h2>
          <p className="text-gray-300 mt-2">Some extra features that might be cool!</p>
          <CustomButton onClick={() => window.open("https://discord.com", "_blank")}>
            Invite Now
          </CustomButton>
        </header>

        <section className="mt-16 px-6">
            <AnimatedSection direction="right">
                <h3 className="text-2xl font-bold text-pink-400">Premium Features</h3>
                <p className="text-gray-300 mt-2">Upgrade for even more powerful commands!</p>
                
                {/*oremium commands table*/}
                <div className="commandFlex">
                <table className="premium-table">
                    <thead>
                    <tr>
                        <th>Command</th>
                        <th>Free Version</th>
                        <th>Premium Version</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Current Weather</td>
                        <td>Basic</td>
                        <td>Advanced</td>
                    </tr>
                    <tr>
                        <td>Hourly Weather</td>
                        <td>None</td>
                        <td>24 Hours</td>
                    </tr>
                    <tr>
                        <td>Forecast</td>
                        <td>None</td>
                        <td>7 Days</td>
                    </tr>
                    </tbody>
                </table>
                </div>

                {/*patreon button*/}
                <div className="commandFlex">
                <button 
                    className="patreon-button"
                    onClick={() => window.open("https://www.patreon.com", "_blank")}
                >
                    Support Us on Patreon 💖
                </button>
                </div>
            </AnimatedSection>
        </section>
      </div>
      <Footer />
    </div>
  );
}