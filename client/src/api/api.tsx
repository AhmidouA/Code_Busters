


export const endpoints = {
    user: "user",
    home: "home"
}

export  function requestAPI(endpoint: string, datas?: Object){
    let url = `http://localhost:3000/${endpoint}`;
    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
        body: ""
    }
    let result;
    
    if(datas){
        options.method = 'POST';
        options.body = JSON.stringify(datas);

    }   
    
    fetch(url, options)
        .then(res => res.json())
        .then(res => result = res)
        
    return result;
}