import React from 'react';

export interface ImageCardProps {
    image: {
        description: string,
        urls: {
            regular: string,
            full: string
        }
    }
}

export interface ImageCardState {
    spans: number
}


class ImageCard extends React.Component<ImageCardProps, ImageCardState> {
    private imageRef: React.RefObject<HTMLImageElement>;
    constructor(props: ImageCardProps) {
        super(props);
        this.state = { spans: 0 }
        this.imageRef = React.createRef()
    }
    componentDidMount() {
        this.imageRef.current?.addEventListener("load", this.setSpans)
    }
    setSpans = () => {
        console.log("SPANS")
        const height = this.imageRef.current!.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({ spans })
    }
    render() {
        const { description, urls } = this.props.image
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    src={urls.regular}
                    ref={this.imageRef}
                    alt={description} />
            </div>
        );
    }
}

export default ImageCard;