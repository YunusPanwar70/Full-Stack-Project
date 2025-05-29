import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Auth App</h1>
      <Signup />
      <hr />
      <Login />
    </div>
  );
}
export default App;