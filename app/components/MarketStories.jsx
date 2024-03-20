import React from 'react'
import marketStories from '../data/marketStories'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MarketStories = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Market Stories</h2>
      {marketStories.map((story) => (
        <Card  key={story.id} sx={{ maxWidth: 250, marginBottom: '20px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="30"
            image= {story.image}
            alt= {story.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {story.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {story.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      ))}
    </div>
  )
}

export default MarketStories

