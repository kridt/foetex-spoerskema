import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { firestore } from "../firebase";

export default function Evening() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    firestore
      .collection("allAnswers")
      .doc("evening")
      .collection("answers")
      .add(data);

    navigate("/thankyou");
  }

  return (
    <div>
      <Link style={{ color: "white", margin: ".5em" }} to="/">
        Tilbage
      </Link>
      <h1 style={{ textAlign: "center" }}>15-21</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label
            style={{
              fontSize: "1.3em",
              fontWeight: "500",
            }}
            htmlFor="findMedarbejder"
          >
            Hvor nemt er det at finde en medarbejder i nonfood?
          </label>
          <br />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="1"
                name="findMedarbejder"
                value="1"
              />
              <label htmlFor="1">1</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="2"
                name="findMedarbejder"
                value="2"
              />
              <label htmlFor="2">2</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="3"
                name="findMedarbejder"
                value="3"
              />
              <label htmlFor="3">3</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="4"
                name="findMedarbejder"
                value="4"
              />
              <label htmlFor="4">4</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="5"
                name="findMedarbejder"
                value="5"
              />
              <label htmlFor="5">5</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="6"
                name="findMedarbejder"
                value={"6"}
              />

              <label htmlFor="6">6</label>
            </div>
          </div>
        </div>
        <div>
          <label
            style={{
              fontSize: "1.3em",
              fontWeight: "500",
            }}
            htmlFor="findMedarbejder"
          >
            Hvor gode er medarbejderne i nonfood afdelingen til at besvare dine
            spørgsmål?
          </label>
          <br />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="1"
                name="answerQuestions"
                value="1"
              />
              <label htmlFor="1">1</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="2"
                name="answerQuestions"
                value="2"
              />
              <label htmlFor="2">2</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="3"
                name="answerQuestions"
                value="3"
              />
              <label htmlFor="3">3</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="4"
                name="answerQuestions"
                value="4"
              />
              <label htmlFor="4">4</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="5"
                name="answerQuestions"
                value="5"
              />
              <label htmlFor="5">5</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="6"
                name="answerQuestions"
                value={"6"}
              />

              <label htmlFor="6">6</label>
            </div>
          </div>
        </div>
        <div>
          <label
            style={{
              fontSize: "1.3em",
              fontWeight: "500",
            }}
            htmlFor="findMedarbejder"
          >
            Hvor gode er medarbejderne i nonfood afdelingen til at vise dig hen
            til den vare du leder efter?
          </label>
          <br />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input required type="radio" id="1" name="showWay" value="1" />
              <label htmlFor="1">1</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input required type="radio" id="2" name="showWay" value="2" />
              <label htmlFor="2">2</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input required type="radio" id="3" name="showWay" value="3" />
              <label htmlFor="3">3</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input required type="radio" id="4" name="showWay" value="4" />
              <label htmlFor="4">4</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input required type="radio" id="5" name="showWay" value="5" />
              <label htmlFor="5">5</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input required type="radio" id="6" name="showWay" value={"6"} />

              <label htmlFor="6">6</label>
            </div>
          </div>
        </div>
        <div>
          <label
            style={{
              fontSize: "1.3em",
              fontWeight: "500",
            }}
            htmlFor="findMedarbejder"
          >
            Er der forskel på Servicen hvis du handler i weekenden frem for i
            hverdagen?
          </label>
          <br />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="1"
                name="difOnService"
                value="1"
              />
              <label htmlFor="1">1</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="2"
                name="difOnService"
                value="2"
              />
              <label htmlFor="2">2</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="3"
                name="difOnService"
                value="3"
              />
              <label htmlFor="3">3</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="4"
                name="difOnService"
                value="4"
              />
              <label htmlFor="4">4</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="5"
                name="difOnService"
                value="5"
              />
              <label htmlFor="5">5</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="6"
                name="difOnService"
                value={"6"}
              />

              <label htmlFor="6">6</label>
            </div>
          </div>
        </div>
        <div>
          <label
            style={{
              fontSize: "1.3em",
              fontWeight: "500",
            }}
            htmlFor="findMedarbejder"
          >
            Er der forskel på servicen hvis du handler fra 15-21 i stedet for
            7-15?
          </label>
          <br />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="1"
                name="difOnServiceTime"
                value="1"
              />
              <label htmlFor="1">1</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="2"
                name="difOnServiceTime"
                value="2"
              />
              <label htmlFor="2">2</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="3"
                name="difOnServiceTime"
                value="3"
              />
              <label htmlFor="3">3</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="4"
                name="difOnServiceTime"
                value="4"
              />
              <label htmlFor="4">4</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="5"
                name="difOnServiceTime"
                value="5"
              />
              <label htmlFor="5">5</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                textAlign: "center",
                scale: "1.5",
              }}
            >
              <input
                required
                type="radio"
                id="6"
                name="difOnServiceTime"
                value={"6"}
              />

              <label htmlFor="6">6</label>
            </div>
          </div>
        </div>

        <input required type="submit" value={"Indsend svar"} />
      </form>
    </div>
  );
}
