import React from 'react'

export const Home = () => {
  return (
    <>
      <container className="home">
        <div className='home__title'>Find the best
          coffee for you</div>
        <input className='home__input' type="text" placeholder='Find Your Coffee...' />

        <ul className="home__menu">
          <li><a className='home__menu-link' href="/">All</a></li>
          <li><a className='home__menu-link' href="/">Cappuccino</a></li>
          <li><a className='home__menu-link' href="/">Espresso</a></li>
          <li><a className='home__menu-link' href="/">Americano</a></li>
          <li><a className='home__menu-link' href="/">Macchiato</a></li>
          {/* при подключение роута - link */}
        </ul>

        <div className="coffee">
          <div className="coffee__card cappucino">
            <img className="coffee__card-photo" src="src/assets/img/cappucino1.png" alt="cappucino" />
            <div className="coffee__card-title">Cappuccino</div>
            <div className="coffee__card-description">With Steamed Milk</div>
            <div className="coffee__card-price">$ 4.20</div>
            <div className="coffee__card-btn">
              <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
            </div>
          </div>

          {/* <div className="home__coffee-cards cappucino2">
            <img className='home__coffee-cards-photo' src="src/assets/img/cappucino2.png" alt="cappucino" />
            <div className="home__coffee-cards-title">Cappuccino</div>
            <div className="home__coffee-cards-description">With Foam</div>
            <div className="home__coffee-cards-price">$ 4.20</div>
            <div className="home__coffee-cards-btn">
              <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
            </div>
          </div>

          <div className="home__coffee-cards cappucino3">
            <img className='home__coffee-cards-photo' src="src/assets/img/cappucino1.png" alt="cappucino" />
            <div className="home__coffee-cards-title">Latte</div>
            <div className="home__coffee-cards-description">With milk</div>
            <div className="home__coffee-cards-price">$ 5.20</div>
            <div className="home__coffee-cards-btn">
              <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
            </div>
          </div> */}
        </div>

       {/*  <div className="home__beans">
          <div className="home__beans-cards robusta">
            <img className='home_beans-cards-photo' src="src/assets/img/robusta.png" alt="robusta" />
            <div className="home__beans-cards-title">Robusta Beans</div>
            <div className="home__beans-cards-description">Medium Roasted</div>
            <div className="home__beans-cards-price">$ 3.20</div>
            <div className="home__beans-cards-btn">
              <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
            </div>
          </div>

          <div className="home__beans-cards arabica">
            <img className='home_beans-cards-photo' src="src/assets/img/cappucinobeans.png" alt="arabica" />
            <div className="home__beans-cards-title">Arabica</div>
            <div className="home__beans-cards-description">Medium Roasted</div>
            <div className="home__beans-cards-price">$ 4.20</div>
            <div className="home__beans-cards-btn">
              <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
            </div>
          </div>

          <div className="home__beans-cards robusta2">
            <img className='home_beans-cards-photo' src="src/assets/img/robusta.png" alt="robusta" />
            <div className="home__beans-cards-title">Robusta Beans</div>
            <div className="home__beans-cards-description">Medium Roasted</div>
            <div className="home__beans-cards-price">$ 5.20</div>
            <div className="home__beans-cards-btn">
              <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
            </div>
          </div>
        </div> */}

      </container>
    </>
  )
}
