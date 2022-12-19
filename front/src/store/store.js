const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			todos: null,
	
		},
		actions: {
					
				getTodos: () => {
					fetch("https://8080-4geeksacademy-htmlhello-4a3od9dm7ae.ws-us79.gitpod.io/")					
					.then(res => res.json())
					.then(result => setStore({todos: result}))
				},

				createTodos: (data,e,setListo, listo) => {
					e.preventDefault()
					console.log('data', data)
					let info = { method: 'POST',
					body: JSON.stringify(data),
					headers:{
						'Content-Type': 'application/json'
					} };
					fetch("https://8080-4geeksacademy-htmlhello-4a3od9dm7ae.ws-us79.gitpod.io/create_todo", info)
					.then(res => res.json())
					.then(result => console.log(result))

					setListo(!listo)
				},

				},
			
			}
		};



export default getState;