import {createUseStyles} from "react-jss";
import {ClubEvent} from "../../../types/types";
import UserAvatar, {UserAvatarSize} from "../UserAvatar";
import Frame from "./Frame";

const useStyles = createUseStyles<string, {isFutureEvent:boolean}>({
    eventContent: {
        height: 250,
        background: props => props.isFutureEvent ? "#f8e71c" : "white",
        padding: '30px 28px 25px 24px',
    },
    eventHeader: {
        fontSize: 12,
    },
    eventTitle: {
        fontSize: 24,
        fontFamily: "Arial",
    },
    eventGuestsLabel: {
        fontSize: 12,
    },
    eventDate: {
        fontSize: 12,
    },
    eventGuests: {
        display: "flex",
        flexDirection: "row",
    }
});

export type EventTileProps = ClubEvent;

export function EventTile(props: EventTileProps) {
    const isFutureEvent = props.date.getTime() > Date.now();
    const classes = useStyles({isFutureEvent});
    return (
        <Frame
            taglineColor={isFutureEvent ? '#f8e71c' : 'white'}
            tagline={(
            <p className={classes.eventDate}>
                {props.date.toLocaleDateString()} {props.date.toLocaleTimeString()}
            </p>
        )}>
            <div className={classes.eventContent}>
                <p className={classes.eventHeader}>{isFutureEvent && "UPCOMING // "}meetup #{props.id}</p>
                <p className={classes.eventTitle}>{props.title}</p>
                {props.guests && <p className={classes.eventGuestsLabel}>Guests</p>}
                {
                    props.guests && (<div className={classes.eventGuests}>
                        {
                            props.guests.map((guest, i) => <UserAvatar
                                key={`guest-${i}`}
                                size={UserAvatarSize.S }
                                {...guest}
                            />)
                        }
                    </div>)
                }
            </div>
        </Frame>
    )
}