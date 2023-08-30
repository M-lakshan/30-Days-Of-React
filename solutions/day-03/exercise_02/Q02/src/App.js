import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Subscribe</h1>
      <p>sign up your email address to recieve news and updates.</p>
      <form>
        <div>
          <input type="text" name="f_name" id="f_name" placeholder="First name" />
          <input type="text" name="l_name" id="l_name" placeholder="Last name" />
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default App;
