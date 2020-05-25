import React, { useState } from 'react';
import './App.css';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

function App() {
  const [onSwitch, setOnSwitch] = useState({
    checkOne: false,
    checkTwo: false,
    checkThree: false,
  });

  const handleChangeOne = () => {
    setOnSwitch({ checkOne: true, checkTwo: true, checkThree: false });
  };
  const handleChangeTwo = () => {
    setOnSwitch({ checkOne: false, checkTwo: true, checkThree: true });
  };
  const handleChangeThree = () => {
    setOnSwitch({ checkOne: true, checkTwo: false, checkThree: true });
  };

  return (
    <div className="container">
      <h2>Pick One</h2>
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={onSwitch.checkOne}
                onChange={handleChangeOne}
                name="checked1"
              />
            }
            label="Fast"
          />
          <FormControlLabel
            control={
              <Switch
                checked={onSwitch.checkTwo}
                onChange={handleChangeTwo}
                name="checked2"
              />
            }
            label="Good"
          />
          <FormControlLabel
            control={
              <Switch
                checked={onSwitch.checkThree}
                onChange={handleChangeThree}
                name="checked3"
              />
            }
            label="Cheap"
          />
        </FormGroup>
        <FormHelperText>It's not that complicated</FormHelperText>
      </FormControl>
    </div>
  );
}

export default App;
