import { FC } from 'react';
import { Row, Spinner } from 'react-bootstrap';

const Loader: FC = () => {
    return (
        <Row className="justify-content-center p-2">
            <Spinner animation="border" variant="primary" />
        </Row>
    );
};

export default Loader;
