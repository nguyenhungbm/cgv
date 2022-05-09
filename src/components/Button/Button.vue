<template>
  <wrapper :width="width" :height="height" :variant="variant">
    <formulate-input
      :type="type"
      :disabled="disabled"
      v-on:click="onClickButton"
    >
      <SpinLoading v-if="loading" :color="spinColor" :size="27" />
      <span v-else>{{ label }}</span>
    </formulate-input>
  </wrapper>
</template>

<script>
import { ButtonType, ButtonVariant } from "../../const/app";
import SpinLoading from "../SpinLoading";
import { Wrapper } from "./styled";

export default {
  components: {
    wrapper: Wrapper,
    SpinLoading,
  },
  props: {
    type: {
      type: String,
      default: ButtonType.button,
      validator: function (value) {
        return [ButtonType.button, ButtonType.submit].includes(value);
      },
    },
    variant: {
      type: String,
      default: ButtonVariant.primary,
      validator: function (value) {
        return [
          ButtonVariant.primary,
          ButtonVariant.default,
          ButtonVariant.primaryOutline,
          ButtonVariant.success,
          ButtonVariant.successOutline,
        ].includes(value);
      },
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "55px",
    },
    label: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
    },
  },
  computed: {
    spinColor: function () {
      let color = "white";
      if (this.variant === ButtonVariant.successOutline) {
        color = "chateauGreen";
      }
      if (this.variant === ButtonVariant.primaryOutline) {
        color = "curiousBlue";
      }
      return color;
    },
  },
  methods: {
    onClickButton() {
      if (this.type === ButtonType.button && !this.disabled && this.onClick) {
        this.onClick();
      }
    },
  },
};
</script>
