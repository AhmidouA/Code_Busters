
export const endpoints = {
    login: "api/user/login",
    register: "api/user/regisrer",
    profil: "api/user/profil/{id}",
    helloworld: "api/",
}


/**
 * Function that centralizes fetch requests.
    The request method is detected automatically
    She works with the above endpoints.
 * @param endpoint property of above endpoints
 * @param datas object for method POST body
 * @returns result of request (will probably change to update the context)
 */
export  function requestAPI(endpoint: string, datas?: Object, id?: string){
    let url = `http://localhost:3006/${endpoint}`;
    let options: RequestInit = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    }
    let result;
    
    if(id){
        url.replace('{id}', id);
    }

    if(datas){
        options.method = 'POST';
        options.body = JSON.stringify(datas);
    }   
    
    return fetch(url, options)
}
        
        
    