<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    title2: '置灰',
    title3: '样式定制',
    strokeWidth: '线条粗细',
    transition: '过渡效果',
  },
  'en-US': {
    title2: 'Inactive',
    title3: 'Custom Style',
    strokeWidth: 'Stroke Width',
    transition: 'Transition',
  },
};

const t = useTranslate(i18n);

const percentage = ref(50);

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

const add = () => {
  percentage.value = format(percentage.value + 20);
};

const reduce = () => {
  percentage.value = format(percentage.value - 20);
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-progress :percentage="50" />
  </demo-block>

  <demo-block :title="t('strokeWidth')">
    <van-progress :percentage="50" stroke-width="8" />
  </demo-block>

  <demo-block :title="t('title2')">
    <van-progress inactive :percentage="50" />
  </demo-block>

  <demo-block :title="t('title3')">
    <van-progress color="#f2826a" :percentage="25" :pivot-text="t('orange')" />
    <van-progress color="#ee0a24" :percentage="50" :pivot-text="t('red')" />
    <van-progress
      :percentage="75"
      :pivot-text="t('purple')"
      pivot-color="#7232dd"
      color="linear-gradient(to right, #be99ff, #7232dd)"
    />
  </demo-block>

  <demo-block :title="t('transition')">
    <van-progress inactive :percentage="percentage" />
    <div style="margin-top: 15px">
      <van-button :text="t('add')" type="primary" size="small" @click="add" />
      <van-button
        :text="t('decrease')"
        type="danger"
        size="small"
        @click="reduce"
      />
    </div>
  </demo-block>
</template>

<style lang="less">
.demo-progress {
  background: var(--van-white);

  .van-progress {
    margin: 20px 16px;

    &:first-of-type {
      margin-top: 5px;
    }
  }

  .van-button {
    margin: var(--van-padding-md) 0 0 10px;

    &:first-of-type {
      margin-left: var(--van-padding-md);
    }
  }
}
</style>
