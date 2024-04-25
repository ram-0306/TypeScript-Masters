'use client';
import { SnackbarProvider } from 'notistack';
import React from 'react'
import { AppProvider } from './context/AppContext';

const Template = ({ children }) => {
    return (
        <SnackbarProvider>
            <AppProvider>
                {children}
            </AppProvider>
        </SnackbarProvider>
    )
}

export default Template;