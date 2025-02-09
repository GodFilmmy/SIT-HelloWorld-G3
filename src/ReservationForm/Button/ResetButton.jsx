import { Button, Flex } from 'antd';
import { useReversation } from '../../contexts/useReversation'; // Import useReversation hook

const ResetButton = () => {
  const { setForm } = useReversation();

  const onCancelHandler = () => {
    // Reset form fields to initial values
    setForm({
      name: "",
      status: "",
      date: "",
      startTime: "",
      endTime: "",
      details: "",
      floor: "",
      room: "",
    });
  };

  return (
    <Flex gap="small" wrap>
      <Button size="large" onClick={onCancelHandler}>Cancel</Button>
    </Flex>
  );
};

export default ResetButton;
