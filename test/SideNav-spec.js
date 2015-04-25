import React from 'react';
import expressionEvaluator from '../src/lib/expression-evaluator.js';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import SideNav from '../src/components/navigation/sideNav/SideNav.jsx';

let menu = {
    main: {
        display: 'Main',
        children: {
            contacts: {
                display: 'Contacts'
            },
            schedule: {
                display: 'Schedule'
            }
        }
    },
    settings: {
        display: 'Settings',
        children: {
            contacts: {
                display: 'Customizations'
            }
        }
    },
    about: {
        display: 'About'
    }
};

describe('Expression evaluator', function () {
    describe('SideNav', function () {

        it('Should have proper class', function () {
            let instance = ReactTestUtils.renderIntoDocument(
                <SideNav items={menu} />
            );
            assert.ok(React.findDOMNode(instance).className.match(/rui-sidenav/));
        });


        it('getGroups should return the menu groups', function () {

            let instance = ReactTestUtils.renderIntoDocument(
                <SideNav items={menu} />
            );

            const groups = instance.getGroups();

            assert.equal(groups.length, 3);
            assert.equal(groups[0].display, 'Main');
            assert.equal(Object.keys(groups[0].children).length, 2);
            assert.equal(groups[1].display, 'Settings');
            assert.equal(Object.keys(groups[1].children).length, 1);
        });

        it('getItems should return the the items for a given group', function () {

            let instance = ReactTestUtils.renderIntoDocument(
                <SideNav items={menu} />
            );

            const groups = instance.getGroups();
            const firstGroupItems = instance.getItems(groups[0]);
            const secondGroupItems = instance.getItems(groups[1]);

            assert.equal(firstGroupItems.length, 2);
            assert.equal(firstGroupItems[0].display, 'Contacts');
            assert.equal(secondGroupItems.length, 1);
            assert.equal(firstGroupItems[1].display, 'Schedule');
        });

        it('getItems should return [] when a group has no children', function () {

            let instance = ReactTestUtils.renderIntoDocument(
                <SideNav items={menu} />
            );

            const groups = instance.getGroups();
            const lastGroupItems = instance.getItems(groups[2]);

            assert.equal(lastGroupItems.length, 0);
        });
    });
});
