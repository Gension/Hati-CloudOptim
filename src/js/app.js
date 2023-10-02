import '../scss/style.scss';

function loadServer (i) {
    // Je récupère mon template
    let template = document.querySelector('#server-template');
    //Je récupère mon "holder"
    let servers = document.querySelector('.servers');

    let clone = document.importNode(template.content, true);

    // ----------------------------------------------------------------------
    clone.querySelector('.server-name').textContent = `cloud` + i;

    for(let elm of clone.querySelectorAll('.progress')) {
        const val = Math.floor(Math.random() * 100);
        elm.querySelector('span').textContent = val + '%';
        elm.querySelector('progress').value = val;
    }

    // ----------------------------------------------------------------------

    let button = clone.querySelector('.server-header button');

    button.addEventListener('click', function(){
        alert("Le serveur a été ajouté au favoris");
        button.classList.add('enabled');
    
    });
    servers.appendChild(clone);
}


for(let i = 0; i < 13; i++){
    loadServer(i);
}