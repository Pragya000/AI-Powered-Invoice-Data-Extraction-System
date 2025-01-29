import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProjectBenefits = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 text-primary">Why Choose Our AI-Powered Invoice Extraction Solution?</h2>
      <Row>
        <Col md={4}>
          <Card className="shadow-sm border-primary">
            <Card.Body>
              <Card.Title className="text-primary">Seamless Multi-Format Upload</Card.Title>
              <Card.Text>
                Our system supports a wide range of formats, including PDFs, images, and scanned documents. Uploading is as simple as drag-and-drop, making it easy for you to extract data from any source.
              </Card.Text>
              <Button variant="primary">Try it Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-primary">
            <Card.Body>
              <Card.Title className="text-primary">AI-Driven Text Extraction</Card.Title>
              <Card.Text>
                Using advanced OCR and AI algorithms, our tool extracts key information such as invoice numbers, dates, and amounts with pinpoint accuracy, allowing you to focus on what really matters.
              </Card.Text>
              <Button variant="primary">See It in Action</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-primary">
            <Card.Body>
              <Card.Title className="text-primary">Instant Excel Summarization</Card.Title>
              <Card.Text>
                After extracting the data, our system quickly organizes it into a structured Excel file. Forget manual data entry—get clean, categorized data ready for analysis in seconds!
              </Card.Text>
              <Button variant="primary">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectBenefits;
