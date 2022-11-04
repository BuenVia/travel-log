import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import countryData from './data'

const cards = countryData.map(country => {
  return <CountryCard id={country.id} item={country}/>
})

console.log(countryData);

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="card-container">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
