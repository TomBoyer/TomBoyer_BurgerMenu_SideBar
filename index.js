//déclarer les constantes utiles : la sidebar qui se décale + le burger menu

const toggleButton = document.getElementById('toggle-button');
const sideBar = document.getElementById('side-bar');

//déclarer fonction pour faire entrer/sortir la side bar en cliquant sur le burger menu

toggleButton.addEventListener('click', (show) => {
sideBar.classList.toggle('active');
});

//déclarer fonction pour faire entrer la sidebar si click sur le main content

const content = document.querySelector('.content');

content.addEventListener('click', () => {
    sideBar.classList.remove('active');
})