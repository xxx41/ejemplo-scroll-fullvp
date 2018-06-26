//img elements (cont), nchilds, child
var cont = document.getElementsByClassName('img');
var nChilds = cont[0].parentElement.childElementCount;
var child = 0;

//flag to wait for next scroll
var stopBool = false;

cont[0].style.top = 0;

window.onload = function() {
    //transition atribute 
    for (var i=0;i<cont.length;i++) {
        cont[i].style.transition = 'all 0.7s ease-in-out';
    }
    //onwheel function
    window.addEventListener('wheel', function(e) {
        if ((e.deltaY > 0) && (child < nChilds-1) && (stopBool == false)) {
            //scroll down
            scrollDown();        
            setTimeout(stopScroll, 700);
        } else if ((e.deltaY < 0) && (child > 0)  && (stopBool == false)) {
            //scroll up
            scrollUp();
            setTimeout(stopScroll, 700);
        }
    });
}

//disable scroll function
function stopScroll() {
    stopBool = false;
}

//scroll down function
function scrollDown() {
    cont[child].style.top = '-100vh';
    cont[child+1].style.top = 0;
    child++;
    stopBool = true;
}

//scroll up function
function scrollUp() {
    cont[child-1].style.top = 0;
    cont[child].style.top = '100vh';
    child--;
    stopBool = true;
}
