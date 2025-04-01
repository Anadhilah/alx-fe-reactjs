import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserProfile from './components/UserProfile.jsx';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <div className="flex justify-center gap-8 mb-8">
//           <a href="https://vitejs.dev" target="_blank">
//             <img src={viteLogo} className="h-24 hover:drop-shadow-lg transition-all" alt="Vite logo" />
//           </a>
//           <a href="https://react.dev" target="_blank">
//             <img src={reactLogo} className="h-24 hover:drop-shadow-lg transition-all" alt="React logo" />
//           </a>
//         </div>
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//           Vite + React + Tailwind
//         </h1>
//         <div className="space-y-4">
//           <button 
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//             onClick={() => setCount((count) => count + 1)}
//           >
//             count is {count}
//           </button>
//           <p className="text-gray-600">
//             Edit <code className="bg-gray-100 p-1 rounded">src/App.jsx</code> and save to test HMR
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <UserProfile />
    </div>
  );
}

export default App;

