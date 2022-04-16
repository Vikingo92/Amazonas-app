import React from 'react'
import Header from './Header'
import Comentarios from './Comentarios'
import Footer from './Footer'
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <div>
            <div>
                <Header />
                <NewsLetter/>
                <Comentarios />
                <Footer />
            </div>
        </div>
    )
}

export default Home