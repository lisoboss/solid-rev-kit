import { Component, For, JSXElement, Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Heading } from '../typography';

export interface CardProps {
	imageSrc?: string;
	title?: string;
	body?: string;
	actions?: JSXElement[];
}

const StyledCard = styled('div')`
	height: auto;
	min-height: 240px;
  width: 300px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 24px;
`;

const Image = styled('img')`
	height: 200px;
  border-radius: 16px;
  width: 100%;
`;

const ActionsContainer = styled('div')`
  padding: 8px 0;
  height: auto;
  font-size: 14px;
`;

const BodyContainer = styled('div')`
  height: auto;
  font-size: 14px;
  padding: 8px 0;
`;

export const Card: Component<CardProps> = ({ imageSrc, title, children, actions }) => {
	return (
		<StyledCard>
			<Show when={imageSrc}>
				<Image src={imageSrc} />
			</Show>
			<Heading size={5} weight='bold'>{title}</Heading>
			<BodyContainer>
				{children}
			</BodyContainer>
			<ActionsContainer>
				<For each={actions}>{(action) => action}</For>
			</ActionsContainer>
		</StyledCard>
	)
}