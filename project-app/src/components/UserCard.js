import React from "react";
import styled from "styled-components";

function UserCard({ user, onCardClick }) {
  return (
    <CardWrapper onClick={() => onCardClick(user.id)}>
      <UserImage src={user.image} alt={user.firstName} />
      <p>{user.firstName}</p>
    </CardWrapper>
  );
}
const CardWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;

const UserImage = styled.img`
  display: block;
  width: 200px;
  height: 200px;
`;

export default UserCard;
