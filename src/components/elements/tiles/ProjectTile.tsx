import {createUseStyles} from "react-jss";
import Frame from "./Frame";
import {ClubProject} from "../../../types/types";
import UserAvatar, {UserAvatarSize} from "../UserAvatar";

const useStyles = createUseStyles<string, ProjectTileProps>({
    projectContainer: {
        position: "relative",
        height: 305,
        background: "black",
    },
    projectImage: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 20,
        height: 250,
        width: '100%',
        backgroundBlendMode: "normal, color",
        backgroundImage: props => `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000000), linear-gradient(to bottom, #d8d8d8, #d8d8d8), url(${props.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    projectContent: {
        position: "absolute",
        left: 24,
        right: 28,
        top: 65,
    },
    projectTitle: {
        fontSize: 24,
        fontFamily: "Arial",
        color: "white",
        paddingBottom: 14,
    },
    projectSubtitle: {
        fontSize: 12,
        fontFamily: "Arial",
        color: "#CCCCCC",
        paddingBottom: 14,
    },
    projectParticipants: {
        alignSelf: "flex-end",
        display: "flex",
        flexDirection: "row",
    },
    tryItOut: {
        textAlign: "right",
    },
});

export type ProjectTileProps = ClubProject;

export function ProjectTile(props: ProjectTileProps) {
    const classes = useStyles(props);
    return (
        <Frame tagline={<p className={classes.tryItOut}>Try it out {'>'}</p>} taglineColor={'#f8e71c'}>
            <div className={classes.projectContainer}>
                <div className={classes.projectImage}/>
                <div className={classes.projectContent}>
                    <div className={classes.projectTitle}>
                        {props.title}
                    </div>
                    <div className={classes.projectSubtitle}>
                        {props.subtitle}
                    </div>
                    {
                        props.participants && (<div className={classes.projectParticipants}>
                            {
                                props.participants.map((participant, i) => <UserAvatar
                                    key={`participants-${i}`}
                                    size={UserAvatarSize.S }
                                    {...participant}
                                />)
                            }
                        </div>)
                    }
                </div>
            </div>
        </Frame>
    );
}