import { Button, Flex, Spin } from 'antd'; 
import { useState, useEffect } from 'react';
import { useReversation } from '../../contexts/useReversation';
const SubmitButton = ({ setModal }) => {
  const { form, setForm } = useReversation();
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Form Data:', form); 
  }, [form]);

  const validateForm = () => {
    if (!form.room || !form.date || !form.startTime || !form.endTime) {
      setError('Please fill in all required fields.');
      return false;
    }
    return true;
  };

  const onSubmitHandler = async () => {
    if (!validateForm()) return; 

    setLoading(true);

    try {
      const response = await fetch('http://helloworld03.sit.kmutt.ac.th:3000/api/bookings/createBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          room: form.room, 
          user_id: 456, 
          date: form.date,
          time: `${form.startTime}-${form.endTime}`, 
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Booking Success:', data);

      setModal(true);

    } catch (error) {
      console.error('Error:', error);
      setError('Booking failed. Please try again.');
    } finally {
      setLoading(false);
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
