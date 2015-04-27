import React from 'react';
import expressionEvaluator from '../src/lib/expression-evaluator.js';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import VNav from '../src/components/navigation/VNav/VNav.jsx';
import VNavGroup from '../src/components/navigation/VNav/VNavGroup.jsx';
import VNavItem from '../src/components/navigation/VNav/VNavItem.jsx';

import { html } from 'js-beautify';

describe('Expression evaluator', function () {
    describe('SideNav', function () {

        it('Should have proper class', function () {

            let instance = ReactTestUtils.renderIntoDocument(
                <VNav>
                    <VNavGroup title='Main'>
                        <VNavItem title='Contacts'/>
                        <VNavItem title='Schedule'/>
                    </VNavGroup>
                    <VNavGroup title='Settings'>
                        <VNavItem title='Customizations'/>
                    </VNavGroup>
                </VNav>
            );
            let node = React.findDOMNode(instance);
        });

    });
});
