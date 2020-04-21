import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ColorConsumer } from '../../providers/ColorProvider';
import { Button, Icon } from 'react-materialize';
 
class CopyPaste extends React.Component {
  state = {
    value: '',
    copied: false,
  };

  componentDidMount() {
    this.setState({ value: this.props.colorName})
  }
 
  render() {
    return (
      <div>
        <CopyToClipboard text={this.state.value} 
          onCopy={() => this.setState({copied: true})}>
          <Button><Icon small>content_copy</Icon> copy to clipboard</Button>
        </CopyToClipboard>
        {this.state.copied ? <span style={{color: '#D80179'}}>Copied!</span> : null}
      </div>
    );
  }
}

const ConnectedCopyPaste = (props) => (
    <ColorConsumer> 
      {
        value =>
        <CopyPaste {...props} {...value} />
      }
    </ColorConsumer>
  )
  
  export default ConnectedCopyPaste;