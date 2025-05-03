import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Import DatePicker component
import 'react-datepicker/dist/react-datepicker.css';
import seasonalProduce from './seasonalData';
import './SeasonalItems.css';
import ItemDetailsModal from './ItemDetailsModal';

const SeasonalItems =({ onAddEvent }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModalDatePicker, setShowModalDatePicker] = useState(false);
  const [selectedModalDateTime, setSelectedModalDateTime] = useState(new Date());
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setShowModalDatePicker(false);
  };

  const handleModalDateChange = (date) => {
    // Check if the selected date is out of season
    const selectedMonth = date.toLocaleString('default', { month: 'long' });
    const isMonthInSeason = selectedItem.months.includes(selectedMonth);
    const isOutOfSeason = !isMonthInSeason;

    // Display a popup message if the item is out of season
    if (isOutOfSeason) {
      alert(`${selectedItem.name} is not usually available in ${selectedMonth}. It will be added in red.`);
    }

    // Add the event with the isOutOfSeason flag regardless of the season
    onAddEvent({ ...selectedItem, date, isOutOfSeason });

    setShowModalDatePicker(false); // Close the modal after selecting the date
    setSelectedItem(null);
    setError('');
  };

  return (
    <>
      <div>
        {seasonalProduce.fruits.concat(seasonalProduce.vegetables).map(item => (
          <button key={item.name} onClick={() => handleOpenModal(item)} className="item">
            {item.emoji} {item.name}
          </button>
        ))}
      </div>
      {selectedItem && isModalOpen && (
        <ItemDetailsModal
          item={selectedItem}
          onSelectDate={handleModalDateChange}
          onClose={handleCloseModal}
        />
      )}
      {showModalDatePicker && (
        <DatePicker
          selected={selectedModalDateTime}
          onChange={date => setSelectedModalDateTime(date)}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          inline
        />
      )}
      {error && <div className="error">{error}</div>}
    </>
  );
};

export default SeasonalItems;
