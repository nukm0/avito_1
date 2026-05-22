'use client'

import ThemeAndLogger from '@/components/ThemeAndLogger'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-4">Добро пожаловать на Барахолку</h1>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Выберите тему и тестируйте кнопки в правом нижнем углу
        </p>
      </div>
      
      {/* Компонент с темами и логами */}
      <ThemeAndLogger />
    </div>
  )
}
