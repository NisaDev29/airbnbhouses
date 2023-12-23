import React from "react";
import './cta.css';
import { Link } from "react-router-dom";


const CTA =()=> {
    return (
        <div id="CTA">
            <section id="ctaBanner">
                <h2>"Quality is never an accident. It is always the result of an intelligent effort."</h2>
                <p>─John Ruskin</p>
                <button><Link className="ctaButton" to='/contact'> Make An Inquary Now </Link></button>
            </section>
        </div>
    )
}
export default CTA;