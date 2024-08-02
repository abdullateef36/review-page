const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "person.jpg",
        text: "I'd like to introduce you to Susan, an exceptional web developer with a strong background in both front-end and back-end development. With expertise in HTML, CSS, JavaScript, and various web frameworks, Susan excels at creating responsive, user-friendly websites and web applications."
    },

    {
        id: 2,
        name: "Abdullateef Akinola",
        job: "IT Technician",
        img: "person1.jpg",
        text: "I'd like to introduce you to Adbullateef, an experienced IT technician skilled in managing and troubleshooting a wide range of technology systems. With a strong background in network administration, hardware repair, and software support, Abdullateef is adept at ensuring smooth and efficient IT operations."
    },
    
    {
        id: 3,
        name: "Emmano Hommy",
        job: "Product Manager",
        img: "person2.jpg",
        text: "I'd like to introduce you to Emmano, an accomplished product manager with a proven track record in guiding product development from concept to launch. With a keen understanding of market trends, user needs, and business goals, Emmano excels at creating and executing product strategies that drive growth and innovation."
    },

    {
        id: 4,
        name: "Hinata Mary",
        job: "UI/UX",
        img: "person3.jpg",
        text: "I'd like to introduce you to Hinata, a talented UI/UX designer known for creating intuitive and visually appealing user experiences. With a strong background in user research, wireframing, prototyping, and design tools, Hinata excels at turning complex ideas into user-friendly interfaces. "
    },

    {
        id: 5,
        name: "Sakura Uchiha",
        job: "Back-End Developer",
        img: "person4.jpg",
        text: "I'd like to introduce you to Sakura, a skilled back-end developer with extensive experience in building robust and scalable server-side applications. Proficient in languages such as Python, Java, and Node.js, Sakura excels at database management, API development, and optimizing server performance."
    },
]

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});