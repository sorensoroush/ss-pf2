import React from 'react'

const Portfolio = () => {
  return (
    <main id="portfolio">
      <h2 id="portfolio-header">Portfolio</h2>
      <div className="website">
        <h3>Keyboard Hero</h3>
        <div className="site-info">
          <a href="https://sorensoroush.github.io/keyboard-hero/" target='_blank'><img src={require('../assets/p1.png')} /></a>
          <p>A functional and responsive in-browser-replica of the popular console game Guitar Hero, with strummable notes and difficulty variants.
            <br /> <a href="https://github.com/sorensoroush/keyboard-hero" target='_blank'>Github</a>
          </p>
        </div>
      </div>
      <div className="website">
        <h3>Exoplanet Planetarium</h3>
        <div className="site-info">
          <a href="https://exoplanet-app.herokuapp.com" target='_blank'><img src={require('../assets/p2.png')} /></a>
          <p>A website that fetches data from NASA's exoplanet archive and dynamically displays data of various exoplanets on HTML canvases.
            <br /> <a href="https://github.com/sorensoroush/exoplanet-app" target='_blank'>Github</a>
          </p>
        </div>
      </div>
      <div className="website">
        <h3>Ensemble Forums</h3>
        <div className="site-info">
          <a href="http://ensemble-ga.surge.sh" target='_blank'><img src={require('../assets/p3.png')} /></a>
          <p>A foruming website with full authentification functionality and the ability to create, read, edit, and delete threads; along with commentting on existing threads.
            <br /> <a href="https://github.com/sorensoroush/Ensemble" target='_blank'>Github</a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Portfolio
