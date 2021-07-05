import Contents from "../elements/Contents";
import {createUseStyles} from "react-jss";
import Section from "../elements/Section";
import {MemberTile, EventTile, EventTileProps, ProjectTile} from "../elements/tiles";
import {ClubColor, ClubMember, ClubProject, ExternalLinkKind} from "../../types/types";
import Button from "../elements/Button";
import React from "react";

const useStyles = createUseStyles({
    main: {
        background: "white",
        color: "black",
        margin: 0,
        paddingTop: 40,
    },
    membersSection: {
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
    projects: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    members: {
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

const Projects: Array<ClubProject> = [
    {
        title: 'Generate "Mascaron" Art Nouveau Riga Faces',
        subtitle: 'This project emphasizes the beauty of masks, which are around us at so many art nouveau buildings in Riga. Browse interactive map and discover remarkable “Riga Faces”.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Sculpture_on_fa%C3%A7ade_facing_River_Ill%2C_Palais_Rohan_de_Strasbourg.jpg/1280px-Sculpture_on_fa%C3%A7ade_facing_River_Ill%2C_Palais_Rohan_de_Strasbourg.jpg',
        sort: 3,
        participants: [
            {
                avatar: "https://rigadsclub.com/images/avatar/dyemelyanov.jpg"
            }
        ]
    },
    {
        title: 'Predict Riga Real Estate Property Prices',
        subtitle: 'We have built a prediction model that makes use of existing market data of sale and rent prices to estimate the value of any other real estate property located in Riga.',
        image: 'https://rigadsclub.com/images/riga/rigaoldtown.jpg',
        sort: 2,
        participants: [
            {
                avatar: "https://rigadsclub.com/images/avatar/dyemelyanov.jpg"
            },
            {
                avatar: "https://rigadsclub.com/images/avatar/dyachmenev.jpeg"
            }
        ]
    },
    {
        title: 'Colorize Old Black&White Photos',
        subtitle: 'We have built a prediction model that makes use of existing market data of sale and rent prices to estimate the value of any other real estate property located in Riga.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Sculpture_on_fa%C3%A7ade_facing_River_Ill%2C_Palais_Rohan_de_Strasbourg.jpg/1280px-Sculpture_on_fa%C3%A7ade_facing_River_Ill%2C_Palais_Rohan_de_Strasbourg.jpg',
        sort: 1,
        participants: [
            {
                avatar: "https://rigadsclub.com/images/avatar/dyemelyanov.jpg"
            }
        ]
    }
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
                    <Section
                        title={"OUR EVENTS"}
                        slashColor={ClubColor.YELLOW}
                    >
                        <div className={classes.events}>
                            {Events
                                .sort((a, b) => b.id - a.id)
                                .map(event => <EventTile key={`event-${event.id}`} {...event} />)}
                        </div>
                    </Section>
                    <Section
                        title={"OUR PROJECTS"}
                        slashColor={ClubColor.GREEN}
                        >
                        <div className={classes.projects}>
                            {Projects
                                .sort((a, b) => b.sort - a.sort)
                                .map((project, i) => <ProjectTile key={`project-${i}`} {...project} />)}
                        </div>
                    </Section>
                </Contents>
            </div>
            <div className={classes.membersSection}>
                <Contents>
                    <Section
                        title={"MEMBERS"}
                        slashColor={ClubColor.PURPLE}
                        darkMode
                        extraButton={<Button color={"white"} borderColor={"white"}>Become a Member</Button>}
                    >
                        <div className={classes.members}>
                            {Members.map((member, i) => (
                                <div className={classes.member} key={`member-${i}`}>
                                    <MemberTile {...member} />
                                </div>
                            ))}
                        </div>
                    </Section>
                </Contents>
            </div>
        </>
    )
}