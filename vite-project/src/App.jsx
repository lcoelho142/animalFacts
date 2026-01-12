import { animals } from './animals';
import './App.css'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = '';
const background = (
  <img 
    className='background'
    alt='ocean'
    src='/images/ocean-background.svg'
  />
);

const images = [];
for (const animal in animals) {
  const image = (
    <img
    onClick={displayFact} 
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button'
    />
  );
  images.push(image)
}


function displayFact(e) {
  const name = e.target.alt;
  const facts = animals[name].facts;
  const index = Math.floor(Math.random() * facts.length);
  const fact = facts[index];
  const factEl = document.getElementById('fact');
  if (factEl) factEl.innerHTML = fact;
}

const showBackground = true;


const animalFacts = (
  <>
      <h1>
        { title === '' ? `Click an animal for a fun fact` : title }
      </h1>
      { showBackground ? background : null }
      <p id='fact'></p>
      <div className='animals'>{images}</div>
  </>
)

root.render(animalFacts);

