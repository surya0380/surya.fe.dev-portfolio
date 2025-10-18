import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true)
        } else {
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false)
        }
    }, [])


    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true)
        }
    }

    return (
        <div>
            <button onClick={toggleTheme}>
                {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300' />
                    : <Moon className='h-6 w-6 text-blue-900' />}
            </button>
        </div>
    )
}

export default ThemeToggle
