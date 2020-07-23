import React from 'react';
import Loading from '../Loading';
import useAxios from 'axios-hooks';
import Alert from 'react-bootstrap/Alert';
import DogBox from '../DogBox';

const DogResults = (props) => {
    const { search } = props;

    const APICall = `https://dog.ceo/api/breed/${encodeURI(search.split(' ').join('/'))}/images`;
    console.log(APICall);

    const [{ data, loading, error }, refetch] = useAxios(APICall);

    if (search === '') return '';
    if (loading) return <Loading />;
    // if (error) return <Alert variant="danger">Cannot fetch that breed</Alert>;
    if (error) return ''

    return (
        <div>
            {data.message.map((dog, ind) => (
                <DogBox key={ind} dog={dog} />
            ))}
        </div>
    );
};

export default DogResults;
