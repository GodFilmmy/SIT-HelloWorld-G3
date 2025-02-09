import { Button, Flex } from 'antd';
import { useEffect } from 'react';
import { useReversation } from '../../contexts/useReversation';

const SubmitButton = ({ setModal }) => {
  const { form, setForm } = useReversation();

  useEffect(() => {
    console.log("Form Data:", form);
  }, [form]);

  const onSubmitHandler = async () => {
    try {
      const response = await fetch('http://helloworld03.sit.kmutt.ac.th:3000/api/bookings/createBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          room_id: form.room_id,  // dynamically use room_id from form
          user_id: 456,  // You can replace this with the actual user ID if needed
          date: form.date, 
          time: `${form.startTime}-${form.endTime}` // Format time as required
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Booking Success:', data);

      // After successful booking, update the modal state to show the success modal
      setModal(true);

      // Optionally: Update the calendar with the new event data
      // You can update a global state or pass the new event to the calendar component
      // For example, storing the new event in the global state and passing it to the Calendar

      // Example:
      // events.push({
      //   title: 'Room Booking',
      //   start: new Date(form.date + " " + form.startTime),
      //   end: new Date(form.date + " " + form.endTime),
      // });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Flex gap="small" wrap>
        <Button size="large" type="primary" onClick={onSubmitHandler}>
          Submit
        </Button>
      </Flex>
    </>
  );
};

export default SubmitButton;
