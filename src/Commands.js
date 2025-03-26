import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedBackground } from "animated-backgrounds";
import Footer from "./Footer";
import Nav from "./Nav";
import "./styles.css";
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
      className="bg-[#23272A] p-6 rounded-lg shadow-lg"
    >
      {children}
    </motion.div>
  );
}

//all the commands
const commandCategories = {
  Help: [
    {name: "/help (section)", description: "Where you get a list of Useless Bot's Commands"},
    {name: "/server", description: "Where you can join Useless Bot's server"},
    {name: "/invite", description: "Where you can invite Useless Bot to your server"},
    {name: "/vote", description: "Where you can vote for Useless Bot and get some perks"}
  ],
  Weather: [
    {name: "/weather (location)", description: "Where you can get the weather for that location"}
  ],
  AI: [
    {name: "/ai chat (message)", description: "Where you can talk to Ucy AI"},
    {name: "/ai image (text)", description: "Where you can generate an AI image"}
  ],
  Anime: [
    {name: "/anime (type)", description: "Where you can get some anime"},
    {name: "/animegif (type)", description: "Where you can get some anime gifs"},
  ],
  Joke: [
    {name: "/joke (type)", description: "Where you can get some jokes"}
  ],
  Meme: [
    {name: "/meme (type)", description: "Where you can get some memes"}
  ],
  Economy: [
    {name: "/register", description: "Where you can register and start using economy commands"},
    {name: "/daily", description: "Where you can get your daily"},
    {name: "/shop (business)", description: "Where you can buy stuff"},
    {name: "/balance (user)", description: "Where you can check your or others balance"},
    {name: "/stats (user)", description: "Where you can check your stats"},
    {name: "/leaderboard (type)", description: "Where you can check the global or local leaderboard"},
    {name: "/work", description: "Where you can work for money"},
  ],
  Other: [
    {name: "/minesweeper", description: "Where you can get a minesweeper game"},
    {name: "/rps (choice)", description: "Where you can play rock paper scissors against Useless Bot"},
    {name: "/slots", description: "Where you can play slots"},
    {name: "/8ball (question)", description: "Where you can get a question and get a response"},
    {name: "/magicconch (question)", description: "Where the Magic Conch Shell answers your question"},
    {name: "/love (user)", description: "Where Useless Bot predicts how much you love a certain user"},
    {name: "/poll (question)", description: "Where you can create a poll"},
    {name: "/say (statement)", description: "Where you can make Useless Bot say something"},
    {name: "/code (message)", description: "Where you can encode your message"},
    {name: "/minecraft player (player)", description: "Where you can get some information on a Minecraft player"},
    {name: "/minecraft server (server ip)", description: "Where you can get some information about a Minecraft server"},
    {name: "/word", description: "Where you can learn a new word"},
    {name: "/fruit", description: "Where Useless Bot gives you a random fruit"},
    {name: "/card", description: "Where you can get a random card"},
    {name: "/ping", description: "Where you can check Useless Bot Ping"},
    {name: "icon (user)", description: "Where you can get a user's icon"},
    {name: "/status", description: "Where you can check Useless Bot's status"},
    {name: "/time (timezone)", description: "Where you can check the time in a certain timezone"},
    {name: "/version", description: "Where you can check Useless Bot's version"},
    {name: "/report", description: "Where you can report bugs or request new features"},
    {name: "/reddit (reddit)", description: "No longer worker due to Reddit new terms"},
    {name: "/food", description: "Might no longer be working..."},
  ]
};

export default function Commands() {
  useEffect(() => {
    document.title = "Useless Bot Commands";
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
          <h2 className="text-4xl font-bold">Useless Bot Commands</h2>
          <p className="text-gray-300 mt-2">The list of all the commands!</p>
          <CustomButton onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=683743410548768806&scope=bot&permissions=3590208", "_blank")}>
            Invite Now
          </CustomButton>
        </header>

        {/*command section*/}
        <section className="mt-16 px-6">
          {Object.entries(commandCategories).map(([category, commands], categoryIndex) => (
            <div className="commandFlex" key={category}>
              {/*title*/}
              <h2 className="text-3xl font-bold text-pink-400 mt-8">{category} Commands</h2>

              {/*command*/}
              {commands.map((command, index) => (
                <section className="commandSection">
                    <AnimatedSection key={command.name} direction={index % 2 === 0 ? "left" : "right"}>
                    <h3 className="text-2xl font-bold text-pink-400">{command.name}</h3>
                    <p className="text-gray-300 mt-2">{command.description}</p>
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
