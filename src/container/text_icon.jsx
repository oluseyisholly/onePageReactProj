import { Fragment } from "react"
import { Col, Row } from "react-bootstrap";
import { MdOutlineLocationOn } from 'react-icons/md';
const TextIcon = ({notes, }) => {
    return(
        <Fragment>
            <Row className="d-flex flex-row align-items-center">
                <Col lg={3} md={12} sm={3} xs={12} className="">
                    <div className="icon-bg d-flex justify-content-center align-items-center px-1 my-2 ">
                        <MdOutlineLocationOn style={{width: '70px', height: '70px'}}  className="text-white"/>
                    </div>
                </Col>
                <Col lg={9} md={12} sm={9} xs={12}>
                    <div className="d-flex">
                        <p className="font-styler my-3">{notes}</p>
                    </div>
                </Col>
            </Row>
        </Fragment> 
    );
};

export default TextIcon; 