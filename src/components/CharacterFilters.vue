<template>
  <n-form class="character-filters" :disabled="props.disabled" @submit.prevent="submit" @reset.prevent="reset">
    <n-select clearable v-model:value="statusModel" :options="statusOptions" placeholder="Status" />

    <n-select clearable v-model:value="speciesModel" :options="speciesOptions" placeholder="Species" />

    <n-select clearable v-model:value="genderModel" :options="genderOptions" placeholder="Gender" />

    <n-input-group>
      <n-input clearable v-model:value="nameModel" placeholder="Name" />

      <n-button attr-type="submit">
        <template #icon>
          <n-icon>
            <search />
          </n-icon>
        </template>
      </n-button>

      <n-button attr-type="reset">
        <template #icon>
          <n-icon>
            <filter-reset />
          </n-icon>
        </template>
      </n-button>
    </n-input-group>
  </n-form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NButton, NForm, NIcon, NInput, NInputGroup, NSelect } from 'naive-ui';
import { FilterReset, Search } from '@vicons/carbon';

import { CharacterGender, CharacterRequest, CharacterSpecies, CharacterStatus } from '@/service/types';
import { getSelectOptions } from '@/helpers/filters';
import { getQueryParams } from '@/helpers/navigation';
import { RouteName } from '@/router/types';

interface CharacterFiltersProps {
  disabled: boolean;
}
const props = defineProps<CharacterFiltersProps>();

const statusOptions = getSelectOptions(CharacterStatus);
const speciesOptions = getSelectOptions(CharacterSpecies);
const genderOptions = getSelectOptions(CharacterGender);

const route = useRoute();
const router = useRouter();
const params = getQueryParams(route);

const nameModel = ref<string>(params.value.name || '');
const statusModel = computed<string | null>({
  get() {
    return params.value.status || null;
  },
  set(status) {
    const { status: _, ...rest } = params.value;
    changeFilters({
      ...rest,
      ...(status ? { status } : {}),
    });
  },
});
const speciesModel = computed<string | null>({
  get() {
    return params.value.species || null;
  },
  set(species) {
    const { species: _, ...rest } = params.value;
    changeFilters({
      ...rest,
      ...(species ? { species } : {}),
    });
  },
});
const genderModel = computed<string | null>({
  get() {
    return params.value.gender || null;
  },
  set(gender) {
    const { gender: _, ...rest } = params.value;
    changeFilters({
      ...rest,
      ...(gender ? { gender } : {}),
    });
  },
});

function submit(): void {
  const name = nameModel.value;
  const { name: _, ...rest } = params.value;
  changeFilters({
    ...rest,
    ...(name ? { name } : {}),
  });
}

function reset(): void {
  nameModel.value = '';
  router.push({
    name: RouteName.CHARACTERS,
  });
}

function changeFilters(filters: CharacterRequest) {
  router.push({
    name: RouteName.CHARACTERS,
    query: {
      ...filters,
      page: 1,
    },
  });
}
</script>

<style scoped lang="scss">
.character-filters {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  @include respond-to('s') {
    width: 66%;
  }
  @include respond-to('m') {
    align-self: flex-start;
    flex-direction: row;
    width: 100%;
  }
  @include respond-to('l') {
    width: 80%;
  }
}
</style>
