<template>
	<section class="comic">
		<div class="favorites-section">
			<favorites />
		</div>
		<div class="preview-section">
			<comic-preview />
			<hearth-rating />
		</div>
	</section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ComicPreview from "@/components/Preview.vue";
import HearthRating from "@/components/HearthRating.vue";
import Favorites from "@/components/Favorites.vue";

@Component({
	name: "Comic",
	components: {
		ComicPreview,
		HearthRating,
		Favorites,
	},
})
export default class Comic extends Vue {}
</script>
