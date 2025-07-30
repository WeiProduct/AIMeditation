// Translation data for the website
const translations = {
    'zh-CN': {
        // Navigation
        'nav.features': '功能特色',
        'nav.screenshots': '应用截图',
        'nav.download': '下载',
        'nav.contact': '联系我们',
        
        // Hero Section
        'hero.title': 'AI冥想',
        'hero.subtitle': '您的智能冥想伙伴',
        'hero.description': '通过先进的AI技术，为您提供个性化的冥想体验<br>找到内心的平静，开启正念之旅',
        'hero.download': 'App Store 下载',
        'hero.learnMore': '了解更多',
        'hero.appSubtitle': '您的智能冥想伙伴',
        
        // Features Section
        'features.title': '功能特色',
        'features.ai.title': 'AI智能对话',
        'features.ai.description': '个性化冥想指导，实时解答疑问，基于您的历史记录提供建议',
        'features.music.title': '音乐冥想',
        'features.music.description': '26个精选冥想音频，包含自然环境音和专业冥想音乐',
        'features.guided.title': '引导冥想',
        'features.guided.description': '专业语音引导，7天深度睡眠计划，缓解焦虑系列课程',
        'features.timer.title': '计时冥想',
        'features.timer.description': '自定义冥想时长，多种背景音乐选择，专注呼吸练习',
        'features.tracking.title': '冥想记录',
        'features.tracking.description': '详细的冥想历史，心情追踪，进度统计分析',
        'features.bilingual.title': '双语支持',
        'features.bilingual.description': '支持中英文双语，无需注册即可使用，保护您的隐私',
        
        // Screenshots Section
        'screenshots.title': '应用截图',
        'screenshots.main.title': '主界面',
        'screenshots.main.description': '简洁优雅的主界面',
        'screenshots.ai.title': 'AI对话',
        'screenshots.ai.description': '智能AI冥想指导',
        'screenshots.music.title': '音乐冥想',
        'screenshots.music.description': '丰富的冥想音频',
        'screenshots.player.title': '播放界面',
        'screenshots.player.description': '精美的播放控制',
        
        // Download Section
        'download.title': '立即下载',
        'download.subtitle': '开启您的正念之旅',
        'download.appStore': 'App Store',
        'download.comingSoon': '即将上线',
        'download.scanToDownload': '扫码下载',
        
        // Footer
        'footer.appName': 'AI冥想',
        'footer.tagline': '您的智能冥想伙伴',
        'footer.quickLinks': '快速链接',
        'footer.privacy': '隐私政策',
        'footer.support': '技术支持',
        'footer.contact': '联系我们',
        'footer.email': '邮箱',
        'footer.website': '网站',
        'footer.copyright': '© 2025 Wei Product. 保留所有权利。',
        
        // Language Toggle
        'lang.switch': 'EN',
        'lang.current': '中文'
    },
    'en': {
        // Navigation
        'nav.features': 'Features',
        'nav.screenshots': 'Screenshots',
        'nav.download': 'Download',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'AI Meditation',
        'hero.subtitle': 'Your Smart Meditation Companion',
        'hero.description': 'Experience personalized meditation through advanced AI technology<br>Find inner peace and start your mindfulness journey',
        'hero.download': 'Download on App Store',
        'hero.learnMore': 'Learn More',
        'hero.appSubtitle': 'Your Smart Meditation Companion',
        
        // Features Section
        'features.title': 'Features',
        'features.ai.title': 'AI Smart Chat',
        'features.ai.description': 'Personalized meditation guidance, real-time Q&A, recommendations based on your history',
        'features.music.title': 'Music Meditation',
        'features.music.description': '26 curated meditation tracks including nature sounds and professional meditation music',
        'features.guided.title': 'Guided Meditation',
        'features.guided.description': 'Professional voice guidance, 7-day deep sleep program, anxiety relief series',
        'features.timer.title': 'Timer Meditation',
        'features.timer.description': 'Customizable duration, multiple background music options, breathing exercises',
        'features.tracking.title': 'Meditation Tracking',
        'features.tracking.description': 'Detailed meditation history, mood tracking, progress statistics',
        'features.bilingual.title': 'Bilingual Support',
        'features.bilingual.description': 'Chinese/English support, no registration required, privacy-focused',
        
        // Screenshots Section
        'screenshots.title': 'Screenshots',
        'screenshots.main.title': 'Main Screen',
        'screenshots.main.description': 'Clean and elegant interface',
        'screenshots.ai.title': 'AI Chat',
        'screenshots.ai.description': 'Smart AI meditation guidance',
        'screenshots.music.title': 'Music Library',
        'screenshots.music.description': 'Rich meditation audio collection',
        'screenshots.player.title': 'Player',
        'screenshots.player.description': 'Beautiful playback controls',
        
        // Download Section
        'download.title': 'Download Now',
        'download.subtitle': 'Start your mindfulness journey',
        'download.appStore': 'App Store',
        'download.comingSoon': 'Coming Soon',
        'download.scanToDownload': 'Scan to Download',
        
        // Footer
        'footer.appName': 'AI Meditation',
        'footer.tagline': 'Your Smart Meditation Companion',
        'footer.quickLinks': 'Quick Links',
        'footer.privacy': 'Privacy Policy',
        'footer.support': 'Support',
        'footer.contact': 'Contact Us',
        'footer.email': 'Email',
        'footer.website': 'Website',
        'footer.copyright': '© 2025 Wei Product. All rights reserved.',
        
        // Language Toggle
        'lang.switch': '中文',
        'lang.current': 'EN'
    }
};

// Language management
let currentLang = localStorage.getItem('language') || 'zh-CN';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePageContent();
}

function updatePageContent() {
    const t = translations[currentLang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.innerHTML = t[key];
        }
    });
    
    // Update page title
    document.title = currentLang === 'zh-CN' ? 'AI冥想 - 智能冥想助手' : 'AI Meditation - Your Smart Meditation Companion';
    
    // Update privacy and support links based on language
    const privacyLink = document.querySelector('a[href*="privacy"]');
    const supportLink = document.querySelector('a[href*="support"]');
    
    if (privacyLink) {
        privacyLink.href = currentLang === 'zh-CN' ? 'privacy.html' : 'privacy-en.html';
    }
    
    if (supportLink) {
        supportLink.href = currentLang === 'zh-CN' ? 'support.html' : 'support-en.html';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check browser language if no preference is set
    if (!localStorage.getItem('language')) {
        const browserLang = navigator.language || navigator.userLanguage;
        currentLang = browserLang.includes('zh') ? 'zh-CN' : 'en';
    }
    
    setLanguage(currentLang);
});