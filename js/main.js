const name = document.getElementById("name");

const checkbox1 = document.getElementById("movie1");
const checkbox2 = document.getElementById("movie2");
const checkbox3 = document.getElementById("movie3");
const checkbox4 = document.getElementById("movie4");
const checkbox5 = document.getElementById("movie5");

const button = document.getElementById("register");

function countMovie(){
    let count = 0;
    if (checkbox1.checked === true) {
        count++;
    }
    if (checkbox2.checked === true) {
        count++;
    }
    if (checkbox3.checked === true) {
        count++;
    }
    if (checkbox4.checked === true) {
        count++;
    }
    if (checkbox5.checked === true) {
        count++;
    }
    return count;
}

function favorite(){
    let count = countMovie();
    alert(name.value + "님, 저와 " + count + "개의 취향이 같으시네요!");
}

button.addEventListener("click", favorite);