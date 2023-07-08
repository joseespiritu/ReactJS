import { useState } from "react";
import useLLM from "usellm";

const App = () => {

  const [result, setResult] = useState('');

  const llm = useLLM({
    serviceUrl: 'https://usellm.org/api/llm'
  });

  return (
    <div>
      <button onClick={async () => {
        await llm.chat({
          messages: [{role: "user", content: "dame una lista de lenguajes de programación faciles de aprender"}],
          stream: true,
          onStream: ({message}) => setResult(message.content)
        });
      }}>
        Chat
      </button>

      <div style={{whiteSpace: "pre-wrap"}}>
        {result}
      </div>
    </div>
  )
}

export default App