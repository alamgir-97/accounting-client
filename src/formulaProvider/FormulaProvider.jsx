import { createContext } from "react";

export const FormulaContext = createContext(null)

const FormulaProvider = ({children}) => {
    function readContent(id) {
        const content = document.getElementById(id).innerText;
        console.log(content)
        
        navigator.clipboard.writeText(content)
    
            .then(() => {
                    const utterance = new SpeechSynthesisUtterance(content);
                    window.speechSynthesis.speak(utterance);              
                    console.log('Content read aloud:', content);
            })
            .catch((error) => {
                console.error('Failed to read aloud:', error);
                alert('Failed to read aloud');
            });
    }


    function copyContent(id) {
        const content = document.getElementById(id).innerText;
        console.log(content)
        
        navigator.clipboard.writeText(content)
        
            .then(() => {
                    console.log('Content copied to clipboard:', content);
                    
                    alert('Content copied to clipboard');
            })
            .catch((error) => {
                console.error('Failed to copy content:', error);
                alert('Failed to copy content');
            });
    }
    const formulaInfo = {
        readContent, copyContent
    }
    return (
        <FormulaContext.Provider value={formulaInfo}>
            {children}
        </FormulaContext.Provider>
    );
};

export default FormulaProvider;