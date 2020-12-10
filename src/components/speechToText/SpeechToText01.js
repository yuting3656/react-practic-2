import React, {
    useRef,
} from 'react'
import {
    Input,
    Button
} from 'antd';

//
// IMPORT ZONE
//


const SpeechToText01 = () => {

    const bRef = useRef('1');

    const stt = () => {
        const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new speechRecognition();
        recognition.lang = 'zh-TW'
        recognition.continuous = true

        // focus on input 
        let elem = document.getElementById(bRef.current);
        console.log("elem: ", elem)
        elem.focus()
        recognition.onstart = (e) => {
            console.log("onStart: ")
        }

        recognition.onspeechend = function(e) {
            console.log("onSpeechend e: ", e)
            // recognition.stop();
            // update ref 
            // bRef.current = '' + bRef.current + 1
            // console.log("bRef.current [update]:", bRef.current)
            // // move focus to next element
            // elem = document.getElementById(bRef.current);
            // elem.focus()
            // setTimeout( () => {
            //     recognition.start()
            // }, 500)
        }

        recognition.onresult = (e) => {
            console.log("onResult e: ", e)
            const text =  e.results[0][0].transcript
            console.log("onResult Text: ", text)
            console.log("onResult Confidence: ", e.results[0][0].confidence)
            elem.value = text

            setTimeout(() => {
                bRef.current = '' + bRef.current + 1
                console.log("bRef.current [update]:", bRef.current)
                // move focus to next element
                elem = document.getElementById(bRef.current);
                elem.focus()
                recognition.stop();
            }, 1500)
            // update ref 
        
            setTimeout( () => {
                recognition.start()
            }, 5000)
        }
        
    
        recognition.start()
    }

    const test = () => {
        console.log("bRef.current: ", bRef.current)
        console.log("bRef.current.state.value: ", bRef.current.state.value)
        // bRef.current.nextElementSibling.focus()
    }

    return (
        <div>
        <Button onClick={test} > nextInput </Button>
        <Button onClick={stt} > STT </Button>
           <input id="1"  />
           <input id="11"/>
           <input id="111"/>
           <input id="1111"/>
           <input id="11111"/>
        </div>
    )
}

export default SpeechToText01
