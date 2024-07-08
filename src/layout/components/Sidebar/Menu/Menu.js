import PropTypes from 'prop-types'
function MenuSideBar({children}) {
    return ( 
        <nav>
            {children}
        </nav>
     );
}
MenuSideBar.propTypes = {
    children: PropTypes.node.isRequired,
    
}
export default MenuSideBar;