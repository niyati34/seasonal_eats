import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SeasonalItems from './SeasonalItems';
import SeasonalCalendar from './SeasonalCalendar';
import Navbar from './Navbar';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignupPage'; // Correct the import statement to match the file name
import FruitVegetableInfo from './FruitVegetableInfo'; // New component for fruit/vegetable info

const App = () => {
  const [events, setEvents] = useState([]);

  const onAddEvent = (event) => {
    setEvents(prevEvents => [...prevEvents, {
      title: `${event.name} ${event.emoji}`,
      start: event.date,
      end: new Date(event.date.getTime() + 60 * 60 * 1000),
      allDay: false,
      isOutOfSeason: event.isOutOfSeason,
    }]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seasonal-calendar" element={
          <>
            <SeasonalItems onAddEvent={onAddEvent} />
            <SeasonalCalendar events={events} />
          </>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/fruit-vegetable-info/:name" element={<FruitVegetableInfo />} /> {/* Dynamic route for fruit/vegetable info */}
      </Routes>
    </Router>
  );
};

export default App;
