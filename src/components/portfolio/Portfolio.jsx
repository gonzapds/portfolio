import React from 'react';
import './Portfolio.css';
import Clock from '../../assets/25 5 clock.png';
import calculator from '../../assets/calculator.png';
import BarChart from '../../assets/D3 Bar Chart.png';
import Choropleth from '../../assets/D3 Choropleth.png';
import heatmap from '../../assets/D3 heatmap.png';
import drum from '../../assets/Drum machine.png';
import product from '../../assets/product landing.png';
import Quote from '../../assets/Random Quote.png';

const data = [
  {
    id:1,
    image: Clock,
    title: "25 + 5 Clock",
    codepen: "https://codepen.io/gonsito/full/rNvwzrV"
  },
  {
    id:2,
    image: calculator,
    title: "JavaScript Calculator",
    codepen: "https://codepen.io/gonsito/pen/RwyVBXV"
  },
  {
    id:3,
    image: BarChart,
    title: "D3 Barchart",
    codepen: "https://codepen.io/gonsito/pen/NWMYZZJ"
  },
  {
    id:4,
    image: Choropleth,
    title: "D3 Choropleth map",
    codepen: "https://codepen.io/gonsito/pen/JjvZjBY"
  },
  {
    id:5,
    image: heatmap,
    title: "D3 Heatmatp",
    codepen: "https://codepen.io/gonsito/pen/ExLLpYM"
  },
  {
    id:6,
    image: drum,
    title: "Drum Machine",
    codepen: "https://codepen.io/gonsito/pen/KKRWqKR"
  },
  {
    id:7,
    image: product,
    title: "Product Landing Page",
    codepen: "https://codepen.io/gonsito/pen/KKZRpKz"
  },
  {
    id:8,
    image: Quote,
    title: "Random Quote Generator",
    codepen: "https://codepen.io/gonsito/pen/MWGyVpp"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, codepen}) => {
            return(
        <article className="portfolio_item" key={id}>
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <a href={codepen} className='btn' target="_blank">CodePen</a>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio