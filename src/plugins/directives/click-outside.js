// TODO vue.runtime.esm.js?2b0e:619 [Vue warn]: Failed to resolve directive:
// click-outside (found in <SearchSelect> at src/components/ui/SearchSelect.vue)

// TODO переписать на typescript
import { Vue } from 'vue-property-decorator';

Vue.directive('click-outside', {
  bind: function(el, binding) {
    el.clickOutsideHandler = (event) => {
      binding.value(event);
    };
    window.addEventListener('click', el.clickOutsideHandler);
  },
  unbind: function(el) {
    window.removeEventListener('click', el.clickOutsideHandler);
  },
});
