import React from 'react';
import './App.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-time-picker/dist/TimePicker.css';

import {BookingCounter} from './components/BookingCounter';
const App = () => {
  return (
    <div className="App">
      <BookingCounter/>
    </div>
  );
}

export default App;
