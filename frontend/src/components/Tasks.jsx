import { useState } from "react";
import NavBar from './NavBar';
export const Tasks = () => {
    const styles = {
        body: {
            backgroundColor: 'lightgray',
            textAlign: 'center'
        },
        h1: {
            backgroundColor: 'aquamarine',
            fontSize: '400%',
            padding: '20px'
        },
        container: {
            margin: 'auto',
            padding: '20px'
        }
    };


    return (
        <>
        <NavBar />
        <div style={styles.body}>
            <div style={styles.container}>

            </div>
        </div>
        </>
    );
}