import styled, { css } from 'styled-components';
import { colors } from '../../../theme/style.palette';
export interface StyledContainerProps {
    centerAlign?:boolean;
    noPadding?:boolean;
}
export const StyledScreenContainer = styled.div`
  overflow: hidden;
  display: flex;
  height: 100vh;
`;

export const StyledScreenComponentContainer = styled.div`
  overflow: auto;
  flex-grow: 2;
  padding: 40px 45px 10px 40px;
  background: ${colors.white10};
`;

export const StyledNotificationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 35px;
`;







