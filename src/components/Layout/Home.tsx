import { Link } from "react-router-dom";
import "./layout.css";

export function Home() {
  return (
    <section className="home-hero">
      <span className="home-hero__badge">QuickBudget</span>
      <h1 className="home-hero__title">
        Domina tu <span>presupuesto</span> sin perder estilo.
      </h1>
      <p className="home-hero__subtitle">
        Registra ingresos, controla gastos y obtén una visión clara de tus
        movimientos diarios con un panel tan elegante como efectivo.
      </p>
      <div className="home-hero__cta-group">
        <Link className="home-cta home-cta--primary" to="/form-income">
          Añadir ingreso
        </Link>
        <Link className="home-cta home-cta--ghost" to="/form-expense">
          Añadir gasto
        </Link>
      </div>
      <div className="home-hero__insights">
        <div className="home-hero__insight">
          <span className="home-hero__metric">360º</span>
          <span className="home-hero__label">Resumen diario</span>
        </div>
        <div className="home-hero__insight">
          <span className="home-hero__metric">+15%</span>
          <span className="home-hero__label">Ahorro proyectado</span>
        </div>
        <div className="home-hero__insight">
          <span className="home-hero__metric">5 min</span>
          <span className="home-hero__label">Tiempo de registro</span>
        </div>
      </div>
    </section>
  );
}
