export const login = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`) // Per simulare il login, siccome json-server non ha un endpoint dedicato, faremo una semplice GET /users filtrando per email e password, se troviamo un utente con quelle credenziali allora possiamo considerare il login avvenuto, altrimenti no

      const data = await response.json()

      if (data.length > 0) dispatch({ type: "LOGIN", payload: data[0] })
    } catch (error) {
      console.log(error)
      alert("INVALID CREDENTIALS")
    }
  }
}

export const logout = () => ({ type: "LOGOUT" })
