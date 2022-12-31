import React, { useState, useEffect } from "react";

export default function App() {
  const [inputName, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [cityName, setCityName] = useState("");
  const [weatherImg, setWeatherImg] = useState("rain.png");
  const [weather, setWeather] = useState("");
  const [humidity, setHumidity] = useState("");
  const [countryName, setCountryName] = useState("");
  const [HeightIni, setHeight] = useState(window.outerHeight);
  useEffect(() => {
    setHeight(window.outerHeight);
  }, []);
  console.log(window.outerHeight);

  const handleFetchMethod = async (e) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputName}&appid=c210ebb89d8e2f02c2d34258c1947a02`
      );
      const res2 = await res.json();
      setCityName(res2.name);
      setTemp((res2.main.temp - 273.15).toFixed(1));
      setCountryName(res2.sys.country);
      setWeather(res2.weather[0].main);
      setHumidity(res2.main.humidity);
      console.log(res2);
      if (res2.weather[0].main === "Clouds") {
        setWeatherImg("cloudy.png");
      } else if (
        res2.weather[0].main === "Clear" ||
        res2.weather[0].main === "Sunny"
      ) {
        setWeatherImg("sunny.png");
      } else if (res2.weather[0].main === "Rain") {
        setWeatherImg("rain.png");
      } else if (
        res2.weather[0].main === "Haze" ||
        res2.weather[0].main === "Smoke"
      ) {
        setWeatherImg("haze.png");
      } else {
        setWeatherImg("sunny.png");
      }
      // console.log(res2);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <style jsx="true">{`
        .main-container {
          width: 100%;
          height: 100%;
          background-image: url(backgroud.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          overflow: hidden;
        }
        .width-container {
          width: min(100% - 30px, 1100px);
          height: 100%;
          margin-inline: auto;
          align-items: center;
          display: flex;
          justify-content: space-between;
          color: white;
        }
        input {
          width: 300px;
          background: none;
          border: none;
          border-bottom: 2px solid white;
          margin-right: 10px;
          outline: none;
          color: white;
          padding: 3px;
        }
        .layout-parent {
          display: flex;
          justify-content: space-between;
        }
        .search-btn {
          background-color: white;
          border: none;

          display: flex;
          align-item: center;
          justify-content: center;
          // height: 230px;
          border-radius: 5px;
          padding: 4px 25px;
        }
        // .left-section {
        //   background-color: black;
        // }
        .input-div {
          display: flex;
          align-items: center;
        }
        .main-shower-details {
          // width: 190px;
          // height: 240px;
          position: relative;
          padding: 10px 35px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          // border: 3px solid rgba(200, 200, 200, 0.2);
          text-align: center;

          z-index: 10;
          // background-color: black;
          // border-radius: 10px;
        }
        .main-shower-details::before {
          content: "";
          // border: 3px solid rgba(200, 200, 200, 0.2);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(200, 200, 200, 0.2);
          filter: blur(2px);
          border-radius: 10px;

          z-index: -9;
        }
        .img-weather {
          width: 100px;
          margin-bottom: 10px;
          margin-inline: auto;
        }
        h1 {
          font-weight: 700;
          font-size: 4em;
        }
        .city-name {
          font-size: 1.2em;
          font-weight: 200;
        }
        .time-date {
          font-weight: 200;
          font-size: 1.2em;
        }
        .details-container {
          width: 100%;
          margin-top: 30px;
        }
        .mobile-details {
          display: none;
        }
        .layout {
          display: none;
        }
        .detail {
          width: 100%;
          justify-content: space-between;
          display: flex;
          z-index: 10;
          position: relative;
          align-items: center;
          padding: 0 15px;
          height: 40px;
          margin-top: 10px;
        }
        .detail::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(55, 87, 64, 0.3);
          filter: blur(1px);
          border-radius: 5px;

          z-index: -9;
        }
        .detail-heading {
          display: flex;
          align-items: center;
        }
        .detail-img {
          height: 25px;
          width: auto;
        }
        .heading-weather-details {
          margin-left: 10px;
        }
        @media only screen and (max-width: 750px) {
          .left-section {
            width: 100%;
            // display: none;
          }
          .layout-parent {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .main-shower-details {
            font-size: 0.9em;
          }
          .details-container {
            display: none;
          }
          .width-container {
            flex-direction: column;
            align-items: none;
            // justify-content: right;
          }
          .mobile-details {
            display: block;
            width: 100%;
            margin-bottom: 19px;
          }
          .input-div {
            margin-top: 10px;
            width: 100%;
          }
          .input-div input {
            width: 100%;
          }
          .layout {
            display: block;
          }
          .search-btn {
            padding: 10px;
            // font-size: 0.1em;
            border-radius: 50%;
          }
        }
      `}</style>
      <div className="main-container">
        <div className="width-container">
          <div className="left-section">
            <div className="input-div">
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <button
                className="search-btn"
                onClick={(e) => {
                  handleFetchMethod(e);
                }}
              >
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>
            <div className="details-container">
              <div className="detail">
                <span className="detail-heading">
                  <img className="detail-img" src={`${weatherImg}`} alt="" />
                  <span className="heading-weather-details">Temperature</span>
                </span>
                {cityName ? (
                  <span className="detail-para">{temp}</span>
                ) : (
                  <span className="detail-para">N/A</span>
                )}
              </div>

              <div className="detail">
                <span className="detail-heading">
                  <img className="detail-img" src={`${weatherImg}`} alt="" />
                  <span className="heading-weather-details">Humidity</span>
                </span>
                {cityName ? (
                  <span className="detail-para">{humidity}</span>
                ) : (
                  <span className="detail-para">N/A</span>
                )}
              </div>
              <div className="detail">
                <span className="detail-heading">
                  <img className="detail-img" src={`${weatherImg}`} alt="" />
                  <span className="heading-weather-details">Weather</span>
                </span>
                {cityName ? (
                  <span className="detail-para">{weather}</span>
                ) : (
                  <span className="detail-para">N/A</span>
                )}
              </div>
            </div>
          </div>
          <div className="layout-parent">
            <div className="layout"></div>
            <div className="main-shower-details">
              {cityName ? <h1>{temp}</h1> : <h1>N/A</h1>}
              {cityName ? (
                <p className="city-name">{cityName}</p>
              ) : (
                <p className="city-name">N/A</p>
              )}
              <img
                className="img-weather"
                src={`${weatherImg}`}
                alt="Weather Image"
              />
              {cityName ? (
                <p className="time-date">Country : {countryName}</p>
              ) : (
                <p className="time-date">Country : N/A</p>
              )}
            </div>
          </div>
          <div className="mobile-details">
            <div className="detail">
              <span className="detail-heading">
                <img className="detail-img" src={`${weatherImg}`} alt="" />
                <span className="heading-weather-details">Temperature</span>
              </span>
              {cityName ? (
                <span className="detail-para">{temp}</span>
              ) : (
                <span className="detail-para">N/A</span>
              )}
            </div>

            <div className="detail">
              <span className="detail-heading">
                <img className="detail-img" src={`${weatherImg}`} alt="" />
                <span className="heading-weather-details">Humidity</span>
              </span>
              {cityName ? (
                <span className="detail-para">{humidity}</span>
              ) : (
                <span className="detail-para">N/A</span>
              )}
            </div>
            <div className="detail">
              <span className="detail-heading">
                <img className="detail-img" src={`${weatherImg}`} alt="" />
                <span className="heading-weather-details">Weather</span>
              </span>
              {cityName ? (
                <span className="detail-para">{weather}</span>
              ) : (
                <span className="detail-para">N/A</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
