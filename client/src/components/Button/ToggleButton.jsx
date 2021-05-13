import styled, { css } from 'styled-components';

const InactiveMixin = css`
    content: '';
    position: absolute;
    display: block;
`;
const BeforeAnimation = css`
    transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
`;

const AfterAnimation = css`
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 0px 0 hsla(0, 0%, 0%, 0.04), 0 4px 9px hsla(0, 0%, 0%, 0.13), 0 3px 3px hsla(0, 0%, 0%, 0.05);
    transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
`;

const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
    width: 30px;
    input {
        &.inputOrigin {
            opacity: 0;
            position: absolute;
        }
        & + label {
            position: relative;
            display: inline-block;
            user-select: none;
            transition: 0.4s ease;
            height: 15px;
            width: 30px;
            border: 1px solid #e4e4e4;
            border-radius: 60px;

            &:before {
                ${InactiveMixin};
                ${BeforeAnimation};
                height: 15px;
                width: 25px;
                top: 0;
                left: 0;
                border-radius: 30px;
            }
            &:after {
                ${InactiveMixin};
                ${AfterAnimation};
                background: #e4e4e4;
                height: 15px;
                width: 15px;
                top: 0px;
                left: 0px;
                border-radius: 60px;
            }
        }
        &:checked {
            & + label:before {
                background: rgb(53, 105, 246); // Active Color
                transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
            }
            & + label:after {
                left: 15px;
            }
        }
    }
`;



const ToggleButton = (props) => {
	const { toggleLabel } = props;
	return (
		<StyledWrapper>
				<input
					type="checkbox"
					className="inputOrigin"
					name={toggleLabel}
					id={toggleLabel}
					checked={props.isChecked}
					onChange={props.onChange}
				/>
				<label htmlFor={toggleLabel}></label>
		</StyledWrapper>
	);
};
export default ToggleButton;
