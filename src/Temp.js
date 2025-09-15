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

export default function Premium() {
  useEffect(() => {
    document.title = "Bot Premium";
  }, []);

  return (
    <div>
      {/*background*/}
      <div>
        <AnimatedBackground animationName="auroraBorealis" blendMode="normal" />
      </div>
      <div>
        <Nav />

        {/*main section*/}
        <header>
          <img src={botImage} alt="Bot Logo" />
          <h2>Bot Premium</h2>
          <p>Some extra features that might be cool!</p>
          <CustomButton onClick={() => window.open("https://discord.com", "_blank")}>
            Invite Now
          </CustomButton>
        </header>

        <section>
            <AnimatedSection direction="right">
                <h3>Premium Features</h3>
                <p>Upgrade for even more powerful commands!</p>
                
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