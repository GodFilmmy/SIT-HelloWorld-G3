import { Button, Flex } from 'antd';
import { useEffect } from 'react';
import { useReversation } from '../../contexts/useReversation';

const SubmitButton = () => {
  const { form, setForm } = useReversation();

  useEffect(() => {
    console.log("Form Data:", form);
  }, [form]);

  const onSubmitHandler = async () => {
    try {
        const response = await fetch('http://helloworld03.sit.kmutt.ac.th:3000/api/bookings/createBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                room_id: 123,  // ห้องที่ต้องการจอง
                user_id: 456,  // ไอดีผู้ใช้ (อาจต้องดึงจาก session)
                date: '2025-02-09', 
                time: '10:00-12:00' // ช่วงเวลาที่ต้องการจอง
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); // Fix the error template
        }

        const data = await response.json();
        console.log('Booking Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
    <>
      <Flex gap="small" wrap>
        <Button size="large" type="primary" onClick={() => {
          console.log("Button Clicked!");
          onSubmitHandler();
        }}>
          Submit
        </Button>
      </Flex>
    </>
  );
}

export default SubmitButton;
