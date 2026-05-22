'use client'

import { useState, useEffect } from 'react'

export default function ThemeAndLogger() {
  const [theme, setTheme] = useState('light')
  const [logs, setLogs] = useState<string[]>([])
  const [showLogs, setShowLogs] = useState(true)

  // Загрузка сохраненной темы
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.body.className = `theme-${savedTheme}`
    addLog(`Тема загружена: ${savedTheme}`)
  }, [])

  // Смена темы
  const changeTheme = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.body.className = `theme-${newTheme}`
    addLog(`🌓 Смена темы: ${newTheme === 'light' ? 'Белая' : newTheme === 'dark' ? 'Ночная' : 'Градиент'}`)
  }

  // Добавление записи в лог
  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs(prev => [`[${timestamp}] ${message}`, ...prev].slice(0, 50))
  }

  // Тестовые действия для кнопок
  const testActions = {
    login: () => addLog('🔐 Нажата кнопка "Вход в систему"'),
    buy: () => addLog('💰 Нажата кнопка "Купить товар"'),
    search: () => addLog('🔍 Нажат поиск товаров'),
    profile: () => addLog('👤 Открыт профиль пользователя'),
    admin: () => addLog('⚙️ Открыта админ-панель'),
    ban: () => addLog('🚫 Нажата кнопка "Забанить пользователя"'),
    report: () => addLog('⚠️ Отправлена жалоба'),
    clear: () => {
      setLogs([])
      addLog('🗑️ Логи очищены')
    },
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Кнопка показа/скрытия таблички */}
      <button
        onClick={() => setShowLogs(!showLogs)}
        className="mb-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
      >
        {showLogs ? '📋 Скрыть логи' : '📋 Показать логи'}
      </button>

      {/* Табличка с логами */}
      {showLogs && (
        <div className="w-96 bg-black bg-opacity-90 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
          <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
            <span className="text-white font-semibold">📝 Лог действий</span>
            <button
              onClick={testActions.clear}
              className="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Очистить
            </button>
          </div>
          
          <div className="h-64 overflow-y-auto p-3">
            {logs.length === 0 ? (
              <p className="text-gray-400 text-sm text-center">Нажимайте на кнопки ниже, логи появятся здесь</p>
            ) : (
              logs.map((log, idx) => (
                <div key={idx} className="text-green-400 text-xs font-mono mb-1 border-b border-gray-700 pb-1">
                  {log}
                </div>
              ))
            )}
          </div>
          
          {/* Панель тестовых кнопок */}
          <div className="bg-gray-900 p-3 grid grid-cols-2 gap-2">
            <button onClick={testActions.login} className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
              🔐 Вход
            </button>
            <button onClick={testActions.buy} className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
              💰 Купить
            </button>
            <button onClick={testActions.search} className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
              🔍 Поиск
            </button>
            <button onClick={testActions.profile} className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">
              👤 Профиль
            </button>
            <button onClick={testActions.admin} className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
              ⚙️ Админка
            </button>
            <button onClick={testActions.ban} className="px-3 py-1 bg-orange-600 text-white rounded text-sm hover:bg-orange-700">
              🚫 Бан
            </button>
            <button onClick={testActions.report} className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700">
              ⚠️ Жалоба
            </button>
          </div>
        </div>
      )}

      {/* Панель переключения тем */}
      <div className="mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 flex gap-2">
        <button
          onClick={() => changeTheme('light')}
          className={`px-3 py-1 rounded transition ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          ☀️ Белая
        </button>
        <button
          onClick={() => changeTheme('dark')}
          className={`px-3 py-1 rounded transition ${theme === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}
        >
          🌙 Ночная
        </button>
        <button
          onClick={() => changeTheme('gradient')}
          className={`px-3 py-1 rounded transition ${theme === 'gradient' ? 'bg-blue-500 text-white' : 'bg-purple-600 text-white'}`}
        >
          🎨 Градиент
        </button>
      </div>
    </div>
  )
}
