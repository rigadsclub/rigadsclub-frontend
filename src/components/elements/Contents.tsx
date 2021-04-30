import React from 'react';
import {createUseStyles} from "react-jss";

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const useStyles = createUseStyles<string, ButtonProps>({
    contents: {
        width: '100%',
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
    }
});


export default function Contents(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    const classes = useStyles();
    return <div className={classes.contents} {...props}>{props.children}</div>;
}