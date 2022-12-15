import React, { useState, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './Cropper.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import 'cropperjs';
import { useGetProductInfo } from '../../hooks';

function Cropper(props) {
  const { productInfo, isUninitialized, isLoading, isError, isSuccess } =
    useGetProductInfo(props.topElem);
  const [src, setSrc] = useState(null);

  const handleFileChange = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    productInfo && setSrc(productInfo.image);
  }, [props]);

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: NaN });
  const [result, setResult] = useState(null);

  function getCroppedImg() {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );

    const base64Image = canvas.toDataURL('image/png');
    setResult(base64Image);
  }

  if (isSuccess === false) {
    return (
      <div>
        <h3>해당 상품에 접속중입니다.</h3>
      </div>
    );
  } else {
    return (
      <Container>
        <Row>
          <Col className="input">
            <Form.Group
              controlId="formFile"
              className="mb-3"
              onChange={handleFileChange}
              accept="image/*"
            >
              <Form.Label className="fileTitle">상의 선택</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>{' '}
        </Row>{' '}
        <Row>
          {src && (
            <Col className="originArea">
              <ReactCrop
                className="originImg"
                crossorigin="anonymous"
                src={src}
                onImageLoaded={setImage}
                crop={crop}
                onChange={setCrop}
                onDragStart={getCroppedImg}
                onDragEnd={getCroppedImg}
                dragCrop={getCroppedImg}
              />
            </Col>
          )}{' '}
          {result && (
            <Col className="resultImgTop">
              <img src={result} alt="Cropped Image" className="img-fluid-top" />
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default Cropper;
