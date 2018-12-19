import styled, { keyframes } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { ProcessContainer } from '../chipDescription';

const float = keyframes`
  0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 15px 15px 0px rgba(0,0,0,0.1);
		transform: translatey(-7px);
	}
	100% {
		box-shadow: 0 7px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(0px);
	}
`;

export const EnhancedProcessContainer = styled(ProcessContainer)`
  width: 40%;
  div.technologies {
    div.technology-item {
      width: 3em;
      height: 3em;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        transition: all 6s ease-in-out;
        animation: ${float} 6s ease-in-out infinite;
        &:hover {
          animation: none;
        }
      }
    }
  }
`;