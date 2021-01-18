interface user {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    contact: string
}

interface usersTable {
    headers: string[],
    usersList: user[]
}