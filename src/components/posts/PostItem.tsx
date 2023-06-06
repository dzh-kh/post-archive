import { avatar } from '@assets';
import { USER_PAGE_PATH } from '@consts';
import { IPost } from '@types1/post.interface';
import { FC, useState } from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Comments from '../comments/Comments';

type Props = {
    post: IPost;
};

const PostItem: FC<Props> = ({ post }) => {
    const { userId, title, body, id } = post;
    const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false);

    return (
        <div className="mb-2">
            <Card>
                <Card.Header>
                    <Row className="align-items-center">
                        <Col lg={1}>
                            <Link to={`${USER_PAGE_PATH}}/${userId}`}>
                                <Image
                                    src={avatar}
                                    roundedCircle
                                    width={70}
                                    height={70}
                                />
                            </Link>
                        </Col>
                        <Col>
                            <Card.Title>{title}</Card.Title>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{body}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="d-grid">
                        <Button
                            variant="outline-primary"
                            size="lg"
                            onClick={() => setIsCommentsOpen(!isCommentsOpen)}
                        >
                            comments
                        </Button>
                        {isCommentsOpen && <Comments postId={id} />}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default PostItem;
