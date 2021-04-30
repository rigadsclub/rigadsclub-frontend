import React from "react";
import {createUseStyles} from "react-jss";
import ClubLogo from "../elements/ClubLogo";
import LinkedInLogo from "../elements/LinkedInLogo";

const useStyles = createUseStyles({
    header: {
        background: "black",
        color: "white",
        margin: 0,
        padding: 0,
    },
    content: {
        width: '100%',
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex'
    },
    motto: {
        fontSize: 40,
        paddingTop: 100,
        paddingBottom: 50,
        paddingRight: 50,
        margin: 0,
    },
    faded: {
        color: "rgba(255, 255, 255, 0.3)",
    },
    what: {
        paddingLeft: 60,
    },
    vertical: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    horizontal: {
        display: 'flex',
        flexDirection: 'row',
    },
    clubLogo: {
        width: 174,
        height: 200,
        backgroundColor: "#1b1b1b",
        position: "relative",
    },
    clubLogoImage: {
        position: "absolute",
        left: 15,
        right: 15,
        bottom: 15,
    },
    linkedInLogo: {
        cursor: "pointer",
        paddingLeft: 15,
        paddingBottom: 10,
        alignSelf: "flex-end",
    },
    about: {
        fontSize: 16,
        paddingBottom: 35,
        color: "rgba(255, 255, 255, 0.5)",
    },
});

export default function Header() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <p className={classes.motto}>
                    <span className={classes.faded}>{"//to share {"}</span>
                    <br/>
                    {["experience", "concepts", "ideas"].map(what => <span className={classes.what}>{what};<br/></span>)}
                    <span className={classes.faded}>{"} and more"}</span>
                </p>
                <div className={classes.vertical}>
                    <div className={classes.horizontal}>
                        <div className={classes.clubLogo}>
                            <ClubLogo className={classes.clubLogoImage} />
                        </div>
                        <a href={"https://www.linkedin.com/company/riga-ds-club"} className={classes.linkedInLogo}>
                            <LinkedInLogo color={"white"}/>
                        </a>
                    </div>
                    <p className={classes.about}>Riga Data Science Club is a non-profit organization to share experience and build machine learning projects together. Our goal is to drive progress in the machine learning&artificial intelligence field.</p>
                </div>
            </div>
        </header>
    );
}