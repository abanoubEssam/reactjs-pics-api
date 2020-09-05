import React from 'react';

export interface ImageListProps {
    images: any[]
}

const ImageList: React.SFC<ImageListProps> = (props: ImageListProps) => {
    console.log(props.images)
    const imgs = props.images.map(img => {
        return <img key={img.id} src={img.urls.regular} alt={img.description} />
    })
    return (
        <div>
            {
                imgs
            }
        </div>
    );
}

export default ImageList;