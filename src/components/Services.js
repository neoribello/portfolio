import React, { useEffect } from "react"
import Title from "./Title"
import services from "../constants/services"
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return <section className="section container">
    <Title title="services"/>
    <div data-aos="slide-right" className="section-center services-center">
      {services.map((service)=> {
        const {id, icon, title, text} = service

        return <article key={id} className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>
        </article>
      })}
    </div>
  </section>
}

export default Services
