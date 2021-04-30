import React from 'react';
import {createUseStyles} from "react-jss";

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const useStyles = createUseStyles<string, ButtonProps>({
    button: {
        textAlign: 'center',
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        background: 'none',
        border: 'solid 2px rgba(255, 255, 255, 0.2)',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        fontSize: 14,
        fontWeight: 'bold',
        width: 137,
        userSelect: "none",
        cursor: 'pointer',
    }
});


export default function Button(props: ButtonProps) {
    const classes = useStyles(props);
    return <button className={classes.button} {...props}>{props.children}</button>;
}