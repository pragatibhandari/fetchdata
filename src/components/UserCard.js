import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";




const UserCard = ({ users }) => {
  
  return (
    <>
    {users &&
        users.map((user) => (
          <Card
            style={{
              width: "240px",
              height: "auto",
              margin: "20px",
              textAlign: "left",
              fontFamily: "Arial",
              background: "orange",
              fontSize: "10px",

            }}
            key={user.id}
          >
            
            <Card.Body className="flex-col">
              <Card.Title>{user.name}</Card.Title>
              <Card.Title>{user.brewery_type}</Card.Title>
              <Card.Title>{user.city}</Card.Title>
              <Link to={`/users/${user.id}`}>
                <Button className = "button" style={{width:"80%", marginTop: "1rem" }}>More Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default UserCard;