import React from 'react';

import style from './App.module.css';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from './api';

import coronaImage from './images/covid.jpg';


class App extends React.Component {
   state = { 
     data: {},
     country:'',
    }
  async componentDidMount (){
    const fetchData1 =  await fetchData();

    this.setState({data: fetchData1});
  }

  handleCountryChange = async (country) =>{

    const fetchData1 =  await fetchData(country);
   this.setState({ data: fetchData1, country:country });

  }

  render() { 
    const { data, country } = this.state;
    return ( 
      <div className={style.container}>
        <img className={style.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />

      </div>
     );
  }
}
 
export default App;

