import { Button, Flex, Spin } from 'antd'; // Added Spin for loading indicator
import { useState, useEffect } from 'react';
import { useReversation } from '../../contexts/useReversation';

const SubmitButton = ({ setModal }) => {
  const { form, setForm } = useReversation();
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    console.log('Form Data:', form); // Log form data for debugging
  }, [form]);

  // Validate form fields
  const validateForm = () => {
    if (!form.room || !form.floor || !form.date || !form.startTime || !form.endTime) {
      setError('Please fill in all required fields.');
      return false;
    }
    return true;
  };

  const onSubmitHandler = async () => {
    if (!validateForm()) return; // Stop submission if validation fails

    setLoading(true); // Set loading state to true

    try {
      const response = await fetch('http://helloworld03.sit.kmutt.ac.th:3000/api/bookings/createBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          room: form.room, // Include room from form
          floor: form.floor, // Include floor from form
          user_id: 456, // Replace with actual user ID if needed
          date: form.date,
          time: `${form.startTime}-${form.endTime}`, // Format time properly
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Booking Success:', data);

      setModal(true); // Show modal on success

    } catch (error) {
      console.error('Error:', error);
      setError('Booking failed. Please try again.'); // Show error message
    } finally {
      setLoading(false); // Set loading state to false after request
    }
  };

  return (
    <>
      <Flex gap="small" wrap>
        {loading ? (
          <Spin size="large" /> 
        ) : (
          <>
            <Button size="large" type="primary" onClick={onSubmitHandler}>
              Submit
            </Button>
            {error && <div className="error-message">{error}</div>} 
          </>
        )}
      </Flex>
    </>
  );
};

export default SubmitButton;
