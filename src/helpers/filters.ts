import { SelectMixedOption } from 'naive-ui/lib/select/src/interface';

export function getSelectOptions(e: { [key: number]: string }): SelectMixedOption[] {
  return Object.values(e).map((value) => ({
    label: value,
    value,
  }));
}
