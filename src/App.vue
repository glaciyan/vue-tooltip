<script setup lang="ts">
import { arrow, computePosition, flip, offset, shift } from "@floating-ui/dom";
import { useElementHover, useFocus } from "@vueuse/core";
import { computed, ref, watch } from "vue";

const button = ref();

const tooltip = ref();
const arrowEl = ref();

const position = ref({ x: 0, y: 0, arrow: {} });

const showTooltip = useElementHover(button);

const updateFloating = async () => {
  const { x, y, placement, middlewareData } = await computePosition(
    button.value,
    tooltip.value,
    {
      placement: "top",
      middleware: [
        offset(8),
        flip(),
        shift({ padding: 4 }),
        arrow({ element: arrowEl.value, padding: 6 }),
      ],
    }
  );

  const arrowD = middlewareData.arrow;

  const staticSide = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  }[placement.split("-")[0]]!;

  position.value = {
    x,
    y,
    arrow: {
      left: arrowD?.x != null ? `${arrowD.x}px` : "",
      top: arrowD?.y != null ? `${arrowD.y}px` : "",
      right: "",
      bottom: "",
      [staticSide]: "-4px",
    },
  };
};

watch(
  () => showTooltip.value,
  (show) => {
    if (show) updateFloating();
  }
);
</script>

<template>
  <div class="flex flex-col">
    <p>asdfasdfa<br />sdfasdfasdf</p>
    <button
      ref="button"
      aria-describedby="tooltip"
      class="
        px-3
        py-2
        bg-sky-400
        text-white
        rounded
        hover:bg-sky-500
        active:bg-sky-600
        transition-colors
        shadow
        m-2
      "
    >
      Send Message
    </button>
  </div>
  <div
    ref="tooltip"
    role="tooltip"
    :class="['top-0 left-0 transition-opacity', { 'opacity-0': !showTooltip }]"
    :style="{
      transform: `translate(${Math.round(position.x)}px,${Math.round(position.y)}px)`,
    }"
  >
    My tooltip
    <div class="arrow" ref="arrowEl" :style="[{}, position.arrow]"></div>
  </div>
  <p v-for="num in 300">num</p>
</template>

<style scoped>
div[role="tooltip"] {
  position: absolute;
  background: #222;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
  font-size: 90%;
  pointer-events: none;
}

.arrow {
  position: absolute;
  background: #222;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
}
</style>
