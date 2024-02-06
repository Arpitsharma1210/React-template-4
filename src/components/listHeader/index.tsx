import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { brand, colors } from '../../theme/style.palette';
import {
    SearchInputContainer,
    StyledActionItem,
    StyledActionItemContainer,
    StyledContainer,
    StyledSearchInput,
} from "./styles"
import messages from '../../messages';

const SearchInput: React.FC<any> = ({ onChange, value, ...props }) => (
    <StyledSearchInput
        {...props}
        value={value || ''}
        onChange={(e) => {
            if (onChange) {
                onChange(e?.target?.value)
            }
        }}
    />
)

export interface FilterSpec {
    id: string;
    render: ()=>JSX.Element;
    renderAction?:()=> void;
}


interface Props {
    ctaLabel?: string;
    handleCtaClick?: () => void;
    disableSearch?: boolean;
    connectFilter?: any;
    updateFilters?: any;
    resetFilters?: any;
    filters?:FilterSpec[];
}

const ListHeader: React.FC<Props> = ({
    ctaLabel, disableSearch,
    connectFilter, filters, updateFilters,
    resetFilters, handleCtaClick
}) => {
    return (
        <StyledContainer>
            <StyledActionItemContainer>
                {(!disableSearch && connectFilter) && <StyledActionItem>
                    <SearchInputContainer>
                        <SearchIcon
                            fontSize='medium'
                            style={{
                                padding: '12px',
                                paddingRight: '8px',
                                color: colors.grey100

                            }}
                        />
                        {connectFilter('search', {
                            autoApplyFilters: true,
                            placeholder: messages.general.search,
                        })(SearchInput)}
                    </SearchInputContainer>
                </StyledActionItem>}
                {filters
                ?.filter((filter)=>filter?.renderAction ? filter?.renderAction() : true)
                ?.map((filter) => (
                    <StyledActionItem key={filter.id} data-testid={`Filter_${filter.id}`}>
                        {filter?.render()}
                    </StyledActionItem>
                ))}
                {resetFilters && <StyledActionItem>
                    <Button data-testid="ResetButton"
                        variant="text"
                        onClick={resetFilters}
                    >
                        {messages.general.reset}
                    </Button>
                </StyledActionItem>}
            </StyledActionItemContainer>
            {ctaLabel && <StyledActionItemContainer justifycontent='flex-end'>
                <StyledActionItem lastitem>
                    <Button data-testid="CtaButton"
                        variant="contained"
                        endIcon={<AddIcon />}
                        onClick={handleCtaClick}
                    >
                        {ctaLabel}
                    </Button>
                </StyledActionItem>
            </StyledActionItemContainer>}
        </StyledContainer>
    )
}

export default ListHeader;