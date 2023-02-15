import React from "react";
import "./postedImage.css"
import img from "../stories/img/img-test.jpg";
import heart from "../../../../common/images/heart.png";
import comment from  "../../../../common/images/comment.png";
import arrow from "../../../../common/images/arrow.png";


export default function PostedImage(props){
    const {images} = props;
    
    console.log(images);

    return (
        <div className="postedImage-container">
            <div className="post-holder">
                {
                    images.map((img) => {
                       return <>
                            <header className="post-header">
                        <div className="user-image">
                            <img 
                                src={img.imgUrl} 
                                alt="Loading..." 
                                className="user-image"
                            />
                        </div>
                        <div className="user-name">
                            <p>user_nfdffdfame</p>
                        </div>
                      
                    </header>
                    <div className="post-image">
                        <img src={img.imgUrl} alt="Loading..." />
                    </div>
                        </>
                    
                    })
                }
              
                <footer className="post-footer">
                    <button>
                        <img src={heart} alt="Loading..." />
                    </button>
                    <button>
                        <img src={comment} alt="Loading..." />
                    </button>
                    <button>
                        <img src={arrow} alt="Loading..." />
                    </button>
                </footer>
            </div>
            
           
        </div>
    );
}