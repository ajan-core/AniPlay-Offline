// Game Database with Image Support
const gamesData = [
    // Shinobi Arc
    { id: 1, title: "Shadow Blade Zero", arc: "shinobi", emoji: "🥷", rating: 4.8, plays: 15000, desc: "Ninja warrior fighting in the shadows", image: null },
    { id: 50, title: "Katana Rush", arc: "shinobi", emoji: "⚔️", rating: 4.9, plays: 20000, desc: "Fast-paced sword fighting action", image: null },
    { id: 120, title: "Kunai Master", arc: "shinobi", emoji: "🎯", rating: 4.7, plays: 13000, desc: "Target hitting physics puzzle game", image: null },
    
    // Isekai Arc
    { id: 201, title: "Parallel World Quest", arc: "isekai", emoji: "🌍", rating: 4.8, plays: 15000, desc: "Open world exploration adventure", image: null },
    { id: 350, title: "Dungeon Diver Ali", arc: "isekai", emoji: "🕵️", rating: 4.9, plays: 18000, desc: "Deep dungeon crawler with bosses", image: null },
    
    // Kawaii Arc
    { id: 401, title: "Chibi Match-3", arc: "kawaii", emoji: "🧩", rating: 4.7, plays: 13000, desc: "Cute character puzzle matching", image: null },
    { id: 550, title: "Neko Cafe Tycoon", arc: "kawaii", emoji: "🐱", rating: 4.9, plays: 19000, desc: "Manage your anime cat cafe", image: null },
    
    // Mecha Arc
    { id: 601, title: "Cyber Runner 2077", arc: "mecha", emoji: "🏍️", rating: 4.8, plays: 16000, desc: "Neon city endless bike racing", image: null },
    { id: 750, title: "Iron Suit Battle", arc: "mecha", emoji: "🦾", rating: 4.9, plays: 18000, desc: "Robot fighting tournament", image: null },
    
    // Spirit Arc
    { id: 801, title: "Ghost Detective", arc: "spirit", emoji: "👻", rating: 4.7, plays: 12000, desc: "Anime crime scene investigation", image: null },
    { id: 1000, title: "Soul Reaper Legend", arc: "spirit", emoji: "💀", rating: 5.0, plays: 20000, desc: "Final boss battle game", image: null },
];

let customGames = [];
let favorites = [];
let recentlyPlayed = [];

// App State
let currentSection = 'dashboard';
let currentFilter = 'all';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    loadData();
    setupEventListeners();
    renderDashboard();
    updateTheme();
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const section = e.currentTarget.dataset.section;
            switchSection(section);
        });
    });

    // Theme Toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchGames(e.target.value);
    });

    // Upload Form
    setupUploadForm();

    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderGamesSection();
        });
    });

    // Modal
    document.getElementById('gameModal').addEventListener('click', (e) => {
        if (e.target.id === 'gameModal') {
            closeModal();
        }
    });

    document.querySelector('.modal-close').addEventListener('click', closeModal);

    // Settings
    document.getElementById('darkModeToggle').addEventListener('change', toggleTheme);
    document.getElementById('clearDataBtn').addEventListener('click', clearAllData);

    // Menu Toggle
    document.getElementById('menuToggle').addEventListener('click', toggleSidebar);
}

function setupUploadForm() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('gameImage');

    // Drag & Drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            handleImageUpload();
        }
    });

    // Click to Upload
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', handleImageUpload);

    // Form Preview
    document.getElementById('gameTitle').addEventListener('input', updatePreview);
    document.getElementById('gameCategory').addEventListener('change', updatePreview);
    document.getElementById('gameRating').addEventListener('input', updatePreview);
    document.getElementById('gameDesc').addEventListener('input', updatePreview);

    // Upload Button
    document.getElementById('uploadBtn').addEventListener('click', uploadGame);
    document.getElementById('resetBtn').addEventListener('click', resetUploadForm);
}

function handleImageUpload() {
    const fileInput = document.getElementById('gameImage');
    const file = fileInput.files[0];

    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
        const reader = new FileReader();
        reader.onload = (e) => {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            imagePreview.style.display = 'block';
            updatePreview();
        };
        reader.readAsDataURL(file);
    } else {
        showToast('❌ Image must be less than 5MB');
    }
}

