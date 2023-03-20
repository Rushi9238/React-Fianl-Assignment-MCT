export async function usersData(setUser,gender) {
    const api = await fetch(`https://randomuser.me/api/?results=20&gender=${gender}`)
    const response = await api.json()
    setUser(response.results)

  }