import React from "react";
import {createUseStyles} from "react-jss";
import ClubLogo from "../elements/ClubLogo";
import LinkedInIcon from "../elements/LinkedInIcon";
import KaggleIcon from "../elements/KaggleIcon";
import Button from "../elements/Button";

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
    socialLogo: {
        cursor: "pointer",
        paddingLeft: 15,
        paddingBottom: 10,
        alignSelf: "flex-end",
    },
    socialLogoIcon: {
        width: 24,
        height: 24,
    },
    about: {
        fontSize: 16,
        paddingBottom: 35,
        color: "rgba(255, 255, 255, 0.5)",
    },
    navItem: {
        paddingRight: 15,
    }
});

const NavigationItems: Array<{label: string, to: string}> = [
    {label: "About Us", to: "/about"},
    {label: "Projects", to: "/projects"},
    {label: "Our Events", to: "/events"},
]

export default function Header() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <div className={classes.vertical}>
                    <div className={classes.horizontal}>
                        <p className={classes.motto}>
                            <span className={classes.faded}>{"//to share {"}</span>
                            <br/>
                            {["experience", "concepts", "ideas"].map(what => <span className={classes.what}>{what};<br/></span>)}
                            <span className={classes.faded}>{"} and more"}</span>
                        </p>
                        <div className={classes.vertical}>
                            <div className={classes.horizontal}>
                                <a href={"/"} className={classes.clubLogo}>
                                    <ClubLogo className={classes.clubLogoImage} />
                                </a>
                                <a href={"https://www.linkedin.com/company/riga-ds-club"} className={classes.socialLogo}>
                                    <LinkedInIcon className={classes.socialLogoIcon} color={"white"}/>
                                </a>
                                <a href={"#"} className={classes.socialLogo}>
                                    <KaggleIcon className={classes.socialLogoIcon} color={"white"}/>
                                </a>
                            </div>
                            <p className={classes.about}>Riga Data Science Club is a non-profit organization to share experience and build machine learning projects together. Our goal is to drive progress in the machine learning&artificial intelligence field.</p>
                        </div>
                    </div>
                    <div className={classes.horizontal}>
                        {
                            NavigationItems.map((item, i) => (
                                <div className={classes.navItem} key={`nav-item-${i}`}>
                                    <Button>{item.label}</Button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}