import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import DisplayTable from "../components/DisplayTable";

class Directory extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    API.getEmployeeList()
    .then(res => this.setState({ employees: res.data.results }))
      // console.log(state.employees);
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Container >
          <Row>
            <Col size="md-12">
              <h1>Employee Directory</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <DisplayTable />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

export default Directory;
