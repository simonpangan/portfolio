export default () => {
    return (
        <footer className="bg-primary bg-opacity-10 pb-2 pt-3 text-center mt-3">
            <p>
                Made with
               <span className='mx-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         viewBox="0 0 16 16" style={{color: "var(--bs-red)"}}
                    >
                    <path
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
               </span>
                using
                <a href='https://getbootstrap.com/' className='mx-1' target='_blank'>Boostrap</a>
                and
                <a href='https://reactjs.org/' className='mx-1' target='_blank'>React</a>
            </p>
            <p className='mb-0'>© 2022 Simon Pangan</p>
        </footer>
    );
};
