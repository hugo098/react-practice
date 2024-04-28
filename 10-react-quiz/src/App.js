import { useEffect, useReducer } from "react";
import {
  Error,
  Header,
  Main,
  Loader,
  StartScreen,
  Question,
  NextButton,
  Progress,
  FinishScreen,
  Footer,
  Timer,
} from "./components";
import { useQuiz } from "./contexts";

export default function App() {
  const { status, dispatch } = useQuiz();

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, [dispatch]);
  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
