import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    footer: {
        background: "black",
        color: "white",
        margin: 0,
        paddingTop: 140,
        paddingBottom: 20,
        fontSize: 12,
        fontWeight: "normal",
        textAlign: "center"
    },
});

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            Riga Data Science Club, 2021
        </div>
    );
}