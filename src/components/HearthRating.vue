<template>
	<section class="hearth-rating">
		<!-- LIKE -->
		<div id="like" class="rating">
			<input id="heart_5" v-model="rating" type="radio" name="like" value="5" />
			<label for="heart_5" title="Five">&#10084;</label>
			<input id="heart_4" v-model="rating" type="radio" name="like" value="4" />
			<label for="heart_4" title="Four">&#10084;</label>
			<input id="heart_3" v-model="rating" type="radio" name="like" value="3" />
			<label for="heart_3" title="Three">&#10084;</label>
			<input id="heart_2" v-model="rating" type="radio" name="like" value="2" />
			<label for="heart_2" title="Two">&#10084;</label>
			<input id="heart_1" v-model="rating" type="radio" name="like" value="1" />
			<label for="heart_1" title="One">&#10084;</label>
		</div>
	</section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ComicTypes from "@/constants/comics/types";
import { ComicPreviewModel } from "@/models/comics/comicModel";

@Component({
	name: "HearthRating",
})
export default class HearthRating extends Vue {
	rating = "0";

	get previewComic() {
		return this.$store.state[ComicTypes.PATH].preview_comic;
	}
	get comicsArray() {
		return this.$store.state[ComicTypes.PATH].comics_array;
	}

	@Watch("previewComic")
	onPreviewComicChanged() {
		this.rating = "0";
	}

	@Watch("rating")
	onRatingChanged(value: string) {
		if (value === "5") {
			const comics = this.comicsArray;
			comics.push(this.previewComic);
			this.$store.dispatch(ComicTypes.actions.UPDATE_COMICS_ARRAY, comics);
			localStorage.setItem("favorites_comics", JSON.stringify(comics));
		}
	}
}
</script>
