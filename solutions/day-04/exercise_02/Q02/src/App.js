import './App.css';

cosnt AppTitle = () => <h1>Subscribe</h1>

cosnt AppDesc = () => <p>sign up your email address to recieve news and updates.</p>

const AppForm = () => {
  return (<form>
    <div>
      <input type="text" name="f_name" id="f_name" placeholder="First name" />
      <input type="text" name="l_name" id="l_name" placeholder="Last name" />
      <input type="text" name="email" id="email" placeholder="Email" />
    </div>
    <button type="submit">Subscribe</button>
  </form>);
}

function App() {
  return (
    <div className="App">
      <AppTitle />
      <AppDesc />
      <AppForm />
    </div>
  );
}

export default App;
