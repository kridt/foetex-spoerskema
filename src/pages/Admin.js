import React, { useState } from "react";
import Chart from "react-google-charts";

export default function Admin() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [morning, setMorning] = useState([]);
  const [evening, setEvening] = useState([]);

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
  return (
    <div>
      <h1>Admin og statistik</h1>
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
