import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer } from "@react-google-maps/api";

const Livraison = () => {
  const entreprise = { lat: 3.8480, lng: 11.5021 };

  const [userPosition, setUserPosition] = useState(null);
  const [directions, setDirections] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false); // ✅ nouvel état

  // ✅ Fonction de calcul d'itinéraire (n'appelle pas window.google tant que la map n'est pas chargée)
  const calculerItineraire = useCallback((destination) => {
    if (!window.google) {
      console.error("Google Maps non chargé !");
      return;
    }

    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: entreprise,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
          const distance = result.routes[0].legs[0].distance.text;
          const duree = result.routes[0].legs[0].duration.text;
          alert(`Distance : ${distance}\nDurée estimée : ${duree}`);
        } else {
          console.error("Erreur lors du calcul de l'itinéraire :", status);
        }
      }
    );
  }, []);

  // ✅ Géolocalisation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const position = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
          setUserPosition(position);

          // ✅ On attend que la map soit chargée avant de calculer
          if (mapLoaded) {
            calculerItineraire(position);
          }
        },
        (err) => {
          console.error("Erreur de géolocalisation :", err);
          alert("Impossible d'obtenir votre position !");
        }
      );
    } else {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
    }
  }, [mapLoaded, calculerItineraire]); // ✅ re-exécute quand la carte est prête

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h2 style={{ textAlign: "center" }}>📦 Livraison - Trajet depuis Yaoundé (OPEP)</h2>

      <LoadScript
        googleMapsApiKey="AIzaSyDR7FwYH1hgIdSi2jSEfs3-7M-QaBlYyFw"
        onLoad={() => setMapLoaded(true)} // ✅ la map est prête
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "90%" }}
          center={entreprise}
          zoom={12}
        >
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Livraison;