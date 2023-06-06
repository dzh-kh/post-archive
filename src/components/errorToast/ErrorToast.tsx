import { errorIcon } from '@assets';
import React, { FC, useState } from 'react';
import { Col, Row, Toast, ToastContainer } from 'react-bootstrap';

type Props = { error: string };

const ErrorToast: FC<Props> = ({ error }) => {
    const [show, setShow] = useState(true);

    return (
        <ToastContainer position="top-center" className="mt-3">
            <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
                autohide
            >
                <Toast.Header>
                    <img
                        src={errorIcon}
                        width={20}
                        height={20}
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{error}</strong>
                </Toast.Header>
            </Toast>
        </ToastContainer>
    );
};

export default ErrorToast;
