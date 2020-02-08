import Styled from 'styled-components';

const StyledFileText = Styled.h4`
font-family: 'Baloo Bhaijaan', cursive;
margin-top: 15px;
font-size: 2rem;
color: #0C0F43;
text-shadow: 3px 3px 0 #e7eed1,
             8px 8px 0 rgba(0,0,0,0.1);
`;

const StyledSubjectText = Styled(StyledFileText)`
margin-top: 45px;
font-size: 2.5rem;
`;

export {StyledFileText, StyledSubjectText};
