import "./RestaurantHero.css";

const RestaurantHero = () => {
  return (
    <section className="restp-hero-fancy">
      <div className="restp-hero-left">
        <h1>Grow Your Restaurant, Delight More Customers</h1>
        <p>
          Join the fastest-growing food platform — increase order volume,
          manage menus easily, and get dedicated local support.
        </p>
        <div className="restp-hero-buttons">
          <a href="/partner/restaurant/register" className="restp-btn-primary">
            Register Restaurant
          </a>
          <a href="/partner/restaurant/login" className="restp-btn-secondary">
            Already Registered? Login
          </a>
        </div>
      </div>
      <div className="restp-hero-right">
        <img
          src="https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg"
          alt="Restaurant owner illustration"
        />
      </div>
    </section>
  );
};

export default RestaurantHero;
