import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
/* import Chart from "react-google-charts"; */

export default function Admin() {
  const [allAnswers, setAllAnswers] = useState([]);
  const [morning, setMorning] = useState([]);
  const [evening, setEvening] = useState([]);

  /* const [loading, setLoading] = useState(false); */

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
  }, [setMorning, setEvening]);

  useEffect(() => {
    setAllAnswers([...morning, ...evening]);
  }, [morning, evening]);
  console.log(allAnswers);
  return (
    <div>
      <h1>Admin og statistik</h1>
      <h2>total antal svar: {allAnswers?.length}</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            className="morgenStats"
            style={{ borderRight: "1px white solid ", paddingRight: "1em" }}
          >
            <h1 style={{ textAlign: "center" }}>
              {(morning?.length / allAnswers?.length).toFixed(4) * 100}%
            </h1>
            <h3 style={{ textAlign: "center" }}>Morgen</h3>
            <h3>Antal svar 7-15: {morning?.length}</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Find medarbejder: </p>
              <p>
                {(
                  morning?.reduce(
                    (acc, curr) => acc + parseInt(curr.findMedarbejder),
                    0
                  ) / morning?.length
                ).toFixed(2)}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Svar på spørgsmål: </p>
              <p>
                {(
                  morning?.reduce(
                    (acc, curr) => acc + parseInt(curr.answerQuestions),
                    0
                  ) / morning?.length
                ).toFixed(2)}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>vis vej til vare: </p>
              <p>
                {(
                  morning?.reduce(
                    (acc, curr) => acc + parseInt(curr.showWay),
                    0
                  ) / morning?.length
                ).toFixed(2)}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>forskel weekend: </p>
              <p>
                {(
                  morning?.reduce(
                    (acc, curr) => acc + parseInt(curr.difOnService),
                    0
                  ) / morning?.length
                ).toFixed(2)}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>forskel service tid: </p>
              <p>
                {(
                  morning?.reduce(
                    (acc, curr) => acc + parseInt(curr.difOnServiceTime),
                    0
                  ) / morning?.length
                ).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="aftenStats" style={{ paddingLeft: "1em" }}>
            <h1 style={{ textAlign: "center" }}>
              {(evening?.length / allAnswers?.length).toFixed(4) * 100}%
            </h1>
            <h3 style={{ textAlign: "center" }}>Aften</h3>
            <h3>Antal svar 15-21: {evening?.length}</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>
                {(
                  evening?.reduce(
                    (acc, curr) => acc + parseInt(curr.findMedarbejder),
                    0
                  ) / evening?.length
                ).toFixed(2)}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>
                {(
                  evening?.reduce(
                    (acc, curr) => acc + parseInt(curr.answerQuestions),
                    0
                  ) / evening?.length
                ).toFixed(2)}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>
                {(
                  evening?.reduce(
                    (acc, curr) => acc + parseInt(curr.showWay),
                    0
                  ) / evening?.length
                ).toFixed(2)}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>
                {(
                  evening?.reduce(
                    (acc, curr) => acc + parseInt(curr.difOnService),
                    0
                  ) / evening?.length
                ).toFixed(2)}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>
                {(
                  evening?.reduce(
                    (acc, curr) => acc + parseInt(curr.difOnServiceTime),
                    0
                  ) / evening?.length
                ).toFixed(2)}
              </p>
            </div>
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
