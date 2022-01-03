import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

function UserDetails({ users }) {
  const { id } = useParams();

  const ids = Number(id);
  

  return (
    <>
      
      <Card className="user-details" key={users.id} style={{ 
              alignItems: "center", 
              color: "black",
              background: "orange",
              fontFamily: "Arial",
              }}>
        {users
          .filter((user) => user.id === id)
          .map((user) => (
            <Card.Body className="mt-10" style={{ 
              alignItems: "center"
              }}>

              <Card.Title>- name: {user.name}</Card.Title>
              <Card.Title>- brewery_type: {user.brewery_type}</Card.Title>
              <Card.Title>- street: {user.street}</Card.Title>
              <Card.Title>- address_2: {user.address_2}</Card.Title>
              <Card.Title>- address_3: {user.address_3}</Card.Title>
              <Card.Title>- city: {user.city}</Card.Title>
              <Card.Title>- state: {user.state}</Card.Title>
              <Card.Title>- county_province: {user.county_province}</Card.Title>
              <Card.Title>- postal_code: {user.postal_code}</Card.Title>
              
            </Card.Body>
          ))}
          <Link to="/"><Button className = "button"style={{
            marginTop: "1rem",
            marginBottom: "2rem",
            }}>Go Back</Button>
              </Link>
  
      
      </Card>
    </>
  );
}

export default UserDetails;