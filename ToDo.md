Objectives:
    Send input requests to the server from the client
    Display response on the DOM
    Show the separation of logic between the server and client

Server:
    -[x] app.push to receive input object
        - [x] unshift object to the jokes array
    -[x] app.get to retrieve jokes array

Client:
    -[x] call getJokes to populate jokes onReady
    -[x] listener for submit button to call onSubmit
    -[] onSubmit function 
        -[x] clear input fields
        -[x] assigns variables to the input 
        - [x] creates input object to post
        -[x] ajax post to send input object
            -[x] call getJokes
        -[] getJokes
            -[] ajax get to receive jokes array
            -[] call render
    
    -[] render function 
        -[]clears alljokes array
        -[] uupdates alljokes array with new input from get