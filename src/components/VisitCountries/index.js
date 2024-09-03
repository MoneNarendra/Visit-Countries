import {Component} from 'react'

import './index.css'

class VisitCountries extends Component {
  state = {
    countriesList: [],
  }

  componentDidMount() {
    const {initialCountriesList} = this.props
    this.setState({countriesList: initialCountriesList})
  }

  addVistList = id => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(eachEle => {
        if (eachEle.id === id) {
          return {...eachEle, isVisited: true}
        }
        return eachEle
      }),
    }))
  }

  removeVistList = id => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(eachEle => {
        if (eachEle.id === id) {
          return {...eachEle, isVisited: false}
        }
        return eachEle
      }),
    }))
  }

  render() {
    // const {initialCountriesList} = this.props
    const {countriesList} = this.state
    const visitedCountries = countriesList.filter(
      eachCoun => eachCoun.isVisited === true,
    )
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1>Countries</h1>
          <ul className="countries-list">
            {countriesList.map(eachEle => {
              const onClickVist = () => {
                this.addVistList(eachEle.id)
              }
              return (
                <li key={eachEle.id}>
                  <p>{eachEle.name}</p>
                  {eachEle.isVisited ? (
                    <p className="visited-text">Visited</p>
                  ) : (
                    <button
                      type="button"
                      className="visit-button"
                      onClick={onClickVist}
                    >
                      Visit
                    </button>
                  )}
                </li>
              )
            })}
          </ul>
          <h1>Visited Countries</h1>
          {visitedCountries.length > 0 ? (
            <ul className="visited-countries-list-container">
              {visitedCountries.map(eachCount => {
                const onClickRemove = () => {
                  this.removeVistList(eachCount.id)
                }
                return (
                  <li className="visited-countrie" key={eachCount.id}>
                    <img src={eachCount.imageUrl} alt="thumbnail" />
                    <div className="visited-countrie-text-container">
                      <p>{eachCount.name}</p>
                      <button
                        type="button"
                        className="remove-button"
                        onClick={onClickRemove}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className="visited-countries-container">
              <p>No Countries Visited Yet!</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default VisitCountries
