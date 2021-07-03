import Contents from "../elements/Contents";
import {createUseStyles} from "react-jss";
import Section from "../elements/Section";
import EventTile, {EventTileProps} from "../elements/EventTile";
import {ClubColor, ClubMember, ExternalLinkKind} from "../../types/types";
import UserAvatar, {UserAvatarSize} from "../elements/UserAvatar";
import LinkedInIcon from "../elements/LinkedInIcon";
import MemberTile from "../elements/MemberTile";

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
    avatars: {
        display: "flex",
        flexDirection: "row",
    },
    member: {
        marginRight: 64,
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

const Members: Array<ClubMember> = [
    {
        firstName: "Dmitry",
        lastName: "Yemelyanov",
        avatar: "https://rigadsclub.com/images/avatar/dyemelyanov.jpg",
        links: [
            {
                kind: ExternalLinkKind.LINKEDIN,
                url: "https://www.linkedin.com/in/datasciencedj"
            },
            {
                kind: ExternalLinkKind.KAGGLE,
                url: "https://www.kaggle.com/dmitryyemelyanov"
            }
        ]
    },
    {
        firstName: "Kate",
        lastName: "Kuznecova",
        avatar: "https://rigadsclub.com/images/avatar/kkuznecova.jpeg",
        links: [
            {
                kind: ExternalLinkKind.LINKEDIN,
                url: "https://www.linkedin.com/in/kate-kuznecova/"
            },
        ]
    },
    {
        firstName: "Cees",
        lastName: "Roele",
        avatar: "https://rigadsclub.com/images/avatar/croele.jpg",
        links: [
            {
                kind: ExternalLinkKind.LINKEDIN,
                url: "https://www.linkedin.com/in/ceesroele/"
            },
        ]
    },
    {
        firstName: "Arturs",
        lastName: "Valujevs",
        avatar: "https://rigadsclub.com/images/avatar/avalujevs.png",
        links: [
            {
                kind: ExternalLinkKind.LINKEDIN,
                url: "https://www.linkedin.com/in/valujevs/"
            },
        ]
    },
    {
        firstName: "Dmitry",
        lastName: "Trizna",
        avatar: "https://rigadsclub.com/images/avatar/dtrizna.jpg",
        links: [
            {
                kind: ExternalLinkKind.LINKEDIN,
                url: "https://www.linkedin.com/in/dmitrijs-trizna-b6776883/"
            },
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
                    <div className={classes.avatars}>
                        {Members.map((member, i) => (
                            <div className={classes.member} key={`member-${i}`}>
                                <MemberTile {...member} />
                            </div>
                        ))}
                    </div>
                </Contents>
            </div>
        </>
    )
}