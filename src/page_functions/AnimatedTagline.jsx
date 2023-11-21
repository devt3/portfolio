/* 
The class works however need to check that time intervals are being cleared when components unmount 
Future memory leak concerns  
*/

import React from "react";
import { useEffect, useState } from "react";
import "./AnimatedTagline.scss";

const AnimatedTagline = () => {
  const startText = "unior ";

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

  //TYPEWRITER FUNCTION

  const typeWriterText = (
    setDisplay,
    emptyString,
    stringToType,
    setNextCondition
  ) => {
    let i = 0;
    let finished = false;

    const animate = () => {
      if (finished == false) {
        setDisplay((emptyString += stringToType.charAt(i)));
        i++;

        console.log("STILL RUNNING?"); //Line for debugging

        if (i == stringToType.length) {
          clearInterval(typingInterval);
          setNextCondition(true);
          finished = true;

          console.log("FINISHED?"); //Line for debugging
        }
      }
    };

    const typingInterval = setInterval(animate, 75);
  };

  //START TEXT

  useEffect(() => {
    if (animateStartText != true) {
      return;
    }

    var x = typeWriterText(
      setDisplayStart,
      emptyStartText,
      startText,
      setAnimateSynonyms
    );

    return () => {
      setAnimateSynonyms(false);
      console.log("START DISMOUNTED");
    };
  }, []);

  //SYNONYMS TEXT

  useEffect(() => {
    if (animateSynonyms != true) {
      return;
    }

    typeWriterText(
      setDisplaySynonym,
      emptySynonyms,
      synonymText,
      setRemoveSynonym
    );

    return () => {
      setAnimateHighlightText(false);
      console.log("SYNONYMS DISMOUNTED");
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

      console.log(removalString); //Line for debugging

      if (removalString.length == 0) {
        clearInterval(removeInterval);
        setAnimateHighlightText(true);
      }
    };

    let removeInterval = setInterval(removeLastChar, 15);

    return () => {
      clearInterval(removeInterval);
    };
  }, [removeSynonym]);

  //HIGHLIGHT TEXT

  useEffect(() => {
    if (animateHighlightText != true) {
      return;
    }

    typeWriterText(
      setDisplayHighlighted,
      emptyHighlightedText,
      highlightText,
      setAnimateEndText
    );

    return () => {
      setAnimateEndText(false);
      console.log("MIDDLE DISMOUNTED");
    };
  }, [animateHighlightText]);

  useEffect(() => {
    if (animateEndText != true) {
      return;
    }

    typeWriterText(setDisplayEnd, emptyEndText, endText, setAnimateStartText);

    return () => {
      setAnimateHighlightText(false);
      console.log("MIDDLE DISMOUNTED");
    };
  }, [animateEndText]);

  //END TEXT

  return (
    <h2 className="typeWriter">
      J<span>{displayStart}</span>
      <span className="highlight">{displaySynonym}</span>
      <span className="highlight">{displayHighlighted}</span>
      <span>{displayEnd}</span>
    </h2>
  );
};

export default AnimatedTagline;
