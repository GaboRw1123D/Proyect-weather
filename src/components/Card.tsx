const Card = ({ loadingData, showData, weather, forecast }) => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + '/' + month + '/' + year;

  let url = "";
  let iconUrl= "";

  let iconUrl1 = "";
  let iconUrl2 = "";
  let iconUrl3 = "";
  let iconUrl4 = "";
  let iconUrl5 = "";

  let forecastDate1 = ""
  let forecastDate2 = ""
  let forecastDate3 = ""
  let forecastDate4 = ""
  let forecastDate5 = ""

 if (loadingData) {
    return;
  }

  if(showData){
   url= "https://openweathermap.org/img/w/";
   iconUrl = url + weather.weather[0].icon + ".png" 

   iconUrl1 = url + forecast.list[7].weather[0].icon + ".png"
   iconUrl2 = url + forecast.list[15].weather[0].icon + ".png"
   iconUrl3 = url + forecast.list[23].weather[0].icon + ".png"
   iconUrl4 = url + forecast.list[31].weather[0].icon + ".png"
   iconUrl5 = url + forecast.list[39].weather[0].icon + ".png"

   forecastDate1 = forecast.list[7].dt_txt.substring(8, 10) + '/' + forecast.list[7].dt_txt.substring(5, 7) + '/' + forecast.list[7].dt_txt.substring(0, 4) + ' ' + forecast.list[7].dt_txt.substring(11, 13);
   forecastDate2 = forecast.list[15].dt_txt.substring(8, 10) + '/' + forecast.list[15].dt_txt.substring(5, 7) + '/' + forecast.list[15].dt_txt.substring(0, 4) + ' ' + forecast.list[15].dt_txt.substring(11, 13);
   forecastDate3 = forecast.list[23].dt_txt.substring(8, 10) + '/' + forecast.list[23].dt_txt.substring(5, 7) + '/' + forecast.list[23].dt_txt.substring(0, 4) + ' ' + forecast.list[23].dt_txt.substring(11, 13);
   forecastDate4 = forecast.list[31].dt_txt.substring(8, 10) + '/' + forecast.list[31].dt_txt.substring(5, 7) + '/' + forecast.list[31].dt_txt.substring(0, 4) + ' ' + forecast.list[31].dt_txt.substring(11, 13);
   forecastDate5 = forecast.list[39].dt_txt.substring(8, 10) + '/' + forecast.list[39].dt_txt.substring(5, 7) + '/' + forecast.list[39].dt_txt.substring(0, 4) + ' ' + forecast.list[39].dt_txt.substring(11, 13);
  }

  let urlImage = '';

  if (weather && weather.main && typeof weather.main.temp === 'number') {
    let temperature = (weather.main.temp - 273.15).toFixed(1);
  
    if (temperature < 15) {
      urlImage =
        'https://images.pexels.com/photos/3369234/pexels-photo-3369234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    } else {
      urlImage =
        'https://images.pexels.com/photos/9368273/pexels-photo-9368273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    }
  } else {
    console.error('Invalid weather data:', weather);
  }
  return (

    <div>
      {showData ? (
          <div className=' mx-auto'>
              <div className='col-6 offset-3'>
                <h1 className='title text-white'>{weather.name}</h1>
                <p className='date text-white'>{date}</p>
                <h1 className='card-temp text-white'>{(weather.main.temp -273.15).toFixed(1)}°C</h1>
                <p className='desc text-white'>
                  <img  src={iconUrl} alt="icon"/>
                  {weather.weather[0].description}
                </p>
                
                <div className='body text-start mt-2'>
                  <h5 className='max-text text-white'>Temperatura maxima: {(weather.main.temp_max -273.15).toFixed(1)}°C</h5>
                  <h5 className='text text-white'>Temperatura minima: {(weather.main.temp_min -273.15).toFixed(1)}°C</h5>
                  <h5 className='text text-white'>Sensación termica: {(weather.main.feels_like -273.15).toFixed(1)}°C</h5>
                  <h5 className='text text-white'>Humedad: {weather.main.humidity}%</h5>  
                  <h5 className='text text-white'>Velocidad del viento: {weather.wind.speed}m/s</h5>  

                </div>
                <div>
                  <img
                  src={urlImage} 
                  alt="Weather Image"
                  className='mx-auto img-fluid rounded-start  img text-center'
                />
                </div>


              </div>
              
              <div className='col-4 mx-auto card-body overflow-auto body-2'> 
               
               <div className="button">
               <button type="button" className="btn" data-bs-toggle="button">One day later</button>
               </div>

                  <div className='col'> 
                  <p>{forecastDate1}h</p>
                      <p className='description'><img src={iconUrl1} alt='icon'/>{forecast.list[7].weather[0].description}</p>
                      <p className='temp'>{(forecast.list[7].main.temp - 273.15).toFixed(1)}°C</p>
                   </div>
                          
                    <hr />
                    
                    <div className="button">
                       <button type="button" className="btn">Two days later</button>
                    </div>

                   <div className='col'> 
                      <p>{forecastDate2}h</p>
                      <p className='description'><img src={iconUrl2} alt='icon'/>{forecast.list[15].weather[0].description}</p>
                      <p className='temp'>{(forecast.list[15].main.temp - 273.15).toFixed(1)}°C</p>
                   </div>

                   <hr />

                   <div className="button">
                       <button type="button" className="btn">Three days later</button>
                    </div>

                   <div className='col'> 

                      <p>{forecastDate3}h</p>
                      <p className='description'><img src={iconUrl3} alt='icon'/>{forecast.list[23].weather[0].description}</p>
                      <p className='temp'>{(forecast.list[23].main.temp - 273.15).toFixed(1)}°C</p>
                   </div>

                   <hr />

                   <div className="button">
                       <button type="button" className="btn">Four days later</button>
                    </div>

                   <div className='col'> 
                      <p>{forecastDate4}h</p>
                      <p className='description'><img src={iconUrl4} alt='icon'/>{forecast.list[31].weather[0].description}</p>
                      <p className='temp'>{(forecast.list[31].main.temp - 273.15).toFixed(1)}°C</p>
                   </div>

                   <hr />

                   <div className="button">
                       <button type="button" className="btn">Five days later</button>
                    </div>

                   <div className='col'> 
                     <p>{forecastDate5}h</p>
                     <p className='description'><img src={iconUrl5} alt='icon'/>{forecast.list[39].weather[0].description}</p>
                     <p className='temp'>{(forecast.list[39].main.temp - 273.15).toFixed(1)}°C</p>
                   </div>

              </div>
          
          </div>
      ) : (
        <h2 className='text-center'>Sin Datos</h2>
      )}
   </div>
  );

};

export default Card;