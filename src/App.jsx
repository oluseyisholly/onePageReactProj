import logo from './logo.svg';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap'; 
import TextIcon from './container/text_icon';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Container className=' d-flex justify-content-center' as={'section'} fluid>
        <div className='w-80'>
          <Row className="sec-1-row">
            <Col xs={12} sm={12} md={12} lg={6} className={'mb-4 d-flex flex-row justify-content-center'}>
              <div className='img-con d-flex flex-column justify-content-between'>
                <div className='rounded-img-1 bg-img me-auto'></div>
                <div className='ms-auto rounded-img-2 bg-img'></div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} className={'mb-4 d-flex'}>
              <div className='d-flex flex-column ps-2 text-con mx-1'>
                <h1 className='text-h1 font-styler'>
                  About Work
                </h1>
                <p className='mt-4 text-p font-styler'>
                  Oh feel if up to till like. He an thing rapid these after going drawn or. 
                  Timed she his law the spoil round defer. In surprise concerns informed betrayed
                  he learning is ye. Ignorant formerly so ye blessing. Quick can manor smart money 
                  hopes worth too. Comfort produce husband boy her had hearing. Law others theirs 
                  passed but wishes. You day real less till dear read. Considered use dispatched melancholy 
                  sympathize discretion led. Oh feel if up to till like.
                </p>
                <h5 className='mt-4 font-styler text-h5'>
                  He as spoke avoid given downs money on we. Of properly carriage shutters ye 
                  as wandered up repeated moreover.
                </h5>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className='px-2' as={'section'} fluid>
        <Row className='px-1'>
          <Col xs={12} sm={12} md={6} lg={6} className="py-4">
            <TextIcon 
              notes = {`Sample text. Click to select the text box. Click again or double 
                click to start editing the text.`}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}  className="py-4">
            <TextIcon 
              notes = {`Sample text. Click to select the text box. Click again or double 
                click to start editing the text.`}
            />
          </Col>
        </Row>
      </Container>
      <Container className='px-0 mx-0 pt-5' fluid>
        <div className='w-100 footer d-flex justify-content-center mx-0 px-0'>
          <p className='my-auto text-white text-center' ><a href='./assets/img/bg-image.jpg'>Website Templates</a>created with <a href='#'>Website Builder Software.</a></p>
        </div>
      </Container>
    </Fragment>
  )
}

export default App;
