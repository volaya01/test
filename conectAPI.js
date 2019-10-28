const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

var conect = new XMLHttpRequest();

conect.open('GET', 'https://eyavqewaud.execute-api.ap-northeast-1.amazonaws.com/production/animals', true);
conect.onload = function() {

    var data = JSON.parse(this.response);

    if(conect.status >= 200 && conect.status < 400) {
        data.forEach(animal => {
            const cont = document.createElement('div');
            cont.setAttribute('class', 'cont');

            const h1 = document.createElement('h1');
            h1.textContent = `My name is ${animal.animal_name}`;
            h1.setAttribute('class','tit');

            const a = document.createElement('a');
            animal.animal_kind = animal.animal_kind.substring(0, 300);
            a.textContent = `I'm to ${animal.animal_kind} I'am ${animal.animal_age} years old`;
            a.setAttribute('class','desc')

            const logo = document.createElement('img');
            logo.src = animal.animal_picture;
            logo.setAttribute('class', 'imAni')


            container.appendChild(cont);
            cont.appendChild(h1);
            cont.appendChild(a);
            cont.appendChild(logo);

        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `it's not working!`;
        app.appendChild(errorMessage);
    }
}
conect.send();





