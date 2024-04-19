import { Routes, Route, Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className='home__title'>Find the best
          coffee for you</div>

        <div className="home__field-search">
          <img className='home__input-img' src="src\assets\icon\search-normal.svg" alt="search" />
          <input className='home__input' type="text" placeholder='Find Your Coffee...' />
        </div>




        <ul className="home__menu">
          <li><a className='home__menu-link' href="/">All</a></li>
          <li><a className='home__menu-link' href="/">Cappuccino</a></li>
          <li><a className='home__menu-link' href="/">Espresso</a></li>
          <li><a className='home__menu-link' href="/">Americano</a></li>
          <li><a className='home__menu-link' href="/">Macchiato</a></li>
          {/* при подключение роута - link */}
        </ul>

        <div className="coffee">
          <div className="coffee__card">
            <img className="coffee__card-photo" src="src/assets/img/cappucino1.png" alt="cappucino" />
            <div className="coffee__card-title">Cappuccino</div>
            <div className="coffee__card-description">With Steamed Milk</div>
            <div className="coffee__card-price-count">
              <div className="coffee__card-price"><span className='coffee__card-price-dollar'>$</span>4.20</div>
              <div className="coffee__card-btn">
                <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
              </div>
            </div>
          </div>

          <div className="coffee__card">
            <img className="coffee__card-photo" src="src/assets/img/cappucino2.png" alt="cappucino2" />
            <div className="coffee__card-title">Cappuccino</div>
            <div className="coffee__card-description">With Foam</div>
            <div className="coffee__card-price-count">
              <div className="coffee__card-price"><span className='coffee__card-price-dollar'>$</span>4.20</div>
              <div className="coffee__card-btn">
                <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
              </div>
            </div>
          </div>

          <div className="coffee__card">
            <img className="coffee__card-photo" src="src/assets/img/cappucino1.png" alt="cappucino" />
            <div className="coffee__card-title">Latte</div>
            <div className="coffee__card-description">With Milk</div>
            <div className="coffee__card-price-count">
              <div className="coffee__card-price"><span className='coffee__card-price-dollar'>$</span>4.20</div>
              <div className="coffee__card-btn">
                <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="beans-title">
          Coffee beans
        </div>
        <div className="beans">
          <div className="beans__card">
            <link to="" />
            <img className="beans__card-photo" src="src/assets/img/robusta.png" alt="robusta" />
            <div className="beans__card-title">Robusta Beans</div>
            <div className="beans__card-description">Medium Roasted</div>
            <div className="beans__card-price-count">
              <div className="beans__card-price"><span className='coffee__card-price-dollar'>$</span>4.20</div>
              <div className="beans__card-btn">
                <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
              </div>
            </div>
          </div>

          <div className="beans__card">
            <img className="beans__card-photo" src="src/assets/img/cappucinobeans.png" alt="capbeans" />
            <div className="beans__card-title">Cappucino Beans</div>
            <div className="beans__card-description">Medium Roasted</div>
            <div className="beans__card-price-count">
              <div className="beans__card-price"><span className='coffee__card-price-dollar'>$</span>4.20</div>
              <div className="beans__card-btn">
                <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
              </div>
            </div>
          </div>

          <div className="beans__card">
            <img className="beans__card-photo" src="src/assets/img/robusta.png" alt="robusta" />
            <div className="beans__card-title">Robusta Beans</div>
            <div className="beans__card-description">Medium Roasted</div>
            <div className="beans__card-price-count">
              <div className="beans__card-price"><span className='coffee__card-price-dollar'>$</span>4.20</div>
              <div className="beans__card-btn">
                <a href="/"><img src="src/assets/icon/plus.svg" alt="plus" /></a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
