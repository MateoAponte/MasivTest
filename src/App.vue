<template>
	<div id="app">
		<router-view />
		<footer-component />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FooterComponent from "@/components/Footer.vue";

@Component({
	name: "PruebaMasiv",
	components: {
		FooterComponent,
	},
})
export default class PruebaMasiv extends Vue {}
</script>