function updatePreview() {
    const title = document.getElementById('gameTitle').value || 'Game Title';
    const category = document.getElementById('gameCategory').value || 'Category';
    const rating = document.getElementById('gameRating').value || '4.5';
    const desc = document.getElementById('gameDesc').value || 'Description will appear here...';
    const imagePreview = document.getElementById('imagePreview').querySelector('img');

    document.querySelector('.preview-card').innerHTML = `
        <div class="preview-image">${imagePreview ? `<img src="${imagePreview.src}">` : '📸'}</div>
        <h4>${title}</h4>
        <p class="preview-category">${getArcName(category)}</p>
        <p class="preview-desc">${desc.substring(0, 60)}...</p>
        <div class="preview-rating">⭐ ${rating}</div>
    `;
}

function uploadGame() {
    const title = document.getElementById('gameTitle').value;
    const category = document.getElementById('gameCategory').value;
    const rating = document.getElementById('gameRating').value;
    const desc = document.getElementById('gameDesc').value;
    const imageInput = document.getElementById('gameImage');
    const imagePreview = imageInput.files[0] ? document.getElementById('imagePreview').querySelector('img')?.src : null;

    if (!title || !category || !rating || !desc) {
        showToast('❌ Please fill in all required fields');
        return;
    }

    const newGame = {
        id: Math.max(...gamesData.map(g => g.id), ...customGames.map(g => g.id)) + 1,
        title,
        arc: category,
        emoji: getArcEmoji(category),
        rating: parseFloat(rating),
        plays: 0,
        desc,
        image: imagePreview,
        custom: true
    };

    customGames.push(newGame);
    saveData();
    renderUploadedGames();
    resetUploadForm();
    showToast('✅ Game uploaded successfully!');
}

function resetUploadForm() {
    document.getElementById('gameTitle').value = '';
    document.getElementById('gameCategory').value = '';
    document.getElementById('gameRating').value = '';
    document.getElementById('gameDesc').value = '';
    document.getElementById('gameImage').value = '';
    document.getElementById('imagePreview').innerHTML = '';
    document.getElementById('imagePreview').style.display = 'none';
    updatePreview();
}

function getArcEmoji(arc) {
    const emojis = { shinobi: '⚔️', isekai: '🗺️', kawaii: '🎀', mecha: '🤖', spirit: '👻' };
    return emojis[arc] || '🎮';
}

function getArcName(arc) {
    const names = { shinobi: 'Shinobi Arc', isekai: 'Isekai Arc', kawaii: 'Kawaii Arc', mecha: 'Mecha Arc', spirit: 'Spirit Arc' };
    return names[arc] || 'Unknown';
}

function switchSection(section) {
    currentSection = section;
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.section === section);
    });

    if (section === 'dashboard') renderDashboard();
    else if (section === 'games') renderGamesSection();
    else if (section === 'upload') renderUploadedGames();
    else if (section === 'favorites') renderFavorites();
    else if (section === 'settings') updateStorageInfo();

    document.getElementById('menuToggle').click();
}

function renderDashboard() {
    updateStats();
    renderFeaturedGames();
    renderRecentGames();
}

function updateStats() {
    document.getElementById('statGamesPlayed').textContent = recentlyPlayed.length;
    document.getElementById('statPlaytime').textContent = (recentlyPlayed.length * 0.5).toFixed(1) + 'h';
    document.getElementById('statAchievements').textContent = Math.floor(recentlyPlayed.length / 3);
}

function renderFeaturedGames() {
    const featured = document.getElementById('featuredGames');
    const topGames = [...gamesData, ...customGames].sort((a, b) => b.plays - a.plays).slice(0, 4);
    
    featured.innerHTML = topGames.map(game => `
        <div class="featured-card" onclick="openGameModal(${game.id}, ${game.custom})">
            <div class="featured-emoji">${game.emoji}</div>
            <div class="featured-title">${game.title}</div>
        </div>
    `).join('');
}

function renderRecentGames() {
    const recentDiv = document.getElementById('recentGames');
    const allGames = [...gamesData, ...customGames];
    const recent = allGames.slice(0, 6);
    
    recentDiv.innerHTML = recent.map(game => `
        <div class="game-list-item" onclick="openGameModal(${game.id}, ${game.custom})">
            <div class="game-list-emoji">${game.emoji}</div>
            <div class="game-list-info">
                <h4>${game.title}</h4>
                <p>${getArcName(game.arc)} • ⭐ ${game.rating}</p>
            </div>
        </div>
    `).join('');
}

