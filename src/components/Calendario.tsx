import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import React, { useState } from 'react';

export default function Calendaro() {
  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <DatePicker selected={startDate}
    onChange={(date) => setStartDate(date)}
    isClearable
    dateFormat={"dd/MM/yyyy"}
    showYearDropdown
    scrollableMonthYearDropdown
    placeholderText="Click para selecionar a data"
    />
  );
};