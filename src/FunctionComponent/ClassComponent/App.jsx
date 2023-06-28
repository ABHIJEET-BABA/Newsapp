import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

export default function App(){
    let [language,setlanguage]= useState("hi")
    let [search,setsearch]= useState("hi")
    function changeLanguage(language){
        this.setState({language:language})
    }
    function changeSearch(search){
        this.setState({search:search})
    }

    return (
        <BrowserRouter>
            <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
            <Routes>
                <Route path='/' element={<Home search={search} language={language} q="All" />} />
                <Route path='/politics' element={<Home search={search} language={language} q="Politics" />} />
                <Route path='/crime' element={<Home search={search} language={language} q="Crime" />} />
                <Route path='/education' element={<Home search={search} language={language} q="Education" />} />
                <Route path='/technology' element={<Home search={search} language={language} q="Technology" />} />
                <Route path='/science' element={<Home search={search} language={language} q="Science" />} />
                <Route path='/sports' element={<Home search={search} language={language} q="Sports" />} />
                <Route path='/cricket' element={<Home search={search} language={language} q="Cricket" />} />
                <Route path='/ipl' element={<Home search={search} language={language} q="IPL" />} />
                <Route path='/entertainment' element={<Home search={search} language={language} q="Entertainment" />} />
                <Route path='/jokes' element={<Home search={search} language={language} q="Jokes" />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
    
}