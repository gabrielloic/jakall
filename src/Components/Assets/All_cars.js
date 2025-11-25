import voiture from './voiture.jpg';
import v1 from './1.jpg';
import v2 from './2.jpg';
import v3 from './3.jpg';
import v4 from './4.jpg';
import v5 from './5.jpg';
import v6 from './6.jpg';
import v7 from './7.jpg';
import v8 from './8.jpg';
import v9 from './9.jpg';
import v10 from './10.jpg';
import v11 from './11.jpg';
import v12 from './12.jpg';
import v13 from './13.jpg';
import v14 from './14.jpg';
import v15 from './15.jpg';
import v16 from './16.jpg';
import v17 from './17.jpg';
import v18 from './18.jpg';
import v19 from './19.jpg';
import v20 from './20.jpg';
import v21 from './21.jpg';
import v22 from './22.jpg';
import v23 from './23.jpg';
import v24 from './24.jpg';
import v25 from './25.jpg';
import v26 from './26.jpg';
import v27 from './27.jpg';
import v28 from './28.jpg';

let all_cars = [
    {
        "id": 1,
        "nom": "Toyota Corolla GT",
        "image": v1,
        "prix": 15819,
        "categorie": "Hatchback",
        "description": "Toyota Corolla GT est un hatchback fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "rouge",
        "texte": "Cette voiture se démarque par son équilibre entre performance, confort et efficacité. Conçue pour offrir une expérience de conduite fluide et agréable, elle combine un design moderne avec des technologies avancées, assurant sécurité, plaisir et fiabilité au quotidien.",
        "video": "ToyotaGT.mp4"
    },
    {
        "id": 2,
        "nom": "Honda Civic",
        "image": v2,
        "prix": 39144,
        "categorie": "Coupe",
        "description": "Honda Civic est un coupe fiable compact et pratique pour la ville.",
        "couleur": "noir",
        "texte": "Cette voiture se démarque par son équilibre entre performance, confort et efficacité. Conçue pour offrir une expérience de conduite fluide et agréable, elle combine un design moderne avec des technologies avancées, assurant sécurité, plaisir et fiabilité au quotidien.",
        "video": "HondaCivic.mp4"
    },
    {
        "id": 3,
        "nom": "Volkswagen Golf",
        "image": v3,
        "prix": 34349,
        "categorie": "Hatchback",
        "description": "Volkswagen Golf est un hatchback fiable avec une bonne économie de carburant.",
        "couleur": "vert",
        "video": "Volfwagen_club",
        "texte": "Cette voiture se démarque par son équilibre entre performance, confort et efficacité. Conçue pour offrir une expérience de conduite fluide et agréable, elle combine un design moderne avec des technologies avancées, assurant sécurité, plaisir et fiabilité au quotidien."
    },
    {
        "id": 4,
        "nom": "Ford Focus",
        "image": v4,
        "prix": 26140,
        "categorie": "Sedan",
        "description": "Ford Focus est un sedan fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "bleu",
        "video":"FordFocus.mp4",
        "texte": "Cette voiture se démarque par son équilibre entre performance, confort et efficacité. Conçue pour offrir une expérience de conduite fluide et agréable, elle combine un design moderne avec des technologies avancées, assurant sécurité, plaisir et fiabilité au quotidien."
    },
    {
        "id": 5,
        "nom": "Hyundai Elantra",
        "image": v5,
        "prix": 26739,
        "categorie": "Hybrid",
        "description": "Hyundai Elantra est un hybrid fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "bronze",
        "video":"HyendaiElantra.mp4",
        "texte": "Cette voiture se démarque par son équilibre entre performance, confort et efficacité. Conçue pour offrir une expérience de conduite fluide et agréable, elle combine un design moderne avec des technologies avancées, assurant sécurité, plaisir et fiabilité au quotidien."
    },
    {
        "id": 6,
        "nom": "BMW 3 Series",
        "image": v6,
        "prix": 52493,
        "categorie": "Hybrid",
        "description": "BMW 3 Series est un hybrid fiable orienté performance, pour les amateurs de conduite.",
        "couleur": "bleu",
        "video": "BMW.mp4",
        "texte": "Cette voiture se démarque par son équilibre entre performance, confort et efficacité. Conçue pour offrir une expérience de conduite fluide et agréable, elle combine un design moderne avec des technologies avancées, assurant sécurité, plaisir et fiabilité au quotidien."
    },
    {
        "id": 7,
        "nom": "Mercedes C-Class",
        "image": v7,
        "prix": 215852,
        "categorie": "Sports",
        "description": "Mercedes C-Class est un sports fiable avec des performances solides et une tenue de route agréable.",
        "couleur": "blanc",
        "video":"MercedesC-Class.mp4",
        "texte": "Cette voiture se démarque par son équilibre entre performance, confort et efficacité. Conçue pour offrir une expérience de conduite fluide et agréable, elle combine un design moderne avec des technologies avancées, assurant sécurité, plaisir et fiabilité au quotidien."
    },
    {
        "id": 10,
        "nom": "Nissan Qashqai",
        "image": v10,
        "prix": 27449,
        "categorie": "Hatchback",
        "description": "Nissan Qashqai est un hatchback fiable offrant un excellent rapport qualité-prix.",
        "couleur": "noir",
        "video": "NissanQashqai.mp4",
        "texte": "Cette voiture se démarque par son équilibre entre performance, confort et efficacité. Conçue pour offrir une expérience de conduite fluide et agréable, elle combine un design moderne avec des technologies avancées, assurant sécurité, plaisir et fiabilité au quotidien."
    },
    {
        "id": 14,
        "nom": "Jeep Wrangler",
        "image": v14,
        "prix": 62837,
        "categorie": "Pickup",
        "description": "Jeep Wrangler est un pickup fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "bleu",
        "video":"Jeep_wrangler.mp4",
        "texte": "Cette voiture se démarque par son équilibre entre performance, confort et efficacité. Conçue pour offrir une expérience de conduite fluide et agréable, elle combine un design moderne avec des technologies avancées, assurant sécurité, plaisir et fiabilité au quotidien."
    },
    {
        "id": 16,
        "nom": "Chevrolet Camaro",
        "image": v16,
        "prix": 86785,
        "categorie": "Coupe",
        "description": "Chevrolet Camaro est un coupe fiable avec des finitions haut de gamme.",
        "couleur": "noir",
        "video":"Chevrolet_camaro.mp4",
        "texte": "Cette voiture se démarque par son équilibre entre performance, confort et efficacité. Conçue pour offrir une expérience de conduite fluide et agréable, elle combine un design moderne avec des technologies avancées, assurant sécurité, plaisir et fiabilité au quotidien."
    }
];

export default all_cars;