<template>
	<section class="comic">
		<comic-preview />
		<hearth-rating />
	</section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ComicPreview from "@/components/Preview.vue";
import HearthRating from "@/components/HearthRating.vue";

@Component({
	name: "Comic",
	components: {
		ComicPreview,
		HearthRating,
	},
})
export default class Comic extends Vue {}
</script>
