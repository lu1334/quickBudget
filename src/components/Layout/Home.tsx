import { Link } from "react-router-dom";
import "./layout.css";

export function Home() {
  return (
    <section className="home-hero">
      <span className="home-hero__badge">QuickBudget</span>
      <h1 className="home-hero__title">
        Master your <span>budget</span> without losing style.
      </h1>
      <p className="home-hero__subtitle">
        Log incomes, control expenses, and get a clear view of your daily
        activity with a panel that is as elegant as it is effective.
      </p>
      <div className="home-hero__cta-group">
        <Link className="home-cta home-cta--primary" to="/form-income">
          Add income
        </Link>
        <Link className="home-cta home-cta--ghost" to="/form-expense">
          Add expense
        </Link>
      </div>
      <div className="home-hero__insights">
        <div className="home-hero__insight">
          <span className="home-hero__metric">360º</span>
          <span className="home-hero__label">Daily snapshot</span>
        </div>
        <div className="home-hero__insight">
          <span className="home-hero__metric">+15%</span>
          <span className="home-hero__label">Projected savings</span>
        </div>
        <div className="home-hero__insight">
          <span className="home-hero__metric">5 min</span>
          <span className="home-hero__label">Average log time</span>
        </div>
      </div>
    </section>
  );
}
