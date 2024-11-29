<template>
 <div class="a-card a-card--vertical-compact long-list">
	<div class="a-card__paddings">
		<div class="iconable-block iconable-block--hide-in-mobile">
			<div class="iconable-block__content">
				<div class="status-block">
					<div class="status-block__central">
						<div class="status-block__header">
							<span class="status-block__title">Widget Visibility and Display Limit</span>
						</div>
						<div class="status-block__content">
							<p>Enable or disable the widget and set the maximum number of products shown.</p>
						</div>
					</div>
                    <ItemsPerRowSelector />
					<div class="status-block__primary-action">
						<label class="checkbox big">
							<input name="" type="checkbox" v-model="productsStore.isCustomWidgetEnabled">
							<div>
								<div></div>
							</div>
						</label>
					</div>

				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script lang="ts" setup>
import { useProductsStore } from '@/stores/productsStore';
import ItemsPerRowSelector from './ItemsPerRowSelector.vue';

const productsStore = useProductsStore()

</script>

<style>

</style>