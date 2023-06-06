import { avatar } from '@assets';
import IComment from '@types1/comment.interface';
import React, { FC } from 'react';
import { Col, Image, Row } from 'react-bootstrap';

type Props = {
    comment: IComment;
};

const CommentItem: FC<Props> = ({ comment }) => {
    const { email, body } = comment;

    return (
        <Row className="mb-2">
            <Col lg={1}>
                <Image width={40} height={40} src={avatar} roundedCircle />
            </Col>
            <Col lg={11}>
                <span>{email}</span>
            </Col>
            <Col lg={12}>
                <p>{body}</p>
            </Col>
        </Row>
    );
};

export default CommentItem;
