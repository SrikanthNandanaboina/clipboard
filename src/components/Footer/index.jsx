import React from "react";
import { FooterWrapper, Content, ContentWrapper, Title } from "./styles";

const Footer = () => {
  const Items = [
    {
      title: "About us",
      content: [
        "we are a team nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.",
        "All copyrights reserved © 2020 - Health Explore",
      ],
    },
    {
      title: "Sitemap",
      content: ["Nurses", "Employers", "social networking", "jobs"],
    },
    {
      title: "Privacy",
      content: ["Terms of use", "Privacy policy", "Cookie policy"],
    },
  ];

  return (
    <FooterWrapper>
      {Items.map((ele) => (
        <ContentWrapper key={ele.title}>
          <Title>{ele.title}</Title>
          {ele.content.map((text) => (
            <Content key={text}>{text}</Content>
          ))}
        </ContentWrapper>
      ))}
    </FooterWrapper>
  );
};

export default Footer;
