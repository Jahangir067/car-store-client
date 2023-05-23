import React from "react";
import { Container } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  // This is question and answer page
  return (
    <Container>
      <h1 className="text-center my-5">Question &#38; Answer</h1>
      {/* First question */}
      <div className="qa">
        <h2>
          <span>Q1:</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?
        </h2>
        <p>
          <span>Ans:</span> <br />
      
          <br />
          Access tokens and refresh tokens are used in authentication and authorization protocols. Access tokens are used to authenticate a user for a specific resource or service. They are short-lived and expire after a certain period of time. Refresh tokens are used to obtain new access tokens after the previous ones have expired. They are long-lived and can be used to obtain new access tokens multiple times.

          Access tokens should be stored in memory on the client-side, while refresh tokens should be stored securely on the server-side. Storing access tokens in memory on the client-side is more secure than storing them in local storage or cookies because they are not accessible by JavaScript code. Refresh tokens should be stored securely on the server-side because they can be used to obtain new access tokens multiple times.
        </p>
      </div>
      {/* Second question */}
      <div className="qa">
        <h2>
          <span>Q2:</span> Compare SQL and NoSQL databases?
        </h2>
        <p>
          <span>Ans:</span>
          <br /> 1. A SQL database is mainly referred to as a Relational
          Database Management System (RDBMS); while a NoSQL database is
          primarily referred to as a Non-Relational Database or a Distributed
          Database.
          <br />
          2. SQL databases are generally vertically scalable.In contrast, NoSQL
          databases are horizontally scalable.
          <br />
          3. A SQL database is structured around tables, whereas a NoSQL
          database is structured around key value pairs database.
          <br />
          4. A SQL database follows the ACID principles (Atomicity, Consistency,
          Isolation, Durability), while a NoSQL database follows Brewer's CAP
          (Consistency, Availability, and Partition Tolerance).
          <br />
          5. SQL database such as - MySQL, PostgreSQL, Oracle, and Microsoft SQL
          Server. NoSQL database such as - MongoDB, DynamoDB and CouchDB
        </p>
      </div>
      {/* Third question */}
      <div className="qa">
        <h2>
          <span>Q3:</span> What is express js? What is Nest JS?
        </h2>
        <p>
          <span>Ans:</span>
          What is NestJS?
          NestJS is a progressive Node.js framework for building efficient, scalable, and reliable server-side applications. It is built on top of Express.js and provides a more structured way of building applications with TypeScript. NestJS uses a modular architecture, making it easy to maintain and scale applications as they grow.

          What is Express?
          Express is a minimal and flexible Node.js framework that provides a robust set of features for building web and mobile applications. It is a lightweight and unopinionated framework that allows developers to create applications with their preferred tools and libraries. Express is popular among developers due to its simplicity and ease of use.
        </p>
      </div>
      <div className="qa">
        <h2>
          <span>Q4:</span> What is MongoDB aggregate and how does it work?
        </h2>
        <p>
          <span>Ans:</span>
          When you start working with MongoDB, you will typically use the find() command for a wide range of queries. However, as soon as your queries get more advanced, you will need to know more about MongoDB aggregation.

the main principles of building aggregate queries in MongoDB and how to take advantage of indexes for speeding them up.

Furthermore, I will introduce the most important stages of the aggregation pipeline with short examples using each one, and how to apply them to the pipeline.
        </p>
      </div>
    </Container>
  );
};

export default Blogs;
