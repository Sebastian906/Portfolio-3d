import React from 'react'
import Hero from './sections/Hero'
import LanguageSelector from './sections/LanguageSelector'

const App = () => {
    return (
        <>
            <div className="fixed top-4 right-4 z-50">
                <LanguageSelector/>
            </div>
            <Hero/>
        </>
    )
}

export default App