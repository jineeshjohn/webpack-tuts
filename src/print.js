import axios from 'axios';
export default function printMe() {
    console.log('I we are get called from print.js!');
    fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'jjj',
          body: 'kkk',
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))

}