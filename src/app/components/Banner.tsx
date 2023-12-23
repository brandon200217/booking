import React, { Fragment } from 'react'
import bannerStyle from '@/styles/components/Banner.module.css'

function Banner() {
    return (<Fragment>
        <section className={`${bannerStyle.bannerPrincipal}`}>
            <div className={bannerStyle.contenidoBanner}>
                <div className={bannerStyle.tituloPincipal}>
                    <h1>Encontrá tu próximo alojamiento</h1>
                </div>
                <div className={bannerStyle.infoTitulo}>
                    <p>Buscá ofertas en hoteles, casas, departamentos y mucho más</p>
                </div>
            </div>
        </section>


        <section className={`${bannerStyle.bannerPrincipal} hidden`}>
            <div className={bannerStyle.contenidoBanner}>
                <div className={bannerStyle.tituloPincipal}>
                    <h1>Atracciones, actividades y experiencias</h1>
                </div>
                <div className={bannerStyle.infoTitulo}>
                    <p>Descubrí atracciones y experiencias nuevas que coinciden</p> 
                    <p>con tus intereses y tu estilo de viaje</p>
                </div>
            </div>
        </section>

        <section className={`${bannerStyle.bannerPrincipal} hidden`}>
            <div className={bannerStyle.contenidoBanner}>
                <div className={bannerStyle.tituloPincipal}>
                    <h1>Alquiler de autos para cualquier tipo de viaje</h1>
                </div>
                <div className={bannerStyle.infoTitulo}>
                    <p>Grandes ofertas a precios increíbles de las principales empresas de alquiler de autos</p>
                </div>
            </div>
        </section>
    
    </Fragment>) 
}

export default Banner
