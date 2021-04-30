import React from 'react';
import {createUseStyles} from "react-jss";

type ButtonProps = {
    borderColor?: string;
    color?: string;
    background?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const useStyles = createUseStyles<string, ButtonProps>({
    button: {
        textAlign: 'center',
        color: props => props.color || 'white',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        background: props => props.background || 'none',
        border: props => `solid 2px ${props.borderColor || 'rgba(255, 255, 255, 0.2)'}`,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        fontSize: 14,
        fontWeight: 'bold',
        width: 137,
        height: 40,
        userSelect: "none",
        cursor: 'pointer',
    }
});


export default function Button(props: ButtonProps) {
    const classes = useStyles(props);
    return <button className={`${classes.button} ${props.className}`} {...props}>{props.children}</button>;
}