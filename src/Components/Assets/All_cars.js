import voiture from './voiture.jpg'; import v1 from './1.jpg'; import v2 from './2.jpg'; import v3 from './3.jpg'; import v4 from './4.jpg'; 
import v5 from './5.jpg'; import v6 from './6.jpg'; import v7 from './7.jpg'; import v8 from './8.jpg'; import v9 from './9.jpg';
import v10 from './10.jpg'; import v11 from './11.jpg'; import v12 from './12.jpg'; import v13 from './13.jpg'; import v14 from './14.jpg';
import v15 from './15.jpg';import v16 from './16.jpg'; import v17 from './17.jpg'; import v18 from './18.jpg'; import v19 from './19.jpg';
import v20 from './20.jpg'; import v21 from './21.jpg'; import v22 from './22.jpg'; import v23 from './23.jpg'; import v24 from './24.jpg'; 
import v25 from './25.jpg'; import v26 from './26.jpg'; import v27 from './27.jpg'; import v28 from './28.jpg';

let all_cars = [
    {
        "id": 1,
        "nom": "Toyota Corolla GT",
        "image": v1,
        "prix": 15819,
        "categorie": "Hatchback",
        "description": "Toyota Corolla GT est un hatchback fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "rouge"
    },
    {
        "id": 2,
        "nom": "Honda Civic",
        "image": v2,
        "prix": 39144,
        "categorie": "Coupe",
        "description": "Honda Civic est un coupe fiable compact et pratique pour la ville.",
        "couleur": "noir"
    },
    {
        "id": 3,
        "nom": "Volkswagen Golf",
        "image": v3,
        "prix": 34349,
        "categorie": "Hatchback",
        "description": "Volkswagen Golf est un hatchback fiable avec une bonne économie de carburant.",
        "couleur": "vert"
    },
    {
        "id": 4,
        "nom": "Ford Focus",
        "image": v4,
        "prix": 26140,
        "categorie": "Sedan",
        "description": "Ford Focus est un sedan fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "bleu"
    },
    {
        "id": 5,
        "nom": "Hyundai Elantra",
        "image": v5,
        "prix": 26739,
        "categorie": "Hybrid",
        "description": "Hyundai Elantra est un hybrid fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "bronze"
    },
    {
        "id": 6,
        "nom": "BMW 3 Series",
        "image": v6,
        "prix": 52493,
        "categorie": "Hybrid",
        "description": "BMW 3 Series est un hybrid fiable orienté performance, pour les amateurs de conduite.",
        "couleur": "bleu"
    },
    {
        "id": 7,
        "nom": "Mercedes C-Class",
        "image": v7,
        "prix": 215852,
        "categorie": "Sports",
        "description": "Mercedes C-Class est un sports fiable avec des performances solides et une tenue de route agréable.",
        "couleur": "blanc"
    },
    {
        "id": 8,
        "nom": "Audi A4 Premium",
        "image": v8,
        "prix": 36149,
        "categorie": "Minivan",
        "description": "Audi A4 Premium est un minivan fiable avec des performances solides et une tenue de route agréable.",
        "couleur": "rouge"
    },
    {
        "id": 9,
        "nom": "Kia Sportage",
        "image": v9,
        "prix": 80036,
        "categorie": "Coupe",
        "description": "Kia Sportage est un coupe fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "argent"
    },
    {
        "id": 10,
        "nom": "Nissan Qashqai",
        "image": v10,
        "prix": 27449,
        "categorie": "Hatchback",
        "description": "Nissan Qashqai est un hatchback fiable offrant un excellent rapport qualité-prix.",
        "couleur": "noir"
    },
    {
        "id": 11,
        "nom": "Toyota RAV4",
        "image": v11,
        "prix": 64565,
        "categorie": "Pickup",
        "description": "Toyota RAV4 est un pickup fiable avec une bonne économie de carburant.",
        "couleur": "rouge"
    },
    {
        "id": 12,
        "nom": "Honda CR-V 2025",
        "image": v12,
        "prix": 100284,
        "categorie": "Electric",
        "description": "Honda CR-V 2025 est un electric fiable avec des finitions haut de gamme.",
        "couleur": "noir"
    },
    {
        "id": 13,
        "nom": "Mazda CX-5",
        "image": v13,
        "prix": 33089,
        "categorie": "Hatchback",
        "description": "Mazda CX-5 est un hatchback fiable avec une motorisation électrique/éco-friendly.",
        "couleur": "rouge"
    },
    {
        "id": 14,
        "nom": "Jeep Wrangler",
        "image": v14,
        "prix": 62837,
        "categorie": "Pickup",
        "description": "Jeep Wrangler est un pickup fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "bleu"
    },
    {
        "id": 15,
        "nom": "Ford Mustang GT",
        "image": v15,
        "prix": 34935,
        "categorie": "Sedan",
        "description": "Ford Mustang GT est un sedan fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "rouge"
    },
    {
        "id": 16,
        "nom": "Chevrolet Camaro",
        "image": v16,
        "prix": 86785,
        "categorie": "Coupe",
        "description": "Chevrolet Camaro est un coupe fiable avec des finitions haut de gamme.",
        "couleur": "noir"
    },
    {
        "id": 17,
        "nom": "Porsche 911",
        "image": v17,
        "prix": 94429,
        "categorie": "Convertible",
        "description": "Porsche 911 est un convertible fiable offrant un excellent rapport qualité-prix.",
        "couleur": "beige"
    },
    {
        "id": 18,
        "nom": "Tesla Model 3",
        "image": v18,
        "prix": 81566,
        "categorie": "SUV",
        "description": "Tesla Model 3 est un suv fiable au design élégant et intérieur confortable.",
        "couleur": "bleu"
    },
    {
        "id": 19,
        "nom": "Tesla Model Y",
        "image": v19,
        "prix": 118227,
        "categorie": "Hatchback",
        "description": "Tesla Model Y est un hatchback fiable compact et pratique pour la ville.",
        "couleur": "gris"
    },
    {
        "id": 20,
        "nom": "Renault Clio",
        "image": v20,
        "prix": 40708,
        "categorie": "Coupe",
        "description": "Renault Clio est un coupe fiable avec des finitions haut de gamme.",
        "couleur": "jaune"
    },
    {
        "id": 21,
        "nom": "Peugeot 208",
        "image": v21,
        "prix": 118886,
        "categorie": "Convertible",
        "description": "Peugeot 208 est un convertible fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "bronze"
    },
    {
        "id": 22,
        "nom": "Opel Astra Premium",
        "image": v22,
        "prix": 28665,
        "categorie": "Pickup",
        "description": "Opel Astra Premium est un pickup fiable avec une bonne économie de carburant.",
        "couleur": "bleu"
    },
    {
        "id": 23,
        "nom": "Mini Cooper 2025",
        "image": v23,
        "prix": 51290,
        "categorie": "Pickup",
        "description": "Mini Cooper 2025 est un pickup fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "rouge"
    },
    {
        "id": 24,
        "nom": "Subaru Impreza",
        "image": v24,
        "prix": 89843,
        "categorie": "Coupe",
        "description": "Subaru Impreza est un coupe fiable offrant un excellent rapport qualité-prix.",
        "couleur": "bordeaux"
    },
    {
        "id": 25,
        "nom": "Skoda Octavia",
        "image": v25,
        "prix": 72954,
        "categorie": "Coupe",
        "description": "Skoda Octavia est un coupe fiable avec des finitions haut de gamme.",
        "couleur": "jaune"
    },
    {
        "id": 26,
        "nom": "Volvo XC60",
        "image": v26,
        "prix": 48726,
        "categorie": "Electric",
        "description": "Volvo XC60 est un electric fiable avec des performances solides et une tenue de route agréable.",
        "couleur": "rouge"
    },
    {
        "id": 27,
        "nom": "Lexus RX",
        "image": v27,
        "prix": 78823,
        "categorie": "Coupe",
        "description": "Lexus RX est un coupe fiable compact et pratique pour la ville.",
        "couleur": "bronze"
    },
    {
        "id": 28,
        "nom": "Infiniti Q50",
        "image": v28,
        "prix": 111622,
        "categorie": "Convertible",
        "description": "Infiniti Q50 est un convertible fiable avec une motorisation électrique/éco-friendly.",
        "couleur": "vert"
    },
    {
        "id": 29,
        "nom": "Mitsubishi Outlander GT",
        "image": voiture,
        "prix": 36861,
        "categorie": "Minivan",
        "description": "Mitsubishi Outlander GT est un minivan fiable avec des performances solides et une tenue de route agréable.",
        "couleur": "bleu"
    },
    {
        "id": 30,
        "nom": "Suzuki Swift",
        "image": voiture,
        "prix": 57343,
        "categorie": "Hybrid",
        "description": "Suzuki Swift est un hybrid fiable avec une bonne économie de carburant.",
        "couleur": "noir"
    },
    {
        "id": 31,
        "nom": "Citroen C3",
        "image": voiture,
        "prix": 20008,
        "categorie": "Hatchback",
        "description": "Citroen C3 est un hatchback fiable avec des performances solides et une tenue de route agréable.",
        "couleur": "beige"
    },
    {
        "id": 32,
        "nom": "Fiat 500",
        "image": voiture,
        "prix": 44543,
        "categorie": "Minivan",
        "description": "Fiat 500 est un minivan fiable avec des finitions haut de gamme.",
        "couleur": "noir"
    },
    {
        "id": 33,
        "nom": "Alfa Romeo Giulia",
        "image": voiture,
        "prix": 44526,
        "categorie": "Minivan",
        "description": "Alfa Romeo Giulia est un minivan fiable compact et pratique pour la ville.",
        "couleur": "jaune"
    },
    {
        "id": 34,
        "nom": "Jaguar XE 2025",
        "image": voiture,
        "prix": 107512,
        "categorie": "Convertible",
        "description": "Jaguar XE 2025 est un convertible fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "blanc"
    },
    {
        "id": 35,
        "nom": "Land Rover Defender",
        "image": voiture,
        "prix": 42486,
        "categorie": "Hybrid",
        "description": "Land Rover Defender est un hybrid fiable offrant un excellent rapport qualité-prix.",
        "couleur": "beige"
    },
    {
        "id": 36,
        "nom": "Honda Fit Premium",
        "image": voiture,
        "prix": 24617,
        "categorie": "Hatchback",
        "description": "Honda Fit Premium est un hatchback fiable avec des performances solides et une tenue de route agréable.",
        "couleur": "vert"
    },
    {
        "id": 37,
        "nom": "Nissan Leaf",
        "image": voiture,
        "prix": 30425,
        "categorie": "Electric",
        "description": "Nissan Leaf est un electric fiable compact et pratique pour la ville.",
        "couleur": "rouge"
    },
    {
        "id": 38,
        "nom": "Kia Rio",
        "image": voiture,
        "prix": 58271,
        "categorie": "SUV",
        "description": "Kia Rio est un suv fiable au design élégant et intérieur confortable.",
        "couleur": "noir"
    },
    {
        "id": 39,
        "nom": "Hyundai Tucson",
        "image": voiture,
        "prix": 38035,
        "categorie": "Hybrid",
        "description": "Hyundai Tucson est un hybrid fiable offrant un excellent rapport qualité-prix.",
        "couleur": "gris"
    },
    {
        "id": 40,
        "nom": "BMW X5",
        "image": voiture,
        "prix": 60348,
        "categorie": "SUV",
        "description": "BMW X5 est un suv fiable avec une bonne économie de carburant.",
        "couleur": "bronze"
    },
    {
        "id": 41,
        "nom": "Mercedes GLC",
        "image": voiture,
        "prix": 239951,
        "categorie": "Sports",
        "description": "Mercedes GLC est un sports fiable avec une bonne économie de carburant.",
        "couleur": "jaune"
    },
    {
        "id": 42,
        "nom": "Audi Q5",
        "image": voiture,
        "prix": 26894,
        "categorie": "Hatchback",
        "description": "Audi Q5 est un hatchback fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "rouge"
    },
    {
        "id": 43,
        "nom": "Chevrolet Silverado GT",
        "image": voiture,
        "prix": 35785,
        "categorie": "Sedan",
        "description": "Chevrolet Silverado GT est un sedan fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "bordeaux"
    },
    {
        "id": 44,
        "nom": "Ford F-150",
        "image": voiture,
        "prix": 30924,
        "categorie": "Hatchback",
        "description": "Ford F-150 est un hatchback fiable compact et pratique pour la ville.",
        "couleur": "noir"
    },
    {
        "id": 45,
        "nom": "Ram 1500 2025",
        "image": voiture,
        "prix": 33414,
        "categorie": "SUV",
        "description": "Ram 1500 2025 est un suv fiable orienté performance, pour les amateurs de conduite.",
        "couleur": "beige"
    },
    {
        "id": 46,
        "nom": "GMC Sierra",
        "image": voiture,
        "prix": 35821,
        "categorie": "Hybrid",
        "description": "GMC Sierra est un hybrid fiable compact et pratique pour la ville.",
        "couleur": "rouge"
    },
    {
        "id": 47,
        "nom": "Toyota Prius",
        "image": voiture,
        "prix": 291846,
        "categorie": "Sports",
        "description": "Toyota Prius est un sports fiable compact et pratique pour la ville.",
        "couleur": "bleu"
    },
    {
        "id": 48,
        "nom": "Honda Accord",
        "image": voiture,
        "prix": 76723,
        "categorie": "Coupe",
        "description": "Honda Accord est un coupe fiable avec des finitions haut de gamme.",
        "couleur": "rouge"
    },
    {
        "id": 49,
        "nom": "Subaru Forester",
        "image": voiture,
        "prix": 53711,
        "categorie": "Pickup",
        "description": "Subaru Forester est un pickup fiable orienté performance, pour les amateurs de conduite.",
        "couleur": "bronze"
    },
    {
        "id": 50,
        "nom": "Mazda MX-5 Premium",
        "image": voiture,
        "prix": 23123,
        "categorie": "Hatchback",
        "description": "Mazda MX-5 Premium est un hatchback fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "bleu"
    },
    {
        "id": 51,
        "nom": "Aston Martin Vantage",
        "image": voiture,
        "prix": 26378,
        "categorie": "Pickup",
        "description": "Aston Martin Vantage est un pickup fiable compact et pratique pour la ville.",
        "couleur": "bordeaux"
    },
    {
        "id": 52,
        "nom": "Ferrari F8",
        "image": voiture,
        "prix": 68564,
        "categorie": "Coupe",
        "description": "Ferrari F8 est un coupe fiable avec une bonne économie de carburant.",
        "couleur": "bleu"
    },
    {
        "id": 53,
        "nom": "Lamborghini Huracan",
        "image": voiture,
        "prix": 16929,
        "categorie": "Hatchback",
        "description": "Lamborghini Huracan est un hatchback fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "bleu"
    },
    {
        "id": 54,
        "nom": "McLaren 720S",
        "image": voiture,
        "prix": 41654,
        "categorie": "Sedan",
        "description": "McLaren 720S est un sedan fiable compact et pratique pour la ville.",
        "couleur": "noir"
    },
    {
        "id": 55,
        "nom": "Bentley Continental",
        "image": voiture,
        "prix": 3055896,
        "categorie": "Coupe",
        "description": "Bentley Continental est un coupe fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "jaune"
    },
    {
        "id": 56,
        "nom": "Rolls-Royce Ghost 2025",
        "image": voiture,
        "prix": 3283960,
        "categorie": "Hybrid",
        "description": "Rolls-Royce Ghost 2025 est un hybrid fiable avec une motorisation électrique/éco-friendly.",
        "couleur": "bordeaux"
    },
    {
        "id": 57,
        "nom": "Genesis G70 GT",
        "image": voiture,
        "prix": 61850,
        "categorie": "Electric",
        "description": "Genesis G70 GT est un electric fiable avec des finitions haut de gamme.",
        "couleur": "jaune"
    },
    {
        "id": 58,
        "nom": "Hyundai Ioniq 5",
        "image": voiture,
        "prix": 47704,
        "categorie": "Coupe",
        "description": "Hyundai Ioniq 5 est un coupe fiable avec des finitions haut de gamme.",
        "couleur": "beige"
    },
    {
        "id": 59,
        "nom": "Kia EV6",
        "image": voiture,
        "prix": 88883,
        "categorie": "Pickup",
        "description": "Kia EV6 est un pickup fiable avec une bonne économie de carburant.",
        "couleur": "jaune"
    },
    {
        "id": 60,
        "nom": "Polestar 2",
        "image": voiture,
        "prix": 87772,
        "categorie": "Hatchback",
        "description": "Polestar 2 est un hatchback fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "argent"
    },
    {
        "id": 61,
        "nom": "Skoda Enyaq",
        "image": voiture,
        "prix": 42556,
        "categorie": "Coupe",
        "description": "Skoda Enyaq est un coupe fiable compact et pratique pour la ville.",
        "couleur": "bleu"
    },
    {
        "id": 62,
        "nom": "Nissan Juke",
        "image": voiture,
        "prix": 48373,
        "categorie": "Electric",
        "description": "Nissan Juke est un electric fiable avec des performances solides et une tenue de route agréable.",
        "couleur": "vert"
    },
    {
        "id": 63,
        "nom": "Toyota Camry",
        "image": voiture,
        "prix": 95637,
        "categorie": "Convertible",
        "description": "Toyota Camry est un convertible fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "bleu"
    },
    {
        "id": 64,
        "nom": "Honda HR-V Premium",
        "image": voiture,
        "prix": 102132,
        "categorie": "Electric",
        "description": "Honda HR-V Premium est un electric fiable avec une bonne économie de carburant.",
        "couleur": "noir"
    },
    {
        "id": 65,
        "nom": "Volkswagen Passat",
        "image": voiture,
        "prix": 25967,
        "categorie": "Hybrid",
        "description": "Volkswagen Passat est un hybrid fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "noir"
    },
    {
        "id": 66,
        "nom": "Ford Explorer",
        "image": voiture,
        "prix": 51634,
        "categorie": "SUV",
        "description": "Ford Explorer est un suv fiable orienté performance, pour les amateurs de conduite.",
        "couleur": "jaune"
    },
    {
        "id": 67,
        "nom": "Chevrolet Equinox 2025",
        "image": voiture,
        "prix": 86665,
        "categorie": "Coupe",
        "description": "Chevrolet Equinox 2025 est un coupe fiable avec une bonne économie de carburant.",
        "couleur": "vert"
    },
    {
        "id": 68,
        "nom": "Jeep Cherokee",
        "image": voiture,
        "prix": 49836,
        "categorie": "SUV",
        "description": "Jeep Cherokee est un suv fiable avec des finitions haut de gamme.",
        "couleur": "blanc"
    },
    {
        "id": 69,
        "nom": "Suzuki Vitara",
        "image": voiture,
        "prix": 94638,
        "categorie": "Convertible",
        "description": "Suzuki Vitara est un convertible fiable avec des finitions haut de gamme.",
        "couleur": "rouge"
    },
    {
        "id": 70,
        "nom": "Mitsubishi Eclipse Cross",
        "image": voiture,
        "prix": 56894,
        "categorie": "Hybrid",
        "description": "Mitsubishi Eclipse Cross est un hybrid fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "gris"
    },
    {
        "id": 71,
        "nom": "Peugeot 3008 GT",
        "image": voiture,
        "prix": 63534,
        "categorie": "Convertible",
        "description": "Peugeot 3008 GT est un convertible fiable avec une motorisation électrique/éco-friendly.",
        "couleur": "blanc"
    },
    {
        "id": 72,
        "nom": "Renault Captur",
        "image": voiture,
        "prix": 28994,
        "categorie": "Hybrid",
        "description": "Renault Captur est un hybrid fiable avec une bonne économie de carburant.",
        "couleur": "argent"
    },
    {
        "id": 73,
        "nom": "Dacia Duster",
        "image": voiture,
        "prix": 58284,
        "categorie": "Sedan",
        "description": "Dacia Duster est un sedan fiable compact et pratique pour la ville.",
        "couleur": "jaune"
    },
    {
        "id": 74,
        "nom": "Tata Harrier",
        "image": voiture,
        "prix": 35317,
        "categorie": "Hybrid",
        "description": "Tata Harrier est un hybrid fiable compact et pratique pour la ville.",
        "couleur": "blanc"
    },
    {
        "id": 75,
        "nom": "Mahindra XUV700",
        "image": voiture,
        "prix": 21089,
        "categorie": "Hatchback",
        "description": "Mahindra XUV700 est un hatchback fiable avec une motorisation électrique/éco-friendly.",
        "couleur": "noir"
    },
    {
        "id": 76,
        "nom": "Great Wall Haval H6",
        "image": voiture,
        "prix": 22707,
        "categorie": "Hatchback",
        "description": "Great Wall Haval H6 est un hatchback fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "vert"
    },
    {
        "id": 77,
        "nom": "Seat Leon",
        "image": voiture,
        "prix": 199087,
        "categorie": "Sports",
        "description": "Seat Leon est un sports fiable avec une motorisation électrique/éco-friendly.",
        "couleur": "bordeaux"
    },
    {
        "id": 78,
        "nom": "Cupra Formentor Premium",
        "image": voiture,
        "prix": 25372,
        "categorie": "Sedan",
        "description": "Cupra Formentor Premium est un sedan fiable avec une motorisation électrique/éco-friendly.",
        "couleur": "vert"
    },
    {
        "id": 79,
        "nom": "Alpine A110",
        "image": voiture,
        "prix": 344088,
        "categorie": "Sports",
        "description": "Alpine A110 est un sports fiable au design élégant et intérieur confortable.",
        "couleur": "argent"
    },
    {
        "id": 80,
        "nom": "Toyota Prius+",
        "image": voiture,
        "prix": 73891,
        "categorie": "Coupe",
        "description": "Toyota Prius+ est un coupe fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "argent"
    },
    {
        "id": 81,
        "nom": "Mercedes S-Class",
        "image": voiture,
        "prix": 86876,
        "categorie": "Convertible",
        "description": "Mercedes S-Class est un convertible fiable au design élégant et intérieur confortable.",
        "couleur": "gris"
    },
    {
        "id": 82,
        "nom": "BMW 7 Series",
        "image": voiture,
        "prix": 71441,
        "categorie": "Electric",
        "description": "BMW 7 Series est un electric fiable avec une bonne économie de carburant.",
        "couleur": "noir"
    },
    {
        "id": 83,
        "nom": "Audi A8",
        "image": voiture,
        "prix": 111416,
        "categorie": "Electric",
        "description": "Audi A8 est un electric fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "bordeaux"
    },
    {
        "id": 84,
        "nom": "Lexus ES",
        "image": voiture,
        "prix": 32617,
        "categorie": "Hatchback",
        "description": "Lexus ES est un hatchback fiable compact et pratique pour la ville.",
        "couleur": "bleu"
    },
    {
        "id": 85,
        "nom": "Cadillac CT5 GT",
        "image": voiture,
        "prix": 52361,
        "categorie": "Convertible",
        "description": "Cadillac CT5 GT est un convertible fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "argent"
    },
    {
        "id": 86,
        "nom": "Infiniti QX50",
        "image": voiture,
        "prix": 54217,
        "categorie": "Coupe",
        "description": "Infiniti QX50 est un coupe fiable avec des performances solides et une tenue de route agréable.",
        "couleur": "rouge"
    },
    {
        "id": 87,
        "nom": "Nissan Patrol",
        "image": voiture,
        "prix": 101200,
        "categorie": "Electric",
        "description": "Nissan Patrol est un electric fiable avec une motorisation électrique/éco-friendly.",
        "couleur": "rouge"
    },
    {
        "id": 88,
        "nom": "Maserati Ghibli",
        "image": voiture,
        "prix": 25512,
        "categorie": "Hybrid",
        "description": "Maserati Ghibli est un hybrid fiable compact et pratique pour la ville.",
        "couleur": "beige"
    },
    {
        "id": 89,
        "nom": "Bugatti Chiron 2025",
        "image": voiture,
        "prix": 813257,
        "categorie": "Convertible",
        "description": "Bugatti Chiron 2025 est un convertible fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "rouge"
    },
    {
        "id": 90,
        "nom": "Pagani Huayra",
        "image": voiture,
        "prix": 901995,
        "categorie": "Hatchback",
        "description": "Pagani Huayra est un hatchback fiable au design élégant et intérieur confortable.",
        "couleur": "rouge"
    },
    {
        "id": 91,
        "nom": "Koenigsegg Agera",
        "image": voiture,
        "prix": 3259883,
        "categorie": "Sports",
        "description": "Koenigsegg Agera est un sports fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "argent"
    },
    {
        "id": 92,
        "nom": "Bentley Bentayga Premium",
        "image": voiture,
        "prix": 2299051,
        "categorie": "Convertible",
        "description": "Bentley Bentayga Premium est un convertible fiable avec une bonne économie de carburant.",
        "couleur": "rouge"
    },
    {
        "id": 93,
        "nom": "Lamborghini Urus",
        "image": voiture,
        "prix": 28879,
        "categorie": "Hatchback",
        "description": "Lamborghini Urus est un hatchback fiable avec une bonne économie de carburant.",
        "couleur": "rouge"
    },
    {
        "id": 94,
        "nom": "Ferrari SF90",
        "image": voiture,
        "prix": 41859,
        "categorie": "Sedan",
        "description": "Ferrari SF90 est un sedan fiable au design élégant et intérieur confortable.",
        "couleur": "gris"
    },
    {
        "id": 95,
        "nom": "Porsche Cayenne",
        "image": voiture,
        "prix": 73577,
        "categorie": "SUV",
        "description": "Porsche Cayenne est un suv fiable compact et pratique pour la ville.",
        "couleur": "jaune"
    },
    {
        "id": 96,
        "nom": "Toyota Hilux",
        "image": voiture,
        "prix": 43379,
        "categorie": "Minivan",
        "description": "Toyota Hilux est un minivan fiable idéal pour la famille et les trajets quotidiens.",
        "couleur": "blanc"
    },
    {
        "id": 97,
        "nom": "Ford Ranger",
        "image": voiture,
        "prix": 19884,
        "categorie": "Hatchback",
        "description": "Ford Ranger est un hatchback fiable avec une bonne économie de carburant.",
        "couleur": "bronze"
    },
    {
        "id": 98,
        "nom": "Isuzu D-Max",
        "image": voiture,
        "prix": 63175,
        "categorie": "Pickup",
        "description": "Isuzu D-Max est un pickup fiable avec des performances solides et une tenue de route agréable.",
        "couleur": "bronze"
    },
    {
        "id": 99,
        "nom": "Toyota Corolla GT",
        "image": voiture,
        "prix": 29176,
        "categorie": "Minivan",
        "description": "Toyota Corolla GT est un minivan fiable au design élégant et intérieur confortable.",
        "couleur": "blanc"
    },
     
    {
        "id": 100,
        "nom": "Honda Civic 2025",
        "image": voiture,
        "prix": 27614,
        "categorie": "Pickup",
        "description": "Honda Civic 2025 est un pickup fiable équipé de technologies modernes et d'aides à la conduite.",
        "couleur": "argent"
    }
]

export default all_cars;