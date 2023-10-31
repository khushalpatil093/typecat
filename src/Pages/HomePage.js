import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import TypingBox from "../Component/TypingBox";

const HomePage = () => {
    return (
        <div className="canvas">
            <Header/>
            <TypingBox/>
            <Footer/>
        </div>
    )
}

export default HomePage;