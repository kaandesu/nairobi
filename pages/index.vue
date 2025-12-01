<script setup lang="ts">
import { landing } from '@/config/landing'
const {
	Hero,
	Navbar,
	Sponsors,
	Benefits,
	Features,
	Services,
	HowItWorks,
	Testimonials,
	Team,
	Community,
	Pricing,
	Contact,
	FAQ,
	Footer,
} = landing

import { useAppStateStore } from '@/stores/app-state'
const { theme } = storeToRefs(useAppStateStore())
</script>
<template>
	<main
		:class="theme"
		class="absolute left-0 top-0 h-screen w-screen overflow-x-hidden"
	>
		<LandingNavbar v-if="Navbar != undefined" />
		<LandingHero v-if="Hero != undefined" />
		<LandingSponsors v-if="Sponsors != undefined" />
		<LandingBenefits v-if="Benefits != undefined" />
		<LandingFeatures v-if="Features != undefined" />
		<LandingServices v-if="Services != undefined" />
		<LandingHowItWorks v-if="HowItWorks != undefined" />
		<LandingTestimonials v-if="Testimonials != undefined" />
		<LandingTeam v-if="Team != undefined" />
		<LandingCommunity v-if="Community != undefined" />
		<LandingPricing v-if="Pricing != undefined" />
		<LandingContact v-if="Contact != undefined" />
		<LandingFAQ v-if="FAQ != undefined" />
		<LandingFooter v-if="Footer != undefined" />
	</main>
</template>
<style>
*,
*::before,
*::after {
	box-sizing: border-box;
}
</style>
