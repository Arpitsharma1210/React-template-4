import React from "react";
import {
  ColumnsContainer,
  Column,
  IndividualField,
  FieldName,
  FieldValue,
} from "./styles";

interface Props {
  data: Record<string, any>;
  rows?: number;
}

const ColumnMatrix: React.FC<Props> = ({ data, rows = 3 }) => {
  let cols = Math.ceil(Object.keys(data).length / rows);
  let indexFrom = 0;
  let objectKeys = Object.keys(data);
  const updateIndex: any = () => {
    indexFrom += rows;
  };

  return (
    <ColumnsContainer>
      {[...Array(cols)].map((_, i) => {
        return (
          <Column key={i}>
            {objectKeys.slice(indexFrom, indexFrom + rows).map((item, j) => (
              <IndividualField key={j}>
                <FieldName>{item}</FieldName>
                <FieldValue>{data[item]}</FieldValue>
              </IndividualField>
            ))}
            {updateIndex()}
          </Column>
        );
      })}
    </ColumnsContainer>
  );
};

export default ColumnMatrix;
