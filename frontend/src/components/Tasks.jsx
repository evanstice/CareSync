import { useState } from "react";
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
        <div style={styles.body}>
            <div style={styles.container}>
            <h1 style={styles.h1}>CareSync</h1>
            </div>
        </div>
    );
}