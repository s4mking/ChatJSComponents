import render from './../render'
import randomuserapi from './../randomuserapi'

export default () => {
    //ici on rajoute la logic

    randomuserapi.getUser().then((json) => {

        let user = (json.results[0])

        render('login.html', {
            firstname: user.name.first,
            lastname: user.name.last
        })

    })

    

    // document.querySelector('')

}