
import React from "react";
import styled from 'styled-components';

const Label = styled.label`
	display:block;
	font-size:75%;
`;

const Wrapper = styled.div`
	margin-bottom:1rem;
`;

const Input = styled.input`
	text-align:center;
	&[readonly] {
		border-color:transparent;
		color: #828282;
		background: #eaeaea;
		box-shadow: inset 0px 0px 3px 1px #cecece;
	}
`;

const CustomField = props => {
    const { field, form } = props;
    const name = field.name;
	const errors = form.errors;

    return (
        <Wrapper>
            <Label
                htmlFor={props.id}
                error={errors.hasOwnProperty(name)}
            >
                {props.label}
            </Label>

            <Input
				{...props.field}
				type={props.type}
				readOnly={props.readOnly}
                disabled={form.isSubmitting}
                autoComplete="off"
            />
        </Wrapper>
    );
};
export default CustomField;
