import {extendObservable } from 'mobx'


/**
 * UserStore
 */
class UserStore{
    constructor(){
        extendObservable(this, {
            loading: true,
            isLoggedIn: false,
            username: "",
            userID: -1,
            userPermissions: -1,
            userToken: ""
        })
    }
}

export default new UserStore();
