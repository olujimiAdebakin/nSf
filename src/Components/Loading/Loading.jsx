import React, { useState, useEffect } from "react";
import "./Loading.css";
import ogun_games from "../../assets/GATEWAY-GAMES.png";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Loading = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Weelcome To The Digital Meal Ticket App";
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
  
    const typeWriterEffect = () => {
      let index = 0;
      timer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText((prev) => prev + fullText.charAt(index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 200); 
    };

    typeWriterEffect();

    
    const redirectTimer = setTimeout(() => {
      navigate("/login");
    }, 7900);

    return () => {
      clearInterval(timer); 
      clearTimeout(redirectTimer); 
    };
  }, [navigate]);



  return (
    <div className="loading">
      {/* <FaArrowLeft className="loading-arrow" onClick={}/> */}
      <div className="loading-main">
        <div className="loading-image">
          <img src={ogun_games} alt="Gateway Games Logo" />
        </div>
        <div className="loading-text">
          <h2>{displayedText}</h2>
        </div>
      </div>
    </div>
  );
};

export default Loading;
