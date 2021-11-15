<template>
	<nav class="footer">
		<section class="footer__section">
			<div>
				<span class="footer__text footer__text--bolder"> {{ $t("footer_texts.gratitude") }} </span>
				<span class="footer__text">{{ $t("footer_texts.developer_name") }}</span>
			</div>
			<span class="footer__text footer__text--small"
				>{{ $t("footer_texts.love") }}
				<font-awesome-icon icon="heart" />
			</span>
		</section>
		<section class="footer__section">
			<span class="footer__text footer__text--bolder">{{ $t("footer_texts.project") }}</span>
		</section>
	</nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	name: "Footer",
})
export default class Footer extends Vue {}
</script>
