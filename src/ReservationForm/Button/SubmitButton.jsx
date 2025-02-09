import { Button, Flex, Spin } from 'antd'; 
import { useState, useEffect } from 'react';
import { useReversation } from '../../contexts/useReversation';

const SubmitButton = ({ setModal, setModal2 }) => {
  const { form, setForm } = useReversation();
  const [loading, setLoading] = useState(false); 
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
          room: form.room, 
          floor: form.floor, 
          Building_ID:"221",
          username:"asd",
          user_role: form.status, 
          start_booking_date: form.date,
          start_time: form.startTime,
          end_time: form.endTime,
          description: "test"
        }),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Booking Success:', data);

      setModal(true); // Show modal on success
      setModal2(false)
    } catch (error) {
      console.error('Error:', error);
      setStatus("fail");
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
