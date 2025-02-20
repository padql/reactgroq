import { useState } from 'react';
import { requestToGroqAI } from './utils/groq';
import {Light as SyntaxHighlight} from "react-syntax-highlighter"
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/prism"
import './App.css';

function App() {
    const [data, setData] = useState("");

    const handleSubmit = async () => {
      const ai = await requestToGroqAI(content.value);
      setData(ai);
    }
    return (
      <main className='flex flex-col min-h-[80vh] justify-center item-center max-w-xl w-full mx-auto'>
        <h1 className='text-4xl text-green-600'>Cet CPT</h1>
        <form className='flex flex-col gap-4 py-4' w-full>
          <input 
          placeholder='Malu bertanya sesat di jalan...'
          className='py-2 px-4 text-md rounded-md'
          id="content"
          type="text"
          />
          <button 
          onClick={handleSubmit}
          type="button"
          className='bg-green-600 py-2 px-4 font-bold text-white rounded-md'>Kirim</button>
        </form>
        <div className='bg-green-200 max-w-xl w-full mx-auto overflow: scroll;'>
          {data ? (
        <SyntaxHighlight language='swift' style={darcula} wrapLongLines={true}>
          {data}
        </SyntaxHighlight>
          ) : null}
        </div>
      </main>
    )
}


export default App
