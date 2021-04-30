import Contents from "../elements/Contents";
import {createUseStyles} from "react-jss";
import Section from "../elements/Section";
import {ClubColor} from "../../types/ClubColor";

const useStyles = createUseStyles({
    main: {
        background: "white",
        color: "black",
        margin: 0,
        paddingTop: 40,
    },
    members: {
        background: "black",
        color: "white",
        margin: 0,
        paddingTop: 40,
    },
});

export default function Main() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.main}>
                <Contents>
                    <Section title={"OUR EVENTS"} slashColor={ClubColor.YELLOW} />
                    <Section title={"OUR PROJECTS"} slashColor={ClubColor.GREEN} />
                </Contents>
            </div>
            <div className={classes.members}>
                <Contents>
                    <Section title={"MEMBERS"} slashColor={ClubColor.PURPLE} darkMode />
                </Contents>
            </div>
        </>
    )
}