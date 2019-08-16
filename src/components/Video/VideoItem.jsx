import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    cursor: "pointer"
  },
  expand: {
    // transform: 'rotate(0deg)',
    // marginLeft: 'auto',
    // transition: theme.transitions.create('transform', {
    // duration: theme.transitions.duration.shortest,
    // }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  title: { ...theme.typography.subtitle2, fontSize: '1rem' },
  description: {
    paddingTop: 0
  }
}));

const styles = {
  moreIcon: makeStyles(theme => ({
    root: {
      padding: theme.spacing(1),
      margin: "auto",
      width: "100%",
      borderRadius: "5%",
    }
  })),

  header: makeStyles(theme => ({
    root: { paddingBottom: 0 },
    title: { ...theme.typography.subtitle2, fontSize: '1rem' },
  }))
}

export default function VideoItem({ snippet, selectVideo }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [headerExpand, setHeaderExpand] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={snippet.thumbnails.medium.url}
        title={snippet.title}
        onClick={selectVideo}
      />
      <CardHeader
        classes={styles.header()}
        title={snippet.title}
      />
      <Collapse in={headerExpand} timeout="auto">
        <CardHeader
          className={classes.description}
          subheader={snippet.description}
        />
      </Collapse>

      <CardActions disableSpacing>
        <IconButton
          classes={styles.moreIcon()}
          aria-label="expand header"
          onClick={() => setHeaderExpand(!headerExpand)}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

{/* <IconButton
  className={clsx(classes.expand, {
    [classes.expandOpen]: expanded,
  })}
  onClick={handleExpandClick}
  aria-expanded={expanded}
  aria-label="show more"
>
  <ExpandMoreIcon />
</IconButton> */}

{/* <CardHeader
  action={
    <IconButton aria-label="expand header">
      <ExpandMoreIcon />
    </IconButton>
  }
  title={snippet.title}
  subheader={snippet.description}
/> */}

// export default function VideoItem({ video, onClick }) {
//   return (
//     <button
//       onClick={() => onClick(video)}
//     >{video.id.kind}</button>
//   )
// }