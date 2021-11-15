<template>
	<div class="comic-preview">
		<span class="comic-preview__title">{{ comicPreview.title }}</span>
		<section>
			<img class="comic-preview__image" :src="comicPreview.img" :alt="comicPreview.safe_title" />
		</section>
		<section>
			<span class="comic-preview__description">
				{{ comicPreview.alt }}
			</span>
		</section>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ComicTypes from "@/constants/comics/types";

@Component({
	name: "ComicPreview",
})
export default class ComicPreview extends Vue {
	get comicPreview() {
		return this.$store.state[ComicTypes.PATH].preview_comic;
	}
	get comicNumber() {
		return this.$store.state[ComicTypes.PATH].comic_number;
	}
	get randomNumber() {
		return Math.floor(Math.random() * (1000 - 0)) + 0;
	}
	mounted() {
		this.$store.dispatch(ComicTypes.actions.FETCH_COMICS, this.comicNumber);
	}
	beforeMount() {
		this.$store.dispatch(ComicTypes.actions.UPDATE_COMIC_NUMBER, this.randomNumber);
	}
}
</script>
