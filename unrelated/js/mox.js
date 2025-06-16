const API_KEY = 'anzS8To993G4x+ftlIzJ7g==zH9kGJJPRNbyA7fA';

$(function() {
    includeNavbar();

    $("#start-button").click(function() {
        let output = $("#p-output");
        
        let url = 'https://api.api-ninjas.com/v1/hobbies'
        let options = {
            method: 'GET',
            headers: { 'x-api-key': API_KEY }
        }

        fetch(url, options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            output.html(`Hobby: ${data.hobby}<br>Link:<a href='${data.link}'>${data.link}</a><br>Category: ${data.category}`);
        })
        .catch(error => {
            console.error(error);
        });
    });
});