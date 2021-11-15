<template>
	<div class="comic-preview">
		<font-awesome-icon
			class="comic-preview__arrow comic-preview__arrow--left"
			icon="chevron-circle-left"
			@click="changeComic('-1')"
		/>
		<section class="comic-preview__body">
			<span class="comic-preview__title">{{ comicPreview.title }}</span>
			<section>
				<img class="comic-preview__image" :src="comicPreview.img" :alt="comicPreview.safe_title" />
			</section>
			<section class="comic-preview__description">
				<span>
					{{ comicPreview.alt }}
				</span>
			</section>
			<button class="comic-preview__random" @click="randomComic()">
				{{ $t("main_texts.random_buttom") }}
			</button>
		</section>
		<font-awesome-icon
			class="comic-preview__arrow comic-preview__arrow--right"
			icon="chevron-circle-right"
			@click="changeComic('+1')"
		/>
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
	randomNumber() {
		return Math.floor(Math.random() * (1000 - 0)) + 0;
	}

	changeComic(step: string) {
		let stepNumber: number;
		step === "+1" ? (stepNumber = this.comicNumber + 1) : (stepNumber = this.comicNumber - 1);
		this.$store.dispatch(ComicTypes.actions.FETCH_COMICS, stepNumber);
	}
	randomComic() {
		this.$store.dispatch(ComicTypes.actions.FETCH_COMICS, this.randomNumber());
	}

	beforeMount() {
		this.randomComic();
	}
}
</script>
