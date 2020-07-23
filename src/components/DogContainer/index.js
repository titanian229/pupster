import React from 'react';
import Card from 'react-bootstrap/Card';
// import styles from './styles.scss';
import LikeButton from '../LikeButton'
import useAxios from 'axios-hooks';
import Loading from '../../components/Loading'
import Alert from 'react-bootstrap/Alert';


const DogContainer = (props) => {

    const [{ data, loading, error }, refetch] = useAxios('https://dog.ceo/api/breeds/image/random');

    if (loading) return <Loading/>;
    if (error) return <Alert variant="danger">Error!</Alert>;

    const source = data.message

    const likeClicked = () => {
        props.likeClicked()
        refetch()
    }
    const dislikeClicked = () => {
        props.dislikeClicked()
        refetch()
    }


    return (
        <Card style={{ width: '30vw', height: '30vw', backgroundImage: "url(" + source + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", position: "relative" }}>
            {/* <Image rounded src={source} fluid /> */}
                <Card.Text>
                    <LikeButton likeClicked={likeClicked} style={{position: "absolute", left: "1em", bottom: "1em", fontSize: "3em", color: "green"}} up={true} />
                    <LikeButton dislikeClicked={dislikeClicked}  style={{position: "absolute", right: "1em", bottom: "1em", fontSize: "3em", color: "red"}} up={false} />
                </Card.Text>
        </Card>
    );
};

export default DogContainer;
