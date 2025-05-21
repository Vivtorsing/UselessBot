import { version } from "react";
import { data } from "react-router-dom";

const releaseNotes = [
  {
    version: "V3.0 Pre Release 3",
    date: "May 20, 2025",
    sections: {
      "Big Changes": [
        "/upgrade - now has over 30+ new upgrades for all your shops!!! (I wanted to make some of them funny but I only think that 1 of them are). Also upgrades will no longer show the upgrades that you already bought!"
      ],
      "Bug Fixes": [
        "Fixed leaderboard not being in order",
        "Fixed rounding issue in daily and work",
        "Fixed 4 commands with Crash potential!"
      ]
    }
  },
  {
    version: "V3.0 Pre Release 2",
    date: "May 13, 2025",
    sections: {
      "New": [
        "/ai search (message) - now Ucy AI has access to the internet with the help of OpenAI ChatGPT newest search model!",
        "/upgrade (upgrade) - we added upgrades!!!!! Now economy players can upgrade their shops to make them cheaper or more profitable!!!! There are currently 4 for now and will be add more slowly! Current plan is to have at least 2 upgrades for every shop!"
      ],
      "Smaller Things": [
        "Weather command has time fixed for hourly and also added weather emojis to make the UI look nicer!",
        "Leaderboard has an Xp leaderboard now. Xp is kinda useless right now even though we been having it for years now but I guess this will do for now...",
        "Help command has a link to Useless Bot's website where you can view all the commands there as well!"
      ],
      "Bug Fixes": [
        "Xp was not being given to players that use commands",
        "Ping logging issue (only affected me lol)",
        "Some link buttons were wrong...",
        "There are more which I did not write down..."
      ]

    }
  },
  {
    version: "V3.0 Pre Release 1",
    date: "April 29, 2025",
    sections: {
      "Massive Changes": [
        "Achievement System! You can now get achievement for using commands! Currently 4 but more to come!",
        "Voting for Useless Bot is automatically dectected",
        "New economy system to allow better shops and new things in the future (sadly everyone progress have been deleted but now it is easier to catch up!)",
        "/ai chat now uses OpenAI's ChatGPT model 40",
        "/ai speech a new command that is like /ai chat but uses OpenAI's voice models to speak instead of reading! (Good for bedtime stories)",
        "/slots now has animations!",
        "/weather has nicer interface for premium users (free users still has some work left to do...)"
      ],
      "Big Changes": [
        "/code now has encode and decode options to encrypt or decrypt your code!",
        "/crypto now uses a better source for more accurate crypto data",
        "/joke has a new joke source for new jokes!",
        "/meme now has a new source for fresh memes!",
        "/stock has a nicer interface"
      ],
      "Small Changes": [
        "/card now gives you a card emoji thing",
        "/help command is nicer and easier to update (update part is for me lol)",
        "/minesweeper is more efficient and loads faster"
      ],
      "Removed Commands": [
        "Removed food command",
        "Removed music command",
        "Removed ping command",
        "Removed reddit command",
        "Removed say command",
        "Removed search command (might add /ai search in the future)",
        "Removed time command"
      ],
      "Bug Fixes": [
        "Fixed ~22 bugs that can crash Useless Bot",
        "Fixed too many smaller bugs that could cause skips and break stuff...",
        "Filter for some commands were not working now fixed"
      ],
      "Notes": [
        "AI commands now use a credit system and free users have 10 credits but voting will give an additional 90 credits for free! Also Premium users have unlimited credits!",
        "Everyone's save has been reset. Apologies for this but we had no choice as our old system is not compatable with our newer more efficient version!"
      ]
    }
  },
  {
    version: "I am too lazy to write more lol",
    date: "NA",
    sections: {

    }
  }
];

export default releaseNotes;  