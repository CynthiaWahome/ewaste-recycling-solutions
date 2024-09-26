import React, { useEffect } from 'react'
import Header from '../components/header/Header.component'
import Footer from '../components/footer/Footer.component'

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}

export default Blog
