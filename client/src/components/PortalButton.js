import React from 'react';
import { Link, Button } from '@hackclub/design-system';

export default class PortalButton extends React.Component {
  render() {
    const ButtonStyle = {
      right: '30px',
      marginTop: '6px',
      fontWeight: '500',
      fontSize: '15px',
      textAlign: 'center',
      padding: '13px',
      borderRadius: '4px',
      backgroundColor: 'black',
      color: 'white',
      width: '117px',
      transition: 'all 0.3s ease 0s',
      position: 'absolute',
      top: '20px',
      zIndex: '1'
    };

    return (
      <React.Fragment>
        <Link href="/portal">
          <Button style={ButtonStyle}>Portal</Button>
        </Link>
      </React.Fragment>
    );
  }
}
