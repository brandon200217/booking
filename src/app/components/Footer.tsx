import React, { Fragment } from 'react'
import FooterStyle from '@/styles/components/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (<Fragment>
        <footer>     
            <div className={FooterStyle.newsletter}>
                <div className={FooterStyle.contenidoNewsletter}>
                    <h2>¡Ahorrá tiempo y dinero!</h2>
                    <p>Registrate para que te enviemos las mejores ofertas</p>
                </div>
                <div className={FooterStyle.formularioNewsletter}>
                    <input type='text' placeholder='Tu dirección de e-mail' />
                    <button type='button'>¡Suscribite!</button>

                </div>

            </div>
            <div className={FooterStyle.bookingFooter}>
                <button type='button'>Registra tu propiedad</button>
            </div>
            <div className={FooterStyle.bookingFooter}>
                <ul>
                    <li>
                        <a href="">Versión para celulares</a>
                    </li>
                    <li>
                        <a href="">Tu cuenta</a>
                    </li>
                    <li>
                        <a href="">Modificá tus reservas online</a>
                    </li>
                    <li>
                        <a href="">Atención al cliente </a>
                    </li>
                    <li>
                        <a href="">Convertite en afiliado </a>
                    </li>
                    <li>
                        <a href="">Booking.com for Business</a>
                    </li>
                </ul>
            </div>
            <div className={FooterStyle.footerTopPartners}>
                <div className={FooterStyle.footerTopMenu}>
                    <ul>
                        <li><Link href='#'>Paises</Link></li>
                        <li>Regiones</li>
                        <li>Ciudades</li>
                        <li>Zonas</li>
                        <li>Aeropuertos</li>
                        <li>Hoteles</li>
                        <li>Lugares de interés</li>
                   </ul>

                   <ul>
                        <li>Casas y departamentos</li>
                        <li>Departamentos</li>
                        <li>Resorts</li>
                        <li>Villas</li>
                        <li>Hostels</li>
                        <li>Bed and breakfasts</li>
                        <li>Pensiones</li>
                   </ul>


                   <ul>
                        <li>Lugares únicos para hospedarse</li>
                        <li>Todos los destinos</li>
                        <li>Todos los destinos de vuelos</li>
                        <li>Todos los puntos de alquiler de autos</li>
                        <li>Descubrir</li>
                        <li>Opiniones</li>
                        <li>Descubrí estadías mensuales</li>
                        <li>Regiones</li>
                        <li>Artículos</li>
                        <li>Ofertas de temporada y para las fiestas</li>
                        <li>Traveller Review Awards</li>
                   </ul>

                   <ul>
                        <li>Alquiler de autos</li>
                        <li>Buscador de vuelos</li>
                        <li>Reservas en restaurantes</li>
                        <li>Booking.com para Agentes de viaje</li>
                   </ul>

                   <ul>
                    <li>Preguntas frecuentes sobre el coronavirus (COVID-19)</li>
                    <li>Acerca de Booking.com</li>
                    <li>Atención al cliente</li>
                    <li>Ayuda para colaboradores</li>
                    <li>Careers</li>
                    <li>Sustentabilidad</li>
                    <li>Centro de prensa</li>
                    <li>Centro de recursos sobre seguridad</li>
                    <li>Relaciones con inversores</li>
                    <li>Términos y condiciones</li>
                    <li>Disputas de colaboradores</li>
                    <li>Cómo trabajamos</li>
                    <li>Declaración de cookies y de privacidad</li>
                    <li>Declaración sobre MSA</li>
                    <li>Contacto corporativo</li>
                    <li>Pautas de contenido y denuncias</li>
                    
                   </ul>


                </div>

                <div className={FooterStyle.footerconstraintInner}>
                    <div className={FooterStyle.accederIntranet}>
                        <Link href='#'>Accedé a la extranet</Link>
                    </div>
                    <div className={FooterStyle.copy}>
                        <p>Copyright © 1996–2023 Booking.com™. Todos los derechos reservados.</p>                        
                    </div>
                    <div className={FooterStyle.presentacion}>
                        <p>Booking.com forma parte de Booking Holdings Inc., líder mundial en viajes online y servicios relacionados.</p>                    
                    </div>
                </div>

                <div className={FooterStyle.region}>
                    
                </div>

                <div className={FooterStyle.footerLogos}>
                    <ul>
                        <li>
                            <picture>
                                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png" title="Booking.com" alt="Booking.com" height="26" width="91"></img>
                            </picture>
                        </li>
                        <li>
                            <picture>
                                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png" title="Priceline" alt="Priceline" height="26" width="91"></img>
                            </picture>
                        </li>
                        <li>
                        <picture>
                            <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png" title="Kayak" alt="Kayak" height="26" width="79"></img>
                        </picture>

                        </li>
                        <li>
                            <picture>
                                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png" title="Agoda" alt="Agoda" height="26" width="70"></img>
                            </picture>
                        </li>
                        <li>
                            <picture>
                                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png" title="Rentalcars" alt="Rentalcars" height="26" width="109"></img>
                            </picture>
                        </li>
                        <li>
                            <picture>
                                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png" title="OpenTable" alt="OpenTable" height="26" width="95"></img>
                            </picture>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    </Fragment>) 
}

export default Footer
