import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Ensure updated CSS for styling

function HomePage() {
  return (
    <div className="home-container">
      <section className="hero-section text-center bg-cover bg-center py-20">
        <div className="hero-content">
          <h1>Welcome to SeasonalEats</h1>
          <p>Embrace the natural rhythm of the seasons to discover the freshest, most flavorful foods that nourish your body and soul.</p>
          <Link to="/seasonal-calendar" className="explore-btn">Start Your Journey</Link>

        </div>
      </section>
      
      <section className="features-section container">
        <h2 className="section-title">Discover the Essence of Seasonal Eating</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>What's In Season?</h3>
            <p>Unlock the secrets to eating seasonally with our comprehensive guides. Each season brings its bounty, and we're here to help you make the most of it. From spring's tender greens to winter's hearty roots, learn what to look for at your local market.</p>
          </div>
          <div className="feature-item">
            <h3>Health Benefits</h3>
            <p>Eating seasonally isn't just good for the planet—it's good for you too. Discover how aligning your diet with the seasons can boost your health, from enhancing nutritional intake to supporting your body's natural rhythms.</p>
          </div>
          <div className="feature-item">
            <h3>Seasonal Recipes</h3>
            <p>Transform seasonal produce into culinary delights with our curated recipes. Whether you're a novice cook or a seasoned chef, our recipes will inspire you to explore the flavors of the season.</p>
          </div>
          {/* Consider adding more feature items as needed */}
        </div>
      </section>
      
      <section className="about-section container">
        <h2 className="section-title">The Cycle of Seasons</h2>
        <p>At SeasonalEats, we believe in the power of nature's cycles. Eating seasonally connects us to the natural world, supports local farming communities, and reduces our carbon footprint. It's a way to live harmoniously with the earth, celebrating the unique beauty and variety of each season.</p>
      </section>
      
      <section className="sustainability-section container">
        <h2 className="section-title">Sustainability and You</h2>
        <p>Choosing seasonal and locally sourced foods is a step towards a more sustainable future. By reducing the demand for out-of-season produce, which often requires extensive transportation and storage, we can lessen our environmental impact. Learn how small changes in your eating habits can make a big difference.</p>
      </section>
      
      <section className="community-section container">
        <h2 className="section-title">Join Our Community</h2>
        <p>Become part of a community passionate about food, health, and sustainability. Share your experiences, get tips from fellow members, and participate in local events. Together, we can make a difference, one season at a time.</p>
      </section>

      <section className="testimonials-section container">
        <h2 className="section-title">Hear From Our Community</h2>
        {/* Consider enriching this section with more testimonials */}
        <blockquote>
          <p>"Embracing seasonal eating has transformed my relationship with food. I feel more connected to my community and the environment. Thank you, SeasonalEats, for this wonderful journey!"</p>
          <cite>- Alex Smith</cite>
        </blockquote>
        {/* Add more testimonials as needed */}
      </section>
      
      <footer className="footer">
        © 2023 SeasonalEats. All rights reserved.
        {/* Include additional navigation links and social media icons */}
      </footer>
    </div>
  );
}

export default HomePage;
