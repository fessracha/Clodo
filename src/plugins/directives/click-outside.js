import {Vue} from 'vue-property-decorator';

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
