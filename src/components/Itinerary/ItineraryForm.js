import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./ItineraryForm.css"

function ItineraryForm() {
  // Load fromDate data from localStorage on component mount
  const [fromDate, setFromDate] = useState(() => {
    const storedFromDate = localStorage.getItem('fromDate');
    return storedFromDate ? new Date(storedFromDate) : null;
  });

  // Load toDate data
  const [toDate, setToDate] = useState(() => {
    const storedToDate = localStorage.getItem('toDate');
    return storedToDate ? new Date(storedToDate) : null;
  });

  // Load Departure input value
  const [departure, setDeparture] = useState(() => {
    const storedDeparture = localStorage.getItem('departure');
    return storedDeparture || '';
  });

  // Load Destination input value
  const [destination, setDestination] = useState(() => {
    const storedDestination = localStorage.getItem('destination');
    return storedDestination || '';
  });

  // Load itinerary data
  const [itinerary, setItinerary] = useState(() => {
    const storedItinerary = localStorage.getItem('itinerary');
    return storedItinerary ? JSON.parse(storedItinerary) : [
      { day: 'Day 1', activities: [{ time: 'Time: 10am', activity: 'Activity: Visit the museum...' }] },
    ];
  });

  // Load notes data
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [{ id: 1, content: 'Add notes here: the weather☀️, clothes⛱️, currency💰 ...' }];
  });

  // Adjust textarea height dynamically
  const adjustTextareaHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const addDay = () => {
    // Add a new day to the end of the itinerary
    setItinerary([...itinerary, { day: `Day ${itinerary.length + 1}`, activities: [] }]);
  };
  
  const deleteDay = () => {
    // Ensure there is at least one day before attempting to delete
    if (itinerary.length > 1) {
      // Delete the last day in the itinerary
      const updatedItinerary = [...itinerary];
      updatedItinerary.pop();
      setItinerary(updatedItinerary);
    }
  };

  const addActivity = (index) => {
    const updatedItinerary = [...itinerary];
    updatedItinerary[index].activities.push({ time: [], activity: [] });
    setItinerary(updatedItinerary);
  };

  const handleTimeChange = (dayIndex, activityIndex, time) => {
    const updatedItinerary = [...itinerary];
    updatedItinerary[dayIndex].activities[activityIndex].time = time;
    setItinerary(updatedItinerary);
    adjustTextareaHeight(document.getElementById(`time-${dayIndex}-${activityIndex}`));
  };

  const handleActivityChange = (dayIndex, activityIndex, content) => {
    const updatedItinerary = [...itinerary];
    updatedItinerary[dayIndex].activities[activityIndex].activity = content;
    setItinerary(updatedItinerary);
    adjustTextareaHeight(document.getElementById(`activity-${dayIndex}-${activityIndex}`));
  };

  const deleteActivity = (dayIndex, activityIndex) => {
    const updatedItinerary = [...itinerary];
    updatedItinerary[dayIndex].activities.splice(activityIndex, 1);
    setItinerary(updatedItinerary);
  };

  const addNote = () => {
    setNotes([...notes, { id: notes.length + 1, content: '' }]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleNoteChange = (index, content) => {
    const updatedNotes = [...notes];
    updatedNotes[index].content = content;
    setNotes(updatedNotes);
    adjustTextareaHeight(document.getElementById(`note-${index}`));
  };

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fromDate', fromDate ? fromDate.toISOString() : '');
  }, [fromDate]);

  useEffect(() => {
    localStorage.setItem('toDate', toDate ? toDate.toISOString() : '');
  }, [toDate]);

  useEffect(() => {
    localStorage.setItem('departure', departure);
  }, [departure]);

  useEffect(() => {
    localStorage.setItem('destination', destination);
  }, [destination]);

  useEffect(() => {
    localStorage.setItem('itinerary', JSON.stringify(itinerary));
  }, [itinerary]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <Container className="itinerary-container">
      <p className="itinerary-header">Travel Itinerary</p>
      <div className="input-container">
        <Table striped bordered className="table-container">
          <tbody>
            <tr>
              <td>Departure:</td>
              <td><textarea type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} placeholder="Departure" /></td>
              <td>Destination:</td>
              <td><textarea type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" /></td>
            </tr>
            <tr>
              <td>From:</td>
              <td>
                <DatePicker
                  showIcon
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="custom-datepicker"
                >
                  <div style={{ color: "red" }}>Don't forget to check the weather!</div>
                </DatePicker>
              </td>
              <td>To:</td>
              <td>
                <DatePicker
                  showIcon
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="custom-datepicker"
                >
                  <div style={{ color: "red" }}>Don't forget to check the weather!</div>
                </DatePicker>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {itinerary.map((day, dayIndex) => (
        <div key={dayIndex} className="day-container">
          <h3 className="day-header">{day.day}</h3>
          <Table striped bordered className="table-container">
            <tbody>
              {day.activities.map((activity, activityIndex) => (
                <tr key={activityIndex}>
                  <td style={{ width: '120px' }}>
                    <textarea
                      id={`time-${dayIndex}-${activityIndex}`}
                      type="text"
                      value={activity.time}
                      onChange={(e) => handleTimeChange(dayIndex, activityIndex, e.target.value)}
                    />
                  </td>
                  <td>
                    <textarea
                      id={`activity-${dayIndex}-${activityIndex}`}
                      value={activity.activity}
                      onChange={(e) => handleActivityChange(dayIndex, activityIndex, e.target.value)}
                    />
                  </td>
                  <td style={{ width: '50px' }}>
                    <Button
                      variant="danger"
                      className="delete-button"
                      onClick={() => deleteActivity(dayIndex, activityIndex)}
                    >
                      X
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-center">
            <Button className="add-button-plus" onClick={() => addActivity(dayIndex)}>
              +
            </Button>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-center">
            <Button className="add-button" onClick={addDay}>
              Add Day
            </Button>
            <Button variant="danger" className="delete-button" onClick={deleteDay}>
              Delete Day
            </Button>
      </div>

      {/* Note Table */}
      <div className="note-container">
        <h3 className="note-header">Notes</h3>
        <Table striped bordered className="table-container">
          <tbody>
            {notes.map((note, noteIndex) => (
              <tr key={noteIndex}>
                <td>
                  <textarea
                    id={`note-${noteIndex}`}
                    value={note.content}
                    onChange={(e) => handleNoteChange(noteIndex, e.target.value)}
                  />
                </td>
                <td style={{ width: '50px' }}>
                  <Button
                    variant="danger"
                    className="delete-button"
                    onClick={() => deleteNote(noteIndex)}
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center">
          <Button className="add-button-plus" onClick={addNote}>
            +
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default ItineraryForm;
