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
  { pos: 0, color: 'rgba(247, 178, 126, 0.5)' },
  { pos: .5, color: 'rgba(230, 106, 123, 0.5)' },
  { pos: 1, color: 'rgba(109, 185, 147, 0.5)' }
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

export default function Premium() {
  useEffect(() => {
    document.title = "Useless Bot Premium";
  }, []);

  return (
    <div>
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
          <h2>Useless Bot Premium</h2>
          <p>Some extra features that might be cool!</p>
          <CustomButton onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=683743410548768806&scope=bot&permissions=3590208", "_blank")}>
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
                        <th>Free Users</th>
                        <th>Voted Users</th>
                        <th>Premium Users</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Command Cooldown</td>
                        <td>None</td>
                        <td>25% Less</td>
                        <td>50% Less</td>
                    </tr>  
                    <tr>
                        <td>AI Chat</td>
                        <td>10 credits</td>
                        <td>100 credits</td>
                        <td>Unlimited credits</td>
                    </tr>
                    <tr>
                        <td>AI Image</td>
                        <td>10 credits</td>
                        <td>100 credits</td>
                        <td>Unlimited credits</td>
                    </tr>
                    <tr>
                        <td>AI Speech</td>
                        <td>10 credits</td>
                        <td>100 credits</td>
                        <td>Unlimited credits</td>
                    </tr>
                    <tr>
                        <td>Economy Daily and Work</td>
                        <td>No Bonus</td>
                        <td>Vote Streak Multiplier X 1.1</td>
                        <td>Multiplier X 5</td>
                    </tr>
                    <tr>
                        <td>Current Weather</td>
                        <td>Basic</td>
                        <td>Basic</td>
                        <td>Advanced</td>
                    </tr>
                    <tr>
                        <td>Hourly Weather</td>
                        <td>Basic</td>
                        <td>Basic</td>
                        <td>Advanced (24 Hours coming soon)</td>
                    </tr>
                    <tr>
                        <td>Forecast</td>
                        <td>Basic</td>
                        <td>Basic</td>
                        <td>Advanced (7 Days coming soon)</td>
                    </tr>
                    </tbody>
                </table>
                </div>

                {/*patreon button*/}
                <div className="commandFlex">
                <button 
                    className="patreon-button"
                    onClick={() => window.open("https://top.gg/bot/683743410548768806/vote", "_blank")}
                >
                    Vote For Useless Bot (It's Free!)
                </button>
                <button 
                    className="patreon-button"
                    onClick={() => window.open("https://www.patreon.com/UselessBot", "_blank")}
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