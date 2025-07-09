import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fondgrain from "../images/Fond_grains.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// Helper pour formater la date
function formatConcertDate(dateStr) {
  // On suppose dateStr au format YYYY-MM-DD ou similaire
  const months = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  const day = d.getDate();
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  // Suffixe anglais
  const j = day % 10, k = day % 100;
  let suffix = "th";
  if (j === 1 && k !== 11) suffix = "st";
  else if (j === 2 && k !== 12) suffix = "nd";
  else if (j === 3 && k !== 13) suffix = "rd";
  return `${month} ${day}${suffix} ${year}`;
}

const Tournees = () => {
  const [concerts, setConcerts] = useState([]);
  const navigate = useNavigate();

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

  const handleTicketsClick = () => {
    navigate('/404');
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-start pt-40 px-2 sm:px-4"
      style={{
        backgroundImage: `url(${fondgrain})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl sm:text-4xl text-black font-extrabold mb-8 tracking-wide w-full max-w-4xl text-left uppercase drop-shadow-lg animate-fadein">DATES DE LA TOURNÉE</h1>

      <div className="w-full max-w-4xl bg-white/95 rounded-2xl shadow-2xl px-2 sm:px-8 py-8 flex flex-col gap-2">
      {concerts.length === 0 ? (
          <p className="text-black text-center">Aucune tournée à venir.</p>
      ) : (
          <ul className="w-full flex flex-col gap-6">
          {concerts.map((concert) => (
            <li
              key={concert.id}
              className="w-full px-2 sm:px-4 text-black font-bold uppercase tracking-wide text-sm sm:text-base animate-fadein"
            >
                <div className="flex flex-col w-full">
                  <span className="font-mono">
                    {formatConcertDate(concert.date)}
                    {concert.location ? ` — ${concert.location}` : ""}
                    {concert.city ? ` — ${concert.city}` : ""}
                    {concert.country ? `, ${concert.country}` : ""}
                    {concert.soldOut ? " — WAITLIST" : ""}
                  </span>
                  <div className="w-full border-b-2 border-black my-2"></div>
                  <div className="flex justify-end">
                    {concert.soldOut ? (
                      <span className="bg-blue-200 text-blue-900 font-bold rounded-full px-5 py-1 text-xs sm:text-base shadow-md">WAITLIST</span>
                    ) : (
                      <button
                        onClick={handleTicketsClick}
                        className="bg-blue-200 text-blue-900 font-bold rounded-full px-5 py-1 text-xs sm:text-base shadow-md hover:bg-blue-300 transition cursor-pointer"
                      >
                        TICKETS
                      </button>
                    )}
                  </div>
                </div>
            </li>
          ))}
        </ul>
      )}
      </div>
    </section>
  );
};

export default Tournees;
