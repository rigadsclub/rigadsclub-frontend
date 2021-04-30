import Contents from "../elements/Contents";
import {createUseStyles} from "react-jss";
import Section from "../elements/Section";
import {ClubColor} from "../../types/ClubColor";
import EventTile, {EventTileProps} from "../elements/EventTile";

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
    events: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
});

const Events: Array<EventTileProps> = [
    {
        id: 20,
        title: "Predicting Protein Structure with AlphaFold",
        date: new Date(Date.UTC(2020, 11, 17, 11)),
        guests: [
            {avatar: "https://rigadsclub.com/images/events/19/isabella.jpeg"},
            {avatar: "https://rigadsclub.com/images/events/19/alfonso-valencia.jpg"}
        ]
    },
    {
        id: 18,
        title: "Reinforcement Learning with Google Football",
        date: new Date(Date.UTC(2021, 3, 15, 11)),
        guests: [
            {avatar: "https://rigadsclub.com/images/events/18/tom.jpg"},
            {avatar: "https://rigadsclub.com/images/events/18/dmitry.jpg"},
        ]
    },
    {
        id: 21,
        title: "Introduction to MLOps and tutorial workshop",
        date: new Date(Date.UTC(2021, 11, 17, 11)),
        guests: [
            {avatar: "https://rigadsclub.com/images/events/27/raoul_fasel.jpg"},
        ]
    },
];

export default function Main() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.main}>
                <Contents>
                    <Section title={"OUR EVENTS"} slashColor={ClubColor.YELLOW}>
                        <div className={classes.events}>
                            {Events
                                .sort((a, b) => b.id - a.id)
                                .map(event => <EventTile key={`event-${event.id}`} {...event} />)}
                        </div>
                    </Section>
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