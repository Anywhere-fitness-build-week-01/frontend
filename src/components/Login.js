import styled from "styled-components";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;
const H2 = styled.h2`
  margin-bottom: 3%;
  font-size: 2rem;
  text-align: center;
`;
const UserInput = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  input {
    background: #4f6c6b;
    border: 2px solid #f7ddd9;
    height: 3rem;
    width: 20rem;
    border-radius: 0.5rem;
    color: #ededed;
  }
  ::placeholder {
    color: #ededed;
    font-size: 1rem;
  }
`;
const SubmitButtonDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  button {
    background: #4f6c6b;
    color: #ededed;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    border: 2px solid #f7ddd9;
    border-radius: 0.6rem;
    height: 3rem;
    width: 8rem;
  }
`;

const initialUserValue = {
  username: "",
  password: "",
};

export default function Login(props) {
  const [user, setUser] = useState(initialUserValue);
  //const { push } = useHistory();

  const updateLoginForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (props.id) {
      //push("/");
    }
  });

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://bw-anywhere-fitness-01.herokuapp.com/api/auth/login", user)
      .then((res) => {
        localStorage.setItem("authorization", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        console.log(res);
        //push("/protected/gallery");
      })
      .catch((error) => {
        alert("Username or password is incorrect");
      });
  };
  return (
    <FormContainer onSubmit={submit}>
      <form>
        <H2>User Login</H2>
        <UserInput>
          <input
            name="username"
            id="username"
            type="text"
            onChange={updateLoginForm}
            placeholder="Username"
          />
        </UserInput>
        <UserInput>
          <input
            name="password"
            id="password"
            type="text"
            onChange={updateLoginForm}
            placeholder="Password"
          />
        </UserInput>
        <SubmitButtonDiv>
          <button>Submit</button>
        </SubmitButtonDiv>
      </form>
    </FormContainer>
  );
}
