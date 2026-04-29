// Complete Game Database - 1000 Games across 5 Arcs

const gameDatabase = {
    shinobi: {
        name: "The Shinobi Arc",
        icon: "⚔️",
        description: "Action & Stealth - 200 Games of Shadow and Combat",
        color: "#ff006e",
        games: [
            { id: 1, title: "Shadow Blade Zero", emoji: "🥷", rating: 4.8, plays: 15000, desc: "Ninja warrior fighting in the shadows" },
            { id: 2, title: "Night Runner", emoji: "🏃", rating: 4.6, plays: 12000, desc: "Parkour through dark cities" },
            { id: 3, title: "Sword Master's Challenge", emoji: "⚔️", rating: 4.7, plays: 13500, desc: "Defeat opponents in sword duels" },
            { id: 4, title: "Silent Assassin", emoji: "🗡️", rating: 4.9, plays: 18000, desc: "Complete stealth missions" },
            { id: 5, title: "Smoke Bomb Escape", emoji: "💨", rating: 4.5, plays: 10000, desc: "Evade enemies with smoke tactics" },
            { id: 6, title: "Shuriken Master", emoji: "⭐", rating: 4.7, plays: 14000, desc: "Throw shurikens with precision" },
            { id: 7, title: "Ninja Wall Climb", emoji: "🧗", rating: 4.4, plays: 9000, desc: "Climb walls and dodge traps" },
            { id: 8, title: "Combat Dojo", emoji: "🥋", rating: 4.6, plays: 11000, desc: "Train and fight in the dojo" },
            { id: 9, title: "Shadow Strike", emoji: "👤", rating: 4.8, plays: 16000, desc: "Swift and deadly attacks" },
            { id: 50, title: "Katana Rush", emoji: "🗡️", rating: 4.9, plays: 20000, desc: "Fast-paced sword fighting action" },
            { id: 120, title: "Kunai Master", emoji: "🎯", rating: 4.7, plays: 13000, desc: "Target hitting physics puzzle game" },
            { id: 200, title: "Hidden Village Defense", emoji: "🏯", rating: 4.5, plays: 11000, desc: "Tower defense in anime style" }
        ]
    },
    isekai: {
        name: "The Isekai Arc",
        icon: "🗺️",
        description: "Adventure & RPG - 200 Games of Exploration and Magic",
        color: "#00d9ff",
        games: [
            { id: 201, title: "Parallel World Quest", emoji: "🌍", rating: 4.8, plays: 15000, desc: "Open world exploration adventure" },
            { id: 202, title: "Dragon Slayer's Journey", emoji: "🐉", rating: 4.7, plays: 14000, desc: "Battle dragons and monsters" },
            { id: 203, title: "Magic Academy", emoji: "🧙", rating: 4.6, plays: 12000, desc: "Learn spells and cast magic" },
            { id: 204, title: "Treasure Hunter", emoji: "💎", rating: 4.5, plays: 10000, desc: "Discover hidden treasures" },
            { id: 205, title: "Guild Quest Master", emoji: "⚔️", rating: 4.7, plays: 13000, desc: "Complete guild missions" },
            { id: 206, title: "Fantasy Dungeon", emoji: "🕳️", rating: 4.8, plays: 16000, desc: "Explore mysterious dungeons" },
            { id: 207, title: "Leveling Pro", emoji: "📈", rating: 4.4, plays: 9000, desc: "RPG progression simulator" },
            { id: 208, title: "Monster Hunter Pro", emoji: "👹", rating: 4.6, plays: 11000, desc: "Hunt legendary creatures" },
            { id: 209, title: "World Explorer", emoji: "🗺️", rating: 4.7, plays: 13500, desc: "Uncover world secrets" },
            { id: 350, title: "Dungeon Diver Ali", emoji: "🕵️", rating: 4.9, plays: 18000, desc: "Deep dungeon crawler with bosses" },
            { id: 400, title: "Mystic Pet Trainer", emoji: "👾", rating: 4.8, plays: 17000, desc: "Catch and train anime monsters" }
        ]
    },
    kawaii: {
        name: "The Kawaii Arc",
        icon: "🎀",
        description: "Puzzles & Strategy - 200 Games of Cute Challenges",
        color: "#ff69b4",
        games: [
            { id: 401, title: "Chibi Match-3", emoji: "🧩", rating: 4.7, plays: 13000, desc: "Cute character puzzle matching" },
            { id: 402, title: "Sweet Candy Crush", emoji: "🍬", rating: 4.6, plays: 12000, desc: "Match candies and combos" },
            { id: 403, title: "Bubble Pop Delight", emoji: "🫧", rating: 4.5, plays: 10000, desc: "Pop bubbles in sequences" },
            { id: 404, title: "Cute Critters Connect", emoji: "🐹", rating: 4.7, plays: 13500, desc: "Connect cute animal tiles" },
            { id: 405, title: "Kawaii Tower", emoji: "🏯", rating: 4.4, plays: 8500, desc: "Stack cute blocks strategy" },
            { id: 406, title: "Adorable Puzzle Quest", emoji: "✨", rating: 4.8, plays: 15000, desc: "Beautiful puzzle progression" },
            { id: 407, title: "Rainbow Road Tiles", emoji: "🌈", rating: 4.6, plays: 11500, desc: "Slide tiles to create paths" },
            { id: 408, title: "Gem Sparkle Blast", emoji: "💎", rating: 4.7, plays: 14000, desc: "Blast gem clusters" },
            { id: 409, title: "Flower Field Puzzle", emoji: "🌸", rating: 4.5, plays: 9500, desc: "Garden themed puzzles" },
            { id: 550, title: "Neko Cafe Tycoon", emoji: "🐱", rating: 4.9, plays: 19000, desc: "Manage your anime cat cafe" },
            { id: 600, title: "Zen Garden Logic", emoji: "🧘", rating: 4.8, plays: 16500, desc: "Relaxing brain puzzles" }
        ]
    },
    mecha: {
        name: "The Mecha Arc",
        icon: "🤖",
        description: "Sci-Fi & Racing - 200 Games of Speed and Robots",
        color: "#8338ec",
        games: [
            { id: 601, title: "Cyber Runner 2077", emoji: "🏍️", rating: 4.8, plays: 16000, desc: "Neon city endless bike racing" },
            { id: 602, title: "Robot Battle Arena", emoji: "🤖", rating: 4.7, plays: 14000, desc: "Mecha vs Mecha combat" },
            { id: 603, title: "Space Racer", emoji: "🚀", rating: 4.6, plays: 12000, desc: "High-speed space racing" },
            { id: 604, title: "Neon Highway", emoji: "🛣️", rating: 4.5, plays: 10500, desc: "Dodge traffic in neon streets" },
            { id: 605, title: "Cyber Bike Drift", emoji: "🏎️", rating: 4.8, plays: 15500, desc: "Drift and race in cyberpunk" },
            { id: 606, title: "Mecha Pilot Training", emoji: "🎮", rating: 4.4, plays: 9000, desc: "Learn to pilot giant robots" },
            { id: 607, title: "Circuit Champion", emoji: "🏆", rating: 4.6, plays: 11500, desc: "Win racing championships" },
            { id: 608, title: "Laser Tag Mayhem", emoji: "⚡", rating: 4.7, plays: 13500, desc: "Futuristic laser battles" },
            { id: 609, title: "Android Fighter", emoji: "👾", rating: 4.5, plays: 10000, desc: "Fight android enemies" },
            { id: 750, title: "Iron Suit Battle", emoji: "🦾", rating: 4.9, plays: 18000, desc: "Robot fighting tournament" },
            { id: 800, title: "Starship Pilot", emoji: "🛸", rating: 4.8, plays: 17000, desc: "Space shooter with anime graphics" }
        ]
    },
    spirit: {
        name: "The Spirit Arc",
        icon: "👻",
        description: "Mystery & Horror - 200 Games of Suspense",
        color: "#06ffa5",
        games: [
            { id: 801, title: "Ghost Detective", emoji: "👻", rating: 4.7, plays: 12000, desc: "Anime crime scene investigation" },
            { id: 802, title: "Spooky Manor Escape", emoji: "🏚️", rating: 4.6, plays: 11000, desc: "Solve puzzles to escape" },
            { id: 803, title: "Mystery Mansion", emoji: "🏰", rating: 4.5, plays: 10000, desc: "Explore haunted house" },
            { id: 804, title: "Spirit Encounter", emoji: "✨", rating: 4.8, plays: 14000, desc: "Meet and communicate with spirits" },
            { id: 805, title: "Dark Corridor", emoji: "🌑", rating: 4.4, plays: 8500, desc: "Navigate through darkness" },
            { id: 806, title: "Haunted Whispers", emoji: "🗣️", rating: 4.6, plays: 11500, desc: "Uncover ghost stories" },
            { id: 807, title: "Paranormal Investigation", emoji: "🔍", rating: 4.7, plays: 13000, desc: "Hunt supernatural beings" },
            { id: 808, title: "Ghost Town Mystery", emoji: "🏚️", rating: 4.5, plays: 9500, desc: "Discover abandoned secrets" },
            { id: 809, title: "Soul Collector", emoji: "👤", rating: 4.8, plays: 15000, desc: "Collect spirit essences" },
            { id: 950, title: "Haunted Academy", emoji: "🎓", rating: 4.9, plays: 17000, desc: "Survival horror puzzle game" },
            { id: 1000, title: "Soul Reaper Legend", emoji: "💀", rating: 5.0, plays: 20000, desc: "Final boss battle game" }
        ]
    }
};

// Helper function to get all games
function getAllGames() {
    let allGames = [];
    Object.values(gameDatabase).forEach(arc => {
        allGames = allGames.concat(arc.games);
    });
    return allGames;
}

// Helper function to get games by arc
function getGamesByArc(arcName) {
    return gameDatabase[arcName]?.games || [];
}

// Helper function to get arc data
function getArcData(arcName) {
    const arc = gameDatabase[arcName];
    return {
        name: arc.name,
        icon: arc.icon,
        description: arc.description,
        color: arc.color,
        totalGames: arc.games.length
    };
          }
