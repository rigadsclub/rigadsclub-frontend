import {createUseStyles} from "react-jss";
import {ReactNode} from "react";
import Button from "./Button";
import {ClubColor} from "../../types/types";

export interface SectionProps {
    title: string;
    darkMode?: boolean;
    slashColor: ClubColor;
    children?: ReactNode;
    extraButton?: ReactNode;
    showAll?: string;
}

const useStyles = createUseStyles<string, SectionProps>({
    section: {
        marginTop: 20,
        marginBottom: 20,
    },
    sectionHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    slashes: {
        color: props => props.slashColor,
    },
    controls: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    extraButton: {
        marginRight: 15,
    }
});

export default function Section(props: SectionProps) {
    const classes = useStyles(props);
    return (
        <div className={classes.section}>
            <div className={classes.sectionHeader}>
                <p className={classes.title}>
                    <span className={classes.slashes}>{"//"}</span> {props.title}
                </p>
                <div className={classes.controls}>
                    {props.extraButton ? <div className={classes.extraButton}>{props.extraButton}</div> : null}
                    <Button color={props.darkMode ? "white" : "black"} borderColor={props.darkMode ? "white" : "black"}>
                        Show all
                    </Button>
                </div>
            </div>
            {props.children}
        </div>
    )
}