// import axios from "axios";

/*
async function listarAISData(){
  let ais_code = {
    nmea: "!AIVDM,1,1,,B,1:U7d90P00trTrGjr?0>4?wRR@Lf,0*29"
  };

  let response = await fetch(
    'http://ais.tbsalling.dk/decode', {
    method: "POST",
    // dataType : "json",
    // contentType: 'application/json',
    headers: {
        // 'Accept': 'application/json',
        contentType: "application/json",
      },    
    body: JSON.stringify(ais_code)
    // body: {
    //   "nmea": "!AIVDM,1,1,,B,1:U7d90P00trTrGjr?0>4?wRR@Lf,0*29"
    // }
  }).then(response => {
    // alert(`Response: ${response}`)
    console.log(`Response: ${response}`);
  })
  .catch(err => {
    // alert(`Error: ${err}`)
    console.error(`Error: ${err}`);
  })

  let result = await response.json();
  alert(result);
}
*/


//fetch test
  // fetch(
  //   'http://ais.tbsalling.dk/decode', {
  //   method: "POST",
  //   // dataType : "json",
  //   // contentType: 'application/json',
  //   headers: {
  //       // 'Accept': 'application/json',
  //       contentType: "application/json",
  //     },    
  //   body: {
  //     "nmea": "!AIVDM,1,1,,B,1:U7d90P00trTrGjr?0>4?wRR@Lf,0*29"
  //   }
  // }).then(response => {
  //   console.log(`Response: ${response}`);
  // })
  // .catch(err => {
  //   console.error(`Error: ${err}`);
  // })



// axios test
const axios = require('axios');

const options = {
  method: 'POST',
  url: 'http://ais.tbsalling.dk/decode',
  headers: {'user-agent': 'vscode-restclient', 'content-type': 'application/json'},
  data: {nmea: '!AIVDO,1,1,,,100000?P?w<tSF0l4Q@>4?wv1P00,0*32'}
};

axios.request(options).then(
  function (response) {
  
    let obj = response.data[0];

    let message_type = obj.nmeaMessages[0].messageType //AIVDM or AIVDO
    let { latitude, longitude} = obj;
    let COG = obj.courseOverGround
    let SOG = obj.speedOverGround
    let nav_status = obj.navigationStatus

    //const obj_json = JSON.parse(obj);
    //const obj_json = JSON.parse(obj_string);
    console.log(obj);
    //console.log(longitude);
    
    return  
  
}).catch(function (error) {
  console.error(error);
});


