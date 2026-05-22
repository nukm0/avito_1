// Функция смены темы
function setTheme(theme) {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('theme', theme);
    let themeName = theme === 'light' ? 'Белая' : (theme === 'dark' ? 'Ночная' : 'Градиент');
    addLog(`🌓 Смена темы на "${themeName}"`);
}

// Загрузка сохраненной темы при старте
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.className = `theme-${savedTheme}`;

// Функция добавления лога
function addLog(message) {
    const logList = document.getElementById('logList');
    const timestamp = new Date().toLocaleTimeString('ru-RU');
    const logItem = document.createElement('div');
    logItem.className = 'log-item';
    logItem.innerHTML = `[${timestamp}] ${message}`;
    logList.insertBefore(logItem, logList.firstChild);
    
    // Ограничиваем количество логов (50)
    while(logList.children.length > 50) {
        logList.removeChild(logList.lastChild);
    }
}

// Очистка логов
function clearLogs() {
    const logList = document.getElementById('logList');
    logList.innerHTML = '<div class="log-item">🗑️ Логи очищены</div>';
    addLog('Логи очищены');
}

// Обработчик нажатия на нижнее меню
function menuClick(section) {
    let message = '';
    switch(section) {
        case 'buy':
            message = '🛒 Переход в раздел "Покупка/продажа"';
            break;
        case 'profile':
            message = '👤 Переход в раздел "Мой профиль"';
            break;
        case 'info':
            message = 'ℹ️ Переход в раздел "Инфо"';
            break;
        case 'admin':
            message = '⚙️ Переход в раздел "Админ панель"';
            break;
        default:
            message = `Нажато меню: ${section}`;
    }
    addLog(message);
    
    // Здесь позже добавим реальную навигацию (пока просто лог)
    // Например: window.location.href = '/page.html';
}
