
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());

const productos = [
    {
        "id": 1,
        "titulo": "Iphone 15 PRO",
        "precio": 1150,
        "img": "./img/D_NQ_NP_918178-MLA71783088444_092023-O.webp",
        "categoria": {
            "id": "celulares"
        },
        "descripciones": "El iPhone 15 Pro es el último modelo de teléfono inteligente de Apple, conocido por su potente rendimiento, cámara de alta calidad y diseño elegante. Presenta una pantalla OLED de alta resolución, un sistema de triple cámara mejorado y tecnología avanzada de reconocimiento facial."
    },
    {
        "id": 2,
        "titulo": "Iphone 14 PRO",
        "precio": 900,
        "img": "./img/D_NQ_NP_904279-MLU70351459718_072023-O.webp",
        "categoria": {
            "id": "celulares"
        },
        "descripciones": "El iPhone 14 Pro es un teléfono de gama alta que ofrece un rendimiento excepcional y características avanzadas. Destaca por su pantalla Super Retina XDR, potente chip A15 Bionic y capacidades de grabación de video de alta calidad."
    },
    {
        "id": 3,
        "titulo": "Iphone 13",
        "precio": 700,
        "img": "./img/D_NQ_NP_736168-MLA47781742030_102021-O.webp",
        "categoria": {
            "id": "celulares"
        },
        "descripciones": "El iPhone 13 es un smartphone versátil y potente que ofrece una experiencia premium. Cuenta con una pantalla OLED brillante, un potente sistema de cámara dual o triple, y una batería de larga duración. Es conocido por su diseño elegante y duradero."
    },
    {
        "id": 4,
        "titulo": "Iphone 12",
        "precio": 520,
        "img": "./img/D_NQ_NP_789656-MLA73571835400_122023-O.webp",
        "categoria": {
            "id": "celulares"
        },
        "descripciones": "El iPhone 12 es un dispositivo innovador que combina un diseño moderno con un rendimiento excepcional. Presenta una pantalla Super Retina XDR, un potente chip A14 Bionic y tecnología 5G para una conectividad rápida."
    },
    {
        "id": 5,
        "titulo": "Iphone 11",
        "precio": 450,
        "img": "./img/D_NQ_NP_656548-MLA46114829749_052021-O.webp",
        "categoria": {
            "id": "celulares"
        },
        "descripciones": "El iPhone 11 es un smartphone popular conocido por su excelente relación calidad-precio. Ofrece un rendimiento sólido, una cámara dual avanzada y una duración de la batería impresionante. Es ideal para aquellos que buscan un dispositivo de alta calidad a un precio más accesible."
    },
    {   
        "id": 6,
        "titulo": "Iphone XR",
        "precio": 320,
        "img": "./img/D_NQ_NP_652817-MLA75551789182_042024-O.webp",
        "categoria": {
            "id": "celulares"
        },
        "descripciones": "El iPhone XR es un dispositivo que combina un rendimiento potente con un diseño colorido y moderno. Ofrece una pantalla Liquid Retina, una cámara de alta calidad y un rendimiento rápido gracias al chip A12 Bionic."
    },
    {
        "id": 7,
        "titulo": "Vision PRO",
        "precio": 5000,
        "img": "./img/D_NQ_NP_2X_909202-MLA75217037309_032024-F.webp",
        "categoria": {
            "id": "vision-pro"
        },
        "descripciones": "El Vision Pro es un dispositivo de realidad virtual avanzado que ofrece una experiencia inmersiva y envolvente. Con su diseño ergonómico y tecnología de vanguardia, proporciona una visualización de alta calidad y un seguimiento preciso para una experiencia de VR excepcional."
    },
    {
        "id": 8,
        "titulo": "Ipad AIR",
        "precio": 2000,
        "img": "./img/D_NQ_NP_2X_838164-MLA52223468040_102022-F.webp",
        "categoria": {
            "id": "ipad"
        },
        "descripciones": "El iPad Air es una tablet versátil que combina potencia y portabilidad. Con su diseño delgado y ligero, pantalla Retina de alta resolución y potente chip A14 Bionic, es perfecto para tareas cotidianas, entretenimiento y productividad."
    },
    {
        "id": 9,
        "titulo": "Macbook AIR PRO",
        "precio": 1900,
        "img": "./img/D_NQ_NP_2X_823499-MLA53381321856_012023-F.webp",
        "categoria": {
            "id": "macbook"
        },
        "descripciones": "El MacBook Air Pro es una computadora portátil diseñada para usuarios profesionales y creativos. Ofrece un rendimiento potente, una pantalla Retina brillante, un teclado cómodo y una batería de larga duración. Es ideal para trabajar con aplicaciones exigentes y multitarea intensiva."
    },
    {
        "id": 10,
        "titulo": "Apple Watch",
        "precio": 400,
        "img": "./img/D_NQ_NP_2X_735757-MLA72201410347_102023-F.webp",
        "categoria": {
            "id": "watch"
        },
        "descripciones": "El Apple Watch es un reloj inteligente avanzado que combina estilo y funcionalidad. Ofrece características como monitoreo de la salud, seguimiento de la actividad física, notificaciones en tiempo real y aplicaciones personalizadas. Es un compañero ideal para mantenerse conectado y saludable en el día a día."
    }
];

app.get('/productos', (req, res) => {
    res.json(productos);
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
