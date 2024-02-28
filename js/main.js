const name = document.getElementById("name");

const movielist = [
    document.getElementById("movie1"),
    document.getElementById("movie2"),
    document.getElementById("movie3"),
    document.getElementById("movie4"),
    document.getElementById("movie5")
];

const button = document.getElementById("register");

function countMovie(){
    let count = 0;
    for (let i = 0; i < 5; i++){
        if (movielist[i].checked === true) {
            count++;
        }
    }
    return count;
}

function favorite(){
    let count = countMovie();
    alert(name.value + "님, 저와 " + count + "개의 취향이 같으시네요!");
}

button.addEventListener("click", favorite);