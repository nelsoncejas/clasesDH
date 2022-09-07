let students = [
    "Lucas astesiano",
    "Yamall Avalos",
    "Erika Lizeth Burgos Baez",
    "Paula Agustina Campos",
    "Ignacio Carrabs",
    "Javier Civalero",
    "Sebastián Chade",
    "Paula Analía Correa Anidape",
    "Pierre Crespin",
    "Maria Victoria Da Silva",
    "Luciano Delacroix",
    "Virginia de Rebolledo",
    "augusto drocchi",
    "Joaquin Estrada",
    "Martin Ignacio Fernandez",
    "matias ivan garcia",
    "Agustin Andrés Godoy Romero",
    "Ailen Marcela Gonzalez",
    "Víctor Gutiérrez",
    "Agustina Daniela Hernandez",
    "María José Laverde",
    "Francisco Lynch",
    "Fabrizio Marengo",
    "Yaina Machado Lima",
    "Ornella Meli",
    "Nadia Carolina Murcia tovar",
    "Vito Muzio",
    "Yohana Olivera",
    "Santiago Osorio Solarte",
    "Lautaro Perez",
    "Eduardo Perez Danderfer",
    "Tomas valentin Petersen hammer",
    "Facundo Posse",
    "Tiago Prelato",
    "Ana Quintero Estévez",
    "Sergio Racchumí Carrasco",
    "Joel Hernan Rincon",
    "Sofía Sastre",
    "Facundo Scholze",
    "Santiago Tiribelli",
    "Valeria Uliassi",
    "Santos Uriburu",
    "Rodrigo Vassallo Romero",
    "Jessica Viera",
    "victoria villar",
    "Michelle Buvoli",
    "Daniel Murcia"
];
let winners = [];

const generateTeams = (students, participants) => {
    let winnersNow = [];
    let filter = students.filter(e => !winners.includes(e))
    //console.table(filter)
    for (let i = 0; i < participants; i++) {
        const nroRandom = Math.floor(Math.random() * 46) + 1;
        const student = students[nroRandom];
        winners.push(student);
        winnersNow.push(student);
        //console.log(student);
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(winnersNow);
        }, 1000);
    });
};


async function asyncCall() {
    console.log('🥁 🥁 🥁 🥁 🥁 ');
    const result = await generateTeams(students, 3);
    console.log('🥁 🥁 🥁 🥁 🥁 ');
    console.table(result);
}

asyncCall();


