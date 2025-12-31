import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          A platform designed to make food ordering simple, reliable,
          and transparent.
        </p>
      </div>

      <div className="about-highlight">
        <div>
          <h3>Fast Delivery</h3>
          <p>Optimized area-based order flow</p>
        </div>
        <div>
          <h3>Reliable Partners</h3>
          <p>Verified restaurants and delivery staff</p>
        </div>
        <div>
          <h3>Simple Experience</h3>
          <p>Clean and intuitive user interface</p>
        </div>
        <div>
          <h3>Trust & Quality</h3>
          <p>Built with transparency at every step</p>
        </div>
      </div>

      <section className="about-card">
        <h2>Platform Overview</h2>
        <p>
          Our food delivery platform connects customers with nearby restaurants
          through a simple and intuitive interface. Every order is processed
          within a defined service area to ensure faster delivery and better
          coordination.
        </p>
      </section>

      <section className="about-card">
        <h2>How It Works</h2>
        <p>
          Customers browse restaurants available in their area, select food
          items, and place orders in just a few steps. Once confirmed, the order
          is prepared by the restaurant and delivered by a verified delivery
          partner.
        </p>
      </section>

      <section className="about-card">
        <h2>Area-Based Operations</h2>
        <p>
          The platform operates on an area-based model. This allows efficient
          restaurant management, optimized delivery routes, and better service
          reliability for customers.
        </p>
      </section>

      <section className="about-card">
        <h2>Restaurants & Partners</h2>
        <p>
          Restaurants manage their menus, pricing, and availability directly on
          the platform. Delivery partners are assigned within specific areas,
          ensuring timely and organized deliveries.
        </p>
      </section>

      <section className="about-card">
        <h2>Customer Experience</h2>
        <p>
          Our customer interface is built with clarity and ease of use in mind.
          From discovering restaurants to tracking orders, every step is
          designed to be smooth and hassle-free.
        </p>
      </section>

      <section className="about-card">
        <h2>Security & Transparency</h2>
        <p>
          We follow secure authentication practices and maintain transparent
          pricing. Customers see exactly what they pay, with no hidden fees or
          unexpected charges.
        </p>
      </section>

      <section className="about-card">
        <h2>Our Vision</h2>
        <p>
          Our vision is to build a scalable and reliable food delivery ecosystem
          that benefits customers, restaurants, and delivery partners equally.
        </p>
      </section>
    </div>
  );
};

export default About;
