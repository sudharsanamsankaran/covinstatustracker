import React from 'react';
import { Cards, CountryPicker, Chart, StateTable } from '../exports';
import { fetchData } from '../api';
import styles from './homepage.module.css';
import image from '../images/image.png'

class Homepage extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        {country?<StateTable country={country} />:null}
      </div>
    );
  }
}

export default Homepage;