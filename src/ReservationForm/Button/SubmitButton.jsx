import { Button, Flex } from "antd";

const SubmitButton = ({ setModal }) => (
  <>
    <Flex gap="small" wrap>
      <Button size="large" type="primary" onClick={()=> setModal(true)}>
        Summit
      </Button>
    </Flex>
  </>
);
export default SubmitButton;
