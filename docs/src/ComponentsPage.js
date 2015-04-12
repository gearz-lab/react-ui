/* eslint no-path-concat: 0 */

import React from 'react';

import Affix from 'react-bootstrap/lib/Affix';
import Nav from 'react-bootstrap/lib/Nav';
import SubNav from 'react-bootstrap/lib/SubNav';
import NavItem from 'react-bootstrap/lib/NavItem';

import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import ReactPlayground from './ReactPlayground';
import Samples from './Samples';
import Textbox from '../../src/components/editors/textbox/textbox';

const ComponentsPage = React.createClass({
  getInitialState() {
    return {
      activeNavItemHref: null,
      navOffsetTop: null
    };
  },

  handleNavItemSelect(key, href) {
    this.setState({
      activeNavItemHref: href
    });

    window.location = href;
  },

  componentDidMount() {
    let elem = this.refs.sideNav.getDOMNode(),
        domUtils = Affix.domUtils,
        sideNavOffsetTop = domUtils.getOffset(elem).top,
        sideNavMarginTop = parseInt(domUtils.getComputedStyles(elem.firstChild).marginTop, 10),
        topNavHeight = this.refs.topNav.getDOMNode().offsetHeight;

    this.setState({
      navOffsetTop: sideNavOffsetTop - topNavHeight - sideNavMarginTop,
      navOffsetBottom: this.refs.footer.getDOMNode().offsetHeight
    });
  },

  render() {
    return (
        <div>
          <NavMain activePage='components' ref='topNav' />

          <PageHeader
            title='Components'
            subTitle='' />

          <div className='container bs-docs-container'>
            <div className='row'>
              <div className='col-md-9' role='main'>

                {/* General */}
                <div className='bs-docs-section'>
                  <h1 id='general' className='page-header'>General</h1>
                  <p>ReactUI uses <a href="https://github.com/gearz-lab/statefy">Statefy</a> to control <code>state</code> and <code>props</code>.
                    We recommend reading it's <a href="https://github.com/gearz-lab/statefy/blob/master/readme.md">documentation</a>.</p>

                  <div className='bs-callout bs-callout-warning'>
                  <h4>Auto generated events</h4>
                  <p>Statefy adds auto-generated change events to any <code>props</code>. So, for instance, if a component has
                  a <code>url</code> prop, then, there's also a <code>onUrlChange</code> event. When this event is handled, if
                  <code>event.preventDefault()</code> is called, then the component will not update it's internal state and it's
                  up the the caller to render the component again.</p>
                  </div>
                </div>

                {/* General */}
                <div className='bs-docs-section'>
                  <h1 id='editors' className='page-header'>Editors</h1>

                  <h2 id='editors-textbox'>Textbox</h2>
                  <p>Basic usage</p>
                  <ReactPlayground codeText={Samples.EditorsTextBoxBasicUsage}></ReactPlayground>

                  <p>Prepending and appending text</p>
                  <ReactPlayground codeText={Samples.EditorsTextBoxPrependAndAppend}></ReactPlayground>

                  <p>Placeholder</p>
                  <ReactPlayground codeText={Samples.EditorsTextBoxPlaceholder}></ReactPlayground>

                  <p>Disabled state</p>
                  <ReactPlayground codeText={Samples.EditorsTextBoxDisabledState}></ReactPlayground>

                </div>

                <div>
                  <h1 id='layout' className='page-header'>Layout</h1>

                  <h2 id='layout-treeview'>TreeView</h2>
                  <p>Basic usage</p>
                  <ReactPlayground codeText={Samples.LayoutTreeViewBasicUsage}></ReactPlayground>

                </div>

              </div>



              <div className='col-md-3'>
                <Affix
                  className='bs-docs-sidebar hidden-print'
                  role='complementary'
                  offsetTop={this.state.navOffsetTop}
                  offsetBottom={this.state.navOffsetBottom}>
                  <Nav
                    className='bs-docs-sidenav'
                    activeHref={this.state.activeNavItemHref}
                    onSelect={this.handleNavItemSelect}
                    ref='sideNav'>
                    <SubNav href='#editors' key={1} text='Editors'>
                      <NavItem href='#editors-textbox' key={2}>TextBox</NavItem>
                    </SubNav>
                    <SubNav href='#layout' key={3} text='Layout'>
                      <NavItem href='#layout-treeview' key={4}>TreeView</NavItem>
                    </SubNav>
                  </Nav>
                  <a className='back-to-top' href='#top'>
                  Back to top
                  </a>
                </Affix>
              </div>
            </div>
          </div>

          <PageFooter ref='footer' />
        </div>
      );
  }
});

export default ComponentsPage;
