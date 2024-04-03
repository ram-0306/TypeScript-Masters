'use client';
import { SnackbarProvider } from 'notistack';
import React from 'react'

const Template = ({ children }) => {
    return (
        <SnackbarProvider>
            {children}
        </SnackbarProvider>
    )
}

export default Template;