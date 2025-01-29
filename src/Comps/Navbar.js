import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const FinancialSummary = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 text-success">Why Get a Financial Summary in Excel?</h2>
      
      {/* Benefits Section */}
      <Row className="mb-5">
        <Col md={4}>
          <Card className="shadow-sm border-success">
            <Card.Body>
              <Card.Title className="text-success">Comprehensive Financial Insights</Card.Title>
              <Card.Text>
                The financial summary includes all relevant data extracted from your invoices, enabling a complete overview of your business's finances. From revenue to expenses, everything is in one place.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-success">
            <Card.Body>
              <Card.Title className="text-success">Visualize with Graphs</Card.Title>
              <Card.Text>
                Graphs and charts included in the Excel file allow you to visualize your financial data easily. Quickly identify trends, growth patterns, and outliers with just a glance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-success">
            <Card.Body>
              <Card.Title className="text-success">Instant Data Organization</Card.Title>
              <Card.Text>
                Forget manually sorting through invoices! The system automatically structures all extracted data into categories, making it ready for analysis in Excel in seconds.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Download Section */}
      <div className="text-center mb-5">
        <h3 className="text-success">Your Financial Summary is Ready for Download!</h3>
        <p>
          All your uploaded documents have been successfully analyzed, and the financial summary is ready in an organized Excel file, complete with graphs.
        </p>
        <Button variant="success" href="/path-to-download-file" download>
          Download Excel File
        </Button>
      </div>
    </Container>
  );
};

export default FinancialSummary;
