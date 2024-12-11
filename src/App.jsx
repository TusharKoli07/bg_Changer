import { useState } from "react"


function App() {
  const [color, setColor] = useState("black")
  
  const Reload = () => {
    window.location.reload();
  };

  
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >

<div className="fixed flex flex-wrap justify-center bottom-28 inset-x-0  px-2">
  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button onClick={() => Reload()}
          className="outline-none px-4 py-1 font-bold rounded-full text-black shadow-lg"
          >Reload</button>
  </div>
</div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 acacpy-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

<button
          onClick={() => setColor("orange")}
          className="outline-none px-4 acacpy-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>

<button
          onClick={() => setColor("brown")}
          className="outline-none px-4 acacpy-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "brown"}}
          >Brown</button>

<button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 acacpy-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

<button
          onClick={() => setColor("Grey")}
          className="outline-none px-4 acacpy-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Grey"}}
          >Grey</button>

<button
          onClick={() => setColor("white")}
          className="outline-none px-4 acacpy-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}}
          >White</button>
        </div>
      </div>
    </div>
  )
}

export default App