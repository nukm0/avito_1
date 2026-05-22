// Функция смены темы
function setTheme(theme) {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('theme', theme);
    addLog(`🌓 Смена темы: ${theme === 'light' ? 'Белая' : theme === 'dark' ? 'Ночная' : 'Градиент'}`);
}

// Загрузка сохраненной темы при старте
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.className = `theme-${savedTheme}`;

// Функция добавления лога
function addLog(message) {
    const logList = document.getElementById('logList');
    const timestamp = new Date().toLocaleTimeString();
    const logItem = document.createElement('div');
    logItem.className = 'log-item';
    logItem.innerHTML = `[${timestamp}] ${message}`;
    logList.insertBefore(logItem, logList.firstChild);
    
    // Ограничиваем количество логов (50)
    while(logList.children.length > 50) {
        logList.removeChild(logList.lastChild);
    }
}

// Функция очистки логов
function clearLogs() {
    const logList = document.getElementById('logList');
    logList.innerHTML = '<div class="log-item">Логи очищены</div>';
    addLog('🗑️ Логи очищены');
}
