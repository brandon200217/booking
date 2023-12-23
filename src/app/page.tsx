import Image from 'next/image'
import HomeStyle from '@/styles/pages/Home.module.css'

export default function Home() {
  return (
    <main className={HomeStyle.main}>
      
      <div className={HomeStyle.contenidoPrincipal}>

        <article>
          <div className={HomeStyle.contenido}>
            <h2>Ofertas</h2>
            <p>Promociones, descuentos y ofertas especiales para vos</p>
          </div>
          <div className={HomeStyle.ofertas}>
            
            <div className={HomeStyle.cardsOfertas}>
              <div className={HomeStyle.ahorro}>
                <h4>Ahorrá un 15% con las Ofertas de Fin de Año</h4>
                <p>Descubrí miles de destinos en todo el mundo y ahorrá un 15% o más.</p>
                <button>Buscar Ofertas de Fin de Año</button>
              </div>

              <img src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/261387541.jpeg?k=80d1571cedd0a363b9d9b78207914af9b1490c6a859cacd8dc090c866d1bbc94&amp;o=" alt="Un grupo de amigos haciendo senderismo por la montaña en un día de sol" loading="lazy"></img>
            </div>
            
            <div className={HomeStyle.cardsOfertas}>
              <div className={HomeStyle.contenidoOfertas}>
                <h4>Un hogar lejos de casa para una estadía más larga</h4>
                <p>Elegí un alojamiento ideal para trabajar, descansar o un poco de los dos.</p>
                <div>
                  <button>Buscar Alejamiento</button>
                </div>
              </div>
              {/* <div>
              </div> */}
              <img src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/292129389.jpeg?k=4d396cd9edbf7b86812c8b8b955c7d922de1c95530e6a20605d68fc32320ff4f&amp;o=" alt="Foto de una pareja de pie frente a una cabaña en el bosque a la noche" loading="lazy"></img>          
            </div>
          </div>
        
        </article>

        <article>
          <div className={HomeStyle.containerTendencias}>   
            <h2>Destinos que son tendencia</h2>
            <p>Las opciones más elegidas por personas de Argentina</p>
              <div className={HomeStyle.tendenciasPrimarias}>
                <div>                  
                  <img src="https://cf.bstatic.com/xdata/images/city/600x600/664052.jpg?k=e0c8a97ea4cd0ab7e3757392c8fb02708767377e288a6c3e0889d22497e8e8f1&amp;o=" role="presentation" loading="lazy"></img>
                </div>
                <div>
                  <img src="https://cf.bstatic.com/xdata/images/city/600x600/664200.jpg?k=91939c766d293b86038e54714d7d0711888aec8513a494ce3ed4976247712625&amp;o=" role="presentation" loading="lazy"></img>
                </div>
              </div>
              <div className={HomeStyle.tendenciasSecundarias}>
                <div>
                  <img src="https://cf.bstatic.com/xdata/images/city/600x600/664434.jpg?k=a0cb0f948924bdcea039a5039afc78096d324afe4d3395ec68d09536fc0daa23&amp;o=" role="presentation" loading="lazy"></img>

                </div>
                <div>
                  <img src="https://cf.bstatic.com/xdata/images/city/600x600/664125.jpg?k=3be2e16a1d2305149375892729e5daa1ea89e17272e2e438bb5093f0964c8b5d&amp;o=" role="presentation" loading="lazy"></img>
                </div>
                <div>
                  <img src="https://cf.bstatic.com/xdata/images/city/600x600/664190.jpg?k=9dce1821c3fbcbca4359a447c9be0ff0d92d097341fb2df26902cfc0d0f4cec3&amp;o=" role="presentation" loading="lazy"></img>
                </div>
              </div>
          </div>
          <div className={HomeStyle.cards}>
          </div>
        </article>

        <article>
          <div className={HomeStyle.contenido}>
            <h2>Buscar por tipo de alojamiento</h2>
            <div className={HomeStyle.tipoAlojamiento}>
              <div>
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&amp;o=" role="presentation" loading="lazy"></img>
                <span>Hoteles</span>
              </div>
              <div>
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&amp;o=" role="presentation" loading="lazy"></img>
                <span>Departamentos</span>
              </div>
              <div>
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&amp;o=" role="presentation" loading="lazy"></img>
                <span>Resorts</span>
              </div>
              <div>
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&amp;o=" role="presentation" loading="lazy"></img>
                <span>Villas</span>
              </div>
            </div>
          </div>

          <div className={HomeStyle.cards}>
          </div>
        </article>

        <article>
          <div className={HomeStyle.contenido}>
            <h2>Descubrí Argentina</h2>
            <p>Estos destinos populares tienen mucho para ofrecer</p>
          </div>
          <div className={HomeStyle.tipoAlojamientoPlanes}>
            <div>
              <img  src="https://q-xx.bstatic.com/xdata/images/city/170x136/664200.jpg?k=91939c766d293b86038e54714d7d0711888aec8513a494ce3ed4976247712625&amp;o=" role="presentation" loading="lazy"></img>              <span>Mar de Plata</span>
              <p>1.685 propiedades</p>
            </div>
            <div>
              <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/664052.jpg?k=e0c8a97ea4cd0ab7e3757392c8fb02708767377e288a6c3e0889d22497e8e8f1&amp;o=" role="presentation" loading="lazy"></img>              <span>Buenos Aires</span>
              <p>5.139 propiedades</p>

            </div>
            <div>
              <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/664434.jpg?k=a0cb0f948924bdcea039a5039afc78096d324afe4d3395ec68d09536fc0daa23&amp;o=" role="presentation" loading="lazy"></img>              <span>San Carlos de Bariloche</span>
              <p>998 propiedades</p>

            </div>
            <div>
              <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/664629.jpg?k=2554a529f6dab0ac47ba00b4a1912240c6ea1313ebb1cd65734e3af8f224bc6a&amp;o=" role="presentation" loading="lazy"></img>              <span>Villa Carlos Paz</span>
              <p>855 propiedades</p>

            </div>
            
            <div>
              <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/664125.jpg?k=3be2e16a1d2305149375892729e5daa1ea89e17272e2e438bb5093f0964c8b5d&amp;o=" role="presentation" loading="lazy"></img>
              <span>Cordoba</span>
              <p>1.360 propiedades</p>
            </div>

            <div>
              <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/664636.jpg?k=519d68343bba9539e046436ea010a623bb06e0bbda3048bc7be85616cef1b19d&amp;o=" role="presentation" loading="lazy"></img>
              <span>Villa Gesell</span>
              <p>488 propiedades</p>
            </div>
          </div>
        </article>

        <article>
          <div className={HomeStyle.contenido}>
            <h2>Planeá tu viaje rápido y fácil</h2>
            <p>Elegí un estilo de viaje y explorá los destinos principales en Argentina.</p>
          </div>

          <nav className={`${HomeStyle.navPlanes}`} aria-label="Global">
            
            <ul className={`${HomeStyle.listaDesorganizada}`}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.541 21.325l-9.588-10a4.923 4.923 0 1 1 6.95-6.976l1.567 1.566a.75.75 0 0 0 1.06 0l1.566-1.566a4.923 4.923 0 0 1 6.963 6.962l-9.6 10.014h1.082zm-1.082 1.038a.75.75 0 0 0 1.082 0l9.59-10.003a6.418 6.418 0 0 0-.012-9.07 6.423 6.423 0 0 0-9.083-.001L11.47 4.854h1.06l-1.566-1.566a6.423 6.423 0 1 0-9.082 9.086l9.577 9.99z">
                    </path>
                  </svg>
                  Romance
                </li>
                
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.153 22.237l.85 1.117c.634.76 1.724.856 2.456.244.078-.066.15-.138.216-.217l.944-1.132a.228.228 0 0 1 .349.001l.944 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.95 1.132a1.728 1.728 0 0 0 2.65 0l.942-1.133a.228.228 0 0 1 .349.001l.942 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.94 1.13a1.728 1.728 0 0 0 2.652.001l.585-.7a.75.75 0 1 0-1.15-.962l-.585.7a.228.228 0 0 1-.35 0l-.94-1.13a1.728 1.728 0 0 0-2.652-.001l-.944 1.132a.228.228 0 0 1-.349-.001l-.942-1.13a1.728 1.728 0 0 0-2.651-.001l-.943 1.132a.228.228 0 0 1-.348-.001l-.95-1.132a1.726 1.726 0 0 0-2.65 0l-.944 1.133a.228.228 0 0 1-.349-.001l-.944-1.13a1.728 1.728 0 0 0-2.65 0l-.945 1.13a.228.228 0 0 1-.349-.001l-.828-1.09a.75.75 0 1 0-1.194.91zm11.335-2.68A7.161 7.161 0 0 1 15.77 18h7.481a.75.75 0 0 0 0-1.5h-7.5a8.673 8.673 0 0 0-5.196 1.884.75.75 0 1 0 .934 1.174zM22.285 7.969a1.729 1.729 0 0 0 .781-2.711C19.43.713 12.8-.022 8.256 3.614a10.536 10.536 0 0 0-3.952 8.171A1.73 1.73 0 0 0 6.6 13.427l15.684-5.459zm-.494-1.416L6.107 12.01a.229.229 0 0 1-.304-.218 9.036 9.036 0 0 1 16.09-5.599.228.228 0 0 1-.102.359zm-9.459-4.2L11.69.504a.75.75 0 1 0-1.416.492l.643 1.848a.75.75 0 1 0 1.416-.492zm1.156 7.883l2.527 7.262a.75.75 0 1 0 1.416-.494l-2.527-7.26a.75.75 0 1 0-1.416.492z">
                    </path>
                  </svg>
                    <span className='inline-block'>Playa</span>
                </li>
                
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-10.5 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zm13.5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zm-12 .75a.75.75 0 0 1-.75-.75 6.734 6.734 0 0 0-3.642-5.994.75.75 0 0 1-.167-1.207l4.043-3.842a.75.75 0 0 1 1.187.208c.062.116.143.252.263.429.197.289.429.577.697.848.8.809 1.758 1.308 2.869 1.308a.75.75 0 0 1 0 1.5 5.564 5.564 0 0 1-4.137-1.966.75.75 0 0 0-1.089-.058l-1.452 1.38a.75.75 0 0 0 .031 1.116 8.22 8.22 0 0 1 2.897 6.277.75.75 0 0 1-.75.751zm0 1.5a2.25 2.25 0 0 0 2.25-2.25 9.72 9.72 0 0 0-3.425-7.421l.03 1.114 1.453-1.38-1.089-.059a7.07 7.07 0 0 0 5.268 2.496A2.25 2.25 0 1 0 16.5 9c-.656 0-1.26-.315-1.803-.863a4.554 4.554 0 0 1-.695-.914 2.25 2.25 0 0 0-3.552-.604l-4.043 3.842a2.25 2.25 0 0 0 .51 3.626 5.236 5.236 0 0 1 2.833 4.662A2.25 2.25 0 0 0 12 21z">
                  </path>
                </svg>
                    Naturaleza
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.72 14.295A7.35 7.35 0 0 1 8.997 8.85a7.148 7.148 0 0 1 2.25-4.972c.005-.005-.004-.005-.01-.01a7.173 7.173 0 0 1 2.261 5.03 7.332 7.332 0 0 1-2.722 5.397h.944zm-.944 1.166a.75.75 0 0 0 .944 0 8.85 8.85 0 0 0 3.277-6.555 8.683 8.683 0 0 0-2.72-6.12 1.482 1.482 0 0 0-2.069.01 8.658 8.658 0 0 0-2.71 6.062 8.869 8.869 0 0 0 3.278 6.603zm3.813-7.013A7.807 7.807 0 0 1 19.023 7.1l.003-.001a7.17 7.17 0 0 1-1.959 5.142 7.332 7.332 0 0 1-5.74 1.891.75.75 0 0 0-.158 1.492 8.85 8.85 0 0 0 6.953-2.318 8.68 8.68 0 0 0 2.404-6.233A1.495 1.495 0 0 0 19.029 5.6a9.304 9.304 0 0 0-5.282 1.608.75.75 0 1 0 .842 1.24zM8.75 7.221A9.239 9.239 0 0 0 3.417 5.6c-.815-.001-1.484.664-1.49 1.488a8.652 8.652 0 0 0 2.37 6.184 8.95 8.95 0 0 0 7.031 2.35.75.75 0 1 0-.158-1.49 7.431 7.431 0 0 1-5.82-1.927 7.142 7.142 0 0 1-1.923-5.091L3.426 7.1a7.746 7.746 0 0 1 4.476 1.357.75.75 0 0 0 .848-1.236zm-4.944 3.966c-2.223.948-3.808 2.716-3.808 4.441 0 3.47 5.422 6 12 6a22.404 22.404 0 0 0 6.977-1.047.75.75 0 0 0 .523-.715v-3.488l-.75.75h4.383a.75.75 0 0 0 .715-.524c.1-.315.15-.643.152-.973 0-2.068-1.986-3.858-5.079-4.944a.75.75 0 1 0-.497 1.416c2.56.898 4.076 2.265 4.076 3.525 0 .176-.028.354-.082.524l.715.226v-.75h-4.383a.75.75 0 0 0-.75.75v3.488l.523-.715a20.922 20.922 0 0 1-6.516.977c-5.856 0-10.507-2.17-10.507-4.5 0-1.02 1.17-2.325 2.896-3.061a.75.75 0 0 0-.588-1.38z">
                    </path>
                  </svg>
                  Relax
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.62 6.45a3.14 3.14 0 1 0-3.13-3.14 3.15 3.15 0 0 0 3.13 3.14Zm0-4.77A1.64 1.64 0 1 1 14 3.31a1.64 1.64 0 0 1 1.62-1.63ZM23.26 18.64a.74.74 0 0 0-1-.31l-.33.17-3.59-6.69a2.19 2.19 0 0 0 .48-1.37 2.25 2.25 0 0 0-2.24-2.26h-1.89l-1.84-2a3.5 3.5 0 0 0-4.53-.58L3.7 8.71A3.05 3.05 0 0 0 4 14l2.82 1.47-1.14 1.21a2.33 2.33 0 0 0-.56 1.25l-3.38-1.69a.75.75 0 0 0-1 .33.76.76 0 0 0 .34 1L13 23.52a2.78 2.78 0 0 0 1.26.3 2.74 2.74 0 0 0 1.33-.34l.82-.45a.75.75 0 0 0-.72-1.32l-.82.46a1.3 1.3 0 0 1-1.2 0l-4.78-2.36.11-.12 2.6-2.89a2.81 2.81 0 0 0-.8-4.37l-2.6-1.35 1.9-1.26 1.9 2.12a2.22 2.22 0 0 0 1.66.74h2.86a2 2 0 0 0 .5-.06l3.58 6.58-.54.29a.75.75 0 0 0-.31 1 .74.74 0 0 0 .66.39.72.72 0 0 0 .35-.08l.55-.3.44.83a.77.77 0 0 0 .67.4.73.73 0 0 0 .35-.09.76.76 0 0 0 .31-1l-.45-.82.32-.17a.75.75 0 0 0 .31-1.01Zm-6.7-7.46H13.7a.77.77 0 0 1-.56-.25l-2.51-2.76a.5.5 0 0 0-.63-.08l-3.79 2.54a.61.61 0 0 0 0 1l3.88 2.09a1.31 1.31 0 0 1 .69.92 1.28 1.28 0 0 1-.31 1.11l-2.56 2.93a.71.71 0 0 1-.55.25.77.77 0 0 1-.51-.19.76.76 0 0 1 0-1.06l1.79-2a.73.73 0 0 0-.21-1.15l-3.74-1.91A1.56 1.56 0 0 1 4.54 10l4.62-3.16a2 2 0 0 1 2.58.32L14 9.68h2.54a.75.75 0 0 1 0 1.5Z">
                    </path>
                  </svg>
                  Esqui
                </li>

                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.75 6h9.5a.25.25 0 0 1-.25-.25v17.5l.75-.75H2.25l.75.75V5.75a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.75c0-.69-.56-1.25-1.25-1.25h-9.5zm3-1.5h3.5A.25.25 0 0 1 9 2.75v2.5l.75-.75h-4.5l.75.75v-2.5a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-2.5c0-.69-.56-1.25-1.25-1.25h-3.5zM5.25 9h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zM7.5.75v1.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zM15.75 24h6a.75.75 0 0 0 .75-.75V10.5A1.5 1.5 0 0 0 21 9h-4.5a1.5 1.5 0 0 0-1.5 1.5v12.75a.75.75 0 0 0 1.5 0V10.5H21v12.75l.75-.75h-6a.75.75 0 0 0 0 1.5zM19.5 8.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z">
                    </path>
                  </svg>
                  Ciudad
                </li>
            </ul>
          </nav>
          <div className={HomeStyle.tipoAlojamientoPlanes}>
            <div>
              <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140031767.jpg?k=0cfb0df5e32f8043badb6e3e2b361dfc5b4955a94b3d3c9bb39283a3e7778de4&amp;o=" role="presentation" loading="lazy"></img>              <span>Lobos</span>
              <p>a 127 km</p>
            </div>
            <div>
              <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140031787.jpg?k=2cfc0c09a595555c0d11a28a2f0338651182c71a83083565fab7fc74163f4ece&amp;o=" role="presentation" loading="lazy"></img>              <span>Junin</span>
              <p>a 183 km</p>

            </div>
            <div>
              <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140031757.jpg?k=5e59058a5cf0c258f3ed9689c5786797db1b7cdf1aff4375aec4c6b1c36b4112&amp;o=" role="presentation" loading="lazy"></img>              <span>Luján</span>
              <p>a 184 km</p>

            </div>
            <div>
              <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140031805.jpg?k=0a6854213bcdac6d137373357030d8f0f475ac75c2c9f2ae3762f4f6f9e9a339&amp;o=" role="presentation" loading="lazy"></img>
              <span>ezeiza</span>
              <p>a 193 km</p>

            </div>
            <div>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140031724.jpg?k=6596c45d43bfe570c07bc62b179485a2fd3efa8cbd4b619cefe02e709c173090&amp;o=" role="presentation" loading="lazy"></img>
              <span>pilar</span>
              <p>a 204 km</p>

            </div>
            <div>
            <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140031840.jpg?k=2a8a5d2d4579c4add94ec8073eadcc7115c23736010a9fab0eebb187236c2382&amp;o=" role="presentation" loading="lazy"></img>
              <span>Capilla del señor</span>
              <p>a 213 km</p>
            </div>
          </div>
        </article>

        <article>
          <div className={HomeStyle.contenido}>
            <h2>Las casas preferidas de los huéspedes</h2>
          </div>
          <div className={HomeStyle.alojamiento}>
            <div className={HomeStyle.cards}>
              <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&amp;o=" role="presentation" loading="lazy"></img>              
              <div className={HomeStyle.contenido}>
                <div className={HomeStyle.seccionEstadistica}>
                  <span className={HomeStyle.estadistica}>9.8</span>
                  <span>Fabuloso </span>
                  <span>293 comentarios </span>
                </div>
              </div>
            </div>

            <div className={HomeStyle.cards}>
              <img src="https://cf.bstatic.com/xdata/images/hotel/square600/121402222.webp?k=f7f266ab09f90ddea4464309eca14d79429afe4218ced6887cb52f82c42c03dc&amp;o=" role="presentation" loading="lazy"></img>
              <div className={HomeStyle.contenido}>
                <div className={HomeStyle.seccionEstadistica}>
                  <span className={HomeStyle.estadistica}>9.8</span>
                  <span>Fabuloso </span>
                  <span>293 comentarios </span>
                </div>               
              </div>
            </div>

            <div className={HomeStyle.cards}>
              <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&amp;o=" role="presentation" loading="lazy"></img>
              <div className={HomeStyle.contenido}>
                <div className={HomeStyle.seccionEstadistica}>
                  <span className={HomeStyle.estadistica}>9.8</span>
                  <span>Fabuloso </span>
                  <span>293 comentarios </span>
                </div>               
              </div>
            </div>

            <div className={HomeStyle.cards}>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&amp;o=" role="presentation" loading="lazy"></img>
              <div className={HomeStyle.contenido}>
                <div className={HomeStyle.seccionEstadistica}>
                  <span className={HomeStyle.estadistica}>9.8</span>
                  <span>Fabuloso </span>
                  <span>293 comentarios </span>
                </div>
                <span>Desde $ 51.035</span>
              </div>
            </div>
          </div>
        </article>

        <article>
          <div className={HomeStyle.contenido}>
            <h2>Quedate en un alojamiento único</h2>
            <p>Desde castillos y casonas hasta barcos e iglús... ¡tenemos de todo!</p>
          </div>
          <div className={HomeStyle.alojamiento}>

            <div className={HomeStyle.cards}>
              <img  src="https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&amp;o=" role="presentation" loading="lazy"></img>
              <div className={HomeStyle.contenido}>
                <h4>Waldschenke Stendenitz Übernachten im Wald am See</h4>
                <p>Alemania, Neuruppin</p>
                <div className={HomeStyle.seccionEstadistica}>
                  <span className={HomeStyle.estadistica}>9.8</span>
                  <span>Fabuloso </span>
                  <span>293 comentarios </span>
                </div>
               
              </div>
            </div>
               
            <div className={HomeStyle.cards}>
              <img src="https://cf.bstatic.com/xdata/images/hotel/square600/228714298.webp?k=2e88556aac50ed7e31bdc4f399c385b1c2b3208d8a3c3fc622e770bc6d9b0c98&amp;o=" role="presentation" loading="lazy"></img>
              <div className={HomeStyle.contenido}>
                <h4>Waldschenke Stendenitz Übernachten im Wald am See</h4>
                <p>Alemania, Neuruppin</p>
                <div className={HomeStyle.seccionEstadistica}>
                  <span className={HomeStyle.estadistica}>9.8</span>
                  <span>Fabuloso </span>
                  <span>293 comentarios </span>
                </div>
              
              </div>
            </div> 

            <div className={HomeStyle.cards}>
              <img src="https://cf.bstatic.com/xdata/images/hotel/square600/366855457.webp?k=ef25b0c640c7c2f4fcac4c79509ef1dbb484c19f21a7c8cba18d9270d7f790e9&amp;o=" role="presentation" loading="lazy"></img>
              <div className={HomeStyle.contenido}>
                <h4>Waldschenke Stendenitz Übernachten im Wald am See</h4>
                <p>Alemania, Neuruppin</p>
                <div className={HomeStyle.seccionEstadistica}>
                  <span className={HomeStyle.estadistica}>9.8</span>
                  <span>Fabuloso </span>
                  <span>293 comentarios </span>
                </div>
               
              </div>
            </div>   

            <div className={HomeStyle.cards}>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&amp;o=" role="presentation" loading="lazy"></img>
              <div className={HomeStyle.contenido}>
                <h4>Waldschenke Stendenitz Übernachten im Wald am See</h4>
                <p>Alemania, Neuruppin</p>
                <div className={HomeStyle.seccionEstadistica}>
                  <span className={HomeStyle.estadistica}>9.8</span>
                  <span>Fabuloso </span>
                  <span>293 comentarios </span>
                </div>
              </div>
            </div>       
              
          </div>

        </article>

        <article className={HomeStyle.genius}>
          <picture>
            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-traveller/GlobeGeniusBadge.png" alt="" role="presentation" loading="lazy"></img>
          </picture>

          <div>
            <h2 className='mb-2'>Conseguí descuentos al instante</h2>
            <p>Iniciá sesión en tu cuenta de Booking.com, buscá el logo azul</p>
            <p>de Genius y ahorrá</p>
            <div className={HomeStyle.button_genius}>
              <button>Iniciar Sesión</button>
              <a>Crear Cuenta</a>
            </div>
          </div>

        </article>

        <article className={HomeStyle.descubrir}>
          <div className={HomeStyle.sol}></div>

          <div className={HomeStyle.iconAzul}>

          </div>
          <picture>
            <img src="https://cf.bstatic.com/psb/capla/static/js/../../static/media/bh_aw_cpg_main_image.b4347622.png" role="presentation" loading="lazy"></img>
          </picture>


        </article>

      </div>



    </main>
  )
}
