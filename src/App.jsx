import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <Header />
        <Content />
      </div>
    </>
  );
}

// const Header = () => {
//   return (
//     <header className="header">
//       <div>
//         <nav className="nav">
//           <a href="https://react.dev" target="_blank">
//             <img src={reactLogo} className="logo react nav-logo" alt="React logo" />
//           </a>
//           <ul className="nav-items">
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

export default App;

{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */
}