import { createApp } from "vue";
import App from "./App.vue";
import setupTooltip from "./directives/tooltip";
import "./index.less";

const app = createApp(App);

setupTooltip(app, {
  tooltipId: "tooltip",
  tooltipContentId: "tooltipContent",
  tooltipArrowId: "tooltipArrow",
  offset: 8,
  shiftPadding: 6,
  arrowPadding: 10,
});

app.mount("#app");
