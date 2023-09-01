import './App.css';

const AppTitle = () => <h1>Subscribe</h1>

const AppDesc = () => <p>sign up your email address to recieve news and updates.</p>

const InputField = ({ i_type, i_name, i_id, i_plc_hlder }) => <input type={i_type} name={i_name} id={i_id} placeholder={i_plc_hlder} />

const AppForm = () => {
  return (<form>
    <div>
      <InputField
        i_type="text"
        i_name="f_name"
        i_id="f_name"
        i_plc_hlder_="First name"
      />
      <InputField
        i_type="text"
        i_name="l_name"
        i_id="l_name"
        i_plc_hlder_="Last name"
      />
      <InputField
        i_type="text"
        i_name="email"
        i_id="email"
        i_plc_hlder_="Email"
      />
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
