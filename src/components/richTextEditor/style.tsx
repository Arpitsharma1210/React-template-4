import styled from "styled-components";
import { colors } from "../../theme/style.palette";

export const Wrapper = styled.div`
  .tox-editor-header {
    height: 49px;
    width: 728px;
  }
  .tox-tinymce {
    height: 194px !important;
    border: 1px solid ${colors.grey100};
    border-radius: 6px;
  }
  .tox-statusbar {
    display: none !important;
    height: 0px;
  }
  .tox: not(.tox-tinymce-inline) .tox-editor-header {
    box-shadow: none;
  }
  .tox-toolbar__primary {
    margin-left: 7px;
    display: flex;
    justify-content: space-between;
  }
  .tox-toolbar__group svg {
    height: 22px;
  }
  .tox .tox-split-button__chevron {
    width: 0;
  }
`;
