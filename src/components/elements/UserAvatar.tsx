import {createUseStyles} from "react-jss";
import {EnumDictionary, UserWithAvatar} from "../../types/types";
import React from "react";

export enum UserAvatarSize {
    S,
    L
}

const sizes: EnumDictionary<UserAvatarSize, number> = {
    [UserAvatarSize.S]: 70,
    [UserAvatarSize.L]: 120,
};

const useStyles = createUseStyles<string, UserAvatarProps>({
    eventGuestAvatar: {
        marginRight: 10,
        width: (props) => sizes[props.size],
        height: (props) => sizes[props.size],
        borderRadius: '50%',
        border: 'solid 2px black',
        overflow: "hidden",
        display: "flex",
    },
    eventGuestAvatarImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
});

export type UserAvatarProps = {
    size: UserAvatarSize
} & UserWithAvatar;

export default function UserAvatar(props: UserAvatarProps) {
    const classes = useStyles(props);
    return (
        <div
            className={classes.eventGuestAvatar}>
            <img
                className={classes.eventGuestAvatarImage}
                src={props.avatar}
            />
        </div>
    )
}