import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";

export default function Admin() {
  const [allAnswers, setAllAnswers] = useState([]);
  const [morning, setMorning] = useState([]);
  const [evening, setEvening] = useState([]);
  const [morningAnwerCounter, setMorningAnswerCounter] = useState({});
  const [eveningCounter, setEveningCounter] = useState({});

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

    setTimeout(() => {
      setMorningAnswerCounter({
        findMedarbejder: [
          morning?.filter((answer) => answer.findMedarbejder === "1").length,
          morning?.filter((answer) => answer.findMedarbejder === "2").length,
          morning?.filter((answer) => answer.findMedarbejder === "3").length,
          morning?.filter((answer) => answer.findMedarbejder === "4").length,
          morning?.filter((answer) => answer.findMedarbejder === "5").length,
          morning?.filter((answer) => answer.findMedarbejder === "6").length,
        ],
        answerQuestions: [
          morning?.filter((answer) => answer.answerQuestions === "1").length,
          morning?.filter((answer) => answer.answerQuestions === "2").length,
          morning?.filter((answer) => answer.answerQuestions === "3").length,
          morning?.filter((answer) => answer.answerQuestions === "4").length,
          morning?.filter((answer) => answer.answerQuestions === "5").length,
          morning?.filter((answer) => answer.answerQuestions === "6").length,
        ],
        showWay: [
          morning?.filter((answer) => answer.showWay === "1").length,
          morning?.filter((answer) => answer.showWay === "2").length,
          morning?.filter((answer) => answer.showWay === "3").length,
          morning?.filter((answer) => answer.showWay === "4").length,
          morning?.filter((answer) => answer.showWay === "5").length,
          morning?.filter((answer) => answer.showWay === "6").length,
        ],
        difOnService: [
          morning?.filter((answer) => answer.difOnService === "1").length,
          morning?.filter((answer) => answer.difOnService === "2").length,
          morning?.filter((answer) => answer.difOnService === "3").length,
          morning?.filter((answer) => answer.difOnService === "4").length,
          morning?.filter((answer) => answer.difOnService === "5").length,
          morning?.filter((answer) => answer.difOnService === "6").length,
        ],
        difOnServiceTime: [
          morning?.filter((answer) => answer.difOnServiceTime === "1").length,
          morning?.filter((answer) => answer.difOnServiceTime === "2").length,
          morning?.filter((answer) => answer.difOnServiceTime === "3").length,
          morning?.filter((answer) => answer.difOnServiceTime === "4").length,
          morning?.filter((answer) => answer.difOnServiceTime === "5").length,
          morning?.filter((answer) => answer.difOnServiceTime === "6").length,
        ],
      });

      setEveningCounter({
        findMedarbejder: [
          evening?.filter((answer) => answer.findMedarbejder === "1").length,
          evening?.filter((answer) => answer.findMedarbejder === "2").length,
          evening?.filter((answer) => answer.findMedarbejder === "3").length,
          evening?.filter((answer) => answer.findMedarbejder === "4").length,
          evening?.filter((answer) => answer.findMedarbejder === "5").length,
          evening?.filter((answer) => answer.findMedarbejder === "6").length,
        ],
        answerQuestions: [
          evening?.filter((answer) => answer.answerQuestions === "1").length,
          evening?.filter((answer) => answer.answerQuestions === "2").length,
          evening?.filter((answer) => answer.answerQuestions === "3").length,
          evening?.filter((answer) => answer.answerQuestions === "4").length,
          evening?.filter((answer) => answer.answerQuestions === "5").length,
          evening?.filter((answer) => answer.answerQuestions === "6").length,
        ],
        showWay: [
          evening?.filter((answer) => answer.showWay === "1").length,
          evening?.filter((answer) => answer.showWay === "2").length,
          evening?.filter((answer) => answer.showWay === "3").length,
          evening?.filter((answer) => answer.showWay === "4").length,
          evening?.filter((answer) => answer.showWay === "5").length,
          evening?.filter((answer) => answer.showWay === "6").length,
        ],
        difOnService: [
          evening?.filter((answer) => answer.difOnService === "1").length,
          evening?.filter((answer) => answer.difOnService === "2").length,
          evening?.filter((answer) => answer.difOnService === "3").length,
          evening?.filter((answer) => answer.difOnService === "4").length,
          evening?.filter((answer) => answer.difOnService === "5").length,
          evening?.filter((answer) => answer.difOnService === "6").length,
        ],
        difOnServiceTime: [
          evening?.filter((answer) => answer.difOnServiceTime === "1").length,
          evening?.filter((answer) => answer.difOnServiceTime === "2").length,
          evening?.filter((answer) => answer.difOnServiceTime === "3").length,
          evening?.filter((answer) => answer.difOnServiceTime === "4").length,
          evening?.filter((answer) => answer.difOnServiceTime === "5").length,
          evening?.filter((answer) => answer.difOnServiceTime === "6").length,
        ],
      });
    }, 1000);
    console.log(morningAnwerCounter);
  }, [morning, evening, setAllAnswers]);
  console.log(allAnswers);
  return (
    <div>
      <h1>Admin og statistik</h1>
      <h2>total antal svar: {allAnswers?.length}</h2>
      <div>
        <div>
          <div
            className="morgenStats"
            style={{ borderRight: "1px white solid ", paddingRight: "1em" }}
          >
            <h1 style={{ textAlign: "center" }}>
              {(morning?.length / allAnswers?.length).toFixed(4) * 100}%
            </h1>
            <h3 style={{ textAlign: "center" }}>Morgen</h3>
            <h3>Antal svar 7-15: {morning?.length}</h3>
            <div>
              <p style={{ textAlign: "center" }}>Find medarbejder: </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "70%",
                  margin: "0 auto",
                }}
              >
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "75%",
                  margin: "0 auto",
                }}
              >
                {morningAnwerCounter?.findMedarbejder?.map((answer) => {
                  return <p>{answer}</p>;
                })}
              </div>
            </div>
            <div>
              <p>Svar på spørgsmål: </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "70%",
                  margin: "0 auto",
                }}
              >
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "75%",
                  margin: "0 auto",
                }}
              >
                {morningAnwerCounter?.answerQuestions?.map((answer) => {
                  return <p>{answer}</p>;
                })}
              </div>
            </div>
            <div>
              <p>vis vej til vare: </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "70%",
                  margin: "0 auto",
                }}
              >
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "75%",
                  margin: "0 auto",
                }}
              >
                {morningAnwerCounter?.showWay?.map((answer) => {
                  return <p>{answer}</p>;
                })}
              </div>
            </div>
            <div>
              <p>forskel weekend: </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "70%",
                  margin: "0 auto",
                }}
              >
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "75%",
                  margin: "0 auto",
                }}
              >
                {morningAnwerCounter?.difOnService?.map((answer) => {
                  return <p>{answer}</p>;
                })}
              </div>
            </div>
            <div>
              <p>forskel service tid: </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "70%",
                  margin: "0 auto",
                }}
              >
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "75%",
                  margin: "0 auto",
                }}
              >
                {morningAnwerCounter?.difOnServiceTime?.map((answer) => {
                  return <p>{answer}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="aftenStats" style={{ paddingLeft: "1em" }}>
            <h1 style={{ textAlign: "center" }}>
              {(evening?.length / allAnswers?.length).toFixed(4) * 100}%
            </h1>
            <h3 style={{ textAlign: "center" }}>Aften</h3>
            <h3>Antal svar 15-21: {evening?.length}</h3>
            <div>
              <div>
                <p>Find medarbejder: </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "70%",
                    margin: "0 auto",
                  }}
                >
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "75%",
                    margin: "0 auto",
                  }}
                >
                  {eveningCounter?.findMedarbejder?.map((answer) => {
                    return <p>{answer}</p>;
                  })}
                </div>
              </div>
              <div>
                <p>Svar på spørgsmål: </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "70%",
                    margin: "0 auto",
                  }}
                >
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "75%",
                    margin: "0 auto",
                  }}
                >
                  {eveningCounter?.answerQuestions?.map((answer) => {
                    return <p>{answer}</p>;
                  })}
                </div>
              </div>
            </div>
            <div>
              <div>
                <p>vis vej: </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "70%",
                    margin: "0 auto",
                  }}
                >
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "75%",
                    margin: "0 auto",
                  }}
                >
                  {eveningCounter?.showWay?.map((answer) => {
                    return <p>{answer}</p>;
                  })}
                </div>
              </div>
            </div>
            <div>
              <div>
                <p>forskel weekend: </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "70%",
                    margin: "0 auto",
                  }}
                >
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "75%",
                    margin: "0 auto",
                  }}
                >
                  {eveningCounter?.difOnService?.map((answer) => {
                    return <p>{answer}</p>;
                  })}
                </div>
              </div>
            </div>
            <div>
              <div>
                <p>Forskel på service tid: </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "70%",
                    margin: "0 auto",
                  }}
                >
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "75%",
                    margin: "0 auto",
                  }}
                >
                  {eveningCounter?.difOnServiceTime?.map((answer) => {
                    return <p>{answer}</p>;
                  })}
                </div>
              </div>
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
