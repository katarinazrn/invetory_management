import './MainContent.css';

const MainContent = (props) => {

    return (
        <div id='main-content'>{props.children}</div>
    )
}

export default MainContent;