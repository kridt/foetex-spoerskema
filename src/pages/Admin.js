import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
/* import Chart from "react-google-charts"; */

export default function Admin() {
  const [allAnswers, setAllAnswers] = useState([]);
  const [morning, setMorning] = useState([]);
  const [evening, setEvening] = useState([]);
  /* const [loading, setLoading] = useState(false); */

  /* const thatData = [
    ["Kundeoplevelser gns", "Aften", "Morgen"],
    ["Hvor nemt er det at finde en medarbejder i nonfood?", 5, 4],
    [
      "Hvor gode er medarbejderne i nonfood afdelingen til at besvare dine spørgsmål?",
      4,
      1,
    ],
    [
      "Hvor gode er medarbejderne i nonfood afdelingen til at vise dig hen til den vare du leder efter?",
      4,
      3,
    ],
    [
      "Er der forskel på Servicen hvis du handler i weekenden frem for i hverdagen?",
      5,
      5,
    ],
    [
      "Er der forskel på servicen hvis du handler fra 7-15 i stedet for 15-21?",
      1,
      5,
    ],
  ]; */
  /* const options = {
    title: "Kundeoplevelser gennemsit",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Gennemsnit ud af 6",
      minValue: 0,
      maxValue: 5,
    },
  };
 */

  useEffect(() => {
    firestore
      .collection("allAnswers")
      .doc("morning")
      .collection("answers")
      .get()
      .then((snapshot) => {
        setMorning(snapshot.docs.map((doc) => doc.data()));
      });

    firestore
      .collection("allAnswers")
      .doc("evening")
      .collection("answers")
      .get()
      .then((snapshot) => setEvening(snapshot.docs.map((doc) => doc.data())));

    setAllAnswers([...morning, ...evening]);
  }, []);

  console.log(allAnswers);
  return (
    <div>
      <h1>Admin og statistik</h1>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            className="morgenStats"
            style={{ borderRight: "1px white solid ", paddingRight: "1em" }}
          >
            <h3 style={{ textAlign: "center" }}>Morgen</h3>
            <h3>Antal svar 7-15: {morning?.length}</h3>
          </div>
          <div className="aftenStats" style={{ paddingLeft: "1em" }}>
            <h3 style={{ textAlign: "center" }}>Aften</h3>
            <h3>Antal svar 15-21: {evening?.length}</h3>
          </div>
        </div>
      </div>
      {/* <Chart
        chartType="BarChart"
        data={thatData}
        width="100%"
        height="400px"
        options={options}
      /> */}
    </div>
  );
}
