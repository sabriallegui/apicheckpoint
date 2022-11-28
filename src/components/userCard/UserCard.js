import React from "react";
import "./UserCard.css";
import { Card } from "react-bootstrap";

const UsersCard = ({ user }) => {
  return (
    <div>
       <Card className="mb-2">
         <Card.Header>{user.id}</Card.Header>
        <Card.Body>
           <Card.Title>{user.name}</Card.Title>
           <Card.Text>
           <span>{user.usermane}</span>
            <span>{user.email}</span>
            <span>{user.phone}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
};

export default UsersCard;