function renderGamesSection() {
    const gamesGrid = document.getElementById('gamesGrid');
    let games = [...gamesData, ...customGames];

    if (currentFilter !== 'all') {
        games = games.filter(g => g.arc === currentFilter);
    }

    gamesGrid.innerHTML = games.map(game => `
        <div class="game-card" onclick="openGameModal(${game.id}, ${game.custom})">
            <div class="game-image">${game.image ? `<img src="${game.image}">` : game.emoji}</div>
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-meta">
                    <span class="game-rating">⭐ ${game.rating}</span>
                    <span class="game-category">#${game.id}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderUploadedGames() {
    const uploadedList = document.getElementById('uploadedList');
    
    if (customGames.length === 0) {
        uploadedList.innerHTML = '<p class="empty-state">No games uploaded yet</p>';
        return;
    }

    uploadedList.innerHTML = customGames.map(game => `
        <div class="game-card" onclick="openGameModal(${game.id}, true)">
            <div class="game-image">${game.image ? `<img src="${game.image}">` : game.emoji}</div>
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-meta">
                    <span class="game-rating">⭐ ${game.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    const allGames = [...gamesData, ...customGames];
    const favoriteGames = allGames.filter(g => favorites.includes(g.id));
    
    if (favoriteGames.length === 0) {
        favoritesGrid.innerHTML = '<p class="empty-state">No favorites yet. Add some games to your favorites!</p>';
        return;
    }

    favoritesGrid.innerHTML = favoriteGames.map(game => `
        <div class="game-card" onclick="openGameModal(${game.id}, ${game.custom})">
            <div class="game-image">${game.image ? `<img src="${game.image}">` : game.emoji}</div>
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-meta">
                    <span class="game-rating">⭐ ${game.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function searchGames(query) {
    const gamesGrid = document.getElementById('gamesGrid');
    let games = [...gamesData, ...customGames];

    if (query.length > 0) {
        games = games.filter(g => 
            g.title.toLowerCase().includes(query.toLowerCase()) ||
            g.desc.toLowerCase().includes(query.toLowerCase())
        );
    }

    gamesGrid.innerHTML = games.map(game => `
        <div class="game-card" onclick="openGameModal(${game.id}, ${game.custom})">
            <div class="game-image">${game.image ? `<img src="${game.image}">` : game.emoji}</div>
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-meta">
                    <span class="game-rating">⭐ ${game.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function openGameModal(gameId, isCustom) {
    const allGames = [...gamesData, ...customGames];
    const game = allGames.find(g => g.id === gameId);

    if (!game) return;

    document.getElementById('modalImage').innerHTML = game.image ? `<img src="${game.image}">` : game.emoji;
    document.getElementById('modalTitle').textContent = game.title;
    document.getElementById('modalCategory').textContent = getArcName(game.arc);
    document.getElementById('modalRating').textContent = `⭐ ${game.rating}`;
    document.getElementById('modalDesc').textContent = game.desc;

    document.getElementById('playBtn').onclick = () => playGame(game);
    document.getElementById('favoriteBtn').onclick = () => toggleFavorite(game.id);
    document.getElementById('favoriteBtn').textContent = favorites.includes(game.id) ? '❤️ Unfavorite' : '🤍 Favorite';
    document.getElementById('shareBtn').onclick = () => shareGame(game);

    if (!recentlyPlayed.includes(game.id)) {
        recentlyPlayed.push(game.id);
        if (recentlyPlayed.length > 5) recentlyPlayed.shift();
        saveData();
    }

    document.getElementById('gameModal').classList.add('active');
}

function closeModal() {
    document.getElementById('gameModal').classList.remove('active');
}

function playGame(game) {
    showToast(`🎮 Playing: ${game.title}`);
    closeModal();
}

function toggleFavorite(gameId) {
    const index = favorites.indexOf(gameId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('🤍 Removed from favorites');
    } else {
        favorites.push(gameId);
        showToast('❤️ Added to favorites');
    }
    saveData();
}

function shareGame(game) {
    if (navigator.share) {
        navigator.share({
            title: game.title,
            text: `Check out ${game.title} on AniPlay!`,
            url: window.location.href
        });
    } else {
        showToast('📤 Shared (copied to clipboard)');
        navigator.clipboard.writeText(`${game.title} - ${game.desc}`);
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function updateTheme() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
}

function updateStorageInfo() {
    const totalData = JSON.stringify({ gamesData, customGames, favorites, recentlyPlayed }).length;
    const sizeInMB = (totalData / 1024 / 1024).toFixed(2);
    document.getElementById('storageUsed').textContent = `${sizeInMB} MB`;
}

function clearAllData() {
    if (confirm('⚠️ Are you sure you want to clear all data? This cannot be undone.')) {
        customGames = [];
        favorites = [];
        recentlyPlayed = [];
        localStorage.clear();
        showToast('🗑️ All data cleared');
        init();
    }
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Data Persistence
function saveData() {
    localStorage.setItem('customGames', JSON.stringify(customGames));
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
}

function loadData() {
    customGames = JSON.parse(localStorage.getItem('customGames')) || [];
    favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
     }
