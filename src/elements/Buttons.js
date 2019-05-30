import styled from "styled-components";

import { fixedTop } from "../utils";

const color = "white";

export const Button = styled.button`
  background: indigo;
  padding: 5px 10px;
  color: ${color};
  font-size: 2rem;
  border: none;
`;

export const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`;
