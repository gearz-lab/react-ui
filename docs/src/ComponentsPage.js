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

                {/* FormGroup */}
                <div className='bs-docs-section'>
                  <h1 id='formgroup' className='page-header'>FormGroup</h1>
                  <h2 id='formgroup-options'>Options</h2>
                  <p>Basic usage</p>
                  <ReactPlayground codeText={Samples.FormGroup} />
                </div>

                {/* Buttons */}
                <div className='bs-docs-section'>
                  <h1 id='buttons' className='page-header'>Buttons <small>Button</small></h1>
                  <h2 id='buttons-options'>Options</h2>
                  <p>Use any of the available button style types to quickly create a styled button. Just modify the
                    <code>bsStyle</code> prop.</p>
                  <ReactPlayground codeText={Samples.ButtonTypes} />
                  <div className='bs-callout bs-callout-warning'>
                    <h4>Button spacing</h4>
                    <p>Because React doesn't output newlines between elements, buttons on the same line are displayed
                    flush against each other. To preserve the spacing between multiple inline buttons, wrap your
                    button group in <code>{'<ButtonToolbar />'}</code>.</p>
                  </div>
                  <h2 id='buttons-sizes'>Sizes</h2>
                  <p>Fancy larger or smaller buttons? Add <code>bsSize='large'</code>, <code>bsSize='small'</code>, or <code>bsSize='xsmall'</code> for additional sizes.</p>
                  <ReactPlayground codeText={Samples.ButtonSizes} />

                  <p>Create block level buttons—those that span the full width of a parent— by adding the
                      <code>block</code> prop.</p>
                  <ReactPlayground codeText={Samples.ButtonBlock} />

                  <h2 id='buttons-active'>Active state</h2>
                  <p>To set a buttons active state simply set the components <code>active</code> prop.</p>
                  <ReactPlayground codeText={Samples.ButtonActive} />

                  <h2 id='buttons-disabled'>Disabled state</h2>
                  <p>Make buttons look unclickable by fading them back 50%. To do this add the <code>disabled</code>
                    attribute to buttons.</p>
                  <ReactPlayground codeText={Samples.ButtonDisabled} />

                  <div className='bs-callout bs-callout-warning'>
                    <h4>Event handler functionality not impacted</h4>
                    <p>This prop will only change the <code>{'<Button />'}</code>&#8217;s appearance, not its
                      functionality. Use custom logic to disable the effect of the <code>onClick</code> handlers.</p>
                  </div>

                  <h2 id='buttons-tags'>Button tags</h2>
                  <p>The DOM element tag is choosen automaticly for you based on the props you supply. Passing a
                    <code>href</code> will result in the button using a <code>{'<a />'}</code> element otherwise a
                    <code>{'<button />'}</code> element will be used.</p>
                  <ReactPlayground codeText={Samples.ButtonTagTypes} />

                  <h2 id='buttons-tags'>Button loading state</h2>
                  <p>When activating an asynchronous action from a button it is a good UX pattern to give the user
                    feedback as to the loading state, this can easily be done by updating your
                    <code>{'<Button />'}</code>&#8217;s props from a state change like below.</p>
                  <ReactPlayground codeText={Samples.ButtonLoading} />
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
                    <SubNav href='#buttons' key={1} text='Buttons'>
                      <NavItem href='#btn-groups' key={2}>Button groups</NavItem>
                      <NavItem href='#btn-dropdowns' key={3}>Button dropdowns</NavItem>
                    </SubNav>
                    <NavItem href='#panels' key={4}>Panels</NavItem>
                    <NavItem href='#modals' key={5}>Modals</NavItem>
                    <NavItem href='#tooltips' key={6}>Tooltips</NavItem>
                    <NavItem href='#popovers' key={7}>Popovers</NavItem>
                    <NavItem href='#progress' key={8}>Progress bars</NavItem>
                    <NavItem href='#navs' key={9}>Navs</NavItem>
                    <NavItem href='#navbars' key={10}>Navbars</NavItem>
                    <NavItem href='#tabs' key={11}>Togglable tabs</NavItem>
                    <NavItem href='#pager' key={12}>Pager</NavItem>
                    <NavItem href='#alerts' key={13}>Alerts</NavItem>
                    <NavItem href='#carousels' key={14}>Carousels</NavItem>
                    <NavItem href='#grids' key={15}>Grids</NavItem>
                    <NavItem href='#listgroup' key={16}>List group</NavItem>
                    <NavItem href='#labels' key={17}>Labels</NavItem>
                    <NavItem href='#badges' key={18}>Badges</NavItem>
                    <NavItem href='#jumbotron' key={19}>Jumbotron</NavItem>
                    <NavItem href='#page-header' key={20}>Page Header</NavItem>
                    <NavItem href='#wells' key={21}>Wells</NavItem>
                    <NavItem href='#glyphicons' key={22}>Glyphicons</NavItem>
                    <NavItem href='#tables' key={23}>Tables</NavItem>
                    <NavItem href='#input' key={24}>Input</NavItem>
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
