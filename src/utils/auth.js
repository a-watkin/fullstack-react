import Autho0Lock from 'auth0-lock'

const authDomain = 'tictacturing.eu.auth0.com'
const clientId = 'qxUzj8bGiQGcwPYsGsMjomvI6UYElS2o'

class AuthService {
    constructor() {
        this.lock = new Auth0Lock(clientId, authDomain, {
            auth: {
                params: {
                    // openid and email available to user
                    scope: 'openid email'
                },
            },
        })

        this.showLock = this.showLock.bind(this)

        this.lock.on('authenticaed', this.authProcess.bind(this))
    
    
    
        authProcess = (authResult) => {
            console.log(authResult)
        }
    
        showLock() {
            this.lock.show()
        }


        setToken = () => {
            let {
                idToken,
                exp
            } = authFields

            localStorage.setItem('idToken', idToken)
            localStorage.setItem('exp', exp * 1000)
        }

        isCurrent = () => {
            let expString = localStorage.getItem('exp')
            if (!expString) {
                localStorage.removeItem('idToken')
                return false
            }
            let now = new Date()
            // 10 is the radix parameter
            let exp = new Date(parseInt(expString, 10))
            if(exp<now) {
                this.logout()
                return false
            } else {
                return true
            }
        }


        getToken() {
            let idToken = localStorage.getItem('idToken')
            if(this.isCurrent() && idToken) {
                return idToken
            } else {
                localStorage.removeItem('idtoken')
                localStorage.removeItem('exp')
                return false
            }
        }

        logout = () => {
            localStorage.removeItem('idtoken')
            localStorage.removeItem('exp')
            location.reload()
        }
    }


}