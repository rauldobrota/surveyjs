<template>
  <div :class="question.cssClasses.root">
    <survey-paneldynamicprogress
      v-if="question.isProgressTopShowing"
      :question="question"
    />
    <template v-for="panel in renderedPanels">
      <div :class="question.getPanelWrapperCss()" :key="panel.id">
        <survey-panel :question="panel" :css="css" />
        <survey-paneldynamicremove :question="question" :panel="panel" />
      </div>
      <hr
        :class="question.cssClasses.separator"
        :key="'separator' + panel.id"
      />
    </template>
    <survey-paneldynamicprogress
      v-if="question.isProgressBottomShowing"
      :question="question"
    />
    <input
      type="button"
      v-if="question.isRenderModeList && question.canAddPanel"
      :class="getButtonAddCss(question)"
      :value="question.panelAddText"
      @click="addPanelClick"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { default as QuestionVue } from "./question";
import { PanelModel } from "survey-core";
import { Question } from "survey-core";
import { QuestionPanelDynamicModel } from "survey-core";

@Component
export class PanelDynamic extends QuestionVue<QuestionPanelDynamicModel> {
  get renderedPanels() {
    if (this.question.isRenderModeList) return this.question.panels;
    var panels = [];
    if (this.question.currentPanel) {
      panels.push(this.question.currentPanel);
    }
    return panels;
  }
  addPanelClick() {
    this.question.addPanel();
  }
  getButtonAddCss(question: Question) {
    var btnClasses =
      question.cssClasses.button + " " + question.cssClasses.buttonAdd;

    if (this.question.renderMode === "list") {
      btnClasses += " " + question.cssClasses.buttonAdd + "--list-mode";
    }

    return btnClasses;
  }
}
Vue.component("survey-paneldynamic", PanelDynamic);
export default PanelDynamic;
</script>
