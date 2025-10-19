import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

            {/* theme switch */}
            <ThemeToggle />

            {/* background effect */}
            <StarBackground />

            {/* navbar */}
            <NavBar />

            {/* main content */}
            <main>
                <HeroSection />
                <AboutSection />
            </main>

            {/* footer */}

        </div>
    )
}

export default Home
