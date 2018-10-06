import React from 'react';
import { Container, Flex } from '@hackclub/design-system';
import EightExPay from '8x.pay';

export default class MetamaskHandler extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container px={3} pb={20} style={{ marginTop: '40px' }}>
          <Flex mx={[1, 2]} wrap justify="center">
            <EightExPay planHash="" label="Donate $10/month" />
          </Flex>
        </Container>
      </React.Fragment>
    );
  }
}
