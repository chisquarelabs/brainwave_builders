import "survey-core/defaultV2.min.css"; // Default V2 theme
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useState, useEffect } from "react";
import axios from "axios";

// Define types for the survey schema
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

  // Dummy survey schema
  const dummySchema: SurveySchema = {
    elements: [
      {
        type: "radiogroup",
        name: "question1",
        title: "Which year are you in?",
        isRequired: true,
        choices: [
          { value: "item1", text: "Freshman" },
          { value: "item2", text: "Sophomore" },
          { value: "item3", text: "Junior" },
          { value: "item4", text: "Senior" },
          { value: "item5", text: "Grad Student" },
        ],
      },
      {
        type: "boolean",
        name: "question2",
        title:
          "Was the learning curve of this course as communicated and expected?",
        isRequired: true,
      },
      {
        type: "boolean",
        name: "question3",
        title: "Would you recommend this course to other students?",
        isRequired: true,
      },
      {
        type: "text",
        name: "question4",
        visibleIf: "{question3} = false",
        title: "Would you mind telling us why not?",
        validators: [
          {
            type: "regex",
            text: "Disallowed sequence(s) detected.",
            regex: "^(?!<.+?>)", // Validation to protect against malicious HTML
          },
        ],
      },
      {
        type: "boolean",
        name: "question5",
        title: "Would you take another course by the same professor?",
        isRequired: true,
      },
      {
        type: "text",
        name: "question6",
        title: "Do you have any suggestions to improve this course?",
        validators: [
          {
            type: "regex",
            text: "Disallowed sequence(s) detected.",
            regex: "^(?!<.+?>)", // Validation to protect against malicious HTML
          },
        ],
      },
    ],
  };

  // Dummy function to simulate post request
  const addToDatabase = (results: string) => {
    console.log("Data to be saved:", results);
    // Normally, you would use axios to save the data
    // Example: axios.post("/api", results);
  };

  const fetchQuestionnaire = async () => {
    setIsLoading(true);
    const response = await axios.get("http://localhost:4003/questions");
    setSchema(response.data.questions);
    setIsLoading(false);
  };

  // Set survey schema and remove loading state
  useEffect(() => {
    fetchQuestionnaire();
  }, []);

  // Create Survey model from schema
  const survey = new Model(schema as any); // Using 'any' since schema may be null initially

  // Handle survey completion
  survey.onComplete.add((sender) => {
    const results = JSON.stringify(sender.data);
    addToDatabase(results);
  });

  // Render loading or survey component
  const html = isLoading ? <p>Loading...</p> : <Survey model={survey} />;

  return <div>{html}</div>;
};

export default SurveyForm;
