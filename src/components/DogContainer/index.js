import React from 'react';
import Card from 'react-bootstrap/Card';
// import styles from './styles.scss';
import LikeButton from '../LikeButton';
import useAxios from 'axios-hooks';
import Loading from '../../components/Loading';
import Alert from 'react-bootstrap/Alert';

const ImageCard = (props) => {
    const { likeClicked, dislikeClicked, source } = props;
    const style = {
        width: '30vw',
        height: '30vw',
        position: 'relative',
    };

    const bgImage = props.source
        ? {
              backgroundImage: 'url(' + source + ')',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
          }
        : {};

    return (
        <Card className="mt-4 mb-2 shadow" style={{ ...style, ...bgImage }}>
            {/* <Image rounded src={source} fluid /> */}
            <Card.Text>
                {!props.source ? <Loading /> : ''}
                <LikeButton clicked={likeClicked} up={true} />
                <LikeButton clicked={dislikeClicked} up={false} />
            </Card.Text>
        </Card>
    );
};

const DogContainer = (props) => {
    const [{ data, loading, error }, refetch] = useAxios('https://dog.ceo/api/breeds/image/random');

    const likeClicked = () => {
        props.likeClicked(data.message);
        refetch();
    };
    const dislikeClicked = () => {
        props.dislikeClicked();
        refetch();
    };
    if (loading) return <ImageCard likeClicked={likeClicked} dislikeClicked={dislikeClicked} source={null} />;
    // if (loading) return <Loading />;
    if (error) return <Alert variant="danger">Error!</Alert>;
    // if (error) return <Alert variant="danger">Error!</Alert>;

    const source = data.message;
    return <ImageCard likeClicked={likeClicked} dislikeClicked={dislikeClicked} source={source} />;
};

export default DogContainer;
