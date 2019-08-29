import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { styles } from './styles';
import { ToggleOn, ToggleOff } from '@material-ui/icons';

export default function TopPlayer() {
	const classes = styles();

	return (
		<Card className={classes.card}>
			<CardContent className={classes.content}>
				<Typography component="h5" variant="h5" className={classes.title}>
					Live From Space
		  </Typography>
				<Typography variant="subtitle1" className={classes.subtitle}>
					Mac Miller
		  </Typography>
			</CardContent>
			<div className={classes.controls}>
				<IconButton aria-label="previous">
					<SkipPreviousIcon className={classes.controlIcon} />
				</IconButton>
				<IconButton aria-label="play/pause">
					<PlayArrowIcon className={classes.controlIcon} />
				</IconButton>
				<IconButton aria-label="next">
					<SkipNextIcon className={classes.controlIcon} />
				</IconButton>
			</div>
			<div className={classes.playlistToggle}>
				<ToggleOn />
				<ToggleOff />
			</div>
		</Card >
	);
}
