import React from 'react';
import ReactDOM from 'react-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ColorConsumer } from '../../providers/ColorProvider';
import { Button, Icon } from 'react-materialize';
 
class CopyPaste extends React.Component {
  state = {
    value: '',
    copied: false,
  };
 
  render() {
    return (
      <div>
        <input value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />
 
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <Button><Icon small>content_copy</Icon> copy to your clipboard</Button>
        </CopyToClipboard>
 
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
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