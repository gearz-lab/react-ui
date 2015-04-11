import React from 'react';
import packageJSON from '../../package.json';

const PageHeader = React.createClass({
  render() {
    return (
        <footer className='bs-docs-footer' role='contentinfo'>
          <div className='container'>
            <div className='bs-docs-social'>
              <ul className='bs-docs-social-buttons'>
                <li>
                  <iframe className='github-btn'
                    src='http://ghbtns.com/github-btn.html?user=gearz-lab&repo=react-ui&type=watch&count=true'
                    width={95}
                    height={20}
                    title='Star on GitHub' />
                </li>
                <li>
                  <iframe className='github-btn'
                    src='http://ghbtns.com/github-btn.html?user=gearz-lab&repo=react-ui&type=fork&count=true'
                    width={92}
                    height={20}
                    title='Fork on GitHub' />
                </li>
                <li>
                  <iframe
                    src="http://platform.twitter.com/widgets/follow_button.html?screen_name=andrerpena&show_screen_name=true"
                    width={230}
                    height={20}
                    allowTransparency="true"
                    frameBorder='0'
                    scrolling='no'>
                  </iframe>
                </li>
              </ul>
            </div>
            <p>Code licensed under <a href='https://github.com/gearz-lab/react-ui/blob/master/LICENSE' target='_blank'>MIT</a>.</p>
            <ul className='bs-docs-footer-links muted'>
              <li>Currently v{packageJSON.version}</li>
              <li>·</li>
              <li><a href='https://github.com/gearz-lab/react-ui'>GitHub</a></li>
              <li>·</li>
              <li><a href='https://github.com/gearz-lab/react-ui/issues?state=open'>Issues</a></li>
            </ul>
          </div>
        </footer>
      );
  }
});

export default PageHeader;
