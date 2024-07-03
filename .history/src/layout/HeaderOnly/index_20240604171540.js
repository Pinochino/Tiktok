import Header from '../CommonComponents/Header';

function DefaultLayout({ children }) {
    return (
        <div className='DefaultLayout'>
            <Header />
            <div className='container'>
                <div className='content'>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;




