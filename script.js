// Функция смены темы
function setTheme(theme) {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('theme', theme);
    let themeName = theme === 'light' ? 'Белая' : (theme === 'dark' ? 'Ночная' : 'Градиент');
    addLog(`🌓 Смена темы на "${themeName}"`);
}

// Загрузка сохраненной темы
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.className = `theme-${savedTheme}`;

// Функция добавления записи в лог (работает на обеих страницах)
function addLog(message) {
    const logList = document.getElementById('logList');
    if (!logList) return; // если лога нет на странице (например, на buy.html лог не показываем, но функция нужна)
    const timestamp = new Date().toLocaleTimeString('ru-RU');
    const logItem = document.createElement('div');
    logItem.className = 'log-item';
    logItem.innerHTML = `[${timestamp}] ${message}`;
    logList.insertBefore(logItem, logList.firstChild);
    while(logList.children.length > 50) logList.removeChild(logList.lastChild);
}

// Очистка логов
function clearLogs() {
    const logList = document.getElementById('logList');
    if (!logList) return;
    logList.innerHTML = '<div class="log-item">🗑️ Логи очищены</div>';
    addLog('Логи очищены');
}

// Обработчик нижнего меню (для кнопок, которые еще не ведут на страницы)
function menuClick(section) {
    let message = '';
    switch(section) {
        case 'profile': message = '👤 Переход в "Мой профиль" (страница в разработке)'; break;
        case 'info': message = 'ℹ️ Переход в "Инфо" (страница в разработке)'; break;
        case 'admin': message = '⚙️ Переход в "Админ панель" (страница в разработке)'; break;
        default: message = `Нажато меню: ${section}`;
    }
    addLog(message);
    alert(message);
}
