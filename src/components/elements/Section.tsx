import {createUseStyles} from "react-jss";
import {ReactNode} from "react";
import Button from "./Button";
import {ClubColor} from "../../types/types";

export interface SectionProps {
    title: string;
    darkMode?: boolean;
    slashColor: ClubColor;
    children?: ReactNode;
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
});

export default function Section(props: SectionProps) {
    const classes = useStyles(props);
    return (
        <div className={classes.section}>
            <div className={classes.sectionHeader}>
                <p className={classes.title}>
                    <span className={classes.slashes}>{"//"}</span> {props.title}
                </p>
                <Button color={props.darkMode ? "white" : "black"} borderColor={props.darkMode ? "white" : "black"}>
                    Show all
                </Button>
            </div>
            {props.children}
        </div>
    )
}