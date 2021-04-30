import {createUseStyles} from "react-jss";

export interface EventTileProps {
    id: number,
    title: string,
    date: Date,
    guests?: EventGuest[],
}

export interface EventGuest {
    avatar?: string;
}

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
    },
    eventGuestAvatar: {
        marginRight: 10,
        width: 70,
        height: 70,
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
                        {props.guests.map((guest, i) => <div
                            id={`guest-${i}`}
                            className={classes.eventGuestAvatar}>
                            <img
                                className={classes.eventGuestAvatarImage}
                                src={guest.avatar}
                            />
                        </div>)}
                    </div>)
                }
            </div>
            <p className={classes.eventDate}>
                {props.date.toLocaleDateString()} {props.date.toLocaleTimeString()}
            </p>
        </div>
    )
}