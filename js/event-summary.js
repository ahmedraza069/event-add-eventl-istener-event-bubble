function clickHandler(){
    const evenHandler = document.getElementById('default-text');
    evenHandler.innerText = 'Handled by function attached on onclick attribute'
}

// option 2
document.getElementById('click-here').addEventListener('click', function clickHere() {
    document.getElementById('some-text').innerText = 'He is the biggest business man in the Bangladesh';
})

// option 2 recap
