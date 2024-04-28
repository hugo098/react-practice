import { useQuiz } from "../contexts";
import { Options } from "./Options";

export function Question() {
  const { questions, index } = useQuiz();

  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}
