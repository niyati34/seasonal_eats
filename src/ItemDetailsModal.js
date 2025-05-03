import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ItemDetailsModal.css'; // Import CSS styles

const ItemDetailsModal = ({ item, onClose, onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    const selectedDateTime = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      selectedTime.getHours(),
      selectedTime.getMinutes()
    );
    onSelectDate(selectedDateTime);
    onClose(); // Close the modal after selecting the date
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <div className="left-section">
          <h2>{item.name} {item.emoji}</h2>
          <img src={item.image} alt={item.name} />
        </div>
        <div className="middle-section">
          <p>Available months: {item.months.join(', ')}</p>
          {/* Update Link to pass the item's name as the parameter */}
          <Link to={`/fruit-vegetable-info/${item.name}`}>Learn More</Link>
        </div>
        <div className="right-section">
          <div className="date-time-picker">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              inline
            />
            <DatePicker
              selected={selectedTime}
              onChange={handleTimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              inline
            />
          </div>
          <div className="button-section">
            <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
            <button className="close-button" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsModal;
