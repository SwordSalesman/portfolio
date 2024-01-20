import styled from "styled-components";
import { CollapseCard } from "../../components/Card/CollapseCard";
import { PortraitGallery } from "../../components/PortraitGallery";
var characterDemo = require("../../assets/demos/character_demo.gif");
var tomeDemo = require("../../assets/demos/tome_demo.gif");
var rainDemo = require("../../assets/demos/rain_demo.gif");
var diceDemo = require("../../assets/demos/dicetray_demo.gif");

export function Projects() {
	return (
		<ProjectsWrapper>
			<CollapseCard
				title='Concord Character Creator'
				date='2023-24'
				link='https://charactercreator.concordlarp.com/'
				headkicker={`A guided character creator for Perth's biggest LARP.`}
				description={`This project was right up my alley. I worked closely with the organisers of the game to understand the requirements of the form, and I had creative freedom to make it however I wanted. The community has loved the app and has made character creation and submission a breeze. I continue to provide support and updates for this project, including recently adding an approvals window for admins to check and approve submitted characters.`}
			>
				<img
					src={characterDemo}
					alt='A screen recording of the Concord Character Creator app'
				/>
			</CollapseCard>
			<CollapseCard
				title='Portraits'
				date='2022-24'
				link='https://www.flickr.com/gp/198135874@N04/o560tgwo2U'
				headkicker={`Digitally painted portraits of local eccentrics.`}
				description={`These are commissioned portraits for people who love to dress up in fancy period kit. They are signed by my fictional alter ego, Marius Piccolini.`}
			>
				<PortraitGallery />
			</CollapseCard>
			<CollapseCard
				title='Tome'
				date='2023'
				link='https://magictome-6aeb7.web.app/'
				headkicker={`A tool to lookup and save D&D spells.`}
				description={`This was a skill test for a previous role and was my introduction to React. It's a little rough around the edges but was great fun to build.`}
			>
				<img src={tomeDemo} alt='A screen recording of the Tome app' />
			</CollapseCard>
			<CollapseCard
				title='Rain'
				date='2021'
				headkicker={`A soothing rain simulation for your terminal.`}
				description={`This was the result of a rainy afternoon while I should have been studying. This does't showcase much, but I really like this little python script.`}
			>
				<img
					src={rainDemo}
					alt='A screen recording of the Rain script'
				/>
			</CollapseCard>
			<CollapseCard
				title='DiceTray'
				date='2020'
				headkicker={`An Electron app for easy dice rolling.`}
				description={`This was my first HTML project while I was at uni. The goal was to make a desktop app which made rolling handfulls of dice quick and easy. I can't help but gawk at the UI design now, but it's still nice to see where I started.`}
			>
				<img src={diceDemo} alt='A screen recording of the Dice app' />
			</CollapseCard>
		</ProjectsWrapper>
	);
}

const ProjectsWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.m}px;
	margin: ${({ theme }) => theme.spacing.m}px 0%;
`;
