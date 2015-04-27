const selectHandler = (name) => alert(name);

const NavigationSideNavBasicUsage = (
    <VNav>
        <VNavGroup name='main' title='Main'  onSelect={selectHandler}>
            <VNavItem name='contacts' title='Contacts' onSelect={selectHandler}/>
            <VNavItem name='schedule' title='Schedule' onSelect={selectHandler}/>
        </VNavGroup>
        <VNavGroup name='settings' title='Settings'  onSelect={selectHandler}>
            <VNavItem name='customizations' title='Customizations' onSelect={selectHandler}/>
        </VNavGroup>
    </VNav>
);

React.render(NavigationSideNavBasicUsage, mountNode);
