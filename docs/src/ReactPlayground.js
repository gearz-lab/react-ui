/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import Accordion from 'react-bootstrap/lib/Accordion';
import Alert from 'react-bootstrap/lib/Alert';
import Badge from 'react-bootstrap/lib/Badge';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import CollapsableNav from 'react-bootstrap/lib/CollapsableNav';
import CollapsableMixin from 'react-bootstrap/lib/CollapsableMixin';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import Col from 'react-bootstrap/lib/Col';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Input from 'react-bootstrap/lib/Input';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Label from 'react-bootstrap/lib/Label';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Modal from 'react-bootstrap/lib/Modal';
import ModalTrigger from 'react-bootstrap/lib/ModalTrigger';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import OverlayMixin from 'react-bootstrap/lib/OverlayMixin';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import PageItem from 'react-bootstrap/lib/PageItem';
import Pager from 'react-bootstrap/lib/Pager';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Popover from 'react-bootstrap/lib/Popover';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Row from 'react-bootstrap/lib/Row';
import SplitButton from 'react-bootstrap/lib/SplitButton';
import TabbedArea from 'react-bootstrap/lib/TabbedArea';
import Table from 'react-bootstrap/lib/Table';
import TabPane from 'react-bootstrap/lib/TabPane';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Well from 'react-bootstrap/lib/Well';
/* eslint-enable */

import {CodeMirror, IS_NODE} from './CodeMirror';
import babel from 'babel/browser';

const IS_MOBILE = typeof navigator !== 'undefined' && (
  navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  );

const CodeMirrorEditor = React.createClass({
  componentDidMount() {
    if (IS_MOBILE || IS_NODE) {
      return;
    }

    this.editor = CodeMirror.fromTextArea(this.refs.editor.getDOMNode(), {
      mode: 'javascript',
      lineNumbers: false,
      lineWrapping: false,
      matchBrackets: true,
      tabSize: 2,
      theme: 'solarized light',
      readOnly: this.props.readOnly
    });
    this.editor.on('change', this.handleChange);
  },

  componentDidUpdate() {
    if (this.props.readOnly) {
      this.editor.setValue(this.props.codeText);
    }
  },

  handleChange() {
    if (!this.props.readOnly && this.props.onChange) {
      this.props.onChange(this.editor.getValue());
    }
  },

  render() {
    // wrap in a div to fully contain CodeMirror
    let editor;

    if (IS_MOBILE) {
      let preStyles = {overflow: 'scroll'};
      editor = <pre style={preStyles}>{this.props.codeText}</pre>;
    } else {
      editor = <textarea ref='editor' defaultValue={this.props.codeText} />;
    }

    return (
      <div style={this.props.style} className={this.props.className}>
        {editor}
      </div>
      );
  }
});

const selfCleaningTimeout = {
  componentDidUpdate() {
    clearTimeout(this.timeoutID);
  },

  setTimeout() {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout.apply(null, arguments);
  }
};

const ReactPlayground = React.createClass({
  mixins: [selfCleaningTimeout],

  MODES: {JSX: 'JSX', JS: 'JS', NONE: null},

  propTypes: {
    codeText: React.PropTypes.string.isRequired,
    transformer: React.PropTypes.func,
    renderCode: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      transformer(code) {
        return babel.transform(code).code;
      }
    };
  },

  getInitialState() {
    return {
      mode: this.MODES.NONE,
      code: this.props.codeText
    };
  },

  handleCodeChange(value) {
    this.setState({code: value});
    this.executeCode();
  },

  handleCodeModeSwitch(mode) {
    this.setState({mode: mode});
  },

  handleCodeModeToggle(e) {
    let mode;

    e.preventDefault();

    switch (this.state.mode) {
      case this.MODES.NONE:
        mode = this.MODES.JSX;
        break;
      case this.MODES.JSX:
      default:
        mode = this.MODES.NONE;
    }

    this.setState({mode: mode});
  },

  compileCode() {
    return this.props.transformer(this.state.code);
  },

  render() {
    let classes = {
      'bs-example': true
    };
    let toggleClasses = {
      'code-toggle': true
    };
    let editor;

    if (this.props.exampleClassName){
      classes[this.props.exampleClassName] = true;
    }

    if (this.state.mode !== this.MODES.NONE) {
       editor = (
           <CodeMirrorEditor
             key='jsx'
             onChange={this.handleCodeChange}
             className='highlight'
             codeText={this.state.code}/>
        );
       toggleClasses.open = true;
    }
    return (
      <div className='playground'>
        <div className={classNames(classes)}>
          <div ref='mount' />
        </div>
        {editor}
        <a className={classNames(toggleClasses)} onClick={this.handleCodeModeToggle} href='#'>{this.state.mode === this.MODES.NONE ? 'show code' : 'hide code'}</a>
      </div>
      );
  },

  componentDidMount() {
    this.executeCode();
  },

  componentWillUpdate(nextProps, nextState) {
    // execute code only when the state's not being updated by switching tab
    // this avoids re-displaying the error, which comes after a certain delay
    if (this.state.code !== nextState.code) {
      this.executeCode();
    }
  },

  componentWillUnmount() {
    let mountNode = this.refs.mount.getDOMNode();
    try {
      React.unmountComponentAtNode(mountNode);
    } catch (e) {
      console.error(e);
    }
  },

  executeCode() {
    let mountNode = this.refs.mount.getDOMNode();

    try {
      React.unmountComponentAtNode(mountNode);
    } catch (e) {
      console.error(e);
    }

    try {
      let compiledCode = this.compileCode();
      if (this.props.renderCode) {
        React.render(
          <CodeMirrorEditor codeText={compiledCode} readOnly={true} />,
          mountNode
        );
      } else {
        /* eslint-disable */
        eval(compiledCode);
        /* eslint-enable */
      }
    } catch (err) {
      this.setTimeout(() => {
        React.render(
          <Alert bsStyle='danger'>{err.toString()}</Alert>,
          mountNode
        );
      }, 500);
    }
  }
});

export default ReactPlayground;
