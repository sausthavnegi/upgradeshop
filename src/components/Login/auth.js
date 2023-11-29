




const loginPromise = async(username,password) => {

    try{
        const credentials  = window.btoa(`${username}:${password}`);
        const requestBody = JSON.stringify({ username: username, password: password });
        
        const rawResponse = await fetch('http://localhost:8080/api/auth/signin', {
            method: 'POST',
            //credentials: 'include',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8",
                authorization: `Basic ${credentials }`,
            },
           body:requestBody,
        });

        const result = await rawResponse.json();
        //result= result ?JSON.parse(result) :{};

        if(rawResponse.ok){
            window.sessionStorage.setItem('user-details',JSON.stringify(result));
            window.sessionStorage.setItem('access-token',rawResponse.headers.get('token'));
            console.log('User logged IN')
            
        }else{
            const error  = new Error();
            error.message = result.message || 'Something went wrong'
            console.error(error.message);
        }
        
    }catch(error){
        console.error('An error occured in login :',error);
    }
}

export {loginPromise}