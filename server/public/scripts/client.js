console.log('client.js sourced');

$( document ).ready( onReady );

let newJokes;

function onReady() {
    console.log('DOM ready');
// getJokes called to populate DOM onReady
    getJokes();

    // submit listener
    $('#addJokeButton').on('click', onSubmit)

}

function onSubmit() {
    // console.log('in on submit')


    let whoseJoke = $('#whoseJokeIn').val()
    let jokeQuestion = $('#questionIn').val()
    let punchLine = $('#punchlineIn').val()

    let newJoke = {
        whoseJoke,
        jokeQuestion,
        punchLine
    }

    // console.log(newJoke)

    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: newJoke
    }).then((response) => {
        // console.log('in post!')
        getJokes();
    }).catch((error) => {
        alert('client side error')
    })
    
    // clear input fields
    $('input').val('')
}

// function to retrieve new joke array and call render
function getJokes() {
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then((response) => {
        newJokes = response
        console.log('new joke array: ', newJokes)
        render()
    })
}

function render() {
    // clear current jokes
    // $('#outputDiv').empty();

    for (let joke of newJokes) {
        $('#outputDiv').append(`
        <div>${joke.jokeQuestion} 
        ${joke.punchLine} 
         - ${joke.whoseJoke}
        </div>
        `);

        // console.log('question: ', joke.jokeQuestion)
        // console.log('joke loop: ', joke)
    }

}