type AuthUtilType = {
  isAuthenticated: boolean
  checkAuth: () => boolean
  logIn: () => void
  logOut: () => void
}

export const authUtil: AuthUtilType = {
  isAuthenticated: false,

  checkAuth(): boolean {
    return this.isAuthenticated
  },

  logIn() {
    this.isAuthenticated = true
  },

  logOut() {
    this.isAuthenticated = false
  },
}
