import { LocalTaxiOutlined } from '@material-ui/icons';
import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => { // destructuring the pathname to nextPathename
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }

            },
        });
        history.listen(onParentNavigate);
    }, []);

    return (
        <div ref={ref} />
    );
};