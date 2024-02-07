
import React from 'react';
import { StyledContainer, StyledError, StyledInput, StyledInputContainer, StyledInputText, StyledLabel } from './styles';

interface Props {
    label?: string;
    value?: string;
    onChange?: any;
    error?: string;
    disableErrorMode?: boolean;
    required?: boolean;
    readOnly?: boolean;
    disabled?:boolean;
    onReadOnlyCtaClick?:()=>void;
}


const TextInput: React.FC<Props> = ({
    label,
    error,
    value,
    onChange,
    disableErrorMode,
    readOnly,
    required,
    disabled,
    onReadOnlyCtaClick,
    ...props
}) => {
    return (
        <StyledContainer>
            {label && (
                <StyledLabel 
                    readOnly={readOnly}
                    required={required}
                >
                    {label}
                </StyledLabel>
            )}
            <StyledInputContainer data-testid="inputContainer">
                {readOnly ? (
                    <StyledInputText 
                        onClick={onReadOnlyCtaClick}
                        disabled={disabled} 
                        variant='body2'
                        data-testid="readOnlyInputField"
                    >
                        {value || ''}
                    </StyledInputText>
                ) : (
                    <StyledInput
                    data-testid="inputField"
                        {...props}
                        disabled={disabled}
                        error={disableErrorMode ? false : !!error}
                        value={value || ''}
                        onChange={(event) => {
                            if (onChange) {
                                onChange(event?.currentTarget?.value);
                            }
                        }}
                    />)}
            </StyledInputContainer>
            {!disableErrorMode && <StyledError variant='body2'>{error || ''}</StyledError>}
        </StyledContainer>
    )

}

export default TextInput;