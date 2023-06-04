import React, { FC, useState } from "react";
import { Card, Button, Image, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import avatar from "../../assets/avatar.png";
import IPost from "../../types/post.interface";
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
              <Link to={`/user:${userId}`}>
                <Image src={avatar} roundedCircle width={70} height={70} />
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
