import React from "react";
import {
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonIcon
} from "@ionic/react";
import {
	calendarOutline,
	statsChartOutline,
	listOutline
} from "ionicons/icons";
import "./Home.css";

const Home: React.FC = () => {
	return (
		<>
			{/* Header */}
			<IonHeader>
				<IonToolbar color="primary">
					<IonTitle>PlanPal</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen className="ion-padding">
				{/* Hero Section */}
				<section className="hero-section">
					<h1>PlanPal</h1>
					<p>Organize your tasks, projects, and goals all in one place.</p>
					<IonButton expand="block" color="secondary" className="hero-button">
						Get Started
					</IonButton>
				</section>

				{/* Feature Cards */}
				<section className="cards-container">
					<IonCard>
						<IonCardHeader>
							<IonIcon icon={listOutline} size="large" />
							<IonCardTitle>Tasks</IonCardTitle>
						</IonCardHeader>
						<IonCardContent>
							Manage your daily tasks.
						</IonCardContent>
					</IonCard>

					<IonCard>
						<IonCardHeader>
							<IonIcon icon={calendarOutline} size="large" />
							<IonCardTitle>Projects</IonCardTitle>
						</IonCardHeader>
						<IonCardContent>
							Organize projects, deadlines, and collaborations.
						</IonCardContent>
					</IonCard>

					<IonCard>
						<IonCardHeader>
							<IonIcon icon={statsChartOutline} size="large" />
							<IonCardTitle>Productivity</IonCardTitle>
						</IonCardHeader>
						<IonCardContent>
							Increase productivity.
						</IonCardContent>
					</IonCard>
				</section>
			</IonContent>
		</>
	);
};

export default Home;