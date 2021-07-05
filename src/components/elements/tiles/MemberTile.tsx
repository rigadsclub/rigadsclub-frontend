import React from "react";

import {ClubMember, EnumDictionary, ExternalLinkKind} from "../../../types/types";
import {createUseStyles} from "react-jss";
import UserAvatar, {UserAvatarSize} from "../UserAvatar";
import LinkedInIcon from "../LinkedInIcon";
import KaggleIcon from "../KaggleIcon";

const useStyles = createUseStyles({
    avatar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignContent: "center",
        fontSize: 12,
        fontWeight: "bold"
    },
    name: {
        marginTop: 18,
    },
    socialLogoIcon: {
        width: 24,
        height: 24,
    },
    links: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
    },
    link: {
        marginRight: 10,
    }
});

export type MemberTileProps = ClubMember;

const icons: EnumDictionary<ExternalLinkKind, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
    [ExternalLinkKind.LINKEDIN]: LinkedInIcon,
    [ExternalLinkKind.FACEBOOK]: LinkedInIcon,
    [ExternalLinkKind.TWITTER]: LinkedInIcon,
    [ExternalLinkKind.KAGGLE]: KaggleIcon,
};

export function MemberTile(props: MemberTileProps) {
    const classes = useStyles();
    return (
        <div className={classes.avatar}>
            <UserAvatar size={UserAvatarSize.L} avatar={props.avatar} />
            <span className={classes.name}>
                {props.firstName}
                <br/>
                {props.lastName}
            </span>
            <div className={classes.links}>
                {props.links.map((link, i) => {
                    const Icon = icons[link.kind];
                    return <a className={classes.link} href={link.url}><Icon className={classes.socialLogoIcon} color={"white"}/></a>;
                })}
            </div>
        </div>
    );
}