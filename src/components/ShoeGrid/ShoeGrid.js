import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 32px 62px;
  flex-wrap: wrap;
`;

const ShoeWrapper = styled.div`
  flex-basis: 344px;
  flex-grow: 1;
`;

export default ShoeGrid;
