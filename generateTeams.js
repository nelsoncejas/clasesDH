/* const students = [
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
]; */ 

let winners = [];

const students = [
    'BeckyGimenez',
    'BrahianPuschiasis',
    'BrianRobaina',
    'CamilaGuerra',
    'CarlaPere',
    'CarmenZeballos',
    'CeciliaRamos',
    'CeciliaSuarez',
    'Ciro GabrielSereno',
    'CristianBenítez',
    'CynthiaRocha',
    'DAHIANADA COSTA LEITES LUZ',
    'DanielAbila',
    'Daniel AgustinBertone Gonzalez',
    'DanielAranivar',
    'DANIELCAMANDULLE',
    'DayanaSilva',
    'DeividGonzalez',
    'DelfinaRipoll',
    'DiegoCancela',
    'Diegode la Barrera',
    'DiegoParada',
    'DiegoPerez',
    'Dulce MariaViltre Castellanos',
    'EmilianoLauga',
    'EmilianoRodríguez',
    'ENRIQUEPALERMO',
    'EnzoMarrero',
    'EugenioPereira',
    'Fabián NicolasPérez Graces',
    'FacundoCorrea',
    'FacundoRodriguez',
    'FedericoMolina',
    'FiorellaCrocco',
    'FlorenciaBicca',
    'FrancoAnsaldi',
    'GabrielAcosta',
    'GabrielRostán',
    'GabrielaRincón',
    'Gastón AndrésReyes Tejeria',
    'GastonBello',
    'GastónPazos',
    'GermanArmesto',
    'IgnacioRobaina',
    'JoselinListur',
    'María BelénBalsemao Azar',
    'María CarolinaFaccio',
    'MARIA MAGDALENACALASSO MACHIN',
    'MartinMosquera',
    'MatiasBianchi',
    'NidiaRodriguez',
    'SergioContreras'];


const generateTeams = (students, participants) => {
    let winnersNow = [];
    let filter = students.filter(e => !winners.includes(e))
    //console.table(filter)
    for (let i = 0; i < participants; i++) {
        const nroRandom = Math.floor(Math.random() * students.length) + 1;
        const student = students[nroRandom];
        winners.push(student);
        winnersNow.push(student);
        //console.log(student);
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(winnersNow);
        }, 2000);
    });
};


async function asyncCall() {
    console.log('🥁 🥁 🥁 🥁 🥁 ');
    const result = await generateTeams(students, 4);
    console.log('🥁 🥁 🥁 🥁 🥁 ');
    console.table(result);
}

asyncCall();


