import './styles/App.css';
import React from 'react';
import { options } from './data/options.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        tel: '',
        dateOfBirth: '',
        favoriteColor: '',
        weight: '',
        gender: '',
        file: '',
        bio: '',
        skills: {
          html: false,
          css: false,
          javascript: false,
        },
        touched: {
          firstName: false,
          lastName: false,
        },
        errors: {
          firstName: '',
          lastName: '',
          email: '',
          country: '',
          tel: '',
          weight: ''
        }
      }
    }
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      })
    } else if (type === 'file') {
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }

  handleBlur = (e) => {
    this.setState({ touched: { ...this.state.touched, [e.target.name]: true } })
  }

  validate = (type) => {
    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      tel: '',
      weight: '',
    }

    document.querySelectorAll("input").forEach(
      input => {
        let type = input.name;
        
        switch(type) {
          case "firstName": case "lastName": {
            if((!(this.state.data[type].match((/[a-z]gi/)))) ||
              (this.state.data[type].length < 3 || this.state.data[type].length > 12)
            ) {
              errors[type] = `${type} must contain only letters & must be a valid name`;
            }
            break;
          }
          case "email": {
            if(this.state.data["email"].length < 7) {
              errors["email"] = `email must contain only letters & must be a valid email`;
            }
            break;
          }
          case "tel": case "weight": {
            if((!(this.state.data[type].match((/[0-9]gi/)))) ||
              ((type === "tel" && this.state.data[type].length >= 10) || (type === "weight" && this.state[type].length === 2))) {
              errors[type] = `${type} must contain only numbers & must be a valid combinaton`;
            }
            break;
          }
          default: {
            if(input.value===false) {
              errors[type] = `${type} must contain a value`;
            }
          }
        }
      }
    )
    
    return errors
  }

  stateUpdate = (val) => this.setState({data: val});

  handleSubmit = (e,state) => {
    e.preventDefault()

    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = state[0];

    const formattedSkills = [];

    for(const key in skills) {
      if(skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }

    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills,
      errors: this.validate()
    }

    state[1](data);
    console.log(state[0].errors)
  }

  render() {

    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={(evt) => this.handleSubmit(evt,[this.state.data,this.stateUpdate])} noValidate>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <input
                type='text'
                name='firstName'
                value={this.state.data.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='First Name'
              /> <br />
              <small>{this.state.data.errors.firstName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <input
                type='text'
                name='lastName'
                value={this.state.data.lastName}
                onChange={this.handleChange}
                placeholder='Last Name'
              /> <br />
              <small>{this.state.data.errors.lastName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <input
                type='email'
                name='email'
                value={this.state.data.email}
                onChange={this.handleChange}
                placeholder='Email'
              /> <br />
              <small>{this.state.data.errors.email}</small>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <input
              type='tel'
              name='tel'
              value={this.state.data.tel}
              onChange={this.handleChange}
              placeholder='Tel'
            /> <br />
            <small>{this.state.data.errors.tel}</small>
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              name='dateOfBirth'
              value={this.state.data.dateOfBirth}
              onChange={this.handleChange}
              placeholder='Date of Birth'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>Favorite Color</label>
            <input
              type='color'
              id='favoriteColor'
              name='favoriteColor'
              value={this.state.data.favoriteColor}
              onChange={this.handleChange}
              placeholder='Favorite Color'
            /> <br />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={this.state.data.weight}
              onChange={this.handleChange}
              placeholder='Weight in Kg'
            /> <br />
            <small>{this.state.data.errors.weight}</small>
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select name='country' onChange={this.handleChange} id='country'>
              {options.map(({ value, label }) => (
                <option value={value}> {label}</option>
              ))}
            </select>
          </div>
          <div>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={this.state.data.gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={this.handleChange}
                checked={this.state.data.gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={this.state.data.gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={this.state.data.bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div>
            <input
              type='file'
              name='file'
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App;