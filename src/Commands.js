import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedBackground } from "animated-backgrounds";
import Footer from "./Footer";
import Nav from "./Nav";
import "./styles.css";
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

//background color
const customColor = [
  { pos: 0, color: 'rgba(0, 155, 255, 0.5)' },
  { pos: 0.5, color: 'rgba(155, 0, 255, 0.5)' },
  { pos: 1, color: 'rgba(255, 55, 85, 0.5)' }
];

//slide in animation
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

//all the commands
const commandCategories = {
  Special: [
    {name: "DM Useless Bot", description: "Where you can DM Useless Bot and talk to Ucy AI!" }
  ],
  Main: [
    { name: "/botstatus", description: "Where you can check the status of Useless Bot" },
    { name: "/donate", description: "The place where you can donate and get premium features" },
    { name: "/feedback", description: "To report bugs, or ask for a new command" },
    { name: "/help (section)", description: "Where you get a list of Useless Bot's Commands" },
    { name: "/invite", description: "Where you can invite Useless Bot to your server" },
    { name: "/server", description: "Where you can join Useless Bot's server" },
    { name: "/version", description: "To check Useless Bot's version" },
    { name: "/vote", description: "Where you can vote for Useless Bot and get some perks" }
  ],
  Fun: [
    { name: "/ai chat (message)", description: "Where you can talk to Ucy AI" },
    { name: "/ai image (text)", description: "Where you can generate an AI image" },
    { name: "/ai speech (message)", description: "Where Ucy AI talks instead of writing" },
    { name: "/ai search (message)", description: "Where Ucy AI search the internet before answering your question" },
    { name: "/anime (type)", description: "Where you can get some anime" },
    { name: "/animegif (type)", description: "Where you can get some anime gifs" },
    { name: "/blackjack", description: "Where you can play blackjack"},
    { name: "/joke (type)", description: "Where you can get some jokes" },
    { name: "/meme (type)", description: "Where you can get some memes" },
    { name: "/rps (choice)", description: "Where you can play rock paper scissors against Useless Bot" },
    { name: "/slots", description: "Where you can play slots" }
  ],
  Useful: [
    { name: "/crypto (name)", description: "Where you can get crypto price and other information" },
    { name: "/minecraft player (player)", description: "Where you can get some information on a Minecraft player" },
    { name: "/minecraft server (server ip)", description: "Where you can get some information about a Minecraft server" },
    { name: "/poll (question)", description: "Where you can create a poll" },
    { name: "/stock (name)", description: "Where you can get stock information" },
    { name: "/weather (location)", description: "Get your weather forecast" },
    { name: "/word", description: "Learn a new word" }
  ],
  Silly: [
    { name: "/birthday", description: "Where you can tell Useless Bot Happy Birthday" },
    { name: "/card", description: "Where you can get a random card" },
    { name: "/code (encode/decode) (message)", description: "Where you can encode or decode your message" },
    { name: "/8ball (question)", description: "Where you can get a question and get a response" },
    { name: "/fruit", description: "Where Useless Bot gives you a random fruit" },
    { name: "icon (user)", description: "Where you can get a user's icon" },
    { name: "/love (user)", description: "Where Useless Bot predicts how much you love a certain user" },
    { name: "/magicconch (question)", description: "Where the Magic Conch Shell answers your question" },
    { name: "/minesweeper", description: "Where you can get a minesweeper game" }
  ],
  Economy: [
    { name: "/balance (user)", description: "Where you can check your or others balance" },
    { name: "/daily", description: "Where you can get your daily" },
    { name: "/leaderboard", description: "Check the top economy players" },
    { name: "/register", description: "Use this command to use economy commands and some other commands" },
    { name: "/shop (business)", description: "Where you can buy stuff" },
    { name: "/stats (user)", description: "Where you can check your stats" },
    { name: "/upgrade (upgrade)", description: "Where you can buy upgrades for your shops" },
    { name: "/work", description: "Where you can work for money" }
  ]
}

export default function Commands() {
  useEffect(() => {
    document.title = "Useless Bot Commands";
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
          <h2>Useless Bot Commands</h2>
          <p>The list of all the commands!</p>
          <CustomButton onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=683743410548768806&scope=bot&permissions=3590208", "_blank")}>
            Invite Now
          </CustomButton>
        </header>

        {/*command section*/}
        <section>
          {Object.entries(commandCategories).map(([category, commands], categoryIndex) => (
            <div className="commandFlex" key={category}>
              {/*title*/}
              <h2>{category} Commands</h2>

              {/*command*/}
              {commands.map((command, index) => (
                <section className="commandSection">
                  <AnimatedSection key={command.name} direction={index % 2 === 0 ? "left" : "right"}>
                    <h3>{command.name}</h3>
                    <p>{command.description}</p>
                  </AnimatedSection>
                </section>
              ))}
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}
