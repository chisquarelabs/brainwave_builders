import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useState, useEffect } from "react";
import axios from "axios";

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
    const results = JSON.stringify(sender.data);
    addToDatabase(results);
  });


  const addToDatabase = (results: string) => {
    console.log("Data to be saved:", results);

  };


  const html = isLoading ? <p>Loading...</p> : <Survey model={survey} />;

  return <div>{html}</div>;
};

export default SurveyForm;
