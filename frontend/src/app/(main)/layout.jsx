import React from 'react'
import HomeHeader from './HomeHeader';

const MainLayout = ({ children }) => {
    return (
        <>
           <HomeHeader />
            {children}
        </>
    )
}

export default MainLayout;