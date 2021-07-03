import {createUseStyles} from "react-jss";
import {ClubEvent} from "../../types/types";
import UserAvatar, {UserAvatarSize} from "./UserAvatar";

const useStyles = createUseStyles<string, {isFutureEvent:boolean}>({
    event: {
        width: '33%',
        position: "relative",
        color: "black",
        fontWeight: "bold",
        height: 344,
        background: props => props.isFutureEvent ? "#f8e71c" : "white",
        border: 'solid 2px black',
        marginRight: 10,
    },
    eventContent: {
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
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        fontSize: 12,
        padding: '23px 14px 14px 24px',
        borderTop: 'solid 1px black',
    },
    eventGuests: {
        display: "flex",
        flexDirection: "row",
    }
});

export type EventTileProps = ClubEvent;

export default function EventTile(props: EventTileProps) {
    const isFutureEvent = props.date.getTime() > Date.now();
    const classes = useStyles({isFutureEvent});
    return (
        <div className={classes.event}>
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
            <p className={classes.eventDate}>
                {props.date.toLocaleDateString()} {props.date.toLocaleTimeString()}
            </p>
        </div>
    )
}