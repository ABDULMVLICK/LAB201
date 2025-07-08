import React, { useEffect, useState } from "react";
import fondgrain from "../images/Fond_grains.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Tournees = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "dates"));
        const concertsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setConcerts(concertsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des concerts :", error);
      }
    };

    fetchConcerts();
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-start pt-40 px-4"
      style={{
        backgroundImage: `url(${fondgrain})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl text-white font-bold mb-10">Tournées</h1>

      {concerts.length === 0 ? (
        <p className="text-white">Aucune tournée à venir.</p>
      ) : (
        <ul className="w-full max-w-2xl space-y-6">
          {concerts.map((concert) => (
            <li
              key={concert.id}
              className="bg-white/10 border border-white/20 rounded-xl p-4 text-white shadow-lg backdrop-blur-sm"
            >
              <p className="text-xl font-semibold">
                📍 {concert.city}, {concert.country}
              </p>
              <p>📅 Date : {concert.date}</p>
              <p>🎤 Lieu / Festival : {concert.location}</p>
              <p>
                🎟️ {concert.soldOut ? "Complet (Sold Out)" : "Places disponibles"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tournees;
