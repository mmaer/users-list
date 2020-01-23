
export const fetchUsers = () =>
         window
           .fetch('https://jsonplaceholder.typicode.com/users', {
             method: 'GET',
             headers: {
               'content-type': 'application/json;charset=UTF-8'
             }
           })
           .then(response => response.json())
           .then(users => users.map(({ id, name, username }) => ({
              id,
              name,
              username
            }))
           );