export default {
  getWeather:function(query){
    return fetch ( `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=89e03da76afa1f1ca74f57becbb1ae3d`,{
      "method":"GET"
    }).then(response =>{
      return response.json()
    }).catch(err =>{
      console.log(err)
    })
  },
  getFiveDayWeather: function(lat,lon){
    return fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current&appid=89e03da76afa1f1ca74f57becbb1ae3d`,{
      "method":"GET"
    }).then(response =>{
      return response.json()
    }).then(data=>{
      console.log(data.daily);

      return data.daily;
    }).catch(err => {
      console.log(err)
    })
  }
}



// export default {
//   getWeather:function(query,callback){
//     return fetch ( `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=89e03da76afa1f1ca74f57becbb1ae3d`,{
//       "method":"GET"
//     }).then(response =>{
//       return response.json()
//     }).then(data=>{
//       console.log(data);
//       callback(data);
//     }).
//     catch(err =>{
//       console.log(err)
//     })
//   }
// }