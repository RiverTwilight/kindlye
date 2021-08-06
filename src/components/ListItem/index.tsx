import React from "react";
import styled from "styled-components";
import hover from "../../utils/hover";
import border from "../../utils/border";

// TODO 阅读进度

const StyledListItem = styled.div`
	display: flex;
	padding-top: 17px;
	padding-bottom: 17px;
	padding-left: 20px;
	font-size: 1.1rem;
	font-family: AmazonEmber-Rg;
	border-bottom: ${border};
	${hover}
	.primary {
		font-size: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 300px;
	}
	.second {
		font-size: 15px;
	}
`;

export interface IListItem {
	primary?: string;
	second?: string;
}

// TODO receive componenet
export default ({ primary, second }: IListItem) => {
	return (
		<StyledListItem>
			<div className="textGroup">
				<div className="primary">{primary}</div>
				<div className="second">{second}</div>
			</div>
		</StyledListItem>
	);
};
