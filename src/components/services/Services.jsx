import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id='services'>
      <h5>What do I offer?</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
            <ul className="service_list">
              <li>Responsive web design</li>
              <li>RESTful API's</li>
              <li>UX/UI design</li>
              <li>Interactive SPA's</li>
              <li>Relational and not relational database development</li>
              <li>Clean and maintainable code for your web</li>
            </ul>
          
        </article>
      </div>
    </section>
  )
}

export default Services