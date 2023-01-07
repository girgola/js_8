"use strict"


fetch('https://reqres.in/api/unknown', {
    method: 'GET',
})
    .then(function (params) {
        if (params.status !== 200) {
            throw params.status;
        }
        return params.json();
    })
    .then(function (paramsJs) {
        console.log(paramsJs);
        let ul = document.createElement('ul');


        paramsJs.data.forEach(element => {
            let li = document.createElement('li')
            li.textContent = element.name;
            li.style.backgroundColor = element.color

            ul.appendChild(li);
        });


        document.getElementById('color-user').appendChild(ul);
    })
    .catch(function (errorMassage) {
        console.log(errorMassage);
    })



function getUsers() {

    let requist = new XMLHttpRequest();
    requist.addEventListener('load', function () {
        let info = this.responseText;
        let infoJs = JSON.parse(info)
        console.log(infoJs);

        let ul = document.createElement('ul');
        infoJs.data.forEach(element => {
            let li = document.createElement('li');

            li.textContent = `${element.first_name} ${element.last_name}`

            ul.appendChild(li);
            let imgElement = document.createElement('img');
            imgElement.src = element.avatar
            li.appendChild(imgElement);

        });
        document.getElementById('mainUsers').appendChild(ul);


    });
    requist.addEventListener('error', function () {
        let p = document.createElement('p');
        p.textContent = 'server error';

        document.getElementById('mainUsers').appendChild(p)
    })

    requist.open('GET', 'https://reqres.in/api/users?page=2');
    requist.send();
}

getUsers();