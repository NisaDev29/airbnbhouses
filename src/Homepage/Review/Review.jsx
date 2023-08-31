import React from "react";
import './review.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const Review = () => {
    return (
    <div id="Review">
        <div className="reviewWrapper">
           
            <div className="reviewCol--One">
                <div>
                    <h2>What People Say About Us</h2>
                    <p>Check out what our guests have to say about us and their experience.</p>
                </div>
                
                <div className="reviewCard firstQuote" >
                    <p className="reviewText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero voluptatem magnam, accusamus rerum minima sunt minus asperiores dicta placeat possimus.</p>
                    <p className="reviewAuthor">Mike SMith</p>
                </div>

                <div className="reviewCard firstQuote"  >
                <FormatQuoteIcon fontSize="large" className="reviewIcon"/>
                    <p className="reviewText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sunt, corrupti dignissimos amet excepturi rem.</p>
                    <p className="reviewAuthor">Mike SMith</p>
                </div>
            </div>
            <div className="reviewCol--One">
                <div className="reviewCard centerCard">
                <FormatQuoteIcon fontSize="large" className="reviewIcon"/>
                    <p className="reviewText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nemo.</p>
                    <p className="reviewAuthor">Mike SMith</p>
                </div>
                <div className="reviewCard centerCard">
                    <p className="reviewText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima excepturi, impedit, at voluptatum modi sint facilis ducimus earum unde est dolorem eveniet.</p>
                    <p className="reviewAuthor">Mike SMith</p>
                </div>
                <div className="reviewCard centerCard">
                    <FormatQuoteIcon fontSize="large" className="reviewIcon"/>
                    <p className="reviewText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima excepturi, impedit, at voluptatum modi sint facilis ducimus earum unde est dolorem eveniet.</p>
                    <p className="reviewAuthor">Mike SMith</p>
                </div>
            </div>
            <div className="reviewCol--One">
                <div className="reviewCard right">
                    <p className="reviewText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium voluptas repudiandae optio repellat commodi explicabo obcaecati cum, mollitia ipsam in non soluta deserunt, vero minima velit vel adipisci? Autem?</p>
                    <p className="reviewAuthor">Mike SMith</p>
                </div>

                <div className="reviewCard right">
                <FormatQuoteIcon fontSize="large" className="reviewIcon"/>
                    <p className="reviewText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tempora reiciendis! Possimus error debitis sed, et reiciendis eum autem temporibus!</p>
                    <p className="reviewAuthor">Mike SMith</p>
                </div>

                <div className="reviewCard right" >
                    <p className="reviewText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus quos modi vel error accusamus obcaecati libero quasi?</p>
                    <p className="reviewAuthor">Mike SMith</p>
                </div>
            </div> 
        </div>
    </div>
    );
};

export default Review