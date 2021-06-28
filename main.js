buttonRows = document.getElementsByClassName('css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu')

buttonRows.forEach(element => {
    username = element.getElementsByClassName('css-901oao css-bfa6kz r-9ilb82 r-18u37iz r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0')
    if(username.length > 1) {
        return;
    }
    else {
        username = username[0].textContent
    }

    buttonRow = element.getElementsByClassName('css-1dbjc4n r-18u37iz r-1wtj0ep r-1s2bzr4 r-1mdbhws')
    if(buttonRow.length > 1) {
        return;
    } 
    else {
        buttonRow[0].innerHTML += '<a href="#" color="color: white;">Strike ' + username +'</a>'
    }


});