import React from "react";
import { useEffect, useState } from "react";
import "./AnimatedTagline.scss";

const AnimatedTagline = () => {
  const startText = "Junior ";

  const synonymText =
    "FullStack Developer, Web Developer, Database Developer, Designer ";

  const highlightText = "Software Engineer ";

  const endText =
    "passionate about crafting innovative and user-centric digital solutions.";

  //SPAN ELEMENT BEGINS HERE
  const [displayStart, setDisplayStart] = useState("");
  const [displaySynonym, setDisplaySynonym] = useState("");

  const [removeSynonym, setRemoveSynonym] = useState("");

  const [displayHighlighted, setDisplayHighlighted] = useState("");
  const [displayEnd, setDisplayEnd] = useState("");

  //CONDITIONS
  const [animateStartText, setAnimateStartText] = useState(true);
  const [animateSynonyms, setAnimateSynonyms] = useState(false);
  const [animateHighlightText, setAnimateHighlightText] = useState(false);
  const [animateEndText, setAnimateEndText] = useState(false);

  //Empty Strings
  let emptyStartText = "";
  let emptySynonyms = "";
  let emptyHighlightedText = "";
  let emptyEndText = "";

  //TYPEWRITER EFFECT FUNCTION

  const animate = (
    setDisplay,
    emptyString,
    stringToType,
    setNextCondition,
    i,
    finished
  ) => {
    if (finished == false) {
      setDisplay((emptyString += stringToType.charAt(i)));
      i++;
      console.log(i);

      if (i == stringToType.length) {
        //clearInterval(typingInterval);
        setNextCondition(true);
        finished = true;

        console.log("FINISHED?");
      }
    }
  };

  //START TEXT

  useEffect(() => {
    if (animateStartText != true) {
      return;
    }

    let i = 0;
    let finished = false;

    let typingInterval = setInterval(
      animate(
        setDisplayStart,
        emptyStartText,
        startText,
        setAnimateSynonyms,
        i,
        finished
      ),
      100
    );

    return () => {
      //clearInterval(typingInterval);
      setAnimateSynonyms(false);
      console.log(animateSynonyms);
      console.log("START DISMOUNTED");
    };
  }, []);

  //SYNONYMS TEXT

  useEffect(() => {
    if (animateSynonyms != true) {
      return;
    }

    let i = 0;
    let finished = false;

    const typingInterval = setInterval(
      animate(
        setDisplaySynonym,
        emptySynonyms,
        synonymText,
        setRemoveSynonym,
        i,
        finished
      ),
      100
    );

    return () => {
      clearInterval(typingInterval);
      setAnimateHighlightText(false);
      console.log("SYNONYM DISMOUNTED");
    };
  }, [animateSynonyms]);

  //REMOVE SYNONYMS TEXT

  useEffect(() => {
    if (removeSynonym != true) {
      return;
    }

    let removalString = synonymText;

    const removeLastChar = () => {
      removalString = removalString.slice(0, -1);
      setDisplaySynonym(removalString);
      console.log(removalString);

      if (removalString.length == 0) {
        clearInterval(removeInterval);
      }
    };

    let removeInterval = setInterval(removeLastChar, 100);

    return () => {
      clearInterval(removeInterval);
    };
  }, [removeSynonym]);

  //HIGHLIGHTES TEXT

  // useEffect(() => {
  //   if (animateHighlightText != true) {
  //     return;
  //   }

  //   typeWriterText(
  //     setDisplayHighlighted,
  //     emptyHighlightedText,
  //     highlightText,
  //     setAnimateEndText
  //   );

  //   return () => {
  //     setAnimateHighlightText(false);
  //     console.log("MIDDLE DISMOUNTED");
  //   };
  // }, [animateHighlightText]);

  //END TEXT

  return (
    <h2 className="typeWriter">
      <span>{displayStart}</span>
      <span className="highlight">{displaySynonym}</span>
      <span>{displayHighlighted}</span>
      <span>{displayEnd}</span>
    </h2>
  );
};

export default AnimatedTagline;
