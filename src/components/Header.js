
const Header = ({ title }) => {
    return (
        <Header>
            <h1>{title}</h1>
        </Header>
    )
}

Header.defaultProps = {
    title: 'React Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
