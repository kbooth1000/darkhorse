function encodeHTML(str) {

  var aStr = str.split(''),

    i = aStr.length,

    aRet = [];
  while (--i) {

    var iC = aStr[i].charCodeAt();

    if (iC < 65 || iC > 127 || (iC > 90 && iC < 97)) {

      aRet.push('&#' + iC + ';');

    } else {

      aRet.push(aStr[i]);

    }

  }

  return aRet.reverse().join('');

}

async function check2() {

  let eventAPIResponse = await fetch(

    `https://give.choa.org/site/CROrgEventAPI?api_key=wDB09SQODRpVIOvX&response_format=json&mode=cors&method=getEvent&event_id=101902&v=1.0`

  );

  let jsonResponse = await eventAPIResponse.json();

  if (jsonResponse) {

    let event = jsonResponse.getEventResponse.event;

    let {

      location,

      street1,

      street2,

      city,

      stateProv,

      zip

    } = event.eventLocation;

    let eventDate = event.eventDate.startDate;

    console.log(event);

    document.querySelector('h3.event-name').innerText = event.name;

    let options = {

      weekday: 'long',

      year: 'numeric',

      month: 'long',

      day: 'numeric'

    }

    let eventLocationHTML = `

          ${new Date(eventDate.substr(0, eventDate.indexOf('-', 2))).toLocaleDateString("en-US", options)}

      `;

    document.querySelector('h4.event-date').innerHTML = encodeHTML(eventLocationHTML);

    document.querySelector('p.event-description').innerHTML = event.description;

    let eventAddress = `

          <strong>${location}</strong><br />

          <span class="street1">${street1}</span><br />

         ${(typeof street2 === 'string') ? '<span class="street2">' + street2 + '</span><br />' : ''}

          <span class="cityStateZip">${city} ${stateProv}, ${zip}</span>

      `

    document.querySelector('.event-location').innerHTML = eventAddress;






  } else {

    console.log('error::: ', jsonResponse);

  }

}







async function check3() {

  let donationAPIResponse = await fetch(

    `https://give.choa.org/site/CRDonationAPI?api_key=wDB09SQODRpVIOvX&response_format=json&mode=cors&method=getDonationFormInfo&form_id=3981&v=1.0`

  );

  let jsonResponse = await donationAPIResponse.json();

  if (jsonResponse) {

    console.log('donation::: ', jsonResponse);


  } else {

    console.log('error::: ', jsonResponse);

  }

}

/*  await fetch(url, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *client
  body: JSON.stringify(data) // body data type must match "Content-Type" header
});
return await response.json(); // parses JSON response into native JavaScript objects
}  */

async function checkDonateAPI() {

  let donationAPIResponse = await fetch('https://give.choa.org/site/CRDonationAPI',
    {
      api_key: 'wDB09SQODRpVIOvX',
      response_format: 'json',
      mode: 'cors',
      method: 'donate',
      form_id: '2660',
      v: '1.0',
      'billing.address.city': 'Atlanta',
      'billing.address.state': 'GA',
      'billing.address.street1': '116+Vanira',
      'billing.address.zip': '30315',
      'billing.name.first': 'Kyle',
      'billing.name.last': 'Booth',
      'donor.email': 'kyle.booth@choa.org', 'level_id': '5825'
    }
  );

  let jsonResponse = await donationAPIResponse.json();

  if (jsonResponse) {

    console.log('donation::: ', jsonResponse);


  } else {

    console.log('error::: ', jsonResponse);

  }

}





document.addEventListener('DOMContentLoaded', () => {

  check2();

  check3();

  checkDonateAPI();

});