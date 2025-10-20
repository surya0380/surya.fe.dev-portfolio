import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X, Moon, Sun } from 'lucide-react'

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

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
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className='container flex items-center pr-10 max-w-7xl mx-auto'>
                {/* Left section - Logo */}
                <div className='flex-shrink-0'>
                    <a className='text-lg font-bold text-primary flex items-center' href='#hero'>
                        <span className='relative z-10'>
                            <span className='text-glow text-foreground'> Surya </span>
                            Portfolio
                        </span>
                    </a>
                </div>

                {/* Right section - Navigation */}
                <div className='flex-1 flex justify-end items-center ml-4'>
                    <div className='hidden md:flex items-center space-x-4'>
                        {navItems.map((item, index) => (
                            <a key={index} href={item.href} className='text-sm text-foreground/80 hover:text-primary transition-colors duration-300 whitespace-nowrap'>
                                {item.name}
                            </a>
                        ))}
                        {/* Theme toggle integrated */}
                        <button 
                            onClick={toggleTheme} 
                            className="ml-1 p-2 rounded-full transition-colors duration-300 hover:bg-foreground/10 focus:outline-none"
                        >
                            {isDarkMode ? <Sun className='h-4 w-4 text-yellow-400' />
                                : <Moon className='h-4 w-4 text-slate-600 dark:text-slate-400' />}
                        </button>
                    </div>

                    {/* Mobile nav button */}
                    <button onClick={() => setIsMenuOpen((prev) => !prev)}
                        className='md:hidden p-2 text-foreground z-50'
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}>
                <div className='flex flex-col space-y-8 text-xl items-center'>
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href}
                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    {/* Mobile theme toggle */}
                    <button 
                        onClick={toggleTheme} 
                        className="mt-4 p-3 rounded-full transition-colors duration-300 hover:bg-foreground/10 focus:outline-none border border-foreground/20"
                    >
                        {isDarkMode ? <Sun className='h-6 w-6 text-yellow-400' />
                            : <Moon className='h-6 w-6 text-slate-600 dark:text-slate-400' />}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
