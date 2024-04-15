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
                    <p className="reviewText">Sasa was very responsive and extremely helpful. The house is great. Great for a relaxing 4 days enjoying the river and nearby beach. No complaints.</p>
                    <p className="reviewAuthor">Craid Adams</p>
                </div>

                <div className="reviewCard firstQuote"  >
                <FormatQuoteIcon fontSize="large" className="reviewIcon"/>
                    <p className="reviewText">We had a fantastic stay at the Gecko house! Very charming, clean, and well located. Beautiful views. Amazing deck. The kayak, SUP, and nearby restaurants made for an extra nice stay. Great communication and flexibility. Thanks so much!</p>
                    <p className="reviewAuthor">Lina Spielberg</p>
                </div>
            </div>
            <div className="reviewCol--One reviewResponsive">
                <div className="reviewCard centerCard">
                <FormatQuoteIcon fontSize="large" className="reviewIcon"/>
                    <p className="reviewText">An absolutely amazing place, had the mist wonderful time and can't wait to come back!</p>
                    <p className="reviewAuthor">Katya Minardi</p>
                </div>
                <div className="reviewCard centerCard">
                    <p className="reviewText">We stayed there for 6 nights and loved everything about it. The terrace is a dream, sunrise is the best and you can even paddle into the sun using the kayak there 😍
The kitchen is more than equipped, the whole house is one of the rare authentic AirBnBs which are not only for renting out. Lovely!! Sasa cared a lot to make our stay perfect - thank you!</p>
                    <p className="reviewAuthor">Sina Schneider</p>
                </div>
                <div className="reviewCard centerCard">
                    <FormatQuoteIcon fontSize="large" className="reviewIcon"/>
                    <p className="reviewText">We had an exceptional week with family. Everything was perfect: the location, the house! the evenings by the river overlooking the stars!!!</p>
                    <p className="reviewAuthor">Sophie Lagrange</p>
                </div>
            </div>
            <div className="reviewCol--One ">
                <div className="reviewCard right">
                    <p className="reviewText">We came to Ada Bojana because this place looked so nice. It surpassed every expectation and was so comfortable and beautiful. Hosts went way out of their way, even making birthday cake for my son. Don’t hesitate. Stay here!</p>
                    <p className="reviewAuthor">Susan Smith</p>
                </div>

                <div className="reviewCard right">
                <FormatQuoteIcon fontSize="large" className="reviewIcon"/>
                    <p className="reviewText">Beautiful cottage in a good location a few minutes walk to the restaurant, 15 minutes to the beach. The amenities are maxed out from spices, board games, kayaks, bikes, BBQ…, the patio is large, and the hosts are accommodating. 5/5 for Gecko.</p>
                    <p className="reviewAuthor">Roberta Gnerib</p>
                </div>

                <div className="reviewCard right" >
                    <p className="reviewText">The house just exceeded all expectations. Super hospitable landlords. All round perfect.</p>
                    <p className="reviewAuthor">Ralf Schumacher</p>
                </div>
            </div> 
        </div>
    </div>
    );
};

export default Review