type AuthUtilType = {
  isAuthenticated: boolean
  checkAuth: () => boolean
  logIn: (service: string) => void
  logOut: () => void
}

export const authUtil: AuthUtilType = {
  isAuthenticated: false,

  checkAuth(): boolean {
    return this.isAuthenticated
  },

  logIn(service: string) {
    console.log(`Successfull login with ${service}!`)
    this.isAuthenticated = true
  },

  logOut() {
    this.isAuthenticated = false
  },
}
