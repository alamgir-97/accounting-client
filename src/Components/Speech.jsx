import React, { useEffect, useState } from "react";

const Speech = () => {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
      console.log("Available voices:", allVoices);
    };

    // Load voices (some browsers need this event listener)
    if (typeof window !== "undefined") {
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handleSpeech = (e) => {
    e.preventDefault();
    const textInput = e.target.inputField.value;
    console.log(textInput);

    const utterance = new SpeechSynthesisUtterance(textInput);
    // Optional: Set English voice if needed
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const handleReset = () => {
    const innerText = (document.getElementById("txt").value = "");
    console.log(innerText);
  };

  const handleSpeechAr = (e) => {
    e.preventDefault();
    const arabicTextInput = e.target.arabicInputField.value;
    console.log(arabicTextInput);

    const arabicVoice = voices.find((voice) => voice.lang.startsWith("ar"));

    if (!arabicVoice) {
      alert("Arabic voice not available in your browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(arabicTextInput);
    utterance.voice = arabicVoice;
    utterance.lang = arabicVoice.lang;

    window.speechSynthesis.speak(utterance);
  };

  const handleResetArabic = () => {
    const innerText = (document.getElementById("txtArabic").value = "");
    console.log(innerText);
  };

  return (
    <>
      <div className="bg-orange-400 sticky top-0 gap-x-4 gap-y-2  flex max-[640px]:flex-col justify-center items-center">
        <div className="bg-orange-400 px-8 py-2">
          <label className="flex justify-center text-xs lg:text-base">
            ইংরেজীতে কোন কিছু পড়তে অসুবিধা হলে এখানে টাইপ অথবা কপি পেস্ট করুন,
            তারপর Read বাটন চাপুন। আপনাকে পড়ে দিবে।
          </label>
          <form
            className="flex gap-2 text-lg h-10 justify-center"
            onSubmit={handleSpeech}
          >
            <textarea
              id="txt"
              name="inputField"
              className="border rounded-md p-2 w-5/6 bg-[#ffffff88] text-base"
              placeholder="Type or copy-paste here to make you read aloud in English"
            ></textarea>
            <button
              type="submit"
              className="bg-fuchsia-600 text-white p-2 w-fit text-nowrap rounded-md text-xs md:text-base"
            >
              Read English
            </button>
            <button
              type="button"
              className="border text-white p-2 w-1/6 rounded-md text-xs md:text-base"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        </div>

        <div className="mt-4 bg-orange-300 px-8 py-2">
          <label className="flex justify-center text-xs lg:text-base">
            আরবীতে কোন কিছু পড়তে অসুবিধা হলে এখানে টাইপ অথবা কপি পেস্ট করুন,
            তারপর Read বাটন চাপুন। আপনাকে পড়ে দিবে।
          </label>
          <form
            className="flex gap-2 text-lg h-10 justify-center"
            onSubmit={handleSpeechAr}
          >
            <textarea
              id="txtArabic"
              name="arabicInputField"
              className="border rounded-md p-2 w-5/6 bg-[#ffffff88] text-base"
              placeholder="Type or copy-paste here to make you read aloud in Arabic"
            ></textarea>
            <button
              type="submit"
              className="bg-fuchsia-600 text-white p-2 w-fit rounded-md text-xs md:text-base text-nowrap"
            >
              Read Arabic
            </button>
            <button
              type="button"
              className="border text-white p-2 w-1/6 rounded-md text-xs md:text-base"
              onClick={handleResetArabic}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Speech;
