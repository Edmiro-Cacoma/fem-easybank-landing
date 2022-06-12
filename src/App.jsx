import { useState } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import WhySection from './components/WhySection'
import ArticleSection from './components/ArticleSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Hero />
      <main>
      <WhySection />
      <ArticleSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
