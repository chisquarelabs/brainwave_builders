import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SurveyChoice {
  value: string;
  text: string;
}

interface SurveyElement {
  type: string;
  name: string;
  title: string;
  isRequired?: boolean;
  choices?: SurveyChoice[];
  visibleIf?: string;
  validators?: Array<{ type: string; text: string; regex?: string }>;
}

interface SurveySchema {
  elements: SurveyElement[];
}

StylesManager.applyTheme("defaultV2");

const SurveyForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [schema, setSchema] = useState<SurveySchema | null>(null);
  const [results, setResults] = useState<any>(null);  // State to hold the survey results
  const navigate = useNavigate();  // For navigation

  // Define question type mappings for survey elements
  const questionTypeMap: { [key: string]: (item: any) => SurveyElement } = {
    input: (item) => ({
      type: "text",
      name: item.id,
      title: item.question_text,
      isRequired: true,
    }),
    date: (item) => ({
      type: "text", 
      name: item.id,
      title: item.question_text,
      isRequired: true,
      inputType: "date",
    }),
    radio: (item) => ({
      type: "radiogroup",
      name: item.id,
      title: item.question_text,
      isRequired: true,
      choices: item.answers.map((answer: any) => ({
        value: answer.id,
        text: answer.answer_text,
      })),
    }),
    checkbox: (item) => ({
      type: "checkbox",
      name: item.id,
      title: item.question_text,
      isRequired: true,
      choices: item.choices.map((choice: any) => ({
        value: choice.value,
        text: choice.text,
      })),
    }),
    default: (item) => ({
      type: "text",
      name: item.id,
      title: item.question_text,
      isRequired: true,
    }),
  };

  const generateSchema = (data: any[]): SurveySchema => {
    const elements = data.map((item) => {
      const createElement = questionTypeMap[item.question_type] || questionTypeMap.default;
      return createElement(item);
    });

    return { elements };
  };

  const fetchQuestionnaire = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:4003/questions");
      const questions = response.data.questions; 
      console.log(response.data);
      
      const schema = generateSchema(questions); 
      setSchema(schema);
    } catch (error) {
      console.error("Error fetching survey data:", error);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchQuestionnaire();
  }, []);

  const survey = new Model(schema as any); 


  survey.onComplete.add((sender) => {
    const completedData = sender.data;

    // Map the completed answers with the question texts and answer texts
    const mappedResults = Object.keys(completedData).map((questionId) => {
      const question = schema?.elements.find((e) => e.name === questionId);
      const selectedValue = completedData[questionId];
      const selectedText = question?.choices?.find((choice) => choice.value === selectedValue)?.text || selectedValue;
      
      return {
        questionText: question?.title || questionId,
        answerText: selectedText
      };
    });
    setResults(mappedResults);  // Store mapped results
    navigate("/completed", { state: { results: mappedResults } });  // Navigate to the completed page
  });


  const html = isLoading ? <p>Loading...</p> : <Survey model={survey} />;

  return <div>{html}</div>;
};

export default SurveyForm;
