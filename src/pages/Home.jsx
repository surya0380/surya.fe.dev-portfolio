import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'

const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            
            {/* theme switch */}
            <ThemeToggle />

            {/* background effect */}
            <StarBackground />

            {/* navbar */}

            {/* main content */}

            {/* footer */}

        </div>
    )
}

export default Home
