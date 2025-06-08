// const { GoogleGenAI } = require("@google/genai");
// require('dotenv').config();

// const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

// const main = async () => {
//     const response = await ai.models.generateContent({
//         model:"gemini-2.0-flash",
//         contents: "What is my Name"
//     });
//     console.log(response.text);
// }

// main(); 


// send previous chats also
// const { GoogleGenAI } = require("@google/genai");
// const readlineSync = require('readline-sync'); // for taking input from terminal
// require('dotenv').config();
// const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});
// const history = []; // maintain the history, so i can provide the context

// const chatting = async (userProblem) => {
//     history.push({
//         role:'user', parts:[{text:userProblem}]
//     });

//     const response = await ai.models.generateContent({
//         model:"gemini-2.0-flash",
//         contents: history
//     });

//     history.push({
//         role:'model', parts:[{text:response.text}]
//     })
//     console.log(response.text);
// }

// async function main(){
//     const userProblem = readlineSync.question("Ask me Anything --> ");
//     await chatting(userProblem);
//     main();
// }
// main(); 



const { GoogleGenAI } = require("@google/genai");
const readlineSync = require('readline-sync'); // for taking input from terminal
require('dotenv').config();
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: []
});

async function main(){
    const userProblem = readlineSync.question("Ask me Anything --> ");
    const response = await chat.sendMessageStream({message: userProblem});

    for await (const chunk of response) {
        console.log(chunk.text);      
    }

    main();
}

main(); 

