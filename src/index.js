import Navigo from 'navigo';

import LoginController from './controllers/login'

var router = new Navigo(null, false, '#');

router
  .on({
    'login': LoginController,
    'chatroom': function () {
        
    },
    '*': function () {
    
    }
  })
  .resolve();
// api.getUser().then((json) => {
    // let user = (json.results[0])

    // let output = Mustache.render(document.querySelector('#user').innerHTML, {
    //     firstname: 'John',
    //     lastname: 'Joe',
    //     dob: '2001'
    // });

    // document.querySelector('#user').innerHTML = output


    // document.querySelector('#firstname').innerHTML = user.name.first
    // document.querySelector('#lastname').innerHTML = user.name.last
    // document.querySelector('#dob').innerHTML = user.dob.date
    // document.querySelector('#picture').setAttribute('src', user.picture.medium)

// })