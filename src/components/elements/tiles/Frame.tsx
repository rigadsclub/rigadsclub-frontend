import {ReactNode} from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles<string, FrameProps>({
    frame: {
        width: '100%',
        color: "black",
        fontWeight: "bold",
        height: 'fit-content',
        border: 'solid 2px black',
        display: "flex",
        flexDirection: "column",
        marginRight: 22,
        "&:last-child": {
            marginRight: 0,
        }
    },
    tagline: {
        borderTop: 'solid 1px black',
        backgroundColor: props => props.taglineColor || "white",
        fontSize: 12,
        fontWeight: "bold",
        padding: '14px 23px 14px 24px',
    },
});
export interface FrameProps {
    children: ReactNode;
    tagline: ReactNode;
    taglineColor?: string;
}

export default function Frame(props: FrameProps) {
    const classes = useStyles(props);
    return (
        <div className={classes.frame}>
            {props.children}
            <div className={classes.tagline}>
                {props.tagline}
            </div>
        </div>
    );
}