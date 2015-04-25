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

const NavigationSideNavBasicUsage = (
    <SideNav items={menu} />
);

React.render(NavigationSideNavBasicUsage, mountNode);
