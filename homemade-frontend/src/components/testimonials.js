import React from 'react';
import './testimonials.css';

function Testimonials() {
    return (
        <div className="testimonials-container">
            <h2>What Our Users Say</h2>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <p>"This app has revolutionized how I cook! I can now make delicious meals with whatever ingredients I have."</p>
                    <h4>- Sarah Johnson</h4>
                </div>
                <div className="testimonial-card">
                    <p>"The recipe suggestions are always spot-on. It's like having a personal chef in my pocket!"</p>
                    <h4>- Mike Chen</h4>
                </div>
                <div className="testimonial-card">
                    <p>"I love how I can just take a picture of my ingredients and get instant recipe ideas. So convenient!"</p>
                    <h4>- Emma Davis</h4>
                </div>
            </div>
        </div>
    );
}

export default Testimonials; 