import { Container, Text } from "./style";
import CopyrightIcon from "@material-ui/icons/Copyright";

const Footer = () => {
  return (
    <Container>
      <Text>
        Isabella Pegoraro <CopyrightIcon fontSize="small" />
      </Text>
    </Container>
  );
};

export default Footer;
