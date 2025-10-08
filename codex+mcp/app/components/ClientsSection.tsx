import { clients } from '@/app/content';

export function ClientsSection() {
  return (
    <section className="clients" id="clients">
      <div className="container">
        <header className="section-header section-header--center">
          <h2 className="section-title">Happy clients</h2>
          <p className="section-subtitle">
            Collaborations with global brands and ambitious startups across industries.
          </p>
        </header>
        <ul className="client-logos" aria-label="Client logos">
          {clients.map((client) => (
            <li key={client} className="client-logos__item">
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
