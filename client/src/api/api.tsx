
export const endpoints = {
    user: "user",
    helloworld: "api/",
}

export  function requestAPI(endpoint: string, datas?: Object){
    let url = `http://localhost:3006/${endpoint}`;
    let options: RequestInit = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    }
    let result;
    
    if(datas){
        options.method = 'POST';
        options.body = JSON.stringify(datas);
    }   
    
    fetch(url, options)
        .then(res => res.json())
        .then(res => {
                console.log(res.message)
                result = res;
            }
        )
        
    return result;
}