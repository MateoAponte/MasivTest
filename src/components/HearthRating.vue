<template>
	<section class="hearth-rating">
		<!-- LIKE -->
		<div id="like" class="rating">
			<!-- FIFTH HEART -->
			<input id="heart_5" type="radio" name="like" value="5" />
			<label for="heart_5" title="Five">&#10084;</label>
			<!-- FOURTH HEART -->
			<input id="heart_4" type="radio" name="like" value="4" />
			<label for="heart_4" title="Four">&#10084;</label>
			<!-- THIRD HEART -->
			<input id="heart_3" type="radio" name="like" value="3" />
			<label for="heart_3" title="Three">&#10084;</label>
			<!-- SECOND HEART -->
			<input id="heart_2" type="radio" name="like" value="2" />
			<label for="heart_2" title="Two">&#10084;</label>
			<!-- FIRST HEART -->
			<input id="heart_1" type="radio" name="like" value="1" />
			<label for="heart_1" title="One">&#10084;</label>
		</div>
	</section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ComicTypes from "@/constants/comics/types";

@Component({
	name: "HearthRating",
})
export default class HearthRating extends Vue {}
</script>
