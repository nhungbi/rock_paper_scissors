
function SignUpPage () {

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('submitted: ' + event.target[0].value , event.target[1].value);
    //     console.dir(event.target)
    
    //     axios.post('/signup/', {
    //       'username': event.target[0].value,
    //       'email':event.target[1].value,
    //       'password': event.target[2].value
    //     }).then((response) => {
    //       console.log(response.data)
    //     })
    
    //   }

    return (
        
        <div>
            <h1> SignUp Page</h1>
        <form  onSubmit={handleSubmit} >
            <label>
            Name: 
            <input type="text" name="name" />
            </label>
            <label>
            Email:
            <input type="email" name="email" />
            </label>
            <label>
            Password:
            <input type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
        </form> 

        </div>
    )
}

export default HomePage