import React, { useState, useEffect } from "react";
import style from "./TextForm.module.scss";
import { franc } from "franc-min";

interface PropsType {
  alertText: (message: string, type: string) => void;
  mode: string;
}

function TextForm({ alertText, mode }: PropsType) {
  const [textArea, setTextArea] = useState<string>("");
  const [language, setLanguage] = useState<string>("");

  const textAreaLength: boolean = textArea === "";
  const colorText: string = mode === "dark" ? "text-light" : "text-dark";
  const bgColorArea: string = mode === "dark" ? "rgb(65, 65, 107)" : "bg-light";

  useEffect(() => {
    setLanguage(franc(textArea));
  }, [textArea]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const submitter = (e.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement;

    if (submitter) {
      const buttonName = submitter.name;
      switch (buttonName) {
        case "uppercase":
          if (!textAreaLength) {
            setTextArea(textArea.toUpperCase());
            alertText("Converted to uppercase", "success");
          }
          break;
        case "lowercase":
          if (!textAreaLength) {
            setTextArea(textArea.toLowerCase());
            alertText("Converted to lowercase", "success");
          }
          break;
        case "clear-all":
          if (!textAreaLength) {
            setTextArea(textArea.replace(textArea, ""));
            alertText("Converted to clear all", "success");
          }
          break;
        case "clear-space":
          if (!textAreaLength) {
            setTextArea(textArea.replace(/\s+/g, ""));
            alertText("Converted to clear space", "success");
          }
          break;
        case "reverse-word":
          if (!textAreaLength) {
            setTextArea(
              textArea
                .split(" ")
                .map((word) => word.split("").reverse().join(""))
                .join(" ")
            );
            alertText("Converted to reverse word", "success");
          }
          break;
        case "reverse-sentence":
          if (!textAreaLength) {
            setTextArea(textArea.split(" ").reverse().join(" "));
            alertText("Converted to reverse sentence", "success");
          }
          break;
        default:
          return;
      }
    }
  };
  const changeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={style.textForm}>
      <h1 className={`${colorText}`}>Enter the text to analyze below</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className={`textarea ${colorText} ${bgColorArea}`}
          onChange={changeTextArea}
          value={textArea}
        >
          {textArea}
        </textarea>
        <p className={colorText}>
          Language:{" "}
          {language.charAt(0).toUpperCase() + language.slice(1) || "Unknown"}
        </p>
        <div className={style.buttons}>
          <div className="d-grid gap-3 d-md-flex">
            <button name="uppercase" className="btn btn-danger" type="submit">
              Convert to UpperCase
            </button>
            <button name="lowercase" className="btn btn-primary" type="submit">
              Convert to Lowercase
            </button>
            <button name="clear-all" className="btn btn-success" type="submit">
              Clear All
            </button>
            <button
              name="clear-space"
              className="btn btn-primary"
              type="submit"
            >
              Clear Space
            </button>
            <button
              name="reverse-word"
              className="btn btn-primary"
              type="submit"
            >
              Reverse Word
            </button>
            <button
              name="reverse-sentence"
              className="btn btn-warning"
              type="submit"
            >
              Reverse Sentence
            </button>
          </div>
        </div>
      </form>
      <div className={`${style.resaultText} ${colorText}`}>
        <h2>Your text summary</h2>
        <p>
          {textArea.length === 0
            ? "0"
            : textArea.replace(/\s+/, "").split(" ").length}{" "}
          Words, {textArea.replace(/\s+/g, "").split("").length} Characters
        </p>
        <p>
          {0.008 *
            textArea.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>Enter the text to analyze below</p>
      </div>
    </div>
  );
}
export default TextForm;
