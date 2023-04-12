import React, { useState } from "react";
import "./style.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

export default function SpeechRecog() {
  const [textTocopy, setTextCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textTocopy);
  // console.log(isCopied)

  //hooks
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const StartListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const Stop = () => SpeechRecognition.stopListening();
  //   const Pouse = () => SpeechRecognition.stopListening();

  // its check for browser suport or not
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className="container mt-5" id="main_container">
        <div id="box_contaier">
          <h1 className="text-center my-4 text-info fw-5">Speech Recognition App </h1>
          <div
            className="row m-auto border border-2 w-75 py-3 px-2"
            style={{ minHeight: "15rem" }}
            onClick={() => setTextCopy(transcript)}
          >
            {transcript}
          </div>
          <div className="row m-auto w-75 my-3 d-flex  justify-content-between ">
            <button
              className="col col-12 col-md-4  my-1 btn btn-primary  "
              onClick={setCopied}
            >
              {isCopied ? "Yes!copied " : "Do copy ! "}
            </button>
            <button
              className="col col-12 col-md-4 my-1 btn btn-success  "
              onClick={StartListening}
            >
              Start Listning
            </button>
            <button
              className=" col col-12 col-md-4  my-1 btn btn-danger  "
              onClick={Stop}
            >
              Stop
            </button>
          </div>
        </div>
        
      </div>
     
    </>
  );
}
