import React from 'react'
import { Title } from '.'
import { services } from '../Utils/data'
export default function Services() {

   return (
      <section className="services">
         <Title title="Services"/>
         <div className="services-center">
            {services.map((item, index) => {
               const { icon, title, info } = item
               return (
                  <article key={index} className="service">
                     {icon}
                     <h5>{title}</h5>
                     <p>{info}</p>
                  </article>)
            })}

         </div>
      </section>

   )
}
