import React from "react";
import "./style.css";

function LifePage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Personal Interests</h2>

            <section style={{ marginBottom: '20px' }}>
                <h3>Ceramic Sculpture</h3>
                <p>Crafting creativity with clay.</p>
                <img src="URL_to_your_photo" alt="Ceramic Sculpture" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
                <p>Creating unique pieces that reflect my thoughts and emotions.</p>
            </section>

            <section style={{ marginBottom: '20px' }}>
                <h3>Cooking Adventures</h3>
                <p>Experimenting with flavors and techniques.</p>
                <img src="URL_to_your_photo" alt="Cooking" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
                <p>Turning my kitchen into a culinary lab.</p>
            </section>

            <section style={{ marginBottom: '20px' }}>
                <h3>Writing</h3>
                <p>Sharing stories and reflections.</p>
                <img src="URL_to_your_photo" alt="Writing" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
                <p>From sitcom pilots to long-form fiction, I have always loved telling a story.</p>
            </section>

            <section style={{ marginBottom: '20px' }}>
                <h3>Travel</h3>
                <p>Exploring the world one destination at a time.</p>
                <img src="URL_to_your_photo" alt="Travel" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
                <p>Discovering new cultures and perspectives through travel.</p>
            </section>
        </div>
    );
}

export default LifePage;