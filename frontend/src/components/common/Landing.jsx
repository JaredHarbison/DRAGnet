
import React from 'react';
import './Landing.css';


function Landing(){
    return (
        <div>
            <div className="video-background">
                <div className="video-foreground">
                    <iframe 
                        src="https://www.youtube.com/embed/hIjqTSonxDM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"   
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div id="vidtop-content">
            </div>
        </div>
    )
};

  
export default Landing 


