import React from 'react';
import classes from './ImageList.module.css';
import ImageCard from '../ImageCard/ImageCard';

export interface ImageListProps {
    images: any[]
}

const ImageList: React.SFC<ImageListProps> = (props: ImageListProps) => {
    console.log(props.images)
    const imgs = props.images.map(img => {
        return <ImageCard key={img.id} image={img} />
    })
    return (
        <div className={classes.imageList}>
            {
                imgs
            }
        </div>
    );
}

export default ImageList